// Create SSH object
const SSH = require('simple-ssh');

// Get Beat base config
const fs = require('fs');
const path = require('path');

// Import shared libraries
const { collectionConfigToJson } = require('../../shared/collectionConfigToJson');
const { getCollectorSshConfigForPipeline } = require('../../shared/collectorSshConfig');
const { logToSystem } = require('../../shared/systemLogging');

const tails = [];

async function tailInit(socket, payload) {
  if (
    payload
    && payload.tailId
    && payload.tailId.length > 0
    && payload.pipelineUid
    && payload.pipelineUid.length > 0
    && payload.collectionConfig
    && payload.collectionConfig.collectionShipper
    && payload.collectionConfig.collectionShipper.length > 0
    && payload.collectionConfig.collectionMethod
    && payload.collectionConfig.collectionMethod.length > 0
    && payload.collectionConfigYml
    && payload.collectionConfigYml.length > 0
  ) {
    // Check the tailId doesn't already exist
    if (!tails[payload.tailId]) {
      const configSsh = await getCollectorSshConfigForPipeline({ uid: payload.pipelineUid });

      if (
        configSsh
        && configSsh.host
        && configSsh.host.length
        && configSsh.port > 0
      ) {
        tails[payload.tailId] = new SSH(configSsh);

        // Go through the config to spot Files to be dropped in, and drop them :)
        // A file object always has `dropIn`, `valueInConfig` and `fileContentBase64`
        // Value of `dropIn` must be true
        const dropInFiles = []; // To store any found Drop In files in the config
        Object.keys(payload.collectionConfig).forEach((configPath) => {
          if (
            payload.collectionConfig[configPath]
            && payload.collectionConfig[configPath].dropIn === true
            && payload.collectionConfig[configPath].valueInConfig
            && payload.collectionConfig[configPath].valueInConfig.length
            && payload.collectionConfig[configPath].fileContentBase64 != null
          ) {
            dropInFiles.push(payload.collectionConfig[configPath]);
          }
        });

        if (payload.collectionConfig.collectionShipper === 'filebeat') {
          const inputYml = payload.collectionConfigYml;

          const filebeatConfig = `filebeat.inputs:\n${inputYml}\n\noutput.console:\n  enabled: true\n  pretty: false\nlogging.level: error\n`;
          tails[payload.tailId]
            .exec(`if [ -d "/tmp/ez-${payload.tailId}" ]; then ps auxwww | grep \`cat /tmp/ez-${payload.tailId}/running.pid\` | grep -v "grep" -q && exit 42; fi;`, {
              exit(code) {
                if (code === 42) {
                  // If Shipper is still running for this Pipeline,
                  // simply prevent from running it again.
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: 'Shipper is still running for this Pipeline' });
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                  }
                  return false;
                }
                return true;
              }
            })
            .exec(`rm -rf /tmp/ez-${payload.tailId}`, {})
            .exec(`mkdir /tmp/ez-${payload.tailId}`, {})
            .exec(`mkdir /tmp/ez-${payload.tailId}/lib`, {})
            .exec(`chmod 700 /tmp/ez-${payload.tailId}/lib`, {})
            .exec(`cat > /tmp/ez-${payload.tailId}/config.yml`, { in: filebeatConfig })
            .exec(`chmod 700 /tmp/ez-${payload.tailId}/config.yml`, {})
            .exec(`/usr/share/filebeat/bin/filebeat -c config.yml --path.home /usr/share/filebeat --path.config /tmp/ez-${payload.tailId} --path.data /tmp/ez-${payload.tailId}/lib -e & echo -e $! > /tmp/ez-${payload.tailId}/running.pid`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .on('end', (err) => {
              // console.log('END:::' + err);
              if (socket.connected) {
                socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: err });
              }
            })
            .start({
              failure() {
                // console.log('FAILURE:::' + err);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'FAILURE' });
                }
              }
            });
        } else if (payload.collectionConfig.collectionShipper === 'jsBeat') {
          const inputJson = collectionConfigToJson(payload.collectionConfig);

          // Parse the JSON into a Config object, so we can modify it a bit
          let jsBeatConfigJson = {};
          try {
            jsBeatConfigJson = JSON.parse(inputJson);
          } catch (err) {
            // Fail silently
          }

          // Force output to Console and nothing to Open Collector
          jsBeatConfigJson.printToConsole = true;
          jsBeatConfigJson.sendToOpenCollector = false;
          // Turn it on
          jsBeatConfigJson.active = true;

          // Put the Config object back into JSON
          let jsBeatConfig = '';
          try {
            jsBeatConfig = JSON.stringify(jsBeatConfigJson, null, '  ');
          } catch (err) {
            // Fail silently
          }
          tails[payload.tailId]
            .exec(`if [ -d "/tmp/ez-${payload.tailId}" ]; then ps auxwww | grep \`cat /tmp/ez-${payload.tailId}/running.pid\` | grep -v "grep" -q && exit 42; fi;`, {
              exit(code) {
                if (code === 42) {
                  // If Shipper is still running for this Pipeline,
                  // simply prevent from running it again.
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: 'Shipper is still running for this Pipeline' });
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                  }
                  return false;
                }
                return true;
              }
            })
            .exec(`rm -rf /tmp/ez-${payload.tailId}`, {})
            .exec(`mkdir --parent /tmp/ez-${payload.tailId}/config/inputs.d`, {})
            .exec(`cat > /tmp/ez-${payload.tailId}/config/inputs.d/tail.json`, { in: jsBeatConfig })
            .exec(`/opt/jsBeat/bin/start.sh --jsBeatRoot "/tmp/ez-${payload.tailId}" --logFilePath "/tmp/ez-${payload.tailId}/log/jsBeat" --logLevel verbose & echo -e $! > /tmp/ez-${payload.tailId}/running.pid ; echo -e "Shipper started. Shipper's PID: $(cat /tmp/ez-${payload.tailId}/running.pid)" >&2 ; tail -F "/tmp/ez-${payload.tailId}/log/jsBeat" >&2`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                // eslint-disable-next-line no-use-before-define
                setTimeout(tailKillShipper, 2500, socket, payload);
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .on('end', (err) => {
              // console.log('END:::' + err);
              if (socket.connected) {
                socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: err });
              }
              // eslint-disable-next-line no-use-before-define
              setTimeout(tailKillShipper, 1000, socket, payload);
            })
            .start({
              failure() {
                // console.log('FAILURE:::' + err);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'FAILURE' });
                }
              }
            });
        } else if (
          ( // Is it a standard LogRhythm Beat?
            payload.options
            && payload.options.identificationStyle
            && Array.isArray(payload.options.identificationStyle)
            && payload.options.identificationStyle.includes('logrhythmBeat')
          )
          || payload.collectionConfig.collectionShipper === 'genericbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || payload.collectionConfig.collectionShipper === 'webhookbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || payload.collectionConfig.collectionShipper === 's3beat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || payload.collectionConfig.collectionShipper === 'pubsubbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || payload.collectionConfig.collectionShipper === 'kafkabeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || payload.collectionConfig.collectionShipper === 'eventhubbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
        ) {
          // Get a clean Beat name
          const beatName = payload.collectionConfig.collectionShipper.toLowerCase().trim();
          // eslint-disable-next-line max-len
          // Create a new Beat ID for the Tail (different from the Prod one, but using UID of Stream)
          const beatId = String(`T_${payload.pipelineUid}`).replace(/[^a-zA-Z0-9]/g, '_').substring(0, 12);
          // Fully Qualified Beat Name
          const logRhythmFullyQualifiedBeatName = String(
            `${beatName
            }_${beatId}`
          );
          // Configuration volume name for Beat
          const beatConfigVolumeName = String(
            `${beatName
            }_config_${beatId}`
          );
          // Get collection config
          const inputYmlRaw = payload.collectionConfigYml;
          // Replace config's beatIdentifier with this Tail's beatId
          const configBeatIdentifier = (
            payload.collectionConfig.beatIdentifier
            && payload.collectionConfig.beatIdentifier.length
              ? payload.collectionConfig.beatIdentifier
              : 'beatIdentifier NOT FOUND' // If none found, just use a random string so next step does nothing
          );
          const inputYml = String(inputYmlRaw).replace(new RegExp(configBeatIdentifier, 'g'), beatId);
          // Load the base Tail config file for LogRhythm shippers
          const logrhythmShipperBaseTailConfig = fs.readFileSync(path.join(process.env.baseDirname, 'resources', 'LogRhythm_shippers-base_tail_config.yaml'));
          // Combine it with collection part
          const beatConfig = `${inputYml}\n\n${logrhythmShipperBaseTailConfig}\n`;

          if (socket.connected) {
            socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🚀 Tail starting...' });
            socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🎯 Attempting to connect to host...' });
          }

          tails[payload.tailId]
            // Check we are connected
            .exec('pwd', {
              exit() {
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🔎 Checking if LRCTL is present in home directory of user...' });
                }
                return true;
              }
            })
            // Check LRCTL is present
            .exec('if [ ! -e "./lrctl" ]; then exit 42; fi;', {
              exit(code) {
                if (code === 42) {
                  // If LRCTL doesn't exist,
                  // simply stop now.
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: 'LRCTL not present in home directory of user' });
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                  }
                  return false;
                }
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '📥 Importing Beat configuration...' });
                }
                return true;
              }
            })
            // ~~Check Beat ID is not already running~~
            // Import configuration
            .exec(`cat | ./lrctl ${payload.collectionConfig.collectionShipper} config import --fqbn ${logRhythmFullyQualifiedBeatName}`, {
              in: beatConfig,
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                  if (String(stderr).match(/unknown command "[^"]*" for "lrctl"/)) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: '❌ Tail failed due to LRCTL too old for this Beat.' });
                  }
                }
              },
              exit(code) {
                // console.log('CODE:::' + code + ' 📃');
                if (code === 0 && socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '📄 Importing files into Beat configuration...' });
                  return true;
                }
                return false;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            });

          // Go through the config to spot Files to be dropped in, and drop them :)
          // A file object always has `dropIn`, `valueInConfig` and `fileContentBase64`
          // `dropIn` must be true

          if (dropInFiles && Array.isArray(dropInFiles) && dropInFiles.length) {
            // Some files must be dropped in the Beat's config volume

            // Create a unique ID for the Helper/Utility Container
            const utilityContainerId = `cp-helper_oc-admin_${Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0')}`;
            // Create a temporary file name, based on the Helper/Utility Container name
            const tempFilePath = String(`/tmp/${utilityContainerId}`)
              .replaceAll('//', '/')
              .replaceAll('"', '');

            tails[payload.tailId]
              // Import configuration
              .exec(`docker container create --name "${utilityContainerId}" -v "${beatConfigVolumeName}:/cp_target" alpine 1>/dev/null`, {
                err(stderr) {
                  // console.log('STDERR:::' + stderr);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                  }
                },
                exit(code) {
                  // console.log('CODE:::' + code + ' 📃');
                  if (code === 0 && socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `📄 Utility container created ("${utilityContainerId}")` });
                    return true;
                  }
                  return false;
                },
                out(stdout) {
                  // console.log('STDOUT:::' + stdout);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                  }
                }
              });

            // Loop through them and add the right tasks to deal with each of them
            dropInFiles.forEach((fileToDrop) => {
              //   "certFilePath":{
              //     "dropIn":true,
              //     "valueInConfig":"/beats/webhookbeat/config/webhookbeat.crt",
              //     "dropInPath":"{{beat_config_volume}}/webhookbeat.crt",
              //     "fileContentBase64":"LS0tLSBCRUdJTiBTU0gyIF.....IFBVQkxJQyBLRVkgLS0tLQ==",
              //     "fileSizeBytes":442
              //   },
              const copyTargetPath = String(`/cp_target/${fileToDrop.dropInPath}`)
                .replaceAll('//', '/')
                .replaceAll('"', '');
              // fileToDrop.fileContentBase64 is Base64 encoded.
              const fileContentBinary = Buffer.from(fileToDrop.fileContentBase64, 'base64').toString('latin1');

              tails[payload.tailId]
                // Import configuration
                .exec(`cat > ${tempFilePath}`, {
                  in: fileContentBinary,
                  err(stderr) {
                    // console.log('STDERR:::' + stderr);
                    if (socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                    }
                  },
                  exit(code) {
                    // console.log('CODE:::' + code + ' 📃');
                    if (code === 0 && socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `📄 Drop file content into temporary file: "${tempFilePath}" (${fileToDrop.fileSizeBytes} bytes)` });
                      return true;
                    }
                    return false;
                  },
                  out(stdout) {
                    // console.log('STDOUT:::' + stdout);
                    if (socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                    }
                  }
                })
                .exec(`docker cp "${tempFilePath}" "${utilityContainerId}:${copyTargetPath}" 1>/dev/null`, {
                  err(stderr) {
                    // console.log('STDERR:::' + stderr);
                    if (socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                    }
                  },
                  exit(code) {
                    // console.log('CODE:::' + code + ' 📃');
                    if (code === 0 && socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `📄 File imported. Referrenced in Beat's configuration as: "${fileToDrop.valueInConfig}"` });
                      return true;
                    }
                    return false;
                  },
                  out(stdout) {
                    // console.log('STDOUT:::' + stdout);
                    if (socket.connected) {
                      socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                    }
                  }
                });
            });

            tails[payload.tailId]
              // Clean up
              .exec(`rm -f "${tempFilePath}" 1>/dev/null`, {
                err(stderr) {
                  // console.log('STDERR:::' + stderr);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                  }
                },
                exit(code) {
                  // console.log('CODE:::' + code + ' 📃');
                  if (code === 0 && socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `📄 Remove temporary file: "${tempFilePath}"` });
                    return true;
                  }
                  return false;
                },
                out(stdout) {
                  // console.log('STDOUT:::' + stdout);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                  }
                }
              })
              .exec(`docker container rm "${utilityContainerId}" 1>/dev/null`, {
                in: beatConfig,
                err(stderr) {
                  // console.log('STDERR:::' + stderr);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                  }
                },
                exit(code) {
                  // console.log('CODE:::' + code + ' 📃');
                  if (code === 0 && socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `📄 Utility container removed ("${utilityContainerId}")` });
                    return true;
                  }
                  return false;
                },
                out(stdout) {
                  // console.log('STDOUT:::' + stdout);
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                  }
                }
              });
          } else {
            tails[payload.tailId]
            // Dummy action to post log message to Frontend
              .exec('pwd', {
                exit() {
                  if (socket.connected) {
                    socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '📄 No file need to be imported.' });
                  }
                  return true;
                }
              });
          }

          tails[payload.tailId]
            // Dummy action to post log message to Frontend
            .exec('pwd', {
              exit() {
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🔎 Listing the already running instances of this Beat...' });
                }
                return true;
              }
            })
            // Check the already running instances of this Beat
            // .exec('./lrctl genericbeat status >&2', {
            .exec(`docker ps --format "{{.Names}} // {{.State}} // {{.Status}}" --filter name="${payload.collectionConfig.collectionShipper}_"`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                if (code === 0 && socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `🟥 Stopping the Beat ID "${logRhythmFullyQualifiedBeatName}"...` });
                  return true;
                }
                return false;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stdout });
                }
              }
            })
            // Stop / Start the Beat ID
            .exec(`./lrctl ${payload.collectionConfig.collectionShipper} stop --fqbn ${logRhythmFullyQualifiedBeatName} >&2`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                if (code === 0 && socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: `🟢 Starting the Beat ID "${logRhythmFullyQualifiedBeatName}"...` });
                  return true;
                }
                return false;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .exec(`./lrctl ${payload.collectionConfig.collectionShipper} start --fqbn ${logRhythmFullyQualifiedBeatName} >&2`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                if (code === 0 && socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🔎 Checking if the new instance is running...' });
                  return true;
                }
                return false;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            // Check if the new instance is running
            // .exec(`./lrctl genericbeat status | grep "${logRhythmFullyQualifiedBeatName}" >&2`, {
            .exec(`docker ps --format "{{.Names}} // {{.State}} // {{.Status}}" --filter name="${logRhythmFullyQualifiedBeatName}"`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                if (code === 0 && socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '📑 Tailing the Beat\'s own internal logs to EZ Client...' });
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '📑 Tailing the realtime data...' });
                  return true;
                }
                return false;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stdout });
                }
              }
            })
            // Get the logs of the Beat sent to STDOUT to get them in the Client's Shipper's Comms
            .exec(`cat | sudo -S tail -F /var/lib/docker/volumes/${beatName}_spool_volume_${beatId}/_data/realtime.tail & docker logs --follow --since 10s "${logRhythmFullyQualifiedBeatName}" >&2`, {
              in: (configSsh.pass ? configSsh.pass : ''),
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code + ' 📑');
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🟥 Tailing Terminated.' });
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                // eslint-disable-next-line no-use-before-define
                setTimeout(tailKillShipper, 2500, socket, payload);
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .on('end', (err) => {
              // console.log('END:::' + err);
              if (socket.connected) {
                socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: err });
              }
              // eslint-disable-next-line no-use-before-define
              setTimeout(tailKillShipper, 1000, socket, payload);
            })
            .start({
              failure() {
                // console.log('FAILURE:::' + err);
                if (socket.connected) {
                  socket.emit('tail.log', { tailId: payload.tailId, code: 'FAILURE' });
                }

                // Remove the tail entry
                // eslint-disable-next-line no-use-before-define
                setTimeout(tailKill, 500, socket, payload);
              }
            });
        } else {
          // Doing nothing
          if (socket.connected) {
            socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: '❌ Tail failed to start due to missing or unrecognised Beat. Go to the Collection configuration editor, hit Save and try to run this Tail again.' });
            socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: 1 });
            socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: 'Tail failed to start.' });
          }
          logToSystem('Warning', 'tailInit - Tail failed to start due to missing or unrecognised Beat.');

          // Remove the tail entry
          // eslint-disable-next-line no-use-before-define
          setTimeout(tailKill, 500, socket, payload);
        }
      } else {
        if (socket.connected) {
          socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: '❌ Tail failed to start due to missing OpenCollector host and/or port information for the SSH connection. Have you set up a Primary OpenCollector for this Pipeline?' });
          socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: 1 });
          socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: 'Tail failed to start.' });
        }
        logToSystem('Warning', 'tailInit - Tail failed to start due to missing OpenCollector host and/or port information for the SSH connection.');
      }
    } else {
      // The tailId does already exist
      if (socket.connected) {
        socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: '❌ Tail failed to start due to another Tail with the same tailId already exists. Try again in a few seconds, or close the other Tail for this Pipeline.' });
        socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: 1 });
        socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: 'Tail failed to start.' });
      }
      logToSystem('Warning', 'tailInit - Tail failed to start due to another Tail with the same tailId already exists.');
    }
  } else {
    // Required Payload absent or incomplete
    if (socket.connected) {
      socket.emit('tail.log', { tailId: payload.tailId, code: 'ERROR', payload: '❌ Tail failed to start due to incomplete Payload in request.' });
      socket.emit('tail.log', { tailId: payload.tailId, code: 'EXIT', payload: 1 });
      socket.emit('tail.log', { tailId: payload.tailId, code: 'END', payload: 'Tail failed to start.' });
    }
    logToSystem('Error', 'tailInit - Tail failed to start due to incomplete Payload in request.');
  }
} // tailInit

