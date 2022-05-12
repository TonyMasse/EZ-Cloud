(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"479d":function(e,t,i){"use strict";i("5601")},5601:function(e,t,i){},"9a7e":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{staticClass:"q-pa-sm"},[i("q-header",{class:e.darkMode?"":"bg-grey-1",style:e.darkMode?"background: var(--q-color-dark);":"",attrs:{elevated:""}},[i("q-toolbar",{staticClass:"q-gutter-x-sm",class:e.darkMode?"":"text-black"},[i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"arrow_back",label:"Return to Properties",to:"/Pipelines/"+this.pipelineUid+"/Properties"}}),i("q-separator",{attrs:{vertical:""}}),i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"save",label:"Save",color:"primary",disabled:!e.needsSaving},on:{click:function(t){return e.save()}}}),i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"restore",label:"Reverse to last saved"},on:{click:function(t){return e.reverseToLastSavedPrompt()}}}),i("q-toolbar-title",{staticClass:"text-center",staticStyle:{opacity:".4"}},[e._v("Collection Builder"),e.pipeline&&e.pipeline.name&&e.pipeline.name.length?i("span",[e._v(":  "+e._s(e.pipeline.name))]):e._e()]),i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"pending",label:"Advanced"}},[i("q-menu",[i("div",{staticClass:"row no-wrap q-pa-md"},[i("div",{staticClass:"column"},[i("div",{staticClass:"text-h6 q-mb-md"},[e._v("Advanced")]),i("q-toggle",{attrs:{label:"Show Collection Configuration"},model:{value:e.showCollectionConfig,callback:function(t){e.showCollectionConfig=t},expression:"showCollectionConfig"}}),i("q-toggle",{attrs:{label:"Show Collection Method Template"},model:{value:e.showCollectionMethodTemplate,callback:function(t){e.showCollectionMethodTemplate=t},expression:"showCollectionMethodTemplate"}})],1)])])],1)],1)],1),i("div",{staticClass:"q-gutter-y-md"},[i("q-card",[i("q-card-section",{attrs:{horizontal:""}},[i("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[i("q-card-section",{staticClass:"text-h6"},[e._v("\n              Collecting Shipper\n          ")]),i("q-separator"),i("q-card-section",[i("q-select",{staticClass:"q-mx-sm q-my-xs",staticStyle:{"min-width":"20rem"},attrs:{dense:"",standout:"bg-blue-4 text-white","emit-value":"","map-options":"",options:e.collectionShippersOptions},model:{value:e.collectionShipper,callback:function(t){e.collectionShipper=t},expression:"collectionShipper"}})],1)],1),i("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[i("q-card-section",{staticClass:"text-h6"},[e._v("\n              Collection Method\n          ")]),i("q-separator"),i("q-card-section",[i("q-select",{staticClass:"q-mx-sm q-my-xs",staticStyle:{"min-width":"20rem"},attrs:{dense:"",standout:"bg-blue-4 text-white","emit-value":"","map-options":"",options:e.collectionMethodsOptions.filter((function(t){return t.shipper==e.collectionShipper}))},model:{value:e.collectionMethod,callback:function(t){e.collectionMethod=t},expression:"collectionMethod"}})],1)],1),i("q-separator",{attrs:{vertical:""}}),i("q-card-actions",{staticClass:"justify-around q-px-md",attrs:{vertical:""}},[i("q-btn",{staticClass:"full-height",attrs:{glossy:"",color:"primary",icon:"check_circle_outline"},on:{click:function(t){return e.switchCollectionMethodPrompt()}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[e._v("\n              "+e._s(e.$t("Switch to this Collection Method."))+"\n            ")])],1)],1)],1)],1),e.activeCollectionMethod&&e.activeCollectionMethod.length?i("q-card",[i("q-card-section",{staticClass:"text-h6 row"},[e._v("\n          Collection Parameters\n          "),i("q-space"),i("div",{staticClass:"text-teal-4"},[e._v("\n            "+e._s(e.currentCollectionMethodOption.label)+"\n          ")]),i("q-icon",{staticClass:"q-ml-md",attrs:{name:e.currentCollectionMethodOption.icon,size:"md",color:"teal-4"}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n              "+e._s(e.currentCollectionMethodOption.label)+"\n            ")])],1)],1),i("q-separator"),i("div",{},e._l(e.templateGroups,(function(t,a){return i("q-card-section",{key:a,staticClass:"q-gutter-x-sm row"},[i("q-separator",{attrs:{vertical:"",color:"blue-9",size:"1px"}}),i("q-expansion-item",{staticClass:"q-gutter-y-md col",attrs:{"default-opened":0===a,label:t,"header-class":"text-bold text-blue-4"}},e._l((e.collectionMethodTemplate&&e.collectionMethodTemplate.definition?e.collectionMethodTemplate.definition:[]).filter((function(e){return e.group&&e.group===t})),(function(t,a){return i("q-card-section",{key:a},[i("div",{staticClass:"q-mb-sm"},[i("span",{staticClass:"text-bold q-mr-md"},[e._v(e._s(t.label))]),i("span",{staticStyle:{opacity:".6"}},[e._v("\n                  ( "),i("span",{staticClass:"fixed-font"},[e._v(e._s(t.name))]),e._v(" )\n                  "),t.required?i("span",{staticClass:"text-italic"},[e._v(" - 🟧 Required")]):e._e(),t.readonly?i("span",{staticClass:"text-italic"},[e._v(" - ⬛ Read Only")]):e._e()])]),i("FieldEditor",{attrs:{template:t},model:{value:e.collectionConfig[t.name],callback:function(i){e.$set(e.collectionConfig,t.name,i)},expression:"collectionConfig[fieldTemplate.name]"}})],1)})),1)],1)})),1)],1):e._e(),e.showCollectionConfig?i("q-separator",{attrs:{color:"green",size:"2px"}}):e._e(),e.showCollectionConfig?i("q-card",[i("q-card-section",[i("div",{staticClass:"row q-gutter-x-lg"},[i("div",{staticClass:"col"},[i("span",{staticClass:"text-bold"},[e._v("Collection Params (JSON):")]),i("pre",[e._v(e._s(e.collectionConfig))])]),i("q-separator",{attrs:{vertical:"",color:"green"}}),i("div",{staticClass:"col"},[i("span",{staticClass:"text-bold"},[e._v("Collection Params (Yaml):")]),i("pre",[e._v(e._s(e.collectionConfigYml))])])],1)])],1):e._e(),e.showCollectionMethodTemplate?i("q-separator",{attrs:{color:"purple",size:"2px"}}):e._e(),e.showCollectionMethodTemplate?i("q-card",[i("q-card-section",[i("pre",[e._v(e._s(e.collectionMethodTemplate))])])],1):e._e()],1)],1)},l=[],o=(i("5319"),i("2f62")),n=i("31c4"),s=i("a87d"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("form",[i("div",{staticClass:"row q-gutter-x-sm"},[e.isPartOfObject?i("q-input",{staticClass:"col-auto",staticStyle:{width:"20rem"},attrs:{standout:"",readonly:!0},model:{value:e.leafName,callback:function(t){e.leafName=t},expression:"leafName"}}):e._e(),!e.template.required||e.isPartOfArray||e.isPartOfObject?e._e():i("q-separator",{attrs:{vertical:"",color:"orange",size:"3px"}}),i("div",{staticClass:"col"},[i("div",{staticClass:"row q-gutter-x-md"},[e.template.prefix?i("q-select",{staticStyle:{"min-width":"10rem"},attrs:{standout:"bg-blue-4 text-white","emit-value":"","map-options":"",options:e.template.prefix.options?e.template.prefix.options:[],readonly:!!e.template.readonly&&e.template.readonly},model:{value:e.internalPrefix,callback:function(t){e.internalPrefix=t},expression:"internalPrefix"}}):e._e(),e.template.type&&e.template.type.name&&("string"===e.template.type.name||"regex"===e.template.type.name||"number"===e.template.type.name||"password"===e.template.type.name)?i("q-input",{staticClass:"col",class:e.template.type&&e.template.type.textType&&"json"===e.template.type.textType?"fixed-font":"",attrs:{standout:"bg-blue-4 text-white",readonly:e.template.readonly?e.template.readonly:e.isPartOfObject&&e.leafInObject&&("stream_id"===e.leafInObject||"stream_name"===e.leafInObject),type:e.template.type&&e.template.type.name&&"password"===e.template.type.name&&!e.showPassword?"password":"text",autogrow:e.template.type&&e.template.type.multilines&&!0===e.template.type.multilines},on:{blur:function(t){e.inFocus=!1},focus:function(t){e.inFocus=!0}},scopedSlots:e._u([{key:"append",fn:function(){return[e.waitingForBackend?i("q-spinner"):e._e(),e.template.obfuscation&&e.template.obfuscation.method&&e.template.obfuscation.method.length&&e.updateErrorMessage&&e.updateErrorMessage.length?i("q-icon",{attrs:{name:"error",color:e.inFocus?"red-10":"alert"}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n                Failed to obfuscate the Secret. Error message:"),i("br"),i("span",{staticClass:"text-italic"},[e._v(e._s(e.updateErrorMessage))])])],1):e._e(),e.template.obfuscation&&e.template.obfuscation.method&&e.template.obfuscation.method.length&&e.obfuscationRequirementNotMet?i("q-icon",{attrs:{name:"warning",color:e.inFocus?"orange-10":"warning"}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n                This Secret must be obfuscated/encrypted to produce a valid configuration\n              ")])],1):e._e(),e.template.obfuscation&&e.template.obfuscation.method&&e.template.obfuscation.method.length?i("q-icon",{class:e.obfuscationRequirementNotMet?"cursor-pointer":"",attrs:{name:e.obfuscationRequirementNotMet?"lock_open":"lock",color:e.obfuscationRequirementNotMet?e.inFocus?"orange-10":"warning":e.inFocus?"green-10":"positive"},on:{click:e.obfuscateSecret}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e.obfuscationRequirementNotMet?i("span",[e._v("Obfuscate/encrypt this Secret")]):i("span",[e._v("Your Secret is properly obfuscated")])])],1):e._e(),e.template.type&&e.template.type.name&&"password"===e.template.type.name?i("q-separator",{attrs:{spaced:"",inset:"",vertical:"",dark:""}}):e._e(),e.template.type&&e.template.type.name&&"password"===e.template.type.name?i("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.showPassword?"visibility":"visibility_off"},on:{click:function(t){e.showPassword=!e.showPassword}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e.showPassword?i("span",[e._v("Hide")]):i("span",[e._v("Show")]),e._v(" Secret\n              ")])],1):e._e()]},proxy:!0}],null,!1,850111765),model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):e._e(),e.template.type&&e.template.type.name&&"array"===e.template.type.name?i("div",{staticClass:"q-gutter-y-sm col"},[e._l(e.internalValue&&Array.isArray(e.internalValue)?e.internalValue:[],(function(t,a){return i("FieldEditor",{key:a,attrs:{template:e.template&&e.template.type&&e.template.type.of?e.template.type.of:{},isPartOfArray:!0,indexInArray:a},on:{deleteSubField:e.deleteSubFieldEvent},model:{value:e.internalValue[a],callback:function(t){e.$set(e.internalValue,a,t)},expression:"internalValue[subFieldIndex]"}})})),i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"add",label:"Add Item",color:"primary"},on:{click:function(t){return e.addValueToArray()}}})],2):e._e(),e.template.type&&e.template.type.name&&"object"===e.template.type.name?i("div",{staticClass:"q-gutter-y-sm col"},[e._l(e.internalValue&&"object"===typeof e.internalValue?e.internalValue:{},(function(t,a){return i("FieldEditor",{key:a,attrs:{template:e.template&&e.template.type&&e.template.type.of?e.template.type.of:{},isPartOfObject:!0,leafInObject:a},on:{deleteSubField:e.deleteSubFieldEvent},model:{value:e.internalValue[a],callback:function(t){e.$set(e.internalValue,a,t)},expression:"internalValue[subFieldLeafName]"}})})),i("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"add",label:"Add Item",color:"primary"},on:{click:function(t){return e.addValueToObject()}}})],2):e._e(),e.template.type&&e.template.type.name&&("boolean"===e.template.type.name||"option"===e.template.type.name)?i("q-select",{staticClass:"col",attrs:{standout:"bg-blue-4 text-white","emit-value":"","map-options":"",options:e.template.options?e.template.options:"boolean"===e.template.type.name?[{value:!0,label:"True"},{value:!1,label:"False"}]:[],readonly:!!e.template.readonly&&e.template.readonly},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):e._e(),e.template.suffix?i("q-select",{staticStyle:{"min-width":"10rem"},attrs:{standout:"bg-blue-4 text-white","emit-value":"","map-options":"",options:e.template.suffix.options?e.template.suffix.options:[],readonly:!!e.template.readonly&&e.template.readonly},model:{value:e.internalSuffix,callback:function(t){e.internalSuffix=t},expression:"internalSuffix"}}):e._e()],1),!e.template.min&&!e.template.max||e.template.readonly&&e.template.readonly?e._e():i("q-slider",{attrs:{min:e.template.min||0,max:e.template.max||100,label:"","label-value":(e.internalPrefixLong&&e.internalPrefixLong.length?e.internalPrefixLong+" ":"")+e.formatNumber(e.internalValue)+(e.internalSuffixLong&&e.internalSuffixLong.length?" "+e.internalSuffixLong:"")},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}),e.template.description&&e.template.description.length?i("div",{staticClass:"q-mt-xs row",staticStyle:{opacity:".7"}},[i("q-icon",{staticClass:"col-auto q-mr-sm",attrs:{name:"info",size:"xs",color:"blue"}}),i("q-markdown",{staticClass:"col",attrs:{src:e.template.description,"no-heading-anchor-links":""}})],1):e._e()],1),e.isPartOfArray||e.isPartOfObject?i("q-separator",{attrs:{vertical:""}}):e._e(),e.isPartOfArray||e.isPartOfObject?i("div",{staticClass:"q-mx-sm items-center justify-center column"},[i("q-btn",{staticClass:"full-height",attrs:{icon:"delete","text-color":"negative",disabled:e.isPartOfObject&&e.leafInObject&&("stream_id"===e.leafInObject||"stream_name"===e.leafInObject)},on:{click:function(t){return e.deleteSubFieldPrompt()}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n          Delete entry\n        ")])],1)],1):e._e()],1)])},c=[],p=i("1732"),h={name:"FieldEditor",components:{FieldEditor:w},props:{template:{type:Object,required:!0},value:{required:!0},isPartOfArray:{type:Boolean,required:!1,default:!1},indexInArray:{type:Number,required:!1,default:0},isPartOfObject:{type:Boolean,required:!1,default:!1},leafInObject:{type:String,required:!1}},data(){return{internalPrefixVar:"",internalSuffixVar:"",showPassword:!1,inFocus:!1,waitingForBackend:!1,updateErrorMessage:""}},computed:{defaultValue(){let e="";return this.template.type&&this.template.type.name&&this.template.type.name.length&&("array"===this.template.type.name&&(e=[]),"object"===this.template.type.name&&(e={}),"boolean"===this.template.type.name&&(e=!1),"string"===this.template.type.name&&(e=""),"number"===this.template.type.name&&(e=0),"regex"===this.template.type.name&&(e=""),"option"===this.template.type.name&&(e="")),e},internalValueRaw:{get(){return this.template.type&&this.template.type.name?this.value?this.value:this.template.default?this.template.default:this.defaultValue:this.value},set(e){if(this.template.type&&this.template.type.name&&"array"!==this.template.type.name&&"object"!==this.template.type.name&&"boolean"!==this.template.type.name){let t=e;this.template.prefix&&(t=this.internalPrefix+String(t)),this.template.suffix&&(t=String(t)+this.internalSuffix),this.$emit("input",t)}else this.$emit("input",e)}},internalValue:{get(){let e=this.internalValueRaw;if(this.template.type&&this.template.type.name){if("object"!==this.template.type.name&&"array"!==this.template.type.name){const t=/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g;this.template.prefix&&this.template.prefix.options&&Array.isArray(this.template.prefix.options)&&this.template.prefix.options.forEach((i=>{i.value&&i.value.length&&(e=String(e).replace(RegExp("^"+String(i.value).replace(t,"\\$&")),""))})),this.template.suffix&&this.template.suffix.options&&Array.isArray(this.template.suffix.options)&&this.template.suffix.options.forEach((i=>{i.value&&i.value.length&&(e=String(e).replace(RegExp(String(i.value).replace(t,"\\$&")+"$"),""))}))}"number"===this.template.type.name&&(e=Number(e)),"boolean"===this.template.type.name&&(e=Boolean(e))}return e},set(e){this.internalValueRaw=e}},internalPrefix:{get(){let e=this.internalPrefixVar;return""===e&&this.template.prefix&&this.template.prefix.options&&Array.isArray(this.template.prefix.options)&&this.template.prefix.options.forEach((t=>{t.value&&t.value.length&&""===e&&String(this.internalValueRaw).match(RegExp("^"+t.value))&&(e=t.value)})),e.length?e:this.template.prefix&&this.template.prefix.default?this.template.prefix.default:""},set(e){this.internalPrefixVar=e,this.internalValueRaw=this.internalValue}},internalPrefixLong(){let e=this.internalPrefix;if(this.internalPrefix.length&&this.template.prefix&&this.template.prefix.options&&Array.isArray(this.template.prefix.options)){const t=this.template.prefix.options.find((e=>e.value&&e.value===this.internalPrefix));e=t&&t.label?t.label:e}return e},internalSuffix:{get(){let e=this.internalSuffixVar;return""===e&&this.template.suffix&&this.template.suffix.options&&Array.isArray(this.template.suffix.options)&&this.template.suffix.options.forEach((t=>{t.value&&t.value.length&&""===e&&String(this.internalValueRaw).match(RegExp(t.value+"$"))&&(e=t.value)})),e.length?e:this.template.suffix&&this.template.suffix.default?this.template.suffix.default:""},set(e){this.internalSuffixVar=e,this.internalValueRaw=this.internalValue}},internalSuffixLong(){let e=this.internalSuffix;if(this.internalSuffix.length&&this.template.suffix&&this.template.suffix.options&&Array.isArray(this.template.suffix.options)){const t=this.template.suffix.options.find((e=>e.value&&e.value===this.internalSuffix));e=t&&t.label?t.label:e}return e},leafName(){return this.leafInObject},obfuscationRequirementNotMet(){return!!(this.template.obfuscation&&this.template.obfuscation.obfuscatedFormatCheckRegex&&this.template.obfuscation.obfuscatedFormatCheckRegex.length)&&null===this.internalValueRaw.match(this.template.obfuscation.obfuscatedFormatCheckRegex)}},methods:{...Object(o["b"])("mainStore",["obfuscateSecretForOpenCollector"]),formatNumber(e){return e},addValueToArray(){let e="";this.template&&this.template.type&&this.template.type.name&&this.template.type.of&&this.template.type.of.type&&this.template.type.of.type.name&&("array"===this.template.type.of.type.name&&(e=[]),"object"===this.template.type.of.type.name&&(e={})),Array.isArray(this.internalValue)?(this.internalValue.push(e),this.internalValue=JSON.parse(JSON.stringify(this.internalValue))):this.internalValue=JSON.parse(JSON.stringify([e]))},addValueToObject(){this.$q.dialog({title:"Prompt",message:'<span class="text-bold">Please enter the name of the new entry.</span><br><br><span style="opacity: .7" class="text-italic"><span class="text-bold">Note: </span>This cannot be changed later.</span>',html:!0,prompt:{model:"",isValid:e=>e.length>0,type:"text"},ok:{push:!0,color:"primary"},cancel:{push:!0,color:"grey-9"},persistent:!0}).onOk((e=>{const t={},i=e&&e.length?e:Object(p["a"])();t[i]="",this.template&&this.template.type&&this.template.type.name&&this.template.type.of&&this.template.type.of.type&&this.template.type.of.type.name&&("array"===this.template.type.of.type.name&&(t[i]=[]),"object"===this.template.type.of.type.name&&(t[i]={})),"object"!==typeof this.internalValue||Array.isArray(this.internalValue)?this.internalValue=JSON.parse(JSON.stringify(t)):(this.internalValue=Object.assign(this.internalValue,t),this.internalValue=JSON.parse(JSON.stringify(this.internalValue)))}))},deleteSubFieldPrompt(){null!=this.value&&""!==this.value?this.$q.dialog({title:"Confirm",message:"Do you REALLY want to delete this entry?",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"positive"},persistent:!0}).onOk((()=>{this.deleteSubField()})):this.deleteSubField()},deleteSubField(){this.isPartOfArray?this.$emit("deleteSubField",{indexInArray:this.indexInArray,value:this.value}):this.isPartOfObject&&this.$emit("deleteSubField",{leafInObject:this.leafInObject,value:this.value})},deleteSubFieldEvent(e){console.log(e),"undefined"!==typeof e.indexInArray&&"number"===typeof e.indexInArray&&Array.isArray(this.internalValue)&&this.internalValue.length>e.indexInArray?(this.internalValue.splice(e.indexInArray,1),this.internalValue=JSON.parse(JSON.stringify(this.internalValue))):"undefined"!==typeof e.leafInObject&&"string"===typeof e.leafInObject&&e.leafInObject.length&&"object"===typeof this.internalValue&&!Array.isArray(this.internalValue)&&(delete this.internalValue[e.leafInObject],this.internalValue=JSON.parse(JSON.stringify(this.internalValue)))},obfuscateSecret(){this.obfuscationRequirementNotMet&&(this.waitingForBackend=!0,this.updateErrorMessage="",this.obfuscateSecretForOpenCollector({apiCallParams:{secretToObfuscate:this.internalValueRaw&&this.internalValueRaw.length?this.internalValueRaw:""},loadingVariableName:"waitingForBackend",onSuccessCallBack:this.successfullObfuscation,onErrorCallBack:this.failedObfuscation,caller:this}))},successfullObfuscation(e){e.success&&e.data&&e.data.payload&&e.data.payload.obfuscatedSecret&&(this.internalValueRaw=e.data.payload.obfuscatedSecret)},failedObfuscation(e){console.log("failedObfuscation",e),!e.success&&e.captionForLogAndPopup&&(this.updateErrorMessage=e.captionForLogAndPopup,this.$q.notify({type:"negative",color:"negative",icon:"report_problem",message:"Failed to obfuscate the Secret. Error message:",caption:e.captionForLogAndPopup,timeout:4e3}))}}},u=h,d=(i("479d"),i("2877")),m=i("27f9"),f=i("eb85"),g=i("ddd8"),b=i("0d59"),y=i("0016"),v=i("05c0"),C=i("9c40"),x=i("c1d0"),S=i("eebe"),q=i.n(S),_=Object(d["a"])(u,r,c,!1,null,null,null),w=_.exports;q()(_,"components",{QInput:m["a"],QSeparator:f["a"],QSelect:g["a"],QSpinner:b["a"],QIcon:y["a"],QTooltip:v["a"],QBtn:C["a"],QSlider:x["a"]});var O=i("a7c6"),M=i.n(O),V=i("5d0b"),k={mixins:[n["a"],s["a"],M.a.mixin],components:{FieldEditor:w},data(){return{pipelineUid:"",collectionConfig:{},needsSaving:!1,collectionShipper:"",collectionMethod:"",activeCollectionShipper:"",activeCollectionMethod:"",showCollectionConfig:!1,showCollectionMethodTemplate:!1,collectionConfigYml:""}},computed:{...Object(o["d"])("mainStore",["collectionMethodTemplates","collectionMethodsOptions","collectionShippersOptions"]),pipeline(){const e=this.pipelines.find((e=>e.uid===this.pipelineUid));return e||{uid:"",name:"",status:"New",primaryOpenCollector:"",fieldsMapping:[],collectionConfig:{}}},collectionMethodTemplate(){return this.collectionMethodTemplates.find((e=>e.collectionMethod===this.activeCollectionMethod))},templateGroups(){const e=(this.collectionMethodTemplate&&this.collectionMethodTemplate.definition?this.collectionMethodTemplate.definition:[]).filter((e=>e.group&&e.group.length));return e.length?e.reduce(((e,t)=>(e.includes(t.group)||e.push(t.group),e)),[]):[]},currentCollectionMethodOption(){return this.activeCollectionMethod&&this.activeCollectionMethod.length&&this.collectionMethodsOptions.find((e=>e.value&&e.value===this.activeCollectionMethod))||{value:"unknown",label:"Unknown",icon:"help_center"}}},methods:{...Object(o["b"])("mainStore",["upsertPipeline"]),reverseToLastSavedPrompt(){this.$q.dialog({title:"Confirm",message:"Do you REALLY want to lose all your un-saved changes and revert to the last Saved version?",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"positive"},persistent:!0}).onOk((()=>{this.reverseToLastSaved()}))},reverseToLastSaved(){try{const e=this.pipelines.find((e=>e.uid===this.pipelineUid));this.collectionConfig=e&&e.collectionConfig?JSON.parse(JSON.stringify(e.collectionConfig)):[],this.activeCollectionShipper=this.collectionConfig.collectionShipper,this.activeCollectionMethod=this.collectionConfig.collectionMethod,this.collectionShipper=this.activeCollectionShipper,this.collectionMethod=this.activeCollectionMethod,this.needsSaving=!1}catch{console.log("Can't parse JSON")}},save(){this.needsSaving=!1,this.upsertPipeline({caller:this,pushToApi:!0,pipeline:{uid:this.pipelineUid,status:this.pipeline&&this.pipeline.status&&"Ready"===this.pipeline.status?this.pipeline.status:"Dev",collectionConfig:JSON.parse(JSON.stringify(this.collectionConfig))}})},switchCollectionMethodPrompt(){console.log(this.collectionConfig),this.collectionConfig&&this.collectionConfig.collectionMethod&&this.collectionConfig.collectionMethod.length?this.$q.dialog({title:"Confirm",message:"You will lose any un-saved changes and start fresh with the new Collection Method. Are you sure?",ok:{push:!0,color:"negative"},cancel:{push:!0,color:"positive"},persistent:!0}).onOk((()=>{this.switchCollectionMethod()})):this.switchCollectionMethod()},switchCollectionMethod(){if(this.activeCollectionShipper=this.collectionShipper&&this.collectionShipper.value?this.collectionShipper.value:this.collectionShipper,this.activeCollectionMethod=this.collectionMethod&&this.collectionMethod.value?this.collectionMethod.value:this.collectionMethod,!this.collectionConfig.collectionMethod||this.collectionConfig.collectionMethod!==this.activeCollectionMethod){const e={collectionShipper:this.activeCollectionShipper,collectionMethod:this.activeCollectionMethod};"filebeat"===this.activeCollectionShipper&&(e.enabled=!0,e.fields={stream_id:this.pipelineUid,stream_name:this.pipeline.name},"log"===this.activeCollectionMethod&&(e.paths=["/var/log/"+this.pipeline.name+"_"+this.pipeline.uid+"/*.log"]),"syslog_udp"===this.activeCollectionMethod&&(e["protocol.udp.host"]="0.0.0.0:514"),"syslog_tcp"===this.activeCollectionMethod&&(e["protocol.tcp.host"]="0.0.0.0:514",e["protocol.tcp.ssl.enabled"]=!1,e["protocol.tcp.ssl.certificate"]="/etc/filebeat/certificates/ez_stream_"+this.pipeline.uid+".crt",e["protocol.tcp.ssl.key"]="/etc/filebeat/certificates/ez_stream_"+this.pipeline.uid+".key",e["protocol.tcp.ssl.supported_protocols"]=["TLSv1.1","TLSv1.2","TLSv1.3"]),"httpjson"===this.activeCollectionMethod&&(e.config_version=2,e["request.url"]="https://CHANGE_THIS"),"genericbeat"===this.activeCollectionMethod&&(e.config_version=2,e["request.url"]="https://CHANGE_THIS")),"jsBeat"===this.activeCollectionShipper&&(e.uid=this.pipelineUid,e.name=this.pipeline.name,e.deviceType=this.pipeline.name.replace(/[^a-zA-Z0-9]/g,"_"),e.active=!0,e.filterHelpers={stream_id:this.pipelineUid,stream_name:this.pipeline.name},"flatFile"===this.activeCollectionMethod&&(e.baseDirectoryPath="/var/log/"+String(this.pipeline.name).replace(/\s/g,"_")+"_"+this.pipeline.uid+"/",e.inclusionFilter="*.log",e.multiLines={msgStartRegex:"",msgStopRegex:"",msgDelimiterRegex:""})),"genericbeat"===this.activeCollectionShipper&&("genericbeat"===this.activeCollectionMethod&&(e.url="",e.request_method="GET",e.auth_type="noauth",e.filter_type="nofilter",e.heartbeatdisabled=!1,e.heartbeatinterval=60,e.pagination_type="nopagination",e.period="60s",e.sorting_enabled=!1,e.time_format="2006-01-02T15:04:05Z07:00",e.cursor_header_type="custom_header"),e.beatIdentifier=String(this.pipeline.uid.substring(0,3)+"_"+this.pipeline.name.replace(/[^a-zA-Z0-9]/g,"_")+"_"+this.pipeline.uid).substring(0,12),e.logsource_name=this.pipeline.name),"webhookbeat"===this.activeCollectionShipper&&("webhookbeat"===this.activeCollectionMethod&&(e.hostname="",e.portnumber=8080,e.sslflag=!1,e.heartbeatdisabled=!1,e.heartbeatinterval=60),e.beatIdentifier=String(this.pipeline.uid.substring(0,3)+"_"+this.pipeline.name.replace(/[^a-zA-Z0-9]/g,"_")+"_"+this.pipeline.uid).substring(0,12),e.logsource_name=this.pipeline.name),this.collectionConfig=e,this.needsSaving=!0}},buildYmlConfig(){console.log("buildYmlConfig"),this.activeCollectionMethod&&this.activeCollectionMethod.length?this.collectionConfigYml=Object(V["a"])(this.pipeline.collectionConfig):this.collectionConfigYml="# No Collection Method configured."},collectionShipperHasChanged(){console.log("collectionShipperHasChanged"),this.needsSaving=!0,this.showCollectionConfig&&this.buildYmlConfig()},collectionConfigHasChanged(){console.log("collectionConfigHasChanged"),this.needsSaving=!0,this.showCollectionConfig&&this.buildYmlConfig()}},mounted(){this.$route.params.pipelineUid&&this.$route.params.pipelineUid.length&&this.pipelineUid!==this.$route.params.pipelineUid&&(this.pipelineUid=this.$route.params.pipelineUid),this.reverseToLastSaved(),this.switchCollectionMethod()},watch:{collectionShipper:{handler(){this.collectionShipperHasChanged()},deep:!0},collectionConfig:{handler(){this.collectionConfigHasChanged()},deep:!0},showCollectionConfig:{handler(e){e&&this.buildYmlConfig()},deep:!1}}},P=k,A=(i("b627"),i("9989")),j=i("e359"),T=i("b498"),F=i("65c6"),N=i("6ac5"),I=i("4e73"),R=i("9564"),E=i("66e5"),Q=i("4074"),L=i("f09f"),$=i("a370"),J=i("4b7e"),z=i("2c91"),U=i("3b73"),Y=Object(d["a"])(P,a,l,!1,null,"920aee30",null);t["default"]=Y.exports;q()(Y,"components",{QPage:A["a"],QHeader:j["a"],QColor:T["a"],QToolbar:F["a"],QBtn:C["a"],QSeparator:f["a"],QToolbarTitle:N["a"],QMenu:I["a"],QToggle:R["a"],QItem:E["a"],QItemSection:Q["a"],QIcon:y["a"],QSlider:x["a"],QCard:L["a"],QCardSection:$["a"],QSelect:g["a"],QCardActions:J["a"],QTooltip:v["a"],QSpace:z["a"],QExpansionItem:U["a"]})},b627:function(e,t,i){"use strict";i("e70b")},e70b:function(e,t,i){}}]);