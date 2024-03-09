// Load JQ Templates
import { filterTemplate, transformTemplate } from './templates/jqTemplates'

// Load Collection Templates
// jsBeat
import collectionMethodTemplatesJsBeat from './templates/collectionMethodTemplate.jsBeat'
// Filebeat
import collectionMethodTemplatesFilebeatLog from './templates/collectionMethodTemplate.filebeat.log'
import collectionMethodTemplatesFilebeatSyslogUdp from './templates/collectionMethodTemplate.filebeat.syslog.udp'
import collectionMethodTemplatesFilebeatSyslogTcp from './templates/collectionMethodTemplate.filebeat.syslog.tcp'
import collectionMethodTemplatesFilebeatHttpJson from './templates/collectionMethodTemplate.filebeat.httpjson'
// Genericbeat
import collectionMethodTemplatesGenericbeat from './templates/collectionMethodTemplate.genericbeat'
// WebHookBeat
import collectionMethodTemplatesWebhookbeat from './templates/collectionMethodTemplate.webhookbeat'
// S3Beat
import collectionMethodTemplatesS3beat from './templates/collectionMethodTemplate.s3beat'
// PubSub
import collectionMethodTemplatesPubSubbeat from './templates/collectionMethodTemplate.pubsubbeat'
// Kafka
import collectionMethodTemplatesKafkabeat from './templates/collectionMethodTemplate.kafkabeat'
// EventHub
import collectionMethodTemplatesEventHubbeatDefault from './templates/collectionMethodTemplate.eventhubbeat.default.mapping'
import collectionMethodTemplatesEventHubbeatCustom from './templates/collectionMethodTemplate.eventhubbeat.custom.mapping'
// Prisma Cloud
import collectionMethodTemplatesPrismacloudbeat from './templates/collectionMethodTemplate.prismacloudbeat'
// Symantec WSS
import collectionMethodTemplatesSymantecwssbeat from './templates/collectionMethodTemplate.symantecwssbeat'
// Microsoft Graph API
import collectionMethodTemplatesMsGraphbeatbeatDefault from './templates/collectionMethodTemplate.msgraphbeat.default.mapping'
import collectionMethodTemplatesMsGraphbeatbeatCustom from './templates/collectionMethodTemplate.msgraphbeat.custom.mapping'
// Carbon Black Cloud
import collectionMethodTemplatesCarbonBlackbeat from './templates/collectionMethodTemplate.carbonblackcloudbeat'
// Cisco AMP
import collectionMethodTemplatesCiscoAmpbeat from './templates/collectionMethodTemplate.ciscoampbeat'
// DUO
import collectionMethodTemplatesDuobeat from './templates/collectionMethodTemplate.duobeat'
// Proofpoint
import collectionMethodTemplatesProofpointbeat from './templates/collectionMethodTemplate.proofpointbeat'

