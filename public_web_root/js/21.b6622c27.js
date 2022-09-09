(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{e956:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;return t("q-page",{staticClass:"q-pa-md"},[t("q-table",{attrs:{title:e.$t("OpenCollectors"),data:e.tableData,columns:e.columns,"row-key":"uid",dense:"","no-data-label":e.$t("No OpenCollector to display."),filter:e.searchFilter,loading:e.tableLoading,"rows-per-page-label":e.$t("OpenCollectors per page:"),pagination:e.pagination},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t("div",{staticClass:"full-width row wrap justify-between"},[t("div",{staticClass:"q-table__title"},[e._v("\n            "+e._s(e.$t("OpenCollectors"))+"\n          ")]),t("div",{staticClass:"row q-gutter-md"},[t("div",{staticClass:"col"},[t("q-btn",{staticStyle:{"min-width":"15rem"},attrs:{rounded:"",dense:"",color:"primary",icon:"add",label:e.$t("Add New OpenCollector")},on:{click:function(t){return e.doPromptForOpenCollectorDetails()}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n                  "+e._s(e.$t("Create a new OpenCollector."))+"\n                ")])],1)],1)]),t("div",{staticClass:"row q-gutter-md"},[t("div",{staticStyle:{width:"300px"}},[t("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:e.$t("Search")},scopedSlots:e._u([{key:"append",fn:function(){return[e.searchFilter.length?t("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){e.searchFilter=""}}}):e._e(),t("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1),t("q-btn",{attrs:{dense:"",outline:"",icon:"refresh"},on:{click:function(t){return e.loadOpenCollectors()}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n                "+e._s(e.$t("Reload the list of OpenCollectors."))+"\n              ")])],1)],1)])]},proxy:!0},{key:"body-cell-actions",fn:function(o){return[t("q-td",{attrs:{props:o}},[t("q-btn",{attrs:{flat:"",dense:"",icon:"refresh"},on:{click:function(t){return e.refreshOpenCollector(o.row.uid)}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n              "+e._s(e.$t("Refresh stats for this OpenCollector"))+"\n            ")])],1),t("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(t){return e.doPromptForOpenCollectorDetails(o.row)}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n              "+e._s(e.$t("Edit OpenCollector details"))+"\n            ")])],1),t("q-btn",{attrs:{flat:"",dense:"",icon:"delete",color:"negative"},on:{click:function(t){return e.deleteOpenCollectorPrompt(o.row)}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n              "+e._s(e.$t("Delete OpenCollector"))+"\n            ")])],1)],1)]}},{key:"body-cell-authenticationMethod",fn:function(o){return[t("q-td",{attrs:{props:o}},["password"===o.value?t("q-icon",{attrs:{name:"password",size:"sm"}}):"private_key"===o.value?t("q-icon",{attrs:{name:"vpn_key",size:"sm"}}):t("q-icon",{attrs:{name:"help_center",color:"grey",size:"md"}}),t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n            "+e._s(e.$t(o.value))+"\n          ")])],1)]}},{key:"body-cell-ocVersion",fn:function(o){return[t("q-td",{attrs:{props:o}},[e._v("\n          "+e._s(o.value)+"\n          "),e.ocVersionCheck&&e.ocVersionCheck[o.row.uid]&&e.ocVersionCheck[o.row.uid].checking?t("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary",size:"2em"}}):e._e()],1)]}},{key:"body-cell-hostVersions",fn:function(o){return[t("q-td",{attrs:{props:o}},[o.row.osVersion?t("div",[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v("Linux")]),t("q-avatar",{staticClass:"q-mr-xs",attrs:{square:"",size:"24px"}},[t("img",{attrs:{src:"/icons/host-linux.svg"}})]),t("q-badge",{attrs:{outline:"",color:"grey"}},[e._v("v"+e._s(o.row.osVersion))])],1):e._e(),o.row.dockerVersion?t("div",[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v("Docker")]),t("q-avatar",{staticClass:"q-mr-xs",attrs:{square:"",size:"24px"}},[t("img",{attrs:{src:"/icons/host-docker.svg"}})]),t("q-badge",{attrs:{outline:"",color:"grey"}},[e._v("v"+e._s(o.row.dockerVersion))])],1):e._e(),e.osVersionCheck&&e.osVersionCheck[o.row.uid]&&e.osVersionCheck[o.row.uid].checking?t("div",[t("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary",size:"2em"}})],1):e.osVersionCheck&&e.osVersionCheck[o.row.uid]&&e.osVersionCheck[o.row.uid].error?t("div",[t("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n              "+e._s(e.$t("Failed to connect to the server."))),t("br"),e._v("\n              "+e._s(e.$t("Check the OpenCollector details and Credentials."))+"\n            ")]),t("q-icon",{staticClass:"q-ml-sm",attrs:{name:"cloud_off",color:"orange",size:"2em"}}),t("q-icon",{staticClass:"q-ml-sm",attrs:{name:"warning_amber",color:"orange",size:"2em"}})],1):e._e()])]}},{key:"body-cell-installedShippers",fn:function(o){return[t("q-td",{attrs:{props:o}},[e._l(o.value,(function(o,s){return t("div",{key:s},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v(e._s(o.name))]),t("q-avatar",{staticClass:"q-mr-xs",attrs:{square:"",size:"24px"}},[t("img",{attrs:{src:"/shippers/"+e.collectionShipperDetails(o.name).icon+".svg"}})]),t("q-badge",{attrs:{outline:"",color:"grey"}},[e._v("v"+e._s(o.version))])],1)})),e.fbVersionCheck&&e.fbVersionCheck[o.row.uid]&&e.fbVersionCheck[o.row.uid].checking?t("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary",size:"2em"}}):e._e(),e.jsBeatVersionCheck&&e.jsBeatVersionCheck[o.row.uid]&&e.jsBeatVersionCheck[o.row.uid].checking?t("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary",size:"2em"}}):e._e(),e.activeOcBeatsVersionCheck&&e.activeOcBeatsVersionCheck[o.row.uid]&&e.activeOcBeatsVersionCheck[o.row.uid].checking?t("q-spinner-dots",{staticClass:"q-ml-sm",attrs:{color:"primary",size:"2em"}}):e._e(),t("q-btn",{attrs:{dense:"",icon:"add",color:"primary",flat:""}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v(e._s(e.$t("Add another Shipper")))]),t("q-menu",[t("q-list",e._l(e.shippersUrls,(function(s,n){return t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:n,attrs:{clickable:""},on:{click:function(t){return e.installFilebeat(o.row.uid,s)}}},[t("q-item-section",{staticClass:"items-center",staticStyle:{"min-width":"5em"},attrs:{side:""}},[t("q-badge",{attrs:{color:"primary"}},[e._v("v"+e._s(s.version))])],1),t("q-item-section",[t("q-item-label",[e._v(e._s(s.name))]),t("q-item-label",{attrs:{caption:""}},[e._v(e._s(s.filename))])],1)],1)})),1)],1)],1)],2)]}}])}),t("q-dialog",{attrs:{persistent:""},model:{value:e.promptForNewOpenCollectorDetails,callback:function(t){e.promptForNewOpenCollectorDetails=t},expression:"promptForNewOpenCollectorDetails"}},[t("q-card",{staticStyle:{"min-width":"350px"}},[t("q-card-section",[e.newOpenCollectorUid&&e.newOpenCollectorUid.length?t("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("OpenCollector Details")))]):t("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("New OpenCollector")))])]),t("q-card-section",{staticClass:"q-pt-none"},[t("q-input",{attrs:{dense:"",autofocus:"",label:e.$t("OpenCollector Name"),rules:[t=>!!t||e.$t("OpenCollector name cannot be empty")]},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorName,callback:function(t){e.newOpenCollectorName=t},expression:"newOpenCollectorName"}})],1),t("q-separator"),t("q-card-section",{staticClass:"q-pt-none"},[t("div",{staticClass:"text-overline"},[e._v(e._s(e.$t("Host")))]),t("q-input",{attrs:{dense:"",label:e.$t("Host name"),rules:[t=>!!t||e.$t("OpenCollector Host name cannot be empty")]},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorHostname,callback:function(t){e.newOpenCollectorHostname=t},expression:"newOpenCollectorHostname"}})],1),t("q-card-section",{staticClass:"q-pt-none"},[t("q-input",{attrs:{dense:"",type:"number",label:e.$t("SSH Port"),rules:[t=>!!t||e.$t("OpenCollector port cannot be empty")]},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorPort,callback:function(t){e.newOpenCollectorPort=t},expression:"newOpenCollectorPort"}})],1),t("q-separator"),t("q-card-section",{staticClass:"q-pt-none"},[t("div",{staticClass:"text-overline"},[e._v(e._s(e.$t("Authentication")))]),t("q-input",{attrs:{dense:"",label:e.$t("SSH User name"),hint:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorUsername,callback:function(t){e.newOpenCollectorUsername=t},expression:"newOpenCollectorUsername"}}),t("q-tabs",{attrs:{"active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:e.newOpenCollectorAuthMethod,callback:function(t){e.newOpenCollectorAuthMethod=t},expression:"newOpenCollectorAuthMethod"}},[t("q-tab",{attrs:{name:"password",label:e.$t("Password")}}),t("q-tab",{attrs:{name:"private_key",label:e.$t("Private Key")}})],1),t("q-separator"),t("q-tab-panels",{attrs:{animated:""},model:{value:e.newOpenCollectorAuthMethod,callback:function(t){e.newOpenCollectorAuthMethod=t},expression:"newOpenCollectorAuthMethod"}},[t("q-tab-panel",{attrs:{name:"password"}},[t("q-input",{attrs:{dense:"",type:"password",label:e.$t("SSH Password"),hint:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorPassword,callback:function(t){e.newOpenCollectorPassword=t},expression:"newOpenCollectorPassword"}})],1),t("q-tab-panel",{attrs:{name:"private_key"}},[t("q-input",{attrs:{dense:"",type:"textarea",label:e.$t("SSH Private Key"),hint:""},on:{keyup:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"]))return null;e.promptForNewOpenCollectorDetails=!1}},model:{value:e.newOpenCollectorPrivateKey,callback:function(t){e.newOpenCollectorPrivateKey=t},expression:"newOpenCollectorPrivateKey"}})],1)],1)],1),t("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("Cancel")}}),e.newOpenCollectorUid&&e.newOpenCollectorUid.length?t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("Update OpenCollector"),disabled:!e.newOpenCollectorName||!e.newOpenCollectorName.length||!e.newOpenCollectorHostname||!e.newOpenCollectorHostname.length||!e.newOpenCollectorPort||e.newOpenCollectorPort<0||e.newOpenCollectorPort>65535||!e.newOpenCollectorUsername||!e.newOpenCollectorUsername.length||(!e.newOpenCollectorPassword||!e.newOpenCollectorPassword.length)&&(!e.newOpenCollectorPrivateKey||!e.newOpenCollectorPrivateKey.length)},on:{click:function(t){return e.addNewOrUpdateOpenCollector()}}}):t("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:e.$t("Add new OpenCollector"),disabled:!e.newOpenCollectorName||!e.newOpenCollectorName.length||!e.newOpenCollectorHostname||!e.newOpenCollectorHostname.length||!e.newOpenCollectorPort||e.newOpenCollectorPort<0||e.newOpenCollectorPort>65535||!e.newOpenCollectorUsername||!e.newOpenCollectorUsername.length||(!e.newOpenCollectorPassword||!e.newOpenCollectorPassword.length)&&(!e.newOpenCollectorPrivateKey||!e.newOpenCollectorPrivateKey.length)},on:{click:function(t){return e.addNewOrUpdateOpenCollector()}}})],1)],1)],1),Object.keys(e.shipperInstall).length?t("q-card",{staticClass:"q-mt-sm"},[t("q-card-section",[t("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("Installation Logs")))])]),e._l(e.shipperInstall,(function(o,s){return t("q-card-section",{key:s},[o.collector?t("div",{staticClass:"row q-gutter-x-md items-center"},[t("q-spinner-dots",{directives:[{name:"show",rawName:"v-show",value:!0===o.onGoing,expression:"job.onGoing === true"}],attrs:{size:"2em",color:"teal"}}),t("q-icon",{directives:[{name:"show",rawName:"v-show",value:!1===o.onGoing&&!1===o.failed,expression:"job.onGoing === false && job.failed === false"}],attrs:{name:"thumb_up",size:"2em",color:"positive"}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v(e._s(e.$t("Job completed successfuly")))])],1),t("q-icon",{directives:[{name:"show",rawName:"v-show",value:!1===o.onGoing&&!0===o.failed,expression:"job.onGoing === false && job.failed === true"}],attrs:{name:"thumb_down",size:"2em",color:"negative"}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v(e._s(e.$t("Job failed to complete")))])],1),t("q-separator",{attrs:{vertical:""}}),t("div",{staticClass:"text-bold"},[e._v(e._s(o.collector.name))]),t("q-separator",{attrs:{vertical:""}}),t("div",{staticClass:"text-italic"},[e._v(e._s(o.collector.hostname)+":"+e._s(o.collector.port))]),t("q-separator",{attrs:{vertical:""}}),t("q-linear-progress",{staticClass:"col",attrs:{rounded:"",size:"1em",value:o.step>0?o.totalSteps/o.step:0,color:!1===o.onGoing?!1===o.failed?"green-8":"deep-orange-8":""}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em;"}},[e._v(e._s(e.$t("Completed steps:"))),t("br"),e._v(e._s(o.step)+" / "+e._s(o.totalSteps))])],1)],1):e._e(),t("div",{staticClass:"row q-my-sm"},[t("q-separator",{attrs:{vertical:"",size:"2px",color:"teal"}}),t("div",{staticClass:"q-ml-sm col"},e._l(o.console,(function(o,s){return t("div",{key:s},["CONTROL.INFO"===o.msgCode?t("q-icon",{staticClass:"q-mr-sm",attrs:{name:"info",color:"primary"}}):e._e(),"finished"===o.type?t("q-icon",{staticClass:"q-mr-sm",attrs:{name:"subdirectory_arrow_right",color:"primary"}}):e._e(),"error"===o.type&&"ERROR"===o.msgCode?t("q-icon",{staticClass:"q-mr-sm",attrs:{name:"error",color:"orange"}}):e._e(),"error"===o.type&&"EXIT"===o.msgCode?t("q-icon",{staticClass:"q-mr-sm",attrs:{name:"error",color:"orange"}}):e._e(),"CONTROL.ERROR"===o.msgCode?t("q-icon",{staticClass:"q-mr-sm",attrs:{name:"info",color:"orange"}}):e._e(),t("span",{class:("stdout"===o.type?"fixed-font-console":"")+" "+("finished"===o.type?"text-positive":"")+("error"===o.type?"text-negative":"")},[e._v(e._s(o.value))]),"finished"===o.type?t("q-separator",{attrs:{color:""}}):e._e()],1)})),0)],1)])}))],2):e._e()],1)},n=[],r=(o("caad"),o("2f62")),i=o("31c4"),a=o("9fa1"),l=o("c1dc"),c=o("1732"),p={name:"PageOpenCollectorsList",mixins:[i["a"],a["a"],l["a"]],data(){return{searchFilter:"",columns:[{name:"actions",align:"center",label:this.$t("Actions"),field:"actions",sortable:!1},{name:"name",align:"center",label:this.$t("Name"),field:"name",sortable:!0},{name:"hostname",align:"center",label:this.$t("Hostname"),field:"hostname",sortable:!0},{name:"authenticationMethod",align:"center",label:this.$t("Authentication Method"),field:"authenticationMethod",sortable:!0},{name:"hostVersions",align:"center",label:this.$t("Host versions"),field:"osVersion",sortable:!0},{name:"ocVersion",align:"center",label:this.$t("OpenCollector version"),field:"ocVersion",sortable:!0},{name:"installedShippers",align:"center",label:this.$t("Installed Shippers"),field:"installedShippers",sortable:!0}],pagination:{sortBy:"name",descending:!1,rowsPerPage:25},promptForNewOpenCollectorDetails:!1,newOpenCollectorUid:"",newOpenCollectorName:"",newOpenCollectorHostname:"",newOpenCollectorPort:22,newOpenCollectorAuthMethod:"password",newOpenCollectorUsername:"",newOpenCollectorPassword:"",newOpenCollectorPrivateKey:"",newOpenCollectorPipelines:[],newOpenCollectorOsVersion:"",newOpenCollectorOcInstalled:!1,newOpenCollectorOcVersion:"",newOpenCollectorFbInstalled:!1,newOpenCollectorFbVersion:"",osVersionCheck:{},ocVersionCheck:{},fbVersionCheck:{},jsBeatVersionCheck:{},activeOcBeatsVersionCheck:{},shipperInstall:{}}},computed:{...Object(r["d"])("mainStore",["collectionShippersOptions","openCollectorBeats"]),...Object(r["c"])("mainStore",["openCollectors","pipelines","shippersUrls"]),tableData(){const e=[];return this.openCollectors.forEach((t=>{e.push(Object.assign({},t,{pipelinesCount:t.pipelines&&t.pipelines.length>0?t.pipelines.length:"-"}))})),e},openCollectorsOptions(){const e=[];return this.openCollectors.forEach((t=>{e.push({value:t.uid,label:t.name+" ("+t.hostname+")"})})),e},tableLoading(){return this.dataLoading}},methods:{...Object(r["b"])("mainStore",["upsertOpenCollector","deleteOpenCollector","loadShippersUrls"]),...Object(r["b"])("mainStore",["getOpenCollectorsOsVersion","getOpenCollectorsOcVersion","getOpenCollectorsFilebeatVersion","getOpenCollectorsOcAndActiveBeatsVersion","getOpenCollectorsjsBeatVersion"]),openOpenCollector(e){this.$router.push({path:"/OpenCollectors/"+e.uid+"/View"})},refreshOpenCollector(e){if(e&&e.length){this.ocVersionCheck[e]||(this.ocVersionCheck[e]={apiData:{},error:!1}),this.ocVersionCheck[e].checking=!0,this.ocVersionCheck=JSON.parse(JSON.stringify(this.ocVersionCheck)),this.osVersionCheck[e]||(this.osVersionCheck[e]={apiData:{}}),this.osVersionCheck[e].checking=!0,this.osVersionCheck=JSON.parse(JSON.stringify(this.osVersionCheck)),this.getOpenCollectorsOsVersion({caller:this,apiCallParams:{uid:e},onSuccessCallBack:this.osVersionReceive,onErrorCallBack:this.osVersionReceive,debug:!1});const t=JSON.parse(JSON.stringify(this.openCollectors.find((t=>t.uid===e))));t.installedShippers=[],this.upsertOpenCollector({pushToApi:!1,caller:this,openCollector:t}),this.fbVersionCheck[e]||(this.fbVersionCheck[e]={apiData:{}}),this.fbVersionCheck[e].checking=!0,this.fbVersionCheck=JSON.parse(JSON.stringify(this.fbVersionCheck)),this.getOpenCollectorsFilebeatVersion({caller:this,apiCallParams:{uid:e},onSuccessCallBack:this.fbVersionReceive,onErrorCallBack:this.fbVersionReceive,debug:!1}),this.jsBeatVersionCheck[e]||(this.jsBeatVersionCheck[e]={apiData:{}}),this.jsBeatVersionCheck[e].checking=!0,this.jsBeatVersionCheck=JSON.parse(JSON.stringify(this.jsBeatVersionCheck)),this.getOpenCollectorsjsBeatVersion({caller:this,apiCallParams:{uid:e},onSuccessCallBack:this.jsBeatVersionReceive,onErrorCallBack:this.jsBeatVersionReceive,debug:!1}),this.activeOcBeatsVersionCheck[e]||(this.activeOcBeatsVersionCheck[e]={apiData:{}}),this.activeOcBeatsVersionCheck[e].checking=!0,this.activeOcBeatsVersionCheck=JSON.parse(JSON.stringify(this.activeOcBeatsVersionCheck)),this.getOpenCollectorsOcAndActiveBeatsVersion({caller:this,apiCallParams:{uid:e},onSuccessCallBack:this.ocAndBeatsVersionReceive,onErrorCallBack:this.ocAndBeatsVersionReceive,debug:!1})}},ocVersionReceive(e){if(console.log("ocVersionReceive - 🔺- SHOULD NOT BE USED ANYMORE"),e){const t=e.params&&e.params.apiCallParams&&e.params.apiCallParams.uid?e.params.apiCallParams.uid:null;if(t&&this.ocVersionCheck&&this.ocVersionCheck[t]){if(this.ocVersionCheck[t].checking=!1,e.success){this.ocVersionCheck[t].error=!1;const o=JSON.parse(JSON.stringify(this.openCollectors.find((e=>e.uid===t))));o.ocVersion=e.data&&e.data.payload&&e.data.payload.version&&e.data.payload.version.full?e.data.payload.version.full:o.ocVersion,o.ocVersion=o.ocVersion||"",this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o})}else this.ocVersionCheck[t].error=!0,this.ocVersionCheck[t].apiData={};this.ocVersionCheck=JSON.parse(JSON.stringify(this.ocVersionCheck))}}},osVersionReceive(e){if(e){const t=e.params&&e.params.apiCallParams&&e.params.apiCallParams.uid?e.params.apiCallParams.uid:null;if(t&&this.osVersionCheck&&this.osVersionCheck[t]){if(this.osVersionCheck[t].checking=!1,console.log("response",e),e.success){this.osVersionCheck[t].error=!1;const o=JSON.parse(JSON.stringify(this.openCollectors.find((e=>e.uid===t))));o.osVersion=e.data&&e.data.payload&&e.data.payload.version&&e.data.payload.version.full?e.data.payload.version.full:o.osVersion,o.osVersion=o.osVersion||"",this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o})}else this.osVersionCheck[t].error=!0,this.osVersionCheck[t].apiData={};this.osVersionCheck=JSON.parse(JSON.stringify(this.osVersionCheck))}}},fbVersionReceive(e){if(e){const t=e.params&&e.params.apiCallParams&&e.params.apiCallParams.uid?e.params.apiCallParams.uid:null;if(t&&this.fbVersionCheck&&this.fbVersionCheck[t]){this.fbVersionCheck[t].checking=!1;const o=JSON.parse(JSON.stringify(this.openCollectors.find((e=>e.uid===t))));e.success?(this.fbVersionCheck[t].error=!1,e.data&&e.data.payload&&e.data.payload.version&&e.data.payload.version.full&&(o.fbVersion=e.data.payload.version.full,o.installedShippers.push({name:"Filebeat",version:e.data.payload.version.full}))):(this.fbVersionCheck[t].error=!0,o.fbVersion="",e.data.errors&&Array.isArray(e.data.errors)&&e.data.errors.forEach((e=>{String(e).includes("command not found")&&(o.fbVersion=this.$t("Not Installed"))})),this.fbVersionCheck[t].apiData={}),this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o}),this.fbVersionCheck=JSON.parse(JSON.stringify(this.fbVersionCheck))}}},jsBeatVersionReceive(e){if(e){const t=e.params&&e.params.apiCallParams&&e.params.apiCallParams.uid?e.params.apiCallParams.uid:null;if(t&&this.jsBeatVersionCheck&&this.jsBeatVersionCheck[t]){this.jsBeatVersionCheck[t].checking=!1;const o=JSON.parse(JSON.stringify(this.openCollectors.find((e=>e.uid===t))));e.success?(this.jsBeatVersionCheck[t].error=!1,e.data&&e.data.payload&&e.data.payload.version&&e.data.payload.version.full&&(o.jsBeatVersion=e.data.payload.version.full,o.installedShippers.push({name:"jsBeat",version:e.data.payload.version.full}))):(this.jsBeatVersionCheck[t].error=!0,o.jsBeatVersion="",e.data.errors&&Array.isArray(e.data.errors)&&e.data.errors.forEach((e=>{String(e).includes("command not found")&&(o.jsBeatVersion=this.$t("Not Installed"))})),this.jsBeatVersionCheck[t].apiData={}),this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o}),this.jsBeatVersionCheck=JSON.parse(JSON.stringify(this.jsBeatVersionCheck))}}},ocAndBeatsVersionReceive(e){if(e){const t=e.params&&e.params.apiCallParams&&e.params.apiCallParams.uid?e.params.apiCallParams.uid:null;if(t){const o=JSON.parse(JSON.stringify(this.openCollectors.find((e=>e.uid===t))));if(this.ocVersionCheck&&this.ocVersionCheck[t]){if(this.ocVersionCheck[t].checking=!1,e.success){this.ocVersionCheck[t].error=!1;const s=e.data&&e.data.payload&&e.data.payload.length?e.data.payload.find((e=>"open_collector"===e.name)):null;o.ocVersion=s&&s.version&&s.version.full?s.version.full:o.ocVersion,o.ocVersion=o.ocVersion||"",this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o})}else this.ocVersionCheck[t].error=!0,this.ocVersionCheck[t].apiData={};this.ocVersionCheck=JSON.parse(JSON.stringify(this.ocVersionCheck))}if(this.activeOcBeatsVersionCheck&&this.activeOcBeatsVersionCheck[t]){if(this.activeOcBeatsVersionCheck[t].checking=!1,e.success){this.activeOcBeatsVersionCheck[t].error=!1;const s=e.data&&e.data.payload&&e.data.payload.length?e.data.payload.filter((e=>"open_collector"!==e.name)):null;o.installedShippers=o.installedShippers.concat(s&&Array.isArray(s)?s.reduce(((e,t)=>(e.push({name:t.name,version:t&&t.version&&t.version.full?t.version.full:null}),e)),[]):[])}else this.activeOcBeatsVersionCheck[t].error=!0,this.activeOcBeatsVersionCheck[t].apiData={};this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:o}),this.activeOcBeatsVersionCheck=JSON.parse(JSON.stringify(this.activeOcBeatsVersionCheck))}}}},deleteOpenCollectorPrompt(e){"undefined"!==typeof e&&this.$q.dialog({title:this.$t("Confirm"),message:this.$t("Do you REALLY want to delete this OpenCollector?"),ok:{push:!0,color:"negative"},cancel:{push:!0,color:"positive"},persistent:!0}).onOk((()=>{this.deleteOpenCollector({pushToApi:!0,caller:this,openCollector:e})}))},doPromptForOpenCollectorDetails(e){this.newOpenCollectorUid=e&&e.uid?e.uid:null,this.newOpenCollectorName=e&&e.name?e.name:"",this.newOpenCollectorHostname=e&&e.hostname?e.hostname:"",this.newOpenCollectorPort=e&&e.port?e.port:22,this.newOpenCollectorAuthMethod=e&&e.authenticationMethod?e.authenticationMethod:"password",this.newOpenCollectorUsername=e&&e.username?e.username:null,this.newOpenCollectorPassword=e&&e.password?e.password:null,this.newOpenCollectorPrivateKey=e&&e.privateKey?e.privateKey:null,this.newOpenCollectorPipelines=e&&e.pipelines?e.pipelines:[],this.newOpenCollectorOsVersion=e&&e.osVersion?e.osVersion:"",this.newOpenCollectorOcInstalled=!(!e||!e.ocInstalled)&&e.ocInstalled,this.newOpenCollectorOcVersion=e&&e.ocVersion?e.ocVersion:"",this.newOpenCollectorFbInstalled=!(!e||!e.fbInstalled)&&e.fbInstalled,this.newOpenCollectorFbVersion=e&&e.fbVersion?e.fbVersion:"",this.promptForNewOpenCollectorDetails=!0},addNewOrUpdateOpenCollector(){this.promptForNewOpenCollectorDetails=!1;const e=this.newOpenCollectorUid||Object(c["a"])();this.upsertOpenCollector({pushToApi:!0,caller:this,openCollector:{uid:e,name:this.newOpenCollectorName,hostname:this.newOpenCollectorHostname,port:this.newOpenCollectorPort,authenticationMethod:this.newOpenCollectorAuthMethod,username:this.newOpenCollectorUsername,password:this.newOpenCollectorPassword,privateKey:this.newOpenCollectorPrivateKey,pipelines:this.newOpenCollectorPipelines,osVersion:this.newOpenCollectorOsVersion,ocInstalled:this.newOpenCollectorOcInstalled,ocVersion:this.newOpenCollectorOcVersion,fbInstalled:this.newOpenCollectorFbInstalled,fbVersion:this.newOpenCollectorFbVersion}}),setTimeout((()=>{console.log("timeout - refreshOpenCollector - "+e),this.refreshOpenCollector(e)}),1e3)},installFilebeat(e,t){this.shipperInstall[e]={collector:this.tableData.find((t=>t.uid===e)),onGoing:!0,console:[],bufferStdOut:"",failed:!1,step:0,totalSteps:1},this.shipperInstall=JSON.parse(JSON.stringify(this.shipperInstall)),this.socket&&this.socket.connected?this.socket.emit("shipper.install",{jobId:e,uid:e,installerSource:t}):(this.tailEnabled=!1,this.$root.$emit("addAndShowErrorToErrorPanel",{data:{errors:[{code:"NoLiveSocket",message:this.$t("Live (Socket) connection with the EZ Server has been lost or is not currently established.")},{code:"ShipperInstallFailedToStart",message:this.$t("Shipper deployment could not start due to no live socket available.")}]}}))},addLineToShipperInstallConsole(e,t="stdout"){e&&e.jobId&&e.payload&&(Array.isArray(this.shipperInstall[e.jobId].console)||(this.shipperInstall[e.jobId].console=[]),"string"===typeof e.payload?e.payload.split("\n").forEach((o=>{this.shipperInstall[e.jobId].console.push({type:t,value:o,msgCode:e.code||""})})):this.shipperInstall[e.jobId].console.push({type:t,value:JSON.stringify(e.payload),msgCode:e.code||""}),this.shipperInstall=JSON.parse(JSON.stringify(this.shipperInstall)))},handleSocketOnShipperInstall(e){if(console.log(e),e.payload&&e.jobId&&e.jobId.length>0&&e.code){if(this.shipperInstall[e.jobId]||(this.shipperInstall[e.jobId]={collector:this.tableData.find((t=>t.uid===e.jobId)),onGoing:!0,console:[],bufferStdOut:"",failed:!1,step:0,totalSteps:1}),this.shipperInstall[e.jobId].step=e.step||this.shipperInstall[e.jobId].step,this.shipperInstall[e.jobId].totalSteps=e.totalSteps||this.shipperInstall[e.jobId].totalSteps,"CONTROL.INFO"===e.code&&this.addLineToShipperInstallConsole(e,"info"),"CONTROL.ERROR"===e.code&&this.addLineToShipperInstallConsole(e,"error"),"STDOUT"===e.code)if("string"===typeof e.payload){if(this.shipperInstall[e.jobId].bufferStdOut+=e.payload,this.shipperInstall[e.jobId].bufferStdOut.indexOf("\n")>-1){const t=[];this.shipperInstall[e.jobId].bufferStdOut.split("\n").forEach((e=>{t.push(e)})),this.shipperInstall[e.jobId].bufferStdOut="",t.length>0&&0!==t[t.length-1].length&&(this.shipperInstall[e.jobId].bufferStdOut=t.pop()),t.forEach((t=>{this.addLineToShipperInstallConsole({jobId:e.jobId,code:e.code,payload:t},"stdout")}))}}else this.addLineToShipperInstallConsole(e,"stdout");"FINISHED"===e.code&&this.addLineToShipperInstallConsole(e,"finished"),"STDERR"!==e.code&&"ERROR"!==e.code||this.addLineToShipperInstallConsole(e,"error"),"EXIT"!==e.code&&"FAILURE"!==e.code||(this.addLineToShipperInstallConsole(e,"error"),this.shipperInstall[e.jobId].failed=!0,this.shipperInstall[e.jobId].onGoing=!1,setTimeout((()=>{this.refreshOpenCollector(e.jobId)}),1e3)),"END"===e.code&&(e.payload&&"SUCCESS"!==e.payload&&this.addLineToShipperInstallConsole(e,"error"),this.shipperInstall[e.jobId].onGoing=!1,setTimeout((()=>{this.refreshOpenCollector(e.jobId)}),1e3),console.log("*** END ***")),this.shipperInstall=JSON.parse(JSON.stringify(this.shipperInstall))}}},mounted(){this.loadShippersUrls({caller:this}),this.socket.offAny(this.handleSocketOnShipperInstall),this.socket.off("shipper.install"),this.socket.on("shipper.install",this.handleSocketOnShipperInstall)},beforeDestroy(){this.socket.offAny(this.handleSocketOnShipperInstall),this.socket.off("shipper.install")},destroyed(){this.socket.offAny(this.handleSocketOnShipperInstall),this.socket.off("shipper.install")}},h=p,d=o("2877"),C=o("9989"),u=o("eaac"),m=o("9c40"),O=o("05c0"),f=o("27f9"),k=o("0016"),b=o("db86"),v=o("8380"),w=o("cb32"),y=o("58a8"),g=o("f20b"),V=o("1c1c"),S=o("66e5"),q=o("4074"),_=o("0170"),I=o("4e73"),N=o("24e8"),P=o("f09f"),j=o("a370"),B=o("eb85"),$=o("429b"),x=o("7460"),A=o("adad"),D=o("823b"),J=o("4b7e"),E=o("6b1d"),T=o("7f67"),F=o("eebe"),R=o.n(F),z=Object(d["a"])(h,s,n,!1,null,null,null);t["default"]=z.exports;R()(z,"components",{QPage:C["a"],QTable:u["a"],QBtn:m["a"],QTooltip:O["a"],QInput:f["a"],QIcon:k["a"],QTd:b["a"],QSpinnerDots:v["a"],QAvatar:w["a"],QBadge:y["a"],QBtnDropdown:g["a"],QList:V["a"],QItem:S["a"],QItemSection:q["a"],QItemLabel:_["a"],QMenu:I["a"],QDialog:N["a"],QCard:P["a"],QCardSection:j["a"],QSeparator:B["a"],QTabs:$["a"],QTab:x["a"],QTabPanels:A["a"],QTabPanel:D["a"],QCardActions:J["a"],QLinearProgress:E["a"]}),R()(z,"directives",{ClosePopup:T["a"]})}}]);