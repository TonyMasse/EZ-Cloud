const express = require('express');

// To load the SQL scripts from disk
const fs = require('fs');
const path = require('path');

// Load the System Logging functions
const { getLevelToInt, getIntToLevel, logToSystem } = require('../shared/systemLogging');

// Get the crypto tools to work with password and keys
const { aesEncrypt, aesDecrypt } = require('../shared/crypto');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - ezAdmin - All good'
  });
});

//        ##     ## ######## #### ##       #### ######## #### ########  ######
//        ##     ##    ##     ##  ##        ##     ##     ##  ##       ##    ##
//        ##     ##    ##     ##  ##        ##     ##     ##  ##       ##
//        ##     ##    ##     ##  ##        ##     ##     ##  ######    ######
//        ##     ##    ##     ##  ##        ##     ##     ##  ##             ##
//        ##     ##    ##     ##  ##        ##     ##     ##  ##       ##    ##
//         #######     ##    #### ######## ####    ##    #### ########  ######

const {
  getDataFromMsSql,
  createMsSqlVariables,
  createMsSqlVariablesAndStoredProcParams,
  getDataFromPgSql,
  createPgSqlVariables,
  getSiemMasterLicenseId
} = require('../shared/sqlUtils');

//        ########   #######  ##     ## ######## ########  ######
//        ##     ## ##     ## ##     ##    ##    ##       ##    ##
//        ##     ## ##     ## ##     ##    ##    ##       ##
//        ########  ##     ## ##     ##    ##    ######    ######
//        ##   ##   ##     ## ##     ##    ##    ##             ##
//        ##    ##  ##     ## ##     ##    ##    ##       ##    ##
//        ##     ##  #######   #######     ##    ########  ######

// GetUsersList
// UpdateUser
// DeleteUser
// GetRolesList
// UpdateRole
// DeleteRole
// UpdateEmdb
// UpdateMsSqlConfig
// GetMsSqlConfig
// GetTemporaryLoggingLevel
// UpdateTemporaryLoggingLevel

// ##########################################################################################
// GetUsersList
// ##########################################################################################

router.get('/GetUsersList', async (req, res) => {
  const usersList = {};
  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL
    await getDataFromMsSql({
      targetVariable: usersList,
      query: `
      SELECT [rbacUserToRole].[id] AS 'userId'
        ,[rbacUserToRole].[login] AS 'userLogin'
        ,'** PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER **' AS 'userPassword'
        ,[rbacRoles].[uid] AS 'roleUid'
        ,[rbacRoles].[name] AS 'roleName'
        ,[rbacRoles].[isPrivileged] AS 'roleIsPrivileged'
      FROM [EZ].[dbo].[rbacRoles]
        RIGHT OUTER JOIN [EZ].[dbo].[rbacUserToRole] ON [rbacRoles].[uid] = [rbacUserToRole].[roleUid]
      ;
      `
    });
  } else {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: usersList,
      query: `
      SELECT "rbacUserToRole"."id" AS "userId"
        ,"rbacUserToRole"."login" AS "userLogin"
        ,'** PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER **' AS "userPassword"
        ,"rbacRoles"."uid" AS "roleUid"
        ,"rbacRoles"."name" AS "roleName"
        ,CASE
          WHEN
              "rbacRoles"."isPrivileged"=TRUE
              THEN 1
          ELSE
              0
          END AS "roleIsPrivileged"
        FROM "rbacRoles"
          RIGHT OUTER JOIN "rbacUserToRole" ON "rbacRoles"."uid" = "rbacUserToRole"."roleUid"
      ;
    `
    });
  }

  res.json(usersList);
});

// ##########################################################################################
// UpdateUser
// ##########################################################################################

