(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"8b24":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"flex flex-center"},[n("div",[n("div",{staticClass:"text-h2",staticStyle:{opacity:".4"}},[t._v("\n      OC Admin\n    ")]),n("div",{staticClass:"text-h6 text-right",staticStyle:{opacity:".3"}},[n("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[n("span",{staticClass:"text-bold"},[t._v(t._s(t.$t("OC Admin Client version:")))]),t._v(" v"+t._s(t.version)),n("br"),n("span",{staticClass:"text-bold"},[t._v(t._s(t.$t("OC Admin Server version:")))]),t._v(" v"+t._s(t.serverVersion)+"\n      ")]),t._v("\n      v"+t._s(t.version)+"\n    ")],1)]),n("q-dialog",{attrs:{persistent:""},model:{value:t.needToConfigureMsSql,callback:function(e){t.needToConfigureMsSql=e},expression:"needToConfigureMsSql"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-card-section",{staticClass:"row items-center"},[n("q-avatar",{attrs:{icon:"link_off",color:"primary","text-color":"white"}}),n("div",{staticClass:"text-h6 q-ml-sm"},[t._v(t._s(t.$t("No connection to the SIEM")))])],1),n("q-card-section",{staticClass:"q-pt-none"},[t._v("\n        "+t._s(t.$t("The connection details to the SQL server on the SIEM are missing."))+"\n      ")]),n("q-card-section",{staticClass:"q-pt-none q-mb-md"},[t._v("\n        "+t._s(t.$t("Go to the Admin page and fix it."))+"\n      ")]),n("q-separator"),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",label:t.$t("Close")},on:{click:function(e){return t.promptIgnoreConfigureMsSql()}}}),n("q-btn",{attrs:{color:"primary",label:t.$t("Go to Admin"),to:"Admin/SIEM/MsSql"}})],1)],1)],1)],1)},o=[],i=n("2f62"),a=n("9224"),r={name:"PageIndex",data(){return{version:a["b"],hideNeedToConfigureMsSqlPopup:!1}},computed:{...Object(i["d"])("mainStore",["deployment","extraInformation"]),serverVersion(){return this.deployment&&this.deployment.version?this.deployment.version:"?.?.?"},needToConfigureMsSql(){return this.extraInformation&&this.extraInformation.msSqlConnectionConfigMissing&&!this.hideNeedToConfigureMsSqlPopup}},methods:{promptIgnoreConfigureMsSql(){this.$q.dialog({title:this.$t("Confirm"),message:this.$t("A lot of things will NOT work until this is configred. Are you sure you want to ignore this for now?"),cancel:this.$t("Yes"),ok:this.$t("No"),persistent:!0}).onOk((()=>{})).onCancel((()=>{this.hideNeedToConfigureMsSqlPopup=!0}))}}},l=r,c=n("2877"),d=n("9989"),p=n("05c0"),m=n("24e8"),f=n("f09f"),h=n("a370"),u=n("cb32"),v=n("eb85"),C=n("4b7e"),g=n("9c40"),q=n("eebe"),S=n.n(q),_=Object(c["a"])(l,s,o,!1,null,null,null);e["default"]=_.exports;S()(_,"components",{QPage:d["a"],QTooltip:p["a"],QDialog:m["a"],QCard:f["a"],QCardSection:h["a"],QAvatar:u["a"],QSeparator:v["a"],QCardActions:C["a"],QBtn:g["a"]})}}]);