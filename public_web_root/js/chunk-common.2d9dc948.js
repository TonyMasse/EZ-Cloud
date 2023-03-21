(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"16f1":function(e,t,a){"use strict";a("caad"),a("14d9");var s=a("2f62");t["a"]={computed:{...Object(s["d"])("mainStore",["jqFilterTemplate","jqTransformTemplate"])},methods:{sanitisePathName(e){let t=e;if(e&&String(e).includes("@")){const a=String(e).split("."),s=[];a.forEach((e=>{s.push(String(e).includes("@")?`"${e}"`:e)})),t=s.join(".")}return t},buildJqFilterFromParams(e,t,a,s){let i="";const r=String(a).toLowerCase()+"_"+String(e.substring(0,3)+"_"+t.replace(/[^a-zA-Z0-9]/g,"_")+"_"+e).substring(0,12);return i=this.jqFilterTemplate.replace(/{{EZ_generation_timestamp}}/g,(new Date).toISOString()).replace(/{{EZ_generation_user}}/g,s).replace(/{{EZ_stream_name_placeholder}}/g,t).replace(/{{EZ_stream_id_placeholder}}/g,e).replace(/{{EZ_compact_stream_name_placeholder}}/g,String(t).replace(/[^a-zA-Z0-9]/g,"_").toLowerCase()).replace(/{{EZ_beat_name_placeholder}}/g,a).replace(/{{EZ_beat_fully_distinguished_name_placeholder}}/g,r),i},buildJqTransformFromParams(e,t,a,s,i,r){let l="";l=this.jqTransformTemplate.replace(/{{EZ_generation_timestamp}}/g,(new Date).toISOString()).replace(/{{EZ_generation_user}}/g,s).replace(/{{EZ_stream_name_placeholder}}/g,t).replace(/{{EZ_stream_id_placeholder}}/g,e).replace(/{{EZ_compact_stream_name_placeholder}}/g,String(t).replace(/[^a-zA-Z0-9]/g,"_").toLowerCase()).replace(/{{EZ_beat_name_placeholder}}/g,a);let o=". | tojson",n=".input";i&&(o=".message",n=".message");const c=[],d=[],p='        "{{EZ_flatten_array_id}}": flatten_array({{EZ_message_root}}{{EZ_flatten_array_field_path}}),',u="    add_field(.{{EZ_flatten_array_name_placeholder}}{{EZ_flatten_array_field_doted_path_placeholder}}; .output.{{EZ_mdi_field_placeholder}}) |",_=[],h="    add_field((if {{EZ_message_placeholder}}{{EZ_field_doted_path_placeholder}} != null then ({{EZ_message_placeholder}}{{EZ_field_doted_path_placeholder}}{{EZ_date_parser_placeholder}}) else null end); .output.normal_msg_date) |",m=" | fromdate",g=[],f="    add_field({{EZ_message_placeholder}}{{EZ_field_doted_path_placeholder}}; .output.{{EZ_mdi_field_placeholder}}) |",b=[],y="    add_field({{EZ_message_placeholder}}{{EZ_field_doted_path_placeholder}}; .output.{{EZ_mdi_tag_placeholder}}) |",q=[];let v="";return i&&(v=".message | fromjson | "),r.forEach((e=>{e.modifiers&&e.modifiers.length&&e.modifiers.forEach((t=>{if("Fan out"===t){const t="flatten_array_"+e.name.replace(/[^a-zA-Z0-9]/g,"_");c.push(this.sanitisePathName(e.name)),d.push(p.replace(/{{EZ_flatten_array_id}}/g,t).replace(/{{EZ_message_root}}/g,v).replace(/{{EZ_flatten_array_field_path}}/g,this.sanitisePathName(e.name)))}else"Sub Rule selector"===t?q.push(y.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_mdi_tag_placeholder}}/g,"tag1")):"Sub Rule qualifier 1"===t?q.push(y.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_mdi_tag_placeholder}}/g,"tag2")):"Sub Rule qualifier 2"===t?q.push(y.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_mdi_tag_placeholder}}/g,"tag3")):"Sub Rule qualifier 3"===t?q.push(y.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_mdi_tag_placeholder}}/g,"tag4")):"Sub Rule qualifier 4"===t&&q.push(y.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_mdi_tag_placeholder}}/g,"tag5"))}))})),r.forEach((e=>{let t=!1,a="";(e.mappedField&&e.mappedField.length||e.modifiers&&e.modifiers.length)&&c.forEach((s=>{e.name&&0===e.name.indexOf(s)&&s.length>a.length&&(a=s,t=!0)}));const s=this.sanitisePathName(e.name);e.mappedField&&e.mappedField.length&&(t?_.push(u.replace(/{{EZ_flatten_array_name_placeholder}}/g,"flatten_array_"+a.replace(/[^a-zA-Z0-9]/g,"_")).replace(/{{EZ_flatten_array_field_doted_path_placeholder}}/g,s.replace(a,"").replace(/\[\d+\]/,"")).replace(/{{EZ_mdi_field_placeholder}}/g,e.mappedField)):b.push(f.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,s).replace(/{{EZ_mdi_field_placeholder}}/g,e.mappedField))),e.modifiers&&e.modifiers.length&&e.modifiers.forEach((s=>{if("Timestamp selector - ISO8601 format"===s||"Timestamp selector - Unix Timestamp format"===s){let i="";"Timestamp selector - ISO8601 format"===s&&(i=m),t?g.push(h.replace(/{{EZ_message_placeholder}}/g,"flatten_array_"+a.replace(/[^a-zA-Z0-9]/g,"_")).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name).replace(a,"").replace(/\[\d+\]/,"")).replace(/{{EZ_date_parser_placeholder}}/g,i)):g.push(h.replace(/{{EZ_message_placeholder}}/g,n).replace(/{{EZ_field_doted_path_placeholder}}/g,this.sanitisePathName(e.name)).replace(/{{EZ_date_parser_placeholder}}/g,i))}}))})),l=l.replace(/{{EZ_flatten_array_placeholder}}/g,d.join("\n")).replace(/{{EZ_original_message_placeholder}}/g,o).replace(/{{EZ_timestamp__add_field_placeholder}}/g,g.join("\n")).replace(/{{EZ_flatten_array__add_field_placeholder}}/g,_.join("\n")).replace(/{{EZ_add_field_placeholder}}/g,b.join("\n")).replace(/{{EZ_sub_rules__add_field_placeholder}}/g,q.join("\n")),l}}}},2675:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return e.safePngBase64?t("q-img",{style:`width: ${e.size}px; max-height: ${e.size}px`,attrs:{src:e.safePngBase64,contain:""}}):e._e()},i=[],r=(a("b7ef"),{name:"IconPicture",props:{pngBase64:{type:String,default:null},size:{type:Number,default:40}},computed:{safePngBase64(){let e=null;if(this.pngBase64&&this.pngBase64.length)try{const t=btoa(atob(this.pngBase64));e=`data:image/png;base64,${t}`}catch(t){}return e}}}),l=r,o=a("2877"),n=a("068f"),c=a("eebe"),d=a.n(c),p=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=p.exports;d()(p,"components",{QImg:n["a"]})},"31c4":function(e,t,a){"use strict";a("14d9");var s=a("2f62");t["a"]={data(){return{pipelinesLoading:!1,collectorsLoading:!1}},computed:{...Object(s["c"])("mainStore",["openCollectors","pipelines"]),dataLoading(){return this.collectorsLoading||this.pipelinesLoading}},methods:{...Object(s["b"])("mainStore",["getOpenCollectors","getPipelines"]),updateRecentItems(){if(this.$route&&this.$route.params&&this.$route.params.pipelineUid&&this.$route.params.pipelineUid.length&&this.pipelines&&this.pipelines.length){const a=(this.pipelines.find((e=>e.uid===this.$route.params.pipelineUid))||{}).name,s={name:a,type:"pipeline",uid:this.$route.params.pipelineUid,link:`#${this.$route.fullPath}`,lastVisit:Date.now()};try{let t=[];try{t=JSON.parse(localStorage.getItem("landing.recentItems")||[])}catch(e){}const a=t&&Array.isArray(t)?t:[],i=a.find((e=>e.uid===s.uid));i?(i.name=s.name,i.type=s.type,i.lastVisit=s.lastVisit,i.link=s.link):a.push(s),localStorage.setItem("landing.recentItems",JSON.stringify(a))}catch(t){}}},loadOpenCollectors(){this.getOpenCollectors({loadingVariableName:"collectorsLoading",caller:this})},loadPipelines(){this.getPipelines({loadingVariableName:"pipelinesLoading",caller:this,onSuccessCallBack:this.updateRecentItems})},loadOpenCollectorsAndPipelines(){this.loadOpenCollectors(),this.loadPipelines()}},mounted(){0===this.openCollectors.length&&this.loadOpenCollectors(),this.pipelines&&0===this.pipelines.length&&this.loadPipelines()}}},"5d0b":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("14d9"),a("b7ef");var s=a("e2c1");function i(e,t,a){if(e&&"object"===typeof e&&t&&Array.isArray(t)&&a&&"object"===typeof a)for(const[s,i]of Object.entries(e)){let e,r="",l="";const o=String(i).split("👉");o&&o.length>=2&&(r=o.shift(),l=o.join("👉"));const n=String(l).split("👈___default___");n&&n.length>=2&&(e=n.pop(),l=n.join("👈___default___"));const c=t.find((e=>e.tag===r));if(r=c&&c.transform&&c.transform.length?c.transform:"","🚫"===e&&(e=void 0),null!==e&&""!==e&&+e===+e&&(e=Number(e)),s&&s.length&&r&&r.length){const t={};Object.defineProperty(t,r,{enumerable:!0,value:{target:s,value:l,default:e}}),"delete"===r&&(delete t[r].value,delete t[r].default),a.push(t)}}}function r(e){try{const t=Object.assign({},e);let a=t.collectionMethod||"";if("syslog_udp"===a&&(a="syslog"),"syslog_tcp"===a&&(a="syslog"),void 0===t.request&&(t.request={}),void 0===t.request.transforms&&(t.request.transforms=[]),void 0===t.response&&(t.response={}),void 0===t.response.transforms&&(t.response.transforms=[]),void 0===t.response.pagination&&(t.response.pagination=[]),t.EZ__Auth_Basic__enable&&!0===t.EZ__Auth_Basic__enable){let e;try{e=btoa((t.EZ__Auth_Basic__username||"")+":"+(t.EZ__Auth_Basic__password||""))}catch{e=btoa(":")}t.request.transforms.push({set:{target:"header.Authorization",value:e}})}if(t["request.body"]&&t["request.body"].length)try{t["request.body"]=JSON.parse(t["request.body"])}catch{delete t["request.body"]}const r=[{tag:"___set___",transform:"set"},{tag:"___append___",transform:"append"},{tag:"___delete___",transform:"delete"}];if(i(t["request.transforms"],r,t.request.transforms),i(t["response.transforms"],r,t.response.transforms),i(t["response.pagination"],r,t.response.pagination),t.cursor){const e={};for(const[a,s]of Object.entries(t.cursor)){let t,i=s;const r=String(i).split("👈___default___");r&&r.length>=2&&(t=r.pop(),i=r.join("👈___default___")),"🚫"===t&&(t=void 0),null!==t&&""!==t&&+t===+t&&(t=Number(t));const l={};Object.defineProperty(l,a,{enumerable:!0,value:{value:i,default:t}}),Object.assign(e,l)}t.cursor=e}if(delete t.EZ__Auth_Basic__enable,delete t.EZ__Auth_Basic__username,delete t.EZ__Auth_Basic__password,delete t["request.transforms"],delete t["response.transforms"],delete t["response.pagination"],0===t.request.transforms.length&&delete t.request.transforms,0===t.response.transforms.length&&delete t.response.transforms,0===t.response.pagination.length&&delete t.response.pagination,0===Object.keys(t.request).length&&delete t.request,0===Object.keys(t.response).length&&delete t.response,Object.keys(t).forEach((e=>{t[e]&&"object"===typeof t[e]&&!Array.isArray(t[e])&&t[e].valueInConfig&&t[e].valueInConfig.length&&(t[e]=t[e].valueInConfig)})),a!==`${t.collectionShipper}-default`&&a!==`${t.collectionShipper}-custom`||(a=t.collectionShipper),"eventhubbeat"===t.collectionShipper&&t.connectionstring&&"object"===typeof t.connectionstring&&!Array.isArray(t.connectionstring)){const e=[];try{Object.keys(t.connectionstring).forEach((a=>{e.push(`${t.connectionstring[a]},${a}`)}))}catch{}finally{t.connectionstring=e}}delete t.collectionShipper,delete t.collectionMethod;const l=JSON.parse(JSON.stringify(t,((e,t)=>null===t?void 0:t)));let o=0,n=-1;while(o<100&&0!==n)o++,n=function e(t,a){let s=0;return t&&"object"===typeof t&&Object.keys(t).forEach((i=>{const r=i.split(".");if(r&&Array.isArray(r)&&r.length>1){const e=r[0],a=r.slice(1).join(".");t[e]&&"object"===typeof t[e]&&!Array.isArray(t[e])||(t[e]={}),t[e][a]=t[i],s++,delete t[i]}null===t[i]?delete t[i]:e(t[i],a+1)})),s}(l,0);const c="log"===a||"syslog"===a||"httpjson"===a;return Object(s["a"])(c?[{type:a,...l}]:{[a]:l})}catch(t){return t}}},"80e3":function(e,t,a){"use strict";t["a"]={computed:{areWeInLTR(){return!this.$q.lang.rtl},areWeInRTL(){return this.$q.lang.rtl}}}},"9fa1":function(e,t,a){"use strict";var s=a("2f62");t["a"]={data(){return{socket:this.$socket}},computed:{...Object(s["d"])("mainStore",["jwtToken"])},methods:{connectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect(),this.socket.auth.token=this.jwtToken,this.socket.connect()},disconnectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect()}}}},a87d:function(e,t,a){"use strict";var s=a("bc78");t["a"]={computed:{darkMode:{get(){return this.$q.dark.isActive},set(e){this.$q.dark.set(e),localStorage.setItem("settings.darkMode",e),this.setCssVariables(e)}}},methods:{setCssVariables(e){e?(s["a"].setBrand("primary","var(--primaryForDarkMode)"),s["a"].setBrand("textForPrimaryButton","var(--textForPrimaryButtonForDarkMode)")):(s["a"].setBrand("primary","var(--primaryForLightMode)"),s["a"].setBrand("textForPrimaryButton","var(--textForPrimaryButtonForLightMode)"))},switchModeOnKeyDownEvent(e){!e.repeat&&e.ctrlKey&&"m"===e.key&&(this.darkMode=!this.darkMode)}},mounted(){this.setCssVariables(this.darkMode)},beforeDestroy(){0}}},afd9:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("q-dialog",{ref:"dialog",attrs:{persistent:e.persistent},on:{hide:e.onDialogHide}},[t("q-card",{staticClass:"q-dialog-plugin"},[t("q-card-section",{staticClass:"row justify-between"},[t("div",{staticClass:"text-h6"},[e._v(e._s(e.title))]),t("q-btn",{attrs:{dense:"",flat:"",icon:"close",color:"grey-5"},on:{click:e.onCloseClick}})],1),t("q-card-section",{staticClass:"q-pa-none"},[t("q-separator")],1),t("q-card-section",{staticClass:"q-my-lg q-py-none"},[t("div",{},[e._v(e._s(e.message))])]),t("q-card-section",{staticClass:"q-pa-none"},[t("q-separator")],1),t("q-card-actions",{attrs:{align:"right"}},[t("div",{staticClass:"q-gutter-x-lg"},e._l(e.buttons,(function(a,s){return t("q-btn",{key:s,attrs:{color:"primary","no-caps":"",outline:!a.default,label:a.label},on:{click:function(t){e.onButtonClick(a.meaning,s)}}})})),1)])],1)],1)},i=[],r={name:"ConfirmDialog",props:{title:{type:String,default:"Confirm"},message:{type:String,default:null},persistent:{type:Boolean,default:!1},buttons:{type:Array,default(){return[{label:this.$t("Yes"),meaning:"OK"},{label:this.$t("No"),meaning:"Cancel",default:!0}]}}},methods:{show(){this.$refs.dialog.show()},hide(){this.$refs.dialog.hide()},onDialogHide(){this.$emit("hide")},onOKClick(){this.$emit("ok"),this.hide()},onCancelClick(){this.hide()},onButtonClick(e,t){e&&"ok"===String(e).toLowerCase()?this.onOKClick():e&&"cancel"===String(e).toLowerCase()&&this.onCancelClick()},onCloseClick(){this.hide()}}},l=r,o=a("2877"),n=a("24e8"),c=a("f09f"),d=a("a370"),p=a("9c40"),u=a("eb85"),_=a("4b7e"),h=a("eebe"),m=a.n(h),g=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=g.exports;m()(g,"components",{QDialog:n["a"],QCard:c["a"],QCardSection:d["a"],QBtn:p["a"],QSeparator:u["a"],QCardActions:_["a"]})},c1dc:function(e,t,a){"use strict";var s=a("2f62"),i=a("5d0b");function r(e){try{const t=Object.assign({},e),a=t.collectionMethod||"";delete t.collectionShipper,delete t.collectionMethod;const s=JSON.parse(JSON.stringify(t,((e,t)=>null===t?void 0:t)));return JSON.stringify({log_source_type:a,...s},null,"  ")}catch(t){return t}}t["a"]={computed:{...Object(s["d"])("mainStore",["collectionShippersOptions","openCollectorBeats"])},methods:{collectionShipperDetails(e){const t={value:"unknown",label:"Unknown or not set",icon:"unknown",outputFormat:"json"};if(e&&e.length){const a=e.toLowerCase();return this.collectionShippersOptions.find((e=>e.value&&e.value.toLowerCase()===a))||this.collectionShippersOptions.find((e=>e.label&&e.label.toLowerCase()===a))||this.openCollectorBeats.find((e=>e.label&&e.label.toLowerCase()===a))||t}return t},collectionConfigOutputFor(e,t){return"yaml"===e||"yml"===e?Object(i["a"])(t):"json"===e?r(t):""}}}},da35:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("div",{domProps:{innerHTML:e._s(e.identiconAsSvg)}})},i=[],r=a("cd07"),l={name:"Identicon",props:{identity:{type:String,default:null}},computed:{identiconAsSvg(){return Object(r["a"])(this.identity,50)}}},o=l,n=a("2877"),c=Object(n["a"])(o,s,i,!1,null,null,null);t["a"]=c.exports},f423:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return e.pageTitle&&e.pageTitle.length||e.crumbs&&e.crumbs.length?t("div",{},[e.crumbs&&e.crumbs.length?t("q-breadcrumbs",{staticClass:"q-mb-md",attrs:{"active-color":"textForPrimaryButton"}},e._l(e.crumbs,(function(e,a){return t("q-breadcrumbs-el",{key:a,attrs:{label:e.title,to:e.link,icon:e.icon||void 0,disable:e.disabled}})})),1):e._e(),e.pageTitle&&e.pageTitle.length?t("div",{staticClass:"text-h5 q-mb-md"},[e._v(e._s(e.pageTitle))]):e._e()],1):e._e()},i=[],r={name:"BreadCrumbs",props:{crumbs:{type:Array,default:null},pageTitle:{type:String,default:null}},data(){return{xcrumbs:[],cxxrumbs:[{title:"Pipelines",icon:null,link:"/Pipelines",disabled:!1},{title:"Palo Alto - NG Firewall",icon:null,link:"/Pipelines/81f53047-ab0e-4ef9-a421-52724532ae92/Properties",disabled:!0},{title:"Properties",icon:null,link:"/Pipelines/81f53047-ab0e-4ef9-a421-52724532ae92/Properties",disabled:!1},{title:"Mapping Builder",icon:null,link:"",disabled:!1}]}},computed:{isPageActive(){if(this.$route.path&&this.$route.path.length){const e=this.link.replace("#/","/");return this.$route.path.startsWith(e,0)}return!1}}},l=r,o=a("2877"),n=a("ead5"),c=a("079e"),d=a("eebe"),p=a.n(d),u=Object(o["a"])(l,s,i,!1,null,null,null);t["a"]=u.exports;p()(u,"components",{QBreadcrumbs:n["a"],QBreadcrumbsEl:c["a"]})},fa89:function(e,t,a){"use strict";var s=function(){var e=this,t=e._self._c;return t("q-card",{directives:[{name:"ripple",rawName:"v-ripple",value:!(!e.status||"Visible"!==e.status),expression:"!!(status && status === 'Visible')"}],staticClass:"q-ma-sm",class:e.status&&"Visible"===e.status?"cursor-pointer q-hoverable":"",staticStyle:{"max-width":"20rem"},attrs:{bordered:""},on:{click:function(t){return e.goTo("/MarketPlace/PipelineTemplates/"+e.uid+"/Properties")}}},[t("span",{staticClass:"q-focus-helper"}),e.topIndicator_.showBadge?t("q-badge",{attrs:{floating:"",rounded:!(e.topIndicator_.text&&e.topIndicator_.text.length),color:e.topIndicator_.color&&e.topIndicator_.color.length?e.topIndicator_.color:"primary",label:e.topIndicator_.text&&e.topIndicator_.text.length?e.topIndicator_.text:void 0}},[e.topIndicator_.icon&&e.topIndicator_.icon.length?t("q-icon",{attrs:{name:e.topIndicator_.icon&&e.topIndicator_.icon.length?e.topIndicator_.icon:void 0}}):e._e()],1):e._e(),e.topIndicator_.showBar?t("q-bar",{class:e.topIndicator_.color&&e.topIndicator_.color.length?`bg-${e.topIndicator_.color}-1 text-black`:""},[e.topIndicator_.icon&&e.topIndicator_.icon.length?t("q-icon",{attrs:{name:e.topIndicator_.icon,color:e.topIndicator_.color}}):e._e(),e.topIndicator_.text&&e.topIndicator_.text.length?t("div",[e._v(e._s(e.topIndicator_.text))]):e._e()],1):e._e(),t("q-card-section",{attrs:{horizontal:""}},[t("q-card-section",{staticClass:"col row justify-start items-start"},[e.pipelineTemplateFieldsMappingStats?t("div",{staticClass:"row items-center justify-center"},[t("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t("span",[e._v(e._s(e.$t("Detected fields: {detectedFields}",{detectedFields:e.stats.detectedFields})))]),t("br"),t("span",[e._v(e._s(e.$t("Mapped fields: {mappedFields} ({mappedFieldsPercent}%)",{mappedFields:e.stats.mappedFields,mappedFieldsPercent:Math.round(100*e.pipelineTemplateFieldsMappingStats)/100})))]),t("br")]),t("q-circular-progress",{attrs:{value:Math.round(e.pipelineTemplateFieldsMappingStats),"show-value":"","font-size":e.pipelineTemplateFieldsMappingStats<100?"0.5em":"0.4em",size:"2.8em",thickness:.2,color:(e.darkMode,"teal-14"),"track-color":e.darkMode?"grey-9":"grey-3"}})],1):t("div",[e._v("\n        -\n      ")])]),t("q-card-section",{staticClass:"col row justify-center items-center"},[t("IconPicture",{attrs:{pngBase64:e.iconPicture,size:70}})],1),t("q-card-section",{staticClass:"col row justify-end items-start"},[t("q-btn",{attrs:{icon:"more_horiz",dense:"",flat:""},on:{click:function(e){e.stopPropagation()}}},[t("q-menu",{attrs:{anchor:"bottom right",self:"top right"},model:{value:e.showKebabMenu,callback:function(t){e.showKebabMenu=t},expression:"showKebabMenu"}},[t("q-list",{staticStyle:{"min-width":"100px"}},[e._t("kebabMenuItems",(function(){return[t("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/MarketPlace/PipelineTemplates/"+e.uid+"/Properties",disable:!(e.status&&"Visible"===e.status)}},[t("q-item-section",{attrs:{avatar:""}},[t("q-icon",{attrs:{name:"launch"}})],1),t("q-item-section",[e._v(e._s(e.$t("Open")))])],1)]}))],2)],1)],1)],1)],1),t("q-card-section",{staticClass:"q-my-md q-py-none q-gutter-xs"},[t("div",{staticClass:"text-center q-mb-sm"},[e._v(e._s(e.name))]),t("div",{staticClass:"text-center text-caption"},[e._v("Published by "+e._s(e.publisher))])]),t("q-card-section",{staticClass:"q-my-md q-py-none"},[t("div",{staticClass:"row wrap items-center justify-center q-gutter-xs"},[t("q-badge",{attrs:{outline:"",rounded:"",color:e.stats&&e.stats.sharedFieldFrequencies?(e.darkMode,"teal-14"):"grey","text-color":"black",label:e.$t("Shared Frequency")}}),t("q-badge",{attrs:{outline:"",rounded:"",color:e.stats&&e.stats.sharedFieldMapping?(e.darkMode,"teal-14"):"grey","text-color":"black",label:e.$t("Shared Mapping")}}),t("q-badge",{attrs:{outline:"",rounded:"",color:e.stats&&e.stats.sharedFieldModifiers?(e.darkMode,"teal-14"):"grey","text-color":"black",label:e.$t("Shared Modifiers")}})],1)]),t("q-card-section",{staticClass:"q-my-md q-py-none"},[t("div",[t("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n        "+e._s(e.modified)+"\n      ")]),e._v("\n      "+e._s(e.$t("Last modified: {lastModified}",{lastModified:e.timeAgo(e.modified)}))+"\n    ")],1)])],1)},i=[],r=(a("14d9"),a("a87d")),l=a("2675"),o=a("7c4c"),n=a("541d");null==o["a"].getDefaultLocale()&&o["a"].addDefaultLocale(n);var c={name:"PipelineTemplate",props:{topIndicator:{type:Object,default:null},iconPicture:{type:String,default:null},uid:{type:String,default:null},name:{type:String,default:null},stats:{type:Object,default:null},publisher:{type:String,default:null},created:{type:String,default:null},modified:{type:String,default:null},status:{type:String,default:null},onClickOpenKebabMenu:{type:Boolean,default:!1}},mixins:[r["a"]],components:{IconPicture:l["a"]},data(){return{showKebabMenu:!1,defaultTopIndicator:{type:" ",text:"",color:"",icon:"",showBar:!1,showBadge:!1}}},computed:{topIndicator_(){return{...this.defaultTopIndicator,...this.topIndicator}},pipelineTemplateCollectionStats(){return this.stats?`${this.stats.collectionShipper||""}${this.stats.collectionMethod||""}`:null},pipelineTemplateFieldsMappingStats(){return this.stats&&this.stats.detectedFields>0?(this.stats.mappedFields||0)/this.stats.detectedFields*100:null}},methods:{timeAgo(e){let t=this.$t("Some time ago");try{const a=new o["a"]("en-US");t=a.format(new Date(e))}catch(a){}return t},goTo(e){this.status&&"Visible"===this.status&&(!0===this.onClickOpenKebabMenu?this.showKebabMenu=!this.showKebabMenu:this.$router.push(e))}}},d=c,p=a("2877"),u=a("f09f"),_=a("58a8"),h=a("0016"),m=a("d847"),g=a("a370"),f=a("05c0"),b=a("58ea"),y=a("9c40"),q=a("4e73"),v=a("1c1c"),E=a("66e5"),S=a("4074"),k=a("4b7e"),Z=a("714f"),C=a("7f67"),j=a("eebe"),P=a.n(j),w=Object(p["a"])(d,s,i,!1,null,null,null);t["a"]=w.exports;P()(w,"components",{QCard:u["a"],QBadge:_["a"],QIcon:h["a"],QBar:m["a"],QCardSection:g["a"],QTooltip:f["a"],QCircularProgress:b["a"],QBtn:y["a"],QMenu:q["a"],QList:v["a"],QItem:E["a"],QItemSection:S["a"],QCardActions:k["a"]}),P()(w,"directives",{Ripple:Z["a"],ClosePopup:C["a"]})}}]);