router.post('/UpdateUser', async (req, res) => {
  const updatedUser = {};

  if (req.body.userId == null) {
    logToSystem('Verbose', `Admin | Attempting to create User Account | Login: ${req.body.userLogin} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')}`);
  }
  if (req.body.userId != null) {
    logToSystem('Verbose', `Admin | Attempting to update User Account | User ID: ${req.body.userId} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')}`);
  }

  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL

    const [sqlVariables, storedProcedureParams] = createMsSqlVariablesAndStoredProcParams(
      req,
      [
        { name: 'userId', type: 'Int' },
        { name: 'userLogin', type: 'NVarChar' },
        { name: 'roleUid', type: 'NVarChar' },
        { name: 'userPassword', type: 'NVarChar' }
      ],
      true
    );

    await getDataFromMsSql({
      targetVariable: updatedUser,
      query: `
      EXECUTE [dbo].[upsert_RBAC_User]
        ${storedProcedureParams.join(', ')}
        ;
      `,
      variables: sqlVariables
    });
  } else {
    // Use PgSQL

    await getDataFromPgSql({
      targetVariable: updatedUser,
      query: `
      CALL "upsert_RBAC_User"
        (
          $1, -- userId
          $2, -- userLogin
          $3, -- roleUid
          $4  -- userPassword
        )
        ;
      `,
      variables: createPgSqlVariables(
        req,
        [
          { name: 'userId' },
          { name: 'userLogin' },
          { name: 'roleUid' },
          { name: 'userPassword' }
        ]
      )
    });
  }

  if (req.body.userId == null) { // User creation
    if (
      updatedUser
      && !(
        updatedUser.errors
        && Array.isArray(updatedUser.errors)
        && updatedUser.errors.length
      )
    ) { // 🎉
      logToSystem('Information', `Admin | User Account created | Login: ${req.body.userLogin} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')}`);
    } else { // 😥
      logToSystem('Warning', `Admin | Failed to create User Account | Login: ${req.body.userLogin} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(updatedUser)}`);
    }
  }

  if (req.body.userId != null) { // User update
    if (
      updatedUser
      && !(
        updatedUser.errors
        && Array.isArray(updatedUser.errors)
        && updatedUser.errors.length
      )
    ) { // 🎉
      logToSystem('Information', `Admin | User Account updated | User ID: ${req.body.userId} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')}`);
    } else { // 😥
      logToSystem('Warning', `Admin | Fail to update User Account | User ID: ${req.body.userId} | Role UID: ${req.body.roleUid} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(updatedUser)}`);
    }
  }

  res.json(updatedUser);
});

// ##########################################################################################
// DeleteUser
// ##########################################################################################

router.post('/DeleteUser', async (req, res) => {
  const deletedUser = {};

  logToSystem('Verbose', `Admin | Attempting to delete User Account | User ID: ${req.body.userId} | user: ${(req.user.username ? req.user.username : '-')}`);

  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL
    await getDataFromMsSql({
      targetVariable: deletedUser,
      query: `
      EXECUTE [dbo].[delete_RBAC_User]
       @userId
      ;
      `,
      variables: createMsSqlVariables(
        req,
        [
          { name: 'userId', type: 'Int' }
        ]
      )
    });
  } else {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: deletedUser,
      query: `
      CALL "delete_RBAC_User"
      (
         $1
      );
      `,
      variables: createPgSqlVariables(
        req,
        [
          { name: 'userId' }
        ]
      )
    });
  }

  if (
    deletedUser
    && !(
      deletedUser.errors
      && Array.isArray(deletedUser.errors)
      && deletedUser.errors.length
    )
  ) { // 🎉 💀 🪓🪓🪓🪓 😈
    logToSystem('Information', `Admin | User Account deleted | User ID: ${req.body.userId} | user: ${(req.user.username ? req.user.username : '-')}`);
  } else { // 😥
    logToSystem('Warning', `Admin | Failed to delete User Account | User ID: ${req.body.userId} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(deletedUser)}`);
  }

  res.json(deletedUser);
});

// ##########################################################################################
// GetRolesList
// ##########################################################################################