export default function () {
  return {
    loggedInUser: '',
    loggedInUserRoles: [], // Array of all the Roles of the logged in user (typically array of one value: "User" or "Admin")
    loggedInUserIsPrivileged: false,
    jwtToken: (process.env.DEV ? localStorage.getItem('jwtToken') || '' : ''), // Fetch jwtToken from LocalStorage if present and if we are in DEV mode. Saving from logging back in every 2 minutes...
    openCollectors: [],
    pipelines: [],
    logSamples: [
      {
        pipelineUid: '',
        logs: []
      }
    ],
    jqFilterTemplate: filterTemplate, // Imported from jqTemplates
    jqTransformTemplate: transformTemplate, // Imported from jqTemplates
    shippersUrlsInternal: [], // Array of URLs and details for the different Shippers we can install on remote OpenCollector hosts
    collectionMethodTemplates: [
      collectionMethodTemplatesJsBeat, // jsBeat - flatfile
      collectionMethodTemplatesFilebeatLog, // Filebeat - log (flat files)
      collectionMethodTemplatesFilebeatSyslogUdp, // Filebeat - syslog_udp
      collectionMethodTemplatesFilebeatSyslogTcp, // Filebeat - syslog_tcp
      collectionMethodTemplatesFilebeatHttpJson, // Filebeat - httpjson
      collectionMethodTemplatesGenericbeat, // genericbeat
      collectionMethodTemplatesWebhookbeat, // webhookbeat
      collectionMethodTemplatesS3beat, // s3beat
      collectionMethodTemplatesPubSubbeat, // pubsubbeat
      collectionMethodTemplatesKafkabeat, // kafkabeat
      collectionMethodTemplatesEventHubbeatDefault, // eventhubbeat - With default mapping
      collectionMethodTemplatesEventHubbeatCustom, // eventhubbeat - With custom mapping
      collectionMethodTemplatesPrismacloudbeat, // prismacloudbeat
      collectionMethodTemplatesSymantecwssbeat, // symantecwssbeat
      collectionMethodTemplatesMsGraphbeatbeatDefault, // msgraphbeat - With default mapping
      collectionMethodTemplatesMsGraphbeatbeatCustom, // msgraphbeat - With custom mapping
      collectionMethodTemplatesCarbonBlackbeat, // carbonblackcloud
      collectionMethodTemplatesCiscoAmpbeat, // ciscoampbeat
      collectionMethodTemplatesDuobeat, // duobeat
      collectionMethodTemplatesProofpointbeat // proofpointbeat
    ], // collectionMethodTemplates
    collectionShippersOptions: [
      {
        value: 'jsBeat',
        label: 'jsBeat',
        icon: 'jsBeat',
        outputFormat: 'json'
      },
      {
        value: 'carbonblackcloudbeat',
        label: 'LogRhythm Carbon Black Cloud Beat',
        icon: 'logrhythm-carbonblackcloudbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'ciscoampbeat',
        label: 'LogRhythm Cisco AMP Beat',
        icon: 'logrhythm-ciscoampbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'duobeat',
        label: 'LogRhythm Duo Beat',
        icon: 'logrhythm-duobeat',
        outputFormat: 'yaml'
      },
      {
        value: 'eventhubbeat',
        label: 'LogRhythm Azure Event Hub Beat',
        icon: 'logrhythm-eventhubbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'genericbeat',
        label: 'LogRhythm Generic HTTP Rest Beat',
        icon: 'logrhythm-genericbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'kafkabeat',
        label: 'LogRhythm Kafka Beat',
        icon: 'logrhythm-kafkabeat',
        outputFormat: 'yaml'
      },
      {
        value: 'msgraphbeat',
        label: 'LogRhythm Beat for Microsoft Graph API',
        icon: 'logrhythm-msgraphbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'prismacloudbeat',
        label: 'LogRhythm Prisma Cloud Beat',
        icon: 'logrhythm-prismacloudbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'proofpointbeat',
        label: 'LogRhythm Proofpoint Beat',
        icon: 'logrhythm-proofpointbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'pubsubbeat',
        label: 'LogRhythm PubSub Beat',
        icon: 'logrhythm-pubsubbeat',
        outputFormat: 'yaml'
      },
      {
        value: 's3beat',
        label: 'LogRhythm S3 Beat',
        icon: 'logrhythm-s3beat',
        outputFormat: 'yaml'
      },
      {
        value: 'symantecwssbeat',
        label: 'LogRhythm Symantec WSS Beat',
        icon: 'logrhythm-symantecwssbeat',
        outputFormat: 'yaml'
      },
      {
        value: 'webhookbeat',
        label: 'LogRhythm Webhook Beat',
        icon: 'logrhythm-webhookbeat',
        outputFormat: 'yaml'
      // },
      // {
      //   value: 'filebeat',
      //   label: 'Filebeat',
      //   icon: 'filebeat',
      //   outputFormat: 'yaml'
      }
    ], // collectionShippersOptions
    openCollectorBeats: [
      {
        value: 'carbonblackcloudbeat',
        label: 'carbonblackcloudbeat',
        icon: 'logrhythm-carbonblackcloudbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'ciscoampbeat',
        label: 'ciscoampbeat',
        icon: 'logrhythm-ciscoampbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'duobeat',
        label: 'duobeat',
        icon: 'logrhythm-duobeat'
        // icon: 'logrhythm'
      },
      {
        value: 'eventhubbeat',
        label: 'eventhubbeat',
        icon: 'logrhythm-eventhubbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'gmtbeat',
        label: 'gmtbeat',
        icon: 'logrhythm-gmtbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'genericbeat',
        label: 'genericbeat',
        icon: 'logrhythm-genericbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'gsbeat',
        label: 'gsbeat',
        icon: 'logrhythm-gsbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'kafkabeat',
        label: 'kafkabeat',
        icon: 'logrhythm-kafkabeat'
        // icon: 'logrhythm'
      },
      {
        value: 'msgraphbeat',
        label: 'msgraphbeat',
        icon: 'logrhythm-msgraphbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'oktabeat',
        label: 'oktabeat',
        icon: 'logrhythm-oktabeat'
        // icon: 'logrhythm'
      },
      {
        value: 'prismacloudbeat',
        label: 'prismacloudbeat',
        icon: 'logrhythm-prismacloudbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'proofpointbeat',
        label: 'proofpointbeat',
        icon: 'logrhythm-proofpointbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'pubsubbeat',
        label: 'pubsubbeat',
        icon: 'logrhythm-pubsubbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'qualysfimbeat',
        label: 'qualysfimbeat',
        icon: 'logrhythm-qualysfimbeat'
        // icon: 'logrhythm'
      },
      {
        value: 's3beat',
        label: 's3beat',
        icon: 'logrhythm-s3beat'
        // icon: 'logrhythm'
      },
      {
        value: 'symantecwssbeat',
        label: 'symantecwssbeat',
        icon: 'logrhythm-symantecwssbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'sophoscentralbeat',
        label: 'sophoscentralbeat',
        icon: 'logrhythm-sophoscentralbeat'
        // icon: 'logrhythm'
      },
      {
        value: 'webhookbeat',
        label: 'webhookbeat',
        icon: 'logrhythm-webhookbeat'
        // icon: 'logrhythm'
      }
    ], // openCollectorBeats
    collectionMethodsOptions: [
      {
        shipper: 'carbonblackcloudbeat',
        value: 'carbonblackcloudbeat',
        label: 'Carbon Black Cloud',
        icon: 'o_language'
      },
      {
        shipper: 'ciscoampbeat',
        value: 'ciscoampbeat',
        label: 'Cisco AMP',
        icon: 'o_language'
      },
      {
        shipper: 'duobeat',
        value: 'duobeat',
        label: 'Duo',
        icon: 'o_badge'
      },
      {
        shipper: 'jsBeat',
        value: 'flatFile',
        label: 'Flat File',
        icon: 'o_description'
      },
      // {
      //   shipper: 'jsBeat',
      //   value: 'syslog',
      //   label: 'Syslog',
      //   icon: 'o_input'
      // },
      {
        shipper: 'genericbeat',
        value: 'genericbeat',
        label: 'HTTP / REST API',
        icon: 'o_language'
      },
      {
        shipper: 'eventhubbeat',
        value: 'eventhubbeat-default',
        label: 'Azure Event Hub - Default Mapping',
        icon: 'o_language'
      },
      {
        shipper: 'eventhubbeat',
        value: 'eventhubbeat-custom',
        label: 'Azure Event Hub - With custom Mapping',
        icon: 'o_language'
      },
      {
        shipper: 'kafkabeat',
        value: 'kafkabeat',
        label: 'Kafka',
        icon: 'o_language'
      },
      {
        shipper: 'msgraphbeat',
        value: 'msgraphbeat-default',
        label: 'Microsoft Graph API - Default Mapping',
        icon: 'o_language'
      },
      {
        shipper: 'msgraphbeat',
        value: 'msgraphbeat-custom',
        label: 'Microsoft Graph API - With custom Mapping',
        icon: 'o_language'
      },
      {
        shipper: 'prismacloudbeat',
        value: 'prismacloudbeat',
        label: 'Prisma Cloud',
        icon: 'o_language'
      },
      {
        shipper: 'proofpointbeat',
        value: 'proofpointbeat',
        label: 'Proofpoint - Default Mapping',
        icon: 'o_email'
      },
      {
        shipper: 'pubsubbeat',
        value: 'pubsubbeat',
        label: 'PubSub',
        icon: 'o_language'
      },
      {
        shipper: 's3beat',
        value: 's3beat',
        label: 'S3',
        icon: 'o_language'
      },
      {
        shipper: 'symantecwssbeat',
        value: 'symantecwssbeat',
        label: 'Symantec WSS',
        icon: 'o_language'
      },
      {
        shipper: 'webhookbeat',
        value: 'webhookbeat',
        label: 'Webhook over HTTP and HTTPS',
        icon: 'o_input'
      },
      {
        shipper: 'filebeat',
        value: 'log',
        label: 'Flat File',
        icon: 'o_description'
      },
      {
        shipper: 'filebeat',
        value: 'httpjson',
        label: 'HTTP / REST API',
        icon: 'o_language'
      },
      {
        shipper: 'filebeat',
        value: 'http_endpoint',
        label: 'HTTP / Web Hook Endpoint',
        icon: 'o_cloud_upload'
      },
      {
        shipper: 'filebeat',
        value: 'syslog_tcp',
        label: 'Syslog over TCP',
        icon: 'o_input'
      },
      {
        shipper: 'filebeat',
        value: 'syslog_udp',
        label: 'Syslog over UDP',
        icon: 'o_input'
      }
    ], // collectionMethodsOptions
    openCollectorLogSources: [],
    userAccounts: [], // EZ Users on EZ Server
    userRoles: [], // Roles for EZ Users on EZ Server
    errorWikiUrlBase: ( // Base URL for the Documentation page with Error codes
      process.env.DEV
        // ? 'https://docs-staging.logrhythm.com/docs/OCbeats/logrhythm-open-collector/oc-admin/oc-admin-error-messages#OCAdminErrorMessages-'
        ? 'http://localhost:8443/aka/OCAdminErrorMessages-'
        // : 'https://docs.logrhythm.com/docs/OCbeats/logrhythm-open-collector/oc-admin/oc-admin-error-messages#OCAdminErrorMessages-'
        : 'https://journey.logrhythm.com/EZ/aka/OCAdminErrorMessages-'
    ),
    helpWikiUrlBase: ( // Base URL for the Help Documentation page
      process.env.DEV
        // ? 'https://docs-staging.logrhythm.com/docs/OCbeats/logrhythm-open-collector/oc-admin/navigating-and-using-oc-admin#NavigatingandUsingOCAdmin-'
        ? 'http://localhost:8443/aka/OCAdminHelp-'
        // : 'https://docs.logrhythm.com/docs/OCbeats/logrhythm-open-collector/oc-admin/navigating-and-using-oc-admin#NavigatingandUsingOCAdmin-'
        : 'https://journey.logrhythm.com/EZ/aka/OCAdminHelp-'
    ),
    deployment: {
      uid: null, // UID of the EZ Server
      version: null // EZ Server's version
    },
    ezMarket: { // Details necessary to connect to the EZ Market Place
      server: {
        baseUrl: null,
        baseApiPath: null
      },
      publisherUid: null,
      ezMarketUid: null
    },
    ezMarketNotification: null, // Number (can be short text too) of notifications from EZ Market Place for the User // XXXX
    ezMarketNotifications: [], // Notifications from EZ Market Place for the User
    ezMarketPipelineTemplates: [], // Pipeline Templates from EZ Market Place for the User
    ezMarketPipelineTemplate: {}, // Pipeline Template fully loaded from EZ Market Place by UID
    ezMarketPublisherDetails: {}, // Details of the Publisher (current user), as held by the EZ Market Place
    msSqlConfig: {}, // SIEM MS SQL connection configuration
    siemEmdbVersions: {}, // SIEM EMDB object with version information
    extraInformation: {}, // Extra Information provided by the Login API on the server
    currentPersistenceLayerAvailability: {}, // Stores the availability of the databases
    minimalDockerSupportedVersion: 20, // Lowest major version number of Docker that is supported
    minimalEzDbPartsVersions: [
      {
        name: 'get_SIEM_Master_ID',
        version: '20220209.01'
      },
      {
        name: 'OC_Admin_Upsert_LogSource_Type',
        version: '20210708.01'
      },
      {
        name: 'OC_Admin_Clone_MPE_Rule',
        version: '20210708.01'
      },
      {
        name: 'OC_Admin_Upsert_MPE_SubRule',
        version: '20210713.01'
      },
      {
        name: 'OC_Admin_Upsert_Processing_Policy',
        version: '20210910.01'
      },
      {
        name: 'OC_Admin_Upsert_Log_Source_Virtualisation_Template',
        version: '20210910.01'
      },
      {
        name: 'OC_Admin_Upsert_Log_Source_Virtualisation_Template_Item',
        version: '20210902.01'
      },
      {
        name: 'OC_Admin_List_OpenCollector_Log_Sources',
        version: '20210719.01'
      },
      {
        name: 'OC_Admin_Upsert_Log_Source_Virtualisation_To_OpenCollector_LogSource',
        version: '20230115.02'
      },
      {
        name: 'OC_Admin_get_EZ_Versions',
        version: '20220803.01'
      }
    ],
    latestNews: [], // For the News feed of the Landing Page (Welcome)
    logRhythmContainersWithConfig: [
      'carbonblackcloudbeat_',
      'ciscoampbeat_',
      'duobeat_',
      'eventhubbeat_',
      'genericbeat_',
      'gmtbeat_',
      'gsbeat_',
      'kafkabeat_',
      'metrics', // Not a Beat
      'msgraphbeat_',
      'oktabeat_',
      'open_collector', // Not a Beat
      'prismacloudbeat_',
      'proofpointbeat_',
      'pubsubbeat_',
      'qualysfimbeat_',
      's3beat_',
      'sophoscentralbeat_',
      'symantecwssbeat_',
      'webhookbeat_'
    ],
    temporaryLogLevel: [{}] // Temporary log level of the OC Admin backend
  }
}
