(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"713b":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"lHh lpR fFf"}},[s("q-drawer",{staticClass:"column",attrs:{"show-if-above":"",mini:e.miniState,"mini-to-overlay":"",width:200,breakpoint:500,bordered:""},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.drawerMenuOpen,callback:function(t){e.drawerMenuOpen=t},expression:"drawerMenuOpen"}},[s("div",{staticClass:"yep fit column"},[s("div",{staticClass:"col"},[s("q-scroll-area",{staticClass:"fit"},[s("q-list",{attrs:{padding:""}},e._l(e.mainLinks,(function(t){return s("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))})),1)],1)],1),s("q-list",{staticClass:"col-auto"},[e.socket.connected?e._e():s("q-item",[s("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n          Live connection with server has been lost."),s("br"),e._v("\n          Some features might not work anymore.\n        ")]),s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"cloud_off",color:"orange"}})],1),s("q-item-section",[s("q-item-label",{staticClass:"text-orange"},[e._v("Disconnected")])],1)],1),e.socket.connected?e._e():s("q-separator",{staticClass:"q-my-md"}),e._l(e.lowLinks,(function(t){return s("EssentialLink",e._b({directives:[{name:"show",rawName:"v-show",value:!t.needsPriviledge||t.needsPriviledge&&e.loggedInUserIsPrivileged,expression:"!link.needsPriviledge || (link.needsPriviledge && loggedInUserIsPrivileged)"}],key:t.title},"EssentialLink",t,!1))}))],2),s("div",{staticClass:"text-center"},[s("span",{staticStyle:{opacity:".4","font-size":".75em"}},[e._v("v"+e._s(e.version))])])],1)]),s("q-page-container",[s("router-view")],1),s("q-dialog",{attrs:{persistent:""},model:{value:e.showErrorPanel,callback:function(t){e.showErrorPanel=t},expression:"showErrorPanel"}},[s("q-card",{staticStyle:{"min-width":"350px"}},[s("q-card-section",{staticClass:"q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("What did just go wrong?")))])]),e.errorPanelDetails&&Array.isArray(e.errorPanelDetails)&&e.errorPanelDetails.length>1?s("q-card-section",{staticClass:"q-pt-none"},[s("div",{staticClass:"text-bold text-italic"},[e._v(e._s(e.errorPanelDetails.length)+" errors occured.")])]):e.errorPanelDetails&&Array.isArray(e.errorPanelDetails)?s("q-card-section",{staticClass:"q-pt-none"},[s("div",{staticClass:"text-bold text-italic"},[e._v(e._s(e.errorPanelDetails.length)+" error occured.")])]):e._e(),e._l(e.errorPanelDetails,(function(t,i){return s("q-card-section",{key:i},[s("div",{},[s("div",{staticClass:"row q-my-sm"},[s("q-separator",{attrs:{vertical:"",size:"2px",color:"orange"}}),s("div",{staticClass:"q-ml-sm"},[s("div",{staticClass:"text-overline"},[e._v("Message Code:")]),s("div",{staticClass:"q-ml-sm text-bold"},[e._v(e._s(t.code))]),s("div",{staticClass:"q-mt-sm text-overline"},[e._v("Message:")]),s("div",{staticClass:"q-ml-sm text-italic"},[e._v(e._s(t.message))]),s("div",{staticClass:"q-mt-sm text-overline"},[e._v("More information available at:")]),s("div",{staticClass:"q-ml-sm"},[s("a",{staticClass:"text-primary",attrs:{href:t.wikiLink,target:"_blank"}},[e._v(e._s(t.wikiLink))])])])],1)])])})),s("q-separator"),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"primary","text-color":"white",label:e.$t("Close")}})],1)],2)],1)],1)},r=[],a=(s("5319"),s("2f62")),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-item",{attrs:{clickable:"",tag:"a",href:e.link}},[e.icon?s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:e.icon,color:e.isPageActive?"primary":""}})],1):e._e(),s("q-item-section",[s("q-item-label",{class:e.isPageActive?"text-primary":""},[e._v(e._s(e.title))])],1)],1)},n=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},computed:{isPageActive(){if(this.$route.path&&this.$route.path.length){const e=this.link.replace("#/","/");return this.$route.path.startsWith(e,0)}return!1}}},c=l,d=s("2877"),m=s("66e5"),p=s("4074"),u=s("0016"),k=s("0170"),h=s("eebe"),g=s.n(h),v=Object(d["a"])(c,o,n,!1,null,null,null),w=v.exports;g()(v,"components",{QItem:m["a"],QItemSection:p["a"],QIcon:u["a"],QItemLabel:k["a"]});var f=s("9fa1"),P=s("9224"),_=s("bd4c"),q={name:"MainLayout",components:{EssentialLink:w},mixins:[f["a"]],data(){return{drawerMenuOpen:!1,miniState:!0,mainLinks:[{title:"",icon:"home",link:"#/Welcome"},{title:"Open Collectors",icon:"mediation",link:"#/OpenCollectors"},{title:"Pipelines",icon:"account_tree",link:"#/Pipelines"}],lowLinks:[{title:"Admin",icon:"admin_panel_settings",link:"#/Admin",needsPriviledge:!0},{title:"Settings",icon:"settings",link:"#/Settings"},{title:"Log Out",icon:"logout",link:"#/Logout"}],version:P["b"],showErrorPanel:!1,errorPanelDetails:[]}},computed:{...Object(a["d"])("mainStore",["loggedInUser","loggedInUserIsPrivileged","errorWikiUrlBase"])},methods:{sanitiseWikiLinks(e){try{return String(e).toLowerCase().replace(/[^a-zA-Z0-9_-]/g,"").replace(/ /g,"-")}catch(t){return null}},prepareAndShowErrorPanel(e){if(console.log("prepareAndShowErrorPanel",e),this.errorPanelDetails=[],e&&e.data&&e.data.errors&&Array.isArray(e.data.errors)&&e.data.errors.length)e.data.errors.forEach((e=>{const t=Date.now();this.errorPanelDetails.push({timestamp:t,timestampIso:_["a"].formatDate(t,"YYYY-MM-DDTHH:mm:ss.SSSZ"),code:(e&&null!=e.number?e.number:e.code)||"N/A",message:e&&e.message?e.message:"Unknown error. See Console.",wikiLink:e&&e.message?e&&null!=e.number?this.errorWikiUrlBase+this.sanitiseWikiLinks(e.number):this.errorWikiUrlBase+this.sanitiseWikiLinks(e.code):this.errorWikiUrlBase+"unknown-error-see-console"})}));else{const t=Date.now();this.errorPanelDetails.push({timestamp:t,timestampIso:_["a"].formatDate(t,"YYYY-MM-DDTHH:mm:ss.SSSZ"),code:e&&e.code?e.code:"N/A",message:e&&e.messageForLogAndPopup?e.messageForLogAndPopup:e&&e.captionForLogAndPopup?e.captionForLogAndPopup:"Unknown error. See Console.",wikiLink:e&&e.code?this.errorWikiUrlBase+e.code:e&&e.messageForLogAndPopup||e&&e.captionForLogAndPopup?null:this.errorWikiUrlBase+"unknown-error-see-console"})}this.showErrorPanel=!0,this.errorPanelDetails.forEach((e=>{console.log("📜 [LOG] |",e.timestampIso,"| Code:",e.code,"| Message:",e.message,"| WikiLink:",e.wikiLink)}))}},mounted(){this.$root.$on("addAndShowErrorToErrorPanel",this.prepareAndShowErrorPanel)},beforeDestroy(){this.$root.$off("addAndShowErrorToErrorPanel")}},b=q,C=s("4d5a"),S=s("9404"),L=s("4983"),y=s("1c1c"),A=s("05c0"),D=s("eb85"),x=s("09e3"),E=s("24e8"),Q=s("f09f"),I=s("a370"),M=s("4b7e"),W=s("9c40"),O=s("7f67"),U=Object(d["a"])(b,i,r,!1,null,null,null);t["default"]=U.exports;g()(U,"components",{QLayout:C["a"],QDrawer:S["a"],QScrollArea:L["a"],QList:y["a"],QItem:m["a"],QTooltip:A["a"],QItemSection:p["a"],QIcon:u["a"],QItemLabel:k["a"],QSeparator:D["a"],QPageContainer:x["a"],QDialog:E["a"],QCard:Q["a"],QCardSection:I["a"],QCardActions:M["a"],QBtn:W["a"]}),g()(U,"directives",{ClosePopup:O["a"]})},"9fa1":function(e,t,s){"use strict";var i=s("2f62");t["a"]={data(){return{socket:this.$socket}},computed:{...Object(i["d"])("mainStore",["jwtToken"])},methods:{connectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect(),this.socket.auth.token=this.jwtToken,this.socket.connect()},disconnectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect()}}}}}]);