router.get('/GetRolesList', async (req, res) => {
  const rolesList = {};
  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL
    await getDataFromMsSql({
      targetVariable: rolesList,
      query: `
        SELECT [uid] AS 'roleUid'
        ,[name] AS 'roleName'
        ,[isPrivileged] AS 'roleIsPrivileged'
      FROM [EZ].[dbo].[rbacRoles]
      `
    });
  } else {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: rolesList,
      query: `
      SELECT "uid" AS "roleUid"
        ,"name" AS "roleName"
        ,CASE
          WHEN
              "isPrivileged"=TRUE
              THEN 1
          ELSE
              0
          END AS "roleIsPrivileged"
      FROM "rbacRoles"
    `
    });
  }

  res.json(rolesList);
});

// ##########################################################################################
// UpdateRole
// ##########################################################################################

router.post('/UpdateRole', async (req, res) => {
  const updatedRole = {};

  logToSystem('Verbose', `Admin | Attempting to create/update User Role | Role UID: ${req.body.uid} | Role Name: ${req.body.name} | Is Role Privileged: ${(req.body.isPrivileged === 1 ? 'Privileged' : 'Not privileged')} | user: ${(req.user.username ? req.user.username : '-')}`);

  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL
    await getDataFromMsSql({
      targetVariable: updatedRole,
      query: `
      EXECUTE [dbo].[upsert_RBAC_Role]
         @uid
        ,@name
        ,@isPrivileged
        ;
      `,
      variables: createMsSqlVariables(
        req,
        [
          { name: 'uid', type: 'NVarChar' },
          { name: 'name', type: 'NVarChar' },
          { name: 'isPrivileged', type: 'TinyInt' }
        ]
      )
    });
  } else {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: updatedRole,
      query: `
      CALL "upsert_RBAC_Role"
      (
         $1
        ,$2
        ,$3 = 1
      );
      `,
      variables: createPgSqlVariables(
        req,
        [
          { name: 'uid' },
          { name: 'name' },
          { name: 'isPrivileged' }
        ]
      )
    });
  }

  if (
    updatedRole
    && !(
      updatedRole.errors
      && Array.isArray(updatedRole.errors)
      && updatedRole.errors.length
    )
  ) { // 🎉 💀 🪓🪓🪓🪓 😈
    logToSystem('Information', `Admin | User Role created/updated | Role UID: ${req.body.uid} | Role Name: ${req.body.name} | Is Role Privileged: ${(req.body.isPrivileged === 1 ? 'Privileged' : 'Not privileged')} | user: ${(req.user.username ? req.user.username : '-')}`);
  } else { // 😥
    logToSystem('Warning', `Admin | Failed to create/update User Role | Role UID: ${req.body.uid} | Role Name: ${req.body.name} | Is Role Privileged: ${(req.body.isPrivileged === 1 ? 'Privileged' : 'Not privileged')} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(updatedRole)}`);
  }

  res.json(updatedRole);
});

// ##########################################################################################
// DeleteRole
// ##########################################################################################

router.post('/DeleteRole', async (req, res) => {
  const deletedRole = {};

  logToSystem('Verbose', `Admin | Attempting to delete User Role | Role UID: ${req.body.uid} | user: ${(req.user.username ? req.user.username : '-')}`);

  if (
    process.env.databaseMode === 'mssql'
  ) {
    // Use MS SQL
    await getDataFromMsSql({
      targetVariable: deletedRole,
      query: `
      EXECUTE [dbo].[delete_RBAC_Role]
       @uid
        ;
      `,
      variables: createMsSqlVariables(
        req,
        [
          { name: 'uid', type: 'NVarChar' }
        ]
      )
    });
  } else {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: deletedRole,
      query: `
      CALL "delete_RBAC_Role"
      (
         $1
      );
      `,
      variables: createPgSqlVariables(
        req,
        [
          { name: 'uid' }
        ]
      )
    });
  }

  if (
    deletedRole
    && !(
      deletedRole.errors
      && Array.isArray(deletedRole.errors)
      && deletedRole.errors.length
    )
  ) { // 🎉 💀 🪓🪓🪓🪓 😈
    logToSystem('Information', `Admin | User Role deleted | Role UID: ${req.body.uid} | user: ${(req.user.username ? req.user.username : '-')}`);
  } else { // 😥
    logToSystem('Warning', `Admin | Failed to delete User Role | Role UID: ${req.body.uid} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(deletedRole)}`);
  }

  res.json(deletedRole);
});