function tailKill(socket, payload) {
  // console.log('tailKill 💣');
  if (
    payload
    && payload.tailId
    && payload.tailId.length > 0
  ) {
    // Check the tailId exists
    if (tails[payload.tailId]) {
      try {
        tails[payload.tailId].end();
      } finally {
        tails[payload.tailId] = null;
      }
      if (socket.connected) {
        socket.emit('tail.log', { tailId: payload.tailId, code: 'STDERR', payload: '🧹 Tail record cleaned. Ready to run a Tail for the same Pipeline again.' });
      }
    }
  }
} // tailKill

async function tailKillShipper(socket, payload) {
  // console.log('tailKillShipper 💣💣💣');
  try {
    if (
      payload
      && payload.tailId
      && payload.tailId.length > 0
      && payload.pipelineUid
      && payload.pipelineUid.length > 0
    ) {
      // Check the tailId doesn't already exist
      if (!tails[payload.tailId]) {
        const configSsh = await getCollectorSshConfigForPipeline({ uid: payload.pipelineUid });

        tails[payload.tailId] = new SSH(configSsh);

        // Get a clean Beat name
        const beatName = String(
          payload
          && payload.collectionConfig
          && payload.collectionConfig.collectionShipper
            ? payload.collectionConfig.collectionShipper
            : null
        ).trim();

        if (beatName === 'filebeat' || beatName === 'jsBeat') {
          tails[payload.tailId]
            .exec(`if [ -d "/tmp/ez-${payload.tailId}" ]; then ps auxwww | grep \`cat /tmp/ez-${payload.tailId}/running.pid\` | grep -v "grep" -q && exit 42; fi;`, {
              exit(code) {
                if (code === 42) {
                  // If Shipper is still running for this Pipeline,
                  // go ahead and kill it.
                  if (socket.connected) {
                    socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDOUT', payload: 'Shipper is still running for this Pipeline. As expected. Now going for the kill.' });
                  }
                  return true;
                }
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: 'Shipper does\'t seem to be running for this Pipeline. Doing nothing.' });
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                return false;
              }
            })
            .exec(`if [ -e "/tmp/ez-${payload.tailId}/running.pid" ]; then kill $(cat /tmp/ez-${payload.tailId}/running.pid) && echo -e "Pipeline process terminated."; else echo -e "PID file is missing: /tmp/ez-${payload.tailId}/running.pid" 1>&2 ; exit 42; fi;`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (code !== 0) {
                  if (socket.connected) {
                    socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: 'Something didn\'t go according to plan while trying to terminate Shipper\'s Process.' });
                  }
                  return false;
                }
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                return true;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .exec(`rm -rf /tmp/ez-${payload.tailId}`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (code !== 0) {
                  if (socket.connected) {
                    socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: 'Something didn\'t go according to plan while trying to clean the temporary Shipper\'s directory.' });
                  }
                  return false;
                }
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                return true;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .on('end', (err) => {
              // console.log('END:::' + err);
              if (socket.connected) {
                socket.emit('tail.kill', { tailId: payload.tailId, code: 'END', payload: err });
              }
            })
            .start({
              failure() {
                // console.log('FAILURE:::' + err);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'FAILURE' });
                }
              }
            });
        } else if (
          ( // Is it a standard LogRhythm Beat?
            payload.options
            && payload.options.identificationStyle
            && Array.isArray(payload.options.identificationStyle)
            && payload.options.identificationStyle.includes('logrhythmBeat')
          )
          || beatName === 'genericbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
          || beatName === 'webhookbeat' // Backward compatibility (for Pipelines created before options.identificationStyle was a thing)
        ) {
          const beatNameLowerCase = beatName.toLowerCase();
          // Create a new Beat ID for the Tail
          const beatId = String(`T_${payload.pipelineUid}`).replace(/[^a-zA-Z0-9]/g, '_').substring(0, 12);
          // Fully Qualified Beat Name
          const logRhythmFullyQualifiedBeatName = String(
            `${beatNameLowerCase}_${beatId}`
          );

          tails[payload.tailId]
            .exec(`./lrctl ${beatNameLowerCase} stop --fqbn ${logRhythmFullyQualifiedBeatName}`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (code !== 0) {
                  if (socket.connected) {
                    socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: 'Something didn\'t go according to plan while trying to terminate Shipper\'s Process.' });
                  }
                  return false;
                }
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                return true;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .exec(`./lrctl ${beatNameLowerCase} config remove --yes --fqbn ${logRhythmFullyQualifiedBeatName}`, {
              err(stderr) {
                // console.log('STDERR:::' + stderr);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDERR', payload: stderr });
                }
              },
              exit(code) {
                // console.log('CODE:::' + code);
                if (code !== 0) {
                  if (socket.connected) {
                    socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: 'Something didn\'t go according to plan while trying to clean the temporary Shipper\'s configuration.' });
                  }
                  return false;
                }
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'EXIT', payload: code });
                }
                return true;
              },
              out(stdout) {
                // console.log('STDOUT:::' + stdout);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'STDOUT', payload: stdout });
                }
              }
            })
            .on('end', (err) => {
              // console.log('END:::' + err);
              if (socket.connected) {
                socket.emit('tail.kill', { tailId: payload.tailId, code: 'END', payload: err });
              }
              // Remove the tail entry
              tails[payload.tailId] = null;
            })
            .start({
              failure() {
                // console.log('FAILURE:::' + err);
                if (socket.connected) {
                  socket.emit('tail.kill', { tailId: payload.tailId, code: 'FAILURE' });
                }
                // Remove the tail entry
                tails[payload.tailId] = null;
              }
            });
        } else if (socket.connected) {
          if (socket.connected) {
            socket.emit('tail.kill', { tailId: payload.tailId, code: 'ERROR', payload: `Unknown Beat ("${beatName}"). Could not clean the temporary Shipper's configuration.` });
            socket.emit('tail.kill', { tailId: payload.tailId, code: 'FAILURE' });
          }
          logToSystem('Error', `tailKillShipper - Unknown Beat ("${beatName}"). Could not clean the temporary Shipper's configuration.`);
        }
      }
    }
  } catch (err) {
    //
  }
} // tailKillShipper

module.exports = {
  tailInit,
  tailKill
};
