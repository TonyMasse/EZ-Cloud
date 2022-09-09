(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{d5b8:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"q-gutter-sm q-pa-xl"},[e("q-header",{class:t.darkMode?"":"bg-grey-1",style:t.darkMode?"background: var(--q-color-dark);":"",attrs:{elevated:""}},[e("q-toolbar",{staticClass:"q-gutter-x-sm",class:t.darkMode?"":"text-black"},[e("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"arrow_back",label:t.$t("Return to Admin"),to:"/Admin"}}),e("q-toolbar-title",{staticClass:"text-center",staticStyle:{opacity:".4"}},[t._v(t._s(t.$t("Admin : RBAC : Manage User Accounts")))])],1)],1),e("q-card",{staticClass:"q-pa-md q-mx-none"},[e("q-card-section",{attrs:{horizontal:""}},[e("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[e("q-card-section",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.$t("User Accounts"))+"\n          ")]),e("q-card-section",[e("q-table",{attrs:{data:t.tableData,columns:t.columns,"row-key":"userId",dense:"","no-data-label":t.$t("No Account to display."),filter:t.searchFilter,loading:t.dataLoading,"rows-per-page-label":t.$t("Accounts per page:"),pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"full-width row wrap justify-between"},[e("div",{staticClass:"q-table__title"},[t._v("\n                    "+t._s(t.$t("Accounts"))+"\n                  ")]),e("div",{staticClass:"row q-gutter-md"},[e("div",{staticClass:"col"},[e("q-btn",{staticStyle:{"min-width":"14rem"},attrs:{rounded:"",dense:"",color:"primary",icon:"add",label:t.$t("Add New Account")},on:{click:function(e){return t.addNewAccount()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                          "+t._s(t.$t("Create a new Account."))+"\n                        ")])],1)],1)]),e("div",{staticClass:"row q-gutter-md"},[e("div",{staticStyle:{width:"300px"}},[e("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:t.$t("Search")},scopedSlots:t._u([{key:"append",fn:function(){return[t.searchFilter.length?e("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){t.searchFilter=""}}}):t._e(),e("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1),e("q-btn",{attrs:{dense:"",outline:"",icon:"refresh",loading:t.dataLoading},on:{click:function(e){return t.loadAccountsAndRoles()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                        "+t._s(t.$t("Reload the list of Accounts."))+"\n                      ")])],1)],1)])]},proxy:!0},{key:"body-cell-actions",fn:function(n){return[e("q-td",{attrs:{props:n}},[e("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(e){return t.doPromptForAccountDetails(n.row)}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(t.$t("Edit Account details"))+"\n                    ")])],1),e("q-btn",{attrs:{flat:"",dense:"",icon:"delete",color:"negative"},on:{click:function(e){return t.deleteAccountPrompt(n.row)}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(t.$t("Delete Account"))+"\n                    ")])],1)],1)]}},{key:"body-cell-roleIsPrivileged",fn:function(n){return[e("q-td",{attrs:{props:n}},[1===n.value?e("q-icon",{attrs:{name:"check_circle_outline",color:"green",size:"md"}}):t._e(),e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[1===n.value?e("span",[t._v(t._s(t.$t("Privileged user")))]):0===n.value?e("span",[t._v(t._s(t.$t("Non-privileged user")))]):e("span",[t._v(t._s(n.value))])])],1)]}}])})],1)],1),e("q-separator",{attrs:{vertical:""}}),e("q-card-actions",{staticClass:"justify-around q-px-md",attrs:{vertical:""}},[e("q-btn",{attrs:{icon:"add",color:"primary"},on:{click:function(e){return t.addNewAccount()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                "+t._s(t.$t("Add Account"))+"\n              ")])],1),e("q-btn",{attrs:{icon:"refresh",loading:t.dataLoading},on:{click:function(e){return t.loadAccountsAndRoles()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                "+t._s(t.$t("Reload"))+"\n              ")])],1)],1)],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.promptForAccountDetails,callback:function(e){t.promptForAccountDetails=e},expression:"promptForAccountDetails"}},[e("q-card",{staticStyle:{"min-width":"350px"}},[e("q-card-section",[null!=t.editingAccountId?e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("User Account Details")))]):e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("New User Account")))])]),e("q-card-section",{staticClass:"q-pt-none"},[e("q-input",{attrs:{dense:"",label:t.$t("Username"),autofocus:"",disable:null!=t.editingAccountId,rules:[e=>!!e||t.$t("Account Username cannot be empty")]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.promptForAccountDetails=!1}},model:{value:t.editingAccountUsername,callback:function(e){t.editingAccountUsername=e},expression:"editingAccountUsername"}})],1),e("q-card-section",{staticClass:"q-pt-none q-mb-md"},[e("q-input",{attrs:{dense:"",label:t.$t("Password"),type:t.showPassword?"text":"password",disable:null!=t.editingAccountId},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.promptForAccountDetails=!1}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.showPassword?"visibility":"visibility_off"},on:{click:function(e){t.showPassword=!t.showPassword}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t.showPassword?e("span",[t._v(t._s(t.$t("Hide Secret")))]):e("span",[t._v(t._s(t.$t("Show Secret")))])])],1)]},proxy:!0}]),model:{value:t.editingAccountPassword,callback:function(e){t.editingAccountPassword=e},expression:"editingAccountPassword"}})],1),e("q-card-section",{staticClass:"q-pt-none q-mb-md"},[e("q-select",{attrs:{dense:"",options:t.rolesOptions,label:t.$t("Role"),"emit-value":"","map-options":""},model:{value:t.editingAccountRoleUid,callback:function(e){t.editingAccountRoleUid=e},expression:"editingAccountRoleUid"}})],1),e("q-separator"),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Cancel")},on:{click:function(e){return t.cleanEditingVariables()}}}),null!=t.editingAccountId?e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Update User Account"),disabled:!t.editingAccountRoleUid||!t.editingAccountRoleUid.length},on:{click:function(e){return t.addNewOrUpdateUserAccount()}}}):e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:t.$t("Add new User Account"),disabled:!t.editingAccountUsername||!t.editingAccountUsername.length||!t.editingAccountPassword||!t.editingAccountPassword.length||!t.editingAccountRoleUid||!t.editingAccountRoleUid.length},on:{click:function(e){return t.addNewOrUpdateUserAccount()}}})],1)],1)],1)],1)},s=[],a=n("2f62"),i=n("a87d"),c={name:"PageAdminUsers",mixins:[i["a"]],data(){return{searchFilter:"",columns:[{name:"actions",align:"center",label:this.$t("Actions"),field:"actions",sortable:!1},{name:"userLogin",align:"center",label:this.$t("Username"),field:"userLogin",sortable:!0},{name:"roleName",align:"center",label:this.$t("Role"),field:"roleName",sortable:!0},{name:"roleIsPrivileged",align:"center",label:this.$t("Is Privileged"),field:"roleIsPrivileged",sortable:!0}],pagination:{sortBy:"userLogin",descending:!1,rowsPerPage:20},accountsLoading:!1,rolesLoading:!1,promptForAccountDetails:!1,editingAccountId:null,editingAccountUsername:null,editingAccountPassword:null,editingAccountRoleUid:null,showPassword:!1}},computed:{...Object(a["d"])("mainStore",["userAccounts","userRoles"]),tableData(){return this.userAccounts},dataLoading(){return this.accountsLoading||this.rolesLoading},rolesOptions(){const t=[];return this.userRoles.forEach((e=>{t.push({value:e.roleUid,label:1===e.roleIsPrivileged?this.$t("{roleName} (Privileged)",{roleName:e.roleName}):e.roleName,isPrivileged:1===e.roleIsPrivileged})})),t.sort(((t,e)=>{const n=String(t.roleName).toLowerCase(),o=String(e.roleName).toLowerCase();return n<o?-1:n>o?1:0}))}},methods:{...Object(a["b"])("mainStore",["getUserAccounts","getUserRoles","updateUserAccount","deleteUserAccount"]),loadAccounts(){this.getUserAccounts({loadingVariableName:"accountsLoading",caller:this})},loadRoles(){this.getUserRoles({loadingVariableName:"rolesLoading",caller:this})},loadAccountsAndRoles(){this.loadAccounts(),this.loadRoles()},cleanEditingVariables(){this.editingAccountId=null,this.editingAccountUsername="",this.editingAccountPassword="",this.editingAccountRoleUid=null},addNewAccount(){this.cleanEditingVariables(),this.showPassword=!1,this.promptForAccountDetails=!0},doPromptForAccountDetails(t){this.editingAccountId=t&&t.userId?t.userId:null,this.editingAccountUsername=t&&t.userLogin?t.userLogin:"",this.editingAccountPassword="placeholder.......",this.editingAccountRoleUid=t&&t.roleUid?t.roleUid:null,this.showPassword=!1,this.promptForAccountDetails=!0},addNewOrUpdateUserAccount(){this.updateUserAccount({userId:this.editingAccountId,userLogin:this.editingAccountUsername,userPassword:this.editingAccountPassword,roleUid:this.editingAccountRoleUid,loadingVariableName:"accountsLoading",caller:this,onSuccessCallBack:this.loadAccounts,onErrorCallBack:this.addNewOrUpdateUserAccountFailure}),this.cleanEditingVariables()},addNewOrUpdateUserAccountFailure(t){this.$root.$emit("addAndShowErrorToErrorPanel",t),this.loadAccounts()},deleteAccountPrompt(t){this.$q.dialog({title:this.$t("Confirm"),message:this.$t("Do you REALLY want to delete this User Account?"),ok:{push:!0,color:"negative"},cancel:{push:!0,color:"positive"},persistent:!0}).onOk((()=>{this.deleteAccount(t?t.userId:null)}))},deleteAccount(t){null!=t&&this.deleteUserAccount({userId:t,loadingVariableName:"accountsLoading",caller:this,onSuccessCallBack:this.loadAccounts,onErrorCallBack:this.loadAccounts})}},mounted(){this.userAccounts&&0===this.userAccounts.length&&this.loadAccounts(),this.userRoles&&0===this.userRoles.length&&this.loadRoles()}},r=c,l=n("2877"),d=n("9989"),u=n("e359"),p=n("b498"),g=n("65c6"),A=n("9c40"),h=n("6ac5"),m=n("f09f"),b=n("a370"),f=n("eaac"),w=n("05c0"),q=n("27f9"),v=n("0016"),U=n("eb85"),k=n("db86"),y=n("4b7e"),_=n("24e8"),P=n("ddd8"),$=n("7f67"),C=n("eebe"),R=n.n(C),N=Object(l["a"])(r,o,s,!1,null,null,null);e["default"]=N.exports;R()(N,"components",{QPage:d["a"],QHeader:u["a"],QColor:p["a"],QToolbar:g["a"],QBtn:A["a"],QToolbarTitle:h["a"],QCard:m["a"],QCardSection:b["a"],QTable:f["a"],QTooltip:w["a"],QInput:q["a"],QIcon:v["a"],QSeparator:U["a"],QTd:k["a"],QCardActions:y["a"],QDialog:_["a"],QSelect:P["a"]}),R()(N,"directives",{ClosePopup:$["a"]})}}]);