// ##########################################################################################
// GetMsSqlConfig
// ##########################################################################################

router.get('/GetMsSqlConfig', async (req, res) => {
  const msSqlConfig = {
    payload: {
      isManagedOnBackend: true // For MS SQL `databaseMode`, as the conf is on file
    }
  };
  if (
    process.env.databaseMode !== 'mssql'
  ) {
    // Use PgSQL
    await getDataFromPgSql({
      targetVariable: msSqlConfig,
      returnSingleItem: true,
      query: `
      SELECT
          "settingsJson"::json->'config'->>'server' as "host",
          "settingsJson"::json->'config'->'authentication'->'options'->>'userName' as "username",
          -- "settingsJson"::json->'config'->'authentication'->'options'->>'password' as "password",
          "settingsJson"::json->'config'->'options'->'port' as "port",
          "settingsJson"::json->'config'->'options'->'encrypt' as "encrypt"
      FROM
          public."settings"
      WHERE 
          "uid" = '6e5625e8-372d-4d4b-ac9a-615e370ac940'
      LIMIT 1
          ;
      `
    });

    // Ensure we have a `payload` branch
    if (!msSqlConfig.payload) {
      msSqlConfig.payload = {};
    }

    msSqlConfig.payload.isManagedOnBackend = false;

    // Decrypt secrets
    // The MS SQL host, port, login and password are AES encrypted in PgSQL using
    // the private AES key specific to the deployment
    // Hostname
    msSqlConfig.payload.host = aesDecrypt(
      msSqlConfig.payload.host
    );
    // Login
    msSqlConfig.payload.username = aesDecrypt(
      msSqlConfig.payload.username
    );
    // Password, we send nothing if fresh conf, or a placeholder if configured
    if (msSqlConfig.payload.host && msSqlConfig.payload.host.length) {
      msSqlConfig.payload.password = '** PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER **';
    }
  }

  res.json(msSqlConfig);
});

// ##########################################################################################
// UpdateMsSqlConfig
// ##########################################################################################

