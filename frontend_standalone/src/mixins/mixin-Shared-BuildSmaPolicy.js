// mixin-Shared-BuildJq.js

export default {
  methods: {
    // buildJqFilterFromParams (pipelineUid, pipelineName, beatName, loggedInUser) {
    //   let jqFilter = ''
    //   // webhookbeat_254_EH_254a3
    //   const beatFullyDistinguishedName =
    //     String(beatName).toLowerCase() +
    //     '_' +
    //     String(
    //       pipelineUid.substring(0, 3) +
    //       '_' +
    //       pipelineName.replace(/[^a-zA-Z0-9]/g, '_') +
    //       '_' +
    //       pipelineUid
    //     )
    //       .substring(0, 12)

    //   // First pass to change the headers and static fields
    //   jqFilter = this.jqFilterTemplate
    //     .replace(/{{EZ_generation_timestamp}}/g, (new Date()).toISOString())
    //     .replace(/{{EZ_generation_user}}/g, loggedInUser)
    //     .replace(/{{EZ_stream_name_placeholder}}/g, pipelineName)
    //     .replace(/{{EZ_stream_id_placeholder}}/g, pipelineUid)
    //     .replace(/{{EZ_compact_stream_name_placeholder}}/g, String(pipelineName).replace(/[^a-zA-Z0-9]/g, '_').toLowerCase())
    //     .replace(/{{EZ_beat_name_placeholder}}/g, beatName)
    //     .replace(/{{EZ_beat_fully_distinguished_name_placeholder}}/g, beatFullyDistinguishedName)

    //   // And ship it back
    //   return jqFilter
    // },

    buildSmaPolicyTransformFromParams ({ pipelineUid, pipelineName, beatName, extractMessageFieldOnly, messageFieldPath, jsonPathes }) {
      const smaPolicyTransform = {
        name: `${beatName} - ${pipelineName} - ${pipelineUid}`,
        // group: `${beatName} - ${pipelineName} - ${pipelineUid}`,
        // grouporder: 1,
        // groupcatchall: true,
        filter: `@.@metadata.beat == '${beatName}'`,
        schemarule: {
          fanout: {
            InputField: null
          },
          ConvertoJson: null
        },
        transforms: [
          {
            inputrule: '$.@metadata.beat',
            LRSchemaField: 'beatname',
            type: 'String',
            default: null,
            alternativefields: [],
            format: null
          },
          {
            inputrule: '$.fullyqualifiedbeatname',
            LRSchemaField: 'fullyqualifiedbeatname',
            type: 'String',
            default: null,
            alternativefields: [
              '$.@metadata.beat'
            ],
            format: null
          },
          {
            inputrule: '$.@metadata.beat',
            LRSchemaField: 'device_type',
            type: 'String',
            default: null,
            alternativefields: [],
            format: null
          // },
          // {
          //   inputrule: '$.response.properties.lastUpdatedDateTime',
          //   LRSchemaField: 'normal_msg_date',
          //   type: 'DateTime',
          //   default: null,
          //   alternativefields: [
          //     '$.response.properties.riskLastUpdatedDateTime',
          //     '$.response.time',
          //     '$.@timestamp'
          //   ],
          //   format: 'yyyy-MM-ddTHH:mm:ss.fffK'
          // },
          // {
          //   inputrule: '$.response.properties.targetResources[0].userPrincipalName',
          //   LRSchemaField: 'object',
          //   type: 'String',
          //   default: null,
          //   alternativefields: [
          //     '$.response.resourceId'
          //   ],
          //   format: null
          // },
          // {
          //   inputrule: '$.response.properties.targetResources[0].type',
          //   LRSchemaField: 'objecttype',
          //   type: 'String',
          //   default: null,
          //   alternativefields: [
          //     'REGEX($.response.resourceId,/(?i)providers/(?<providers>.*?)$,providers)'
          //   ],
          //   format: 'PREFIX(\'microsoft.aadiam/\')'
          }
        ],
        subtransforms: [
          // {
          //   condition: '@.response.properties.result == \'success\'',
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'LookUp(success,$.response.properties.activityDisplayName)',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: 'Azure AD: Success Catch-All',
          //       alternativefields: [
          //         'LookUpStartsWith(successwith,$.response.properties.activityDisplayName)'
          //       ],
          //       format: null
          //     }
          //   ]
          // },
          // {
          //   condition: '@.response.resultDescription =~ /(?i)passwordbannedbyadminpolicy/ ',
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'Azure AD: Banned Password Attempted',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: null,
          //       alternativefields: [],
          //       format: null
          //     }
          //   ]
          // },
          // {
          //   condition: '@.response.resultDescription =~ /(?i)passworddoesnotcomplyfuzzypolicy/ ',
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'Azure AD: Global Banned Password Attempted',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: null,
          //       alternativefields: [],
          //       format: null
          //     }
          //   ]
          // },
          // {
          //   condition: '@.response.properties.result == \'Failure\'',
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'LookUpStartsWith(failure,$.response.properties.activityDisplayName)',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: null,
          //       alternativefields: [],
          //       format: null
          //     }
          //   ]
          // },
          // {
          //   condition: '@.response.properties.result == \'Timeout\'',
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'Azure AD: Timeout Catch-All',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: null,
          //       alternativefields: [],
          //       format: null
          //     }
          //   ]
          // },
          // {
          //   condition: null,
          //   exitonmatch: true,
          //   transforms: [
          //     {
          //       inputrule: 'Azure AD: Catch-All',
          //       LRSchemaField: 'tag1',
          //       type: 'String',
          //       default: null,
          //       alternativefields: [],
          //       format: null
          //     }
          //   ]
          // }
        ],
        Lookup: {
          // success: {
          //   'consent to application': 'Azure AD: Application Consent Granted',
          //   'revoke consent': 'Azure AD: Application Consent Revoked',
          //   'add service principal': 'Azure AD: Service Principal Added',
          //   'remove service principal': 'Azure AD: Service Principal Removed',
          //   'add service principal credentials': 'Azure AD: Service Principal Credentials Added',
          //   'unlock user account (self-service)': 'Azure AD: User Account Unlocked',
          //   'self-service password reset flow activity progress': 'Azure AD: User Account Password Reset'
          // },
          // successwith: {
          //   get: 'Azure AD: Resource Accessed',
          //   update: 'Azure AD: Resource Updated',
          //   set: 'Azure AD: Resource Set',
          //   add: 'Azure AD: Resource Added',
          //   create: 'Azure AD: Resource Created',
          //   delete: 'Azure AD: Resource Deleted',
          //   remove: 'Azure AD: Resource Removed',
          //   download: 'Azure AD: Resource Downloaded'
          // },
          // failure: {
          //   get: 'Azure AD: Resource Access Failure',
          //   update: 'Azure AD: Resource Update Failure',
          //   set: 'Azure AD: Resource Set Failure',
          //   add: 'Azure AD: Resource Add Failure',
          //   create: 'Azure AD: Resource Create Failure',
          //   delete: 'Azure AD: Resource Delete Failure',
          //   remove: 'Azure AD: Resource Remove Failure',
          //   download: 'Azure AD: Resource Download Failure'
          // }
        }
      }

      jsonPathes.forEach(path => {
        if (path.mappedField) {
          smaPolicyTransform.transforms.push({
            inputrule: `$${path.name}`,
            LRSchemaField: path.mappedField,
            type: 'String',
            default: null,
            alternativefields: [],
            format: null
          })
        }
      })

      // And ship it back
      return smaPolicyTransform
    }
  } // method
}
