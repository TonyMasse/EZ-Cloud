(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0f46":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"q-gutter-sm q-pa-xl"},[i("q-card",{staticClass:"q-pa-md q-mx-none"},[i("q-card-section",{attrs:{horizontal:""}},[i("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[i("q-card-section",{staticClass:"text-h4"},[t._v("\n              Notifications\n          ")]),i("q-card-section",[i("q-table",{attrs:{data:t.tableData,columns:t.columns,"row-key":"roleUid",dense:"","no-data-label":"No Notification to display.",filter:t.searchFilter,loading:t.dataLoading,"rows-per-page-label":"Notifications per page:",pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[i("div",{staticClass:"full-width row wrap justify-between"},[i("div",{staticClass:"q-table__title"},[t._v("\n                    Notifications\n                  ")]),i("div",{staticClass:"row q-gutter-md"},[i("div",{staticClass:"col"},[i("q-btn",{staticStyle:{"min-width":"14rem"},attrs:{rounded:"",dense:"",color:"primary",icon:"add",label:"Add New Notification"},on:{click:function(e){return t.addNewNotification()}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                          Create a new Notification.\n                        ")])],1)],1)]),i("div",{staticClass:"row q-gutter-md"},[i("div",{staticStyle:{width:"300px"}},[i("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:"Search"},scopedSlots:t._u([{key:"append",fn:function(){return[t.searchFilter.length?i("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){t.searchFilter=""}}}):t._e(),i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1),i("q-btn",{attrs:{dense:"",outline:"",icon:"refresh",loading:t.dataLoading},on:{click:function(e){return t.loadNotifications()}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                        Reload the list of Notifications.\n                      ")])],1)],1)])]},proxy:!0},{key:"body-cell-actions",fn:function(e){return[i("q-td",{attrs:{props:e}},[i("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(i){return t.doPromptForNotificationEdit(e.row)}}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(t.$t("Edit Message"))+"\n                    ")])],1),i("q-btn",{attrs:{icon:"mark_email_read",flat:"",dense:"",disabled:"Read"===e.row.statusName},on:{click:function(i){return t.updateNotificationStatusTo({messageFullDetails:e.row,toStatus:"Read"})}}},["Unread"===e.row.statusName?i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                      "+t._s(t.$t("Mark as Read"))+"\n                    ")]):t._e()],1),i("q-btn",{attrs:{icon:"mark_email_unread",flat:"",dense:"",disabled:"Unread"===e.row.statusName},on:{click:function(i){return t.updateNotificationStatusTo({messageFullDetails:e.row,toStatus:"Unread"})}}},["Read"===e.row.statusName?i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                      "+t._s(t.$t("Mark as Unread"))+"\n                    ")]):t._e()],1),i("q-btn",{attrs:{icon:"delete",flat:"",dense:"",color:"negative"}},[i("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                      "+t._s(t.$t("Delete"))+"\n                    ")]),i("q-menu",{attrs:{anchor:"top right",self:"top left"}},[i("q-list",{staticStyle:{"min-width":"100px"}},[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.updateNotificationStatusTo({messageFullDetails:e.row,toStatus:"To be deleted"})}}},[i("q-item-section",[t._v("Mark to be Deleted")])],1),i("q-item",{attrs:{clickable:""}},[i("q-item-section",[t._v("Delete Permanently")]),i("q-item-section",{attrs:{side:""}},[i("q-icon",{attrs:{name:"keyboard_arrow_right"}})],1),i("q-menu",{attrs:{"content-class":"bg-negative text-white",anchor:"top end",self:"top start"}},[i("q-list",[i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.deleteNotificationById(e.row.messageUid)}}},[i("q-item-section",[t._v("Confirm")])],1)],1)],1)],1)],1)],1)],1)],1)]}},{key:"body-cell-statusName",fn:function(e){return[i("q-td",{attrs:{props:e}},[i("div",["Unread"===e.value?i("q-icon",{staticStyle:{opacity:".75"},attrs:{name:"mark_email_unread",color:"positive",size:"md"}}):"Read"===e.value?i("q-icon",{staticStyle:{opacity:".5"},attrs:{name:"mark_email_read",size:"md"}}):"Hidden"===e.value?i("q-icon",{staticStyle:{opacity:".5"},attrs:{name:"visibility_off",color:"orange",size:"md"}}):"Visible"===e.value?i("q-icon",{attrs:{name:"visibility",color:"orange",size:"md"}}):"To be deleted"===e.value?i("q-icon",{staticStyle:{opacity:".75"},attrs:{name:"auto_delete",color:"negative",size:"md"}}):i("q-icon",{attrs:{name:"question_mark",color:"orange",size:"md"}}),i("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(e.row.statusDescription)+"\n                    ")]),i("br"),t._v("\n                    "+t._s(e.value)+"\n                  ")],1)])]}}])})],1)],1)],1)],1),i("q-dialog",{attrs:{persistent:""},model:{value:t.showNotificationEdit,callback:function(e){t.showNotificationEdit=e},expression:"showNotificationEdit"}},[i("q-card",{staticStyle:{"min-width":"500px"}},[i("q-card-section",[null!=t.editingMessageUid?i("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("Edit Notification")))]):i("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("New Notification")))])]),i("q-card-section",{staticClass:"q-pt-none"},[i("q-select",{attrs:{dense:"",options:t.statusOptions,label:"Status","emit-value":"","map-options":"",rules:[function(e){return t.goodStatusOptions.includes(e)||t.$t("Status should only be 'Read', 'Unread' or 'To be Deleted'")}]},model:{value:t.editingStatusId,callback:function(e){t.editingStatusId=e},expression:"editingStatusId"}})],1),i("q-card-section",{staticClass:"q-pt-none"},[i("q-select",{attrs:{dense:"","emit-value":"","map-options":"",options:t.sendersOptions,label:"Sender","stack-label":"","popup-content-class":t.darkMode?"bg-grey-9":void 0,"use-input":"","input-debounce":"0"},on:{filter:t.filterSendersOptions},scopedSlots:t._u([{key:"option",fn:function(e){return[e.opt.label&&"<hr>"!==e.opt.label?i("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[i("q-item-section",[e.opt.value&&e.opt.value.length>0?i("q-item-label",[i("div",{staticClass:"row justify-between"},[i("div",{staticClass:"text-bold"},[t._v(t._s(e.opt.label))])])]):i("q-item-label",{staticClass:"text-bold"},[t._v(t._s(e.opt.label))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.opt.value))])],1)],1):t._e(),e.opt.separator?i("q-separator",{attrs:{inset:"",spaced:e.opt.label&&"<hr>"===e.opt.label}}):t._e()]}},{key:"no-option",fn:function(){return[i("q-item",[i("q-item-section",{staticClass:"text-grey"},[t._v("\n                No results\n              ")])],1)]},proxy:!0}]),model:{value:t.editingSenderUid,callback:function(e){t.editingSenderUid=e},expression:"editingSenderUid"}})],1),i("q-card-section",{staticClass:"q-pt-none"},[i("q-select",{attrs:{dense:"","emit-value":"","map-options":"",options:t.recipientsOptions,label:"Recipient","stack-label":"","popup-content-class":t.darkMode?"bg-grey-9":void 0,"use-input":"","input-debounce":"0"},on:{filter:t.filterRecipientsOptions},scopedSlots:t._u([{key:"option",fn:function(e){return[e.opt.label&&"<hr>"!==e.opt.label?i("q-item",t._g(t._b({},"q-item",e.itemProps,!1),e.itemEvents),[i("q-item-section",[e.opt.value&&e.opt.value.length>0?i("q-item-label",[i("div",{staticClass:"row justify-between"},[i("div",{staticClass:"text-bold"},[t._v(t._s(e.opt.label))])])]):i("q-item-label",{staticClass:"text-bold"},[t._v(t._s(e.opt.label))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(e.opt.value))])],1)],1):t._e(),e.opt.separator?i("q-separator",{attrs:{inset:"",spaced:e.opt.label&&"<hr>"===e.opt.label}}):t._e()]}},{key:"no-option",fn:function(){return[i("q-item",[i("q-item-section",{staticClass:"text-grey"},[t._v("\n                No results\n              ")])],1)]},proxy:!0}]),model:{value:t.editingRecipientUid,callback:function(e){t.editingRecipientUid=e},expression:"editingRecipientUid"}})],1),i("q-card-section",{staticClass:"q-pt-none"},[i("q-input",{attrs:{dense:"",label:"Message",autofocus:"",autogrow:"",rules:[function(e){return!!e||t.$t("Message cannot be empty")}]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.showNotificationEdit=!1}},model:{value:t.editingMessageContent,callback:function(e){t.editingMessageContent=e},expression:"editingMessageContent"}})],1),i("q-separator"),i("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Cancel")}}),null!=t.editingMessageUid?i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Update Notification"),disabled:!t.editingMessageContent||!t.editingMessageContent.length},on:{click:function(e){return t.addNewOrUpdateNotification()}}}):i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Add new Notification"),disabled:!t.editingMessageContent||!t.editingMessageContent.length},on:{click:function(e){return t.addNewOrUpdateNotification()}}})],1)],1)],1)],1)},s=[],n=(i("e01a"),i("ddb0"),i("2f62")),o=i("a87d"),l={name:"PageAdminNotifications",mixins:[o["a"]],data(){return{searchFilter:"",columns:[{name:"actions",align:"center",label:"Actions",field:"actions",sortable:!1},{name:"statusName",align:"center",label:"Status",field:"statusName",sortable:!0},{name:"sender",align:"center",label:"Sender",field:"sender",sortable:!0},{name:"recipient",align:"center",label:"Recipient",field:"recipient",sortable:!0},{name:"messageContent",align:"left",label:"Message",field:"messageContent",sortable:!0,classes:"",style:"white-space: pre-line;"},{name:"messageFlags",align:"center",label:"Flags",field:"messageFlags",sortable:!0},{name:"sentOn",align:"center",label:"Sent",field:"sentOn",sortable:!0},{name:"updatedOn",align:"center",label:"Updated",field:"updatedOn",sortable:!0}],pagination:{sortBy:"roleName",descending:!1,rowsPerPage:20},statusesLoading:!1,notificationsLoading:!1,showNotificationEdit:!1,editingMessageUid:null,editingSentOn:null,editingUpdatedOn:null,editingRecipientUid:null,editingRecipient:null,editingSenderUid:null,editingSender:null,editingStatusId:null,editingStatusName:null,editingStatusDescription:null,editingMessageContent:null,editingRelatedPipelineTemplate:null,editingMessageFlags:null,goodStatusOptions:[4,5,6],sendersOptions:[],recipientsOptions:[],publishersLoading:!1,senderTopEntries:[{label:"System Senders",disable:!0,separator:!0},{label:"EZ Market Broadcaster",value:null},{label:"Publishers",disable:!0,separator:!0}],recipientTopEntries:[{label:"System Recipient",disable:!0,separator:!0},{label:"EZ Market Broadcast Message",value:null},{label:"Publishers",disable:!0,separator:!0}]}},computed:{...Object(n["d"])("mainStore",["ezMarketNotifications","ezMarketStatuses","ezMarketPublishers"]),tableData(){return this.ezMarketNotifications},dataLoading(){return this.statusesLoading||this.publishersLoading||this.notificationsLoading},statusOptions(){const t=[];return this.ezMarketStatuses&&Array.isArray(this.ezMarketStatuses)&&this.ezMarketStatuses.length&&this.ezMarketStatuses.forEach((e=>{t.push({value:e.id,label:e.name,description:e.description})})),t}},methods:{...Object(n["b"])("mainStore",["getStatuses","getPublishers","getNotifications","updateNotification","deleteNotification"]),loadStatuses(){this.getStatuses({loadingVariableName:"statusesLoading",caller:this})},loadPublishers(){this.getPublishers({loadingVariableName:"publishersLoading",caller:this,onSuccessCallBack:this.publishersLoaded})},publishersLoaded(){console.log("publishersLoaded"),this.sendersOptions=this.ezMarketPublishers,this.recipientsOptions=this.ezMarketPublishers},filterSendersOptions(t,e,i){const a=[...this.senderTopEntries,...this.ezMarketPublishers];e(""===t?()=>{this.sendersOptions=a}:()=>{const e=t.toLowerCase();this.sendersOptions=a.filter((t=>(t.label+t.value).toLowerCase().indexOf(e)>-1))})},filterRecipientsOptions(t,e,i){const a=[...this.recipientTopEntries,...this.ezMarketPublishers];e(""===t?()=>{this.recipientsOptions=a}:()=>{const e=t.toLowerCase();this.recipientsOptions=a.filter((t=>(t.label+t.value).toLowerCase().indexOf(e)>-1))})},loadNotifications(){this.getNotifications({loadingVariableName:"notificationsLoading",caller:this})},doPromptForNotificationEdit(t){t&&(this.showNotificationEdit=!0,this.editingMessageUid=t.messageUid||null,this.editingSentOn=t.sentOn||null,this.editingUpdatedOn=t.updatedOn||null,this.editingRecipientUid=t.recipientUid||null,this.editingRecipient=t.recipient||null,this.editingSenderUid=t.senderUid||null,this.editingSender=t.sender||null,this.editingStatusId=t.statusId,this.editingStatusName=t.statusName||null,this.editingStatusDescription=t.statusDescription||null,this.editingMessageContent=t.messageContent||null,this.editingRelatedPipelineTemplate=t.relatedPipelineTemplate||null,this.editingMessageFlags=t.messageFlags||null)},addNewNotification(){this.doPromptForNotificationEdit({messageUid:null,sentOn:null,updatedOn:null,recipientUid:null,recipient:null,senderUid:null,sender:null,statusId:5,statusName:"Unread",statusDescription:"The item is marked as Not Read",messageContent:"",relatedPipelineTemplate:null,messageFlags:[]})},updateNotificationStatusTo(t){let e;console.log("updateNotificationStatusTo",t),t&&t.toStatus&&t.toStatus.length&&t.messageFullDetails&&t.messageFullDetails.messageUid&&t.messageFullDetails.messageUid.length&&("To be deleted"===t.toStatus&&(e=4),"Unread"===t.toStatus&&(e=5),"Read"===t.toStatus&&(e=6),this.updateNotification({messageUid:t.messageFullDetails.messageUid,statusId:e,loadingVariableName:"notificationsLoading",caller:this,onSuccessCallBack:this.loadNotifications,onErrorCallBack:this.addNewOrUpdateNotificationFailure}))},deleteNotificationById(t){console.log("deleteNotificationById",t),this.deleteNotification({messageUid:t,loadingVariableName:"notificationsLoading",caller:this,onSuccessCallBack:this.loadNotifications,onErrorCallBack:this.addNewOrUpdateNotificationFailure})},addNewOrUpdateNotification(){console.log("addNewOrUpdateNotification"),this.updateNotification({messageUid:this.editingMessageUid,senderUid:this.editingSenderUid,recipientUid:this.editingRecipientUid,statusId:this.editingStatusId,messageContent:this.editingMessageContent,relatedPipelineTemplate:this.editingRelatedPipelineTemplate,messageFlags:this.editingMessageFlags,loadingVariableName:"notificationsLoading",caller:this,onSuccessCallBack:this.loadNotifications,onErrorCallBack:this.addNewOrUpdateNotificationFailure})},addNewOrUpdateNotificationFailure(t){this.$root.$emit("addAndShowErrorToErrorPanel",t),this.loadNotifications()}},mounted(){this.sendersOptions=this.ezMarketPublishers,this.recipientsOptions=this.ezMarketPublishers,this.loadStatuses(),this.loadPublishers(),this.loadNotifications()},watch:{}},r=l,d=i("2877"),c=i("9989"),u=i("f09f"),p=i("a370"),g=i("9c40"),m=i("05c0"),f=i("eaac"),b=i("27f9"),h=i("0016"),N=i("eb85"),q=i("db86"),v=i("4e73"),S=i("1c1c"),k=i("66e5"),_=i("4074"),w=i("24e8"),y=i("ddd8"),C=i("0170"),U=i("4b7e"),M=i("7f67"),O=i("eebe"),x=i.n(O),P=Object(d["a"])(r,a,s,!1,null,null,null);e["default"]=P.exports;x()(P,"components",{QPage:c["a"],QCard:u["a"],QCardSection:p["a"],QBtn:g["a"],QTooltip:m["a"],QTable:f["a"],QInput:b["a"],QIcon:h["a"],QSeparator:N["a"],QTd:q["a"],QMenu:v["a"],QList:S["a"],QItem:k["a"],QItemSection:_["a"],QDialog:w["a"],QSelect:y["a"],QItemLabel:C["a"],QCardActions:U["a"]}),x()(P,"directives",{ClosePopup:M["a"]})},a87d:function(t,e,i){"use strict";e["a"]={computed:{darkMode:{get(){return this.$q.dark.isActive},set(t){this.$q.dark.set(t),localStorage.setItem("settings.darkMode",t)}}}}}}]);