router.post('/UpdateMsSqlConfig', async (req, res) => {
  const updatedMsSqlConfig = {};
  const currentMsSqlConfig = {};

  // Data/fields sent forward:
  // - host
  // - port
  // - username
  // - password
  // - encrypt

  logToSystem('Verbose', `Admin | Attempting to save/update MS SQL Connnection Configuration | Host: ${req.body.host} | Port: ${req.body.port} | Traffic Is Encrypted: ${(req.body.encrypt === true ? 'Encrypted' : 'Not encrypted')} | user: ${(req.user.username ? req.user.username : '-')}`);

  if (
    process.env.databaseMode !== 'mssql'
  ) {
    // Use PgSQL
    // Grab the current password (in its encrypted form)
    await getDataFromPgSql({
      targetVariable: currentMsSqlConfig,
      returnSingleItem: true,
      query: `
      SELECT
          "settingsJson"::json->'config'->'authentication'->'options'->>'password' as "password"
      FROM
          public."settings"
      WHERE 
          "uid" = '6e5625e8-372d-4d4b-ac9a-615e370ac940'
      LIMIT 1
      ;
      `
    });

    // Ensure we have a `payload` branch and an encrypted password
    if (
      !(
        currentMsSqlConfig
        && currentMsSqlConfig.payload
        && currentMsSqlConfig.payload.password
        && currentMsSqlConfig.payload.password.length
      )
    ) {
      // If not, just create a NULL one
      currentMsSqlConfig.payload = {
        password: null
      };
    }

    // Build the new connection config
    const msSqlConfig = {
      config: {
        server: aesEncrypt(req.body.host),
        authentication: {
          type: 'default',
          options: {
            userName: aesEncrypt(req.body.username),
            password: (
              // Check if we got sent the placeholder, indicating that
              // the user did not change the password
              req.body.password === '** PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER - PLACEHOLDER **'
                ? currentMsSqlConfig.payload.password // Keep the current encrypted password
                : aesEncrypt(req.body.password) // Use the newly provided one
            )
          }
        },
        options: {
          encrypt: !!req.body.encrypt, // Force boolean, failsafe to False if not provided
          port: parseInt(req.body.port, 10) || 1433, // Failsafe to default MS SQL port
          database: 'EZ',
          requestTimeout: 30000
        }
      }
    };

    try {
      logToSystem('Debug', `Admin | Attempting to save/update MS SQL Connnection Configuration | Generated : ${JSON.stringify(msSqlConfig)} | user: ${(req.user.username ? req.user.username : '-')}`);

      await getDataFromPgSql({
        targetVariable: updatedMsSqlConfig,
        query: `
        CALL "upsert_Setting"
        (
          '6e5625e8-372d-4d4b-ac9a-615e370ac940' -- "@uid"
          ,NULL -- "@name"
          ,NULL -- "@description"
          ,$1 -- "@settingsJson"
        );
        `,
        variables: [
          JSON.stringify(msSqlConfig)
        ]
      });
    } catch (error) {
      logToSystem('Error', `Admin | Failed to save/update MS SQL Connnection Configuration | user: ${(req.user.username ? req.user.username : '-')} | Details: ${error.message}`);
    }
  }

  if (
    updatedMsSqlConfig
    && !(
      updatedMsSqlConfig.errors
      && Array.isArray(updatedMsSqlConfig.errors)
      && updatedMsSqlConfig.errors.length
    )
  ) { // 🎉 💀 🪓🪓🪓🪓 😈
    logToSystem('Information', `Admin | MS SQL Connnection Configuration saved/updated | Host: ${req.body.host} | Port: ${req.body.port} | Traffic Is Encrypted: ${(req.body.encrypt === 1 ? 'Encrypted' : 'Not encrypted')} | user: ${(req.user.username ? req.user.username : '-')}`);
    // If MS SQL is good, then try to fecth the Master License ID and update
    // PG SQL with it
    getSiemMasterLicenseId(true);
  } else { // 😥
    logToSystem('Warning', `Admin | Failed to save/update MS SQL Connnection Configuration | Host: ${req.body.host} | Port: ${req.body.port} | Traffic Is Encrypted: ${(req.body.encrypt === 1 ? 'Encrypted' : 'Not encrypted')} | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(updatedMsSqlConfig)}`);
  }

  res.json(updatedMsSqlConfig);
});

// ##########################################################################################
// UpdateEmdb
// ##########################################################################################

