//     ##      ## ######## ########  ##     ##  #######   #######  ##    ##                #######   ######
//     ##  ##  ## ##       ##     ## ##     ## ##     ## ##     ## ##   ##                ##     ## ##    ##
//     ##  ##  ## ##       ##     ## ##     ## ##     ## ##     ## ##  ##                 ##     ## ##
//     ##  ##  ## ######   ########  ######### ##     ## ##     ## #####       #######    ##     ## ##
//     ##  ##  ## ##       ##     ## ##     ## ##     ## ##     ## ##  ##                 ##     ## ##
//     ##  ##  ## ##       ##     ## ##     ## ##     ## ##     ## ##   ##                ##     ## ##    ##
//      ###  ###  ######## ########  ##     ##  #######   #######  ##    ##                #######   ######

export default {
  shipper: 'webhookbeat',
  collectionMethod: 'webhookbeat',
  initialDefaultValues: {
    hostname: 'localhost',
    portnumber: 8080,
    sslflag: false,
    heartbeatdisabled: false,
    heartbeatinterval: 60
  },
  identificationStyle: ['logrhythmBeat'],
  options: {
    extractPayloadFieldOnly: true,
    payloadField: 'message'
  },
  definition: [
    // Required
    {
      name: 'portnumber',
      label: 'Port Number',
      type: {
        name: 'number'
      },
      description: 'HTTP listening service TCP Port.',
      default: '8080',
      min: 0,
      max: 65535,
      required: true,
      group: 'Required'
    },

    // Binding

    {
      name: 'hostname',
      label: 'Webhook Listener Hostname/IP',
      type: {
        name: 'string'
      },
      description: 'Optional: Provide the hostname or IP address for the Webhook endpoint only; do not include the query parameters string. It will default to "localhost" if nothing is provided.',
      default: 'localhost',
      required: false,
      group: 'Binding'
    },

    // HTTPS

    {
      name: 'sslFlag',
      label: 'Enable HTTPS',
      type: {
        name: 'boolean'
      },
      description: `Enforce HTTPS or operate the Webhook Beat without any transport encryption.

> NOTE
> If **Enable HTTPS** is set to **True**, a **SSL certificate File** and a **SSL Private Key File** must be provided below.`,
      default: false,
      required: false,
      group: 'HTTPS'
    },
    {
      name: 'certFilePath',
      label: 'SSL certificate File',
      type: {
        name: 'file'
      },
      fileOptions: { // For file type.
        dropIn: true, // Do we drop the file content into a specific location on the disk. If False, the content is left as is in the field, just like a multiline string.
        dropInPath: '/webhookbeat.crt', // Where on the disk to drop the file to
        valueInConfig: '/beats/webhookbeat/config/webhookbeat.crt', // Path or file name to use as the value for the field
        maxFileSize: null // Maximum file size, in bytes. Ignored if not set (or set to null)
      },
      description: `SSL Certificate for HTTPS. 

Required if **Enable HTTPS** is selected under **SSL Flag** above.`,
      default: '',
      required: true,
      group: 'HTTPS'
    },
    {
      name: 'keyFilePath',
      label: 'SSL Private Key File',
      type: {
        name: 'file'
      },
      fileOptions: { // For file type.
        dropIn: true, // Do we drop the file content into a specific location on the disk. If False, the content is left as is in the field, just like a multiline string.
        dropInPath: '/webhookbeat.key', // Where on the disk to drop the file to
        valueInConfig: '/beats/webhookbeat/config/webhookbeat.key' // Path or file name to use as the value for the field
      },
      description: `SSL Private Key for HTTPS. 

Required if **Enable HTTPS** is selected under **SSL Flag** above.`,
      default: '',
      required: true,
      group: 'HTTPS'
    },

    // EZ Internal

    {
      name: 'beatIdentifier',
      label: 'Beat Identifier',
      type: {
        name: 'string'
      },
      default: '',
      description: `This is the identifier used by Webhook Beat to name its separate instances.
> NOTE
> - It is limited to 12 characters in length.
> - It's concatenated with \`webhookbeat_\` to produce the Fully Qualified Beat Name (\`fullyqualifiedbeatname\` aka \`fqbn\`) in the form of \`webhookbeat_xxxxxxxxxxxx\`
`,
      required: true,
      readonly: true,
      group: 'EZ Internal'
    },
    {
      name: 'logsource_name',
      label: 'LogSource Name',
      type: {
        name: 'string'
      },
      default: '',
      description: `This is the identifier transformed internally to \`device_type\`, and is usually provided by Webhook Beat to the SIEM.
It's used for the Log Source Virtualisation.`,
      required: true,
      readonly: true,
      group: 'EZ Internal'
    }
  ] // definition
}