router.post('/UpdateEmdb', async (req, res) => {
  const updatedMsSqlEmdb = {
    payload: []
  };

  // Data/fields sent forward:
  // - username
  // - password

  // Steps:
  // - Check params make sense
  // - Check SQL files are there
  // - For each file:
  //   - open the file
  //   - split in chunks separated by "GO"
  //   - for each chunk:
  //     - connect to SQL
  //     - run the chunk
  //     - append result to response object
  //     - bubble up errors to response object
  // - return response object

  logToSystem('Verbose', `Admin | Attempting to create/update EZ Database on MS SQL | Host: ${req.body.host} | Port: ${req.body.port} | Traffic Is Encrypted: ${(req.body.encrypt === true ? 'Encrypted' : 'Not encrypted')} | user: ${(req.user.username ? req.user.username : '-')}`);

  if (
    process.env.databaseMode !== 'mssql'
  ) {
    // Don't update EZ DB if running on Windows (as it's done by the installer)

    // Get the list of files to run, and their respective target DB
    const createDatabaseForDocker = JSON.parse(fs.readFileSync(path.join(process.env.baseDirname, 'database', 'create_database_for_Docker.json'), 'utf8'));
    logToSystem('Debug', `Admin | List of files to run: ${JSON.stringify(createDatabaseForDocker)} | user: ${(req.user.username ? req.user.username : '-')}`);

    // Run each file one by one synchronously
    if (createDatabaseForDocker && Array.isArray(createDatabaseForDocker)) {
      // eslint-disable-next-line no-restricted-syntax
      for await (const sqlScript of createDatabaseForDocker) {
        if (
          sqlScript.sourceFilename && sqlScript.sourceFilename.length
          && sqlScript.targetDatabase && sqlScript.targetDatabase.length
        ) {
          logToSystem('Information', `Admin | Running SQL file: "${sqlScript.sourceFilename}" | Against DB: "${sqlScript.targetDatabase}" | user: ${(req.user.username ? req.user.username : '-')}`);

          let sqlFileContent = null;
          try {
            // Loading SQL file content, padding it with spaces
            // The padding is to make sure that "GO" is always surrounded with separators
            sqlFileContent = ` ${fs.readFileSync(path.join(process.env.baseDirname, 'database', sqlScript.sourceFilename), 'utf8')} `;

            // Split in chunks separated with "GO"
            const sqlChunks = sqlFileContent.split(/\s[Gg][Oo];?\s/) || [];

            logToSystem('Verbose', `Admin | Number of SQL chunks found: "${sqlChunks.length}" | In SQL file: "${sqlScript.sourceFilename}" | Against DB: "${sqlScript.targetDatabase}" | user: ${(req.user.username ? req.user.username : '-')}`);

            let chunkCounter = 0;
            // Run each chunk
            // eslint-disable-next-line no-restricted-syntax
            for await (const sqlChunk of sqlChunks) {
              const trimmedSqlChunk = sqlChunk.trim();
              if (
                trimmedSqlChunk.length
              ) {
                chunkCounter += 1;
                // Run the chunk of SQL
                const updatedMsSqlEmdbWithFile = {};
                await getDataFromMsSql({
                  msSqlConfig: {
                    authentication: {
                      type: 'default',
                      options: {
                        userName: req.body.username,
                        password: req.body.password
                      }
                    },
                    options: {
                      database: sqlScript.targetDatabase
                    }
                  },
                  targetVariable: updatedMsSqlEmdbWithFile,
                  returnSingleItem: true,
                  query: trimmedSqlChunk
                });

                logToSystem('Debug', `Admin | SQL Chunk run result: "${JSON.stringify(updatedMsSqlEmdbWithFile)}" | user: ${(req.user.username ? req.user.username : '-')}`);

                // Add results to the main Payload
                updatedMsSqlEmdb.payload.push(
                  {
                    sqlFileName: sqlScript.sourceFilename,
                    sqlChunk: chunkCounter,
                    ...updatedMsSqlEmdbWithFile
                  }
                );

                // Errors management
                if (
                  updatedMsSqlEmdbWithFile
                  && (
                    updatedMsSqlEmdbWithFile.errors
                    && Array.isArray(updatedMsSqlEmdbWithFile.errors)
                    && updatedMsSqlEmdbWithFile.errors.length
                  )
                ) {
                  // Errors
                  logToSystem('ERROR', `Admin | Failed running file: "${sqlScript.sourceFilename}" | SQL chunk number: "${chunkCounter}" | Errors: "${JSON.stringify(updatedMsSqlEmdbWithFile.errors)}" | user: ${(req.user.username ? req.user.username : '-')}`);
                  // Make sure we have the `error` structure
                  if (updatedMsSqlEmdb && !updatedMsSqlEmdb.errors) {
                    updatedMsSqlEmdb.errors = [];
                  }
                  updatedMsSqlEmdbWithFile.errors.forEach((error) => {
                    updatedMsSqlEmdb.errors.push(error);
                  });

                  // Prevent any other chunks for the file from running
                  break;
                }
              } else {
                logToSystem('Verbose', `Admin | Ignoring empty SQL chunks | In SQL file: "${sqlScript.sourceFilename}" | Against DB: "${sqlScript.targetDatabase}" | user: ${(req.user.username ? req.user.username : '-')}`);
              }
            }
          } catch (error) {
            logToSystem('Error', `Admin | Failed reading file: "${sqlScript.sourceFilename}" | user: ${(req.user.username ? req.user.username : '-')}`);
          }
        } else {
          logToSystem('Warning', `Admin | Ignoring incomplete entry | File: "${sqlScript.sourceFilename}" | DB: "${sqlScript.targetDatabase}" | user: ${(req.user.username ? req.user.username : '-')}`);
        }
      }
    }
  }

  if (
    updatedMsSqlEmdb
    && !(
      updatedMsSqlEmdb.errors
      && Array.isArray(updatedMsSqlEmdb.errors)
      && updatedMsSqlEmdb.errors.length
    )
  ) { // 🎉
    logToSystem('Information', `Admin | EZ Database on MS SQL created/updated | user: ${(req.user.username ? req.user.username : '-')}`);
  } else { // 😥
    logToSystem('Warning', `Admin | Failure during creation/update EZ Database on MS SQL | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(updatedMsSqlEmdb)}`);
  }

  res.json(updatedMsSqlEmdb);
});

function getCurrentLogLevel() {
  return {
    stillChecking: false,
    errors: [],
    outputs: [],
    payload: [
      {
        logLevel: process.env.logLevel,
        logLevelName: getIntToLevel(process.env.logLevel)
      }
    ]
  };
}

// ##########################################################################################
// GetTemporaryLoggingLevel
// ##########################################################################################

router.get('/GetTemporaryLoggingLevel', async (req, res) => {
  const loggingLevel = getCurrentLogLevel();

  res.json(loggingLevel);
});

// ##########################################################################################
// UpdateTemporaryLoggingLevel
// ##########################################################################################

router.post('/UpdateTemporaryLoggingLevel', async (req, res) => {
  // User provides the log level by its integer ID
  const newLoggingLevel = req.body.newLoggingLevel || process.env.logLevel;

  logToSystem('Verbose', `Admin | Updating LogLevel temporarily | From: ${process.env.logLevel} ("${getIntToLevel(process.env.logLevel)}") | To: ${newLoggingLevel} ("${getIntToLevel(newLoggingLevel)}") | user: ${(req.user.username ? req.user.username : '-')}`);

  try {
    process.env.logLevel = newLoggingLevel;
  } catch (error) {
    logToSystem('Warning', `Admin | Failure during update of LogLevel | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(error.message)}`);
  }

  const updatedLoggingLevel = getCurrentLogLevel();

  res.json(updatedLoggingLevel);
});

// ##########################################################################################
// RevertTemporaryLoggingLevel
// ##########################################################################################

router.post('/RevertTemporaryLoggingLevel', async (req, res) => {
  try {
    const newLoggingLevel = getLevelToInt(process.env.LOGLEVEL || 'Information');
    logToSystem('Verbose', `Admin | Reverting LogLevel to its value per the configuration file | From: ${req.body.userLogin} | To: ${newLoggingLevel} ("${getIntToLevel(newLoggingLevel)}") | user: ${(req.user.username ? req.user.username : '-')}`);
    process.env.logLevel = getLevelToInt(process.env.LOGLEVEL || 'Information');
  } catch (error) {
    logToSystem('Warning', `Admin | Failure during update of LogLevel | user: ${(req.user.username ? req.user.username : '-')} | Details: ${JSON.stringify(error.message)}`);
  }

  const updatedLoggingLevel = getCurrentLogLevel();

  res.json(updatedLoggingLevel);
});

//        ######## ##     ## ########   #######  ########  ########  ######
//        ##        ##   ##  ##     ## ##     ## ##     ##    ##    ##    ##
//        ##         ## ##   ##     ## ##     ## ##     ##    ##    ##
//        ######      ###    ########  ##     ## ########     ##     ######
//        ##         ## ##   ##        ##     ## ##   ##      ##          ##
//        ##        ##   ##  ##        ##     ## ##    ##     ##    ##    ##
//        ######## ##     ## ##         #######  ##     ##    ##     ######

module.exports = {
  ezAdmin: router
};
