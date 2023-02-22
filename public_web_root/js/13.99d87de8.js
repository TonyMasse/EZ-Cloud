(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{d5b8:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;return e("q-page",{staticClass:"q-pa-sm"},[e("q-header",{class:t.darkMode?"":"bg-grey-1",style:t.darkMode?"background: var(--q-color-dark);":"",attrs:{bordered:""}},[e("q-toolbar",{staticClass:"q-gutter-x-sm",class:t.darkMode?"":"text-black"},[e("img",{staticClass:"q-mr-md",attrs:{src:t.darkMode?"logrhythm_logo_darkmode_wide.svg":"logrhythm_logo_lightmode_wide.svg",alt:"LogRhythm Open Collector"}}),e("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"o_groups",color:"primary",label:t.$t("Manage User Roles"),to:"/Admin/RBAC/Roles"}})],1)],1),e("BreadCrumbs",{attrs:{crumbs:t.breadCrumbs}}),e("q-card",{},[e("q-card-section",{attrs:{horizontal:""}},[e("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[e("q-card-section",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.$t("User Accounts"))+"\n          ")]),e("q-card-section",[e("q-table",{attrs:{data:t.tableData,columns:t.columns,"row-key":"userId",dense:"","no-data-label":t.$t("No Account to display."),filter:t.searchFilter,loading:t.dataLoading,"rows-per-page-label":t.$t("Accounts per page:"),pagination:t.pagination},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"full-width row wrap justify-between"},[e("div",{staticClass:"q-table__title"},[t._v("\n                    "+t._s(t.$t("Accounts"))+"\n                  ")]),e("div",{staticClass:"row q-gutter-md"},[e("div",{staticClass:"col"},[e("q-btn",{staticStyle:{"min-width":"14rem"},attrs:{"no-caps":"",dense:"",color:"primary",icon:"add",label:t.$t("Add New Account")},on:{click:function(e){return t.addNewAccount()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                          "+t._s(t.$t("Create a new Account."))+"\n                        ")])],1)],1)]),e("div",{staticClass:"row q-gutter-md"},[e("div",{staticStyle:{width:"300px"}},[e("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:t.$t("Search")},scopedSlots:t._u([{key:"append",fn:function(){return[t.searchFilter.length?e("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(e){t.searchFilter=""}}}):t._e(),e("q-icon",{attrs:{name:"o_search"}})]},proxy:!0}]),model:{value:t.searchFilter,callback:function(e){t.searchFilter=e},expression:"searchFilter"}})],1),e("q-btn",{attrs:{dense:"",outline:"",icon:"refresh",loading:t.dataLoading},on:{click:function(e){return t.loadAccountsAndRoles()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                        "+t._s(t.$t("Reload the list of Accounts."))+"\n                      ")])],1)],1)])]},proxy:!0},{key:"body-cell-actions",fn:function(o){return[e("q-td",{attrs:{props:o}},[e("q-btn",{attrs:{flat:"",dense:"",icon:"edit"},on:{click:function(e){return t.doPromptForAccountDetails(o.row)}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(t.$t("Edit Account details"))+"\n                    ")])],1),e("q-btn",{attrs:{flat:"",dense:"",icon:"delete",color:"negative"},on:{click:function(e){return t.deleteAccountPrompt(o.row)}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[t._v("\n                      "+t._s(t.$t("Delete Account"))+"\n                    ")])],1)],1)]}},{key:"body-cell-roleIsPrivileged",fn:function(o){return[e("q-td",{attrs:{props:o}},[1===o.value?e("q-icon",{attrs:{name:"o_check_circle_outline",color:"green",size:"md"}}):t._e(),e("q-tooltip",{attrs:{"content-style":"font-size: 1em"}},[1===o.value?e("span",[t._v(t._s(t.$t("Privileged user")))]):0===o.value?e("span",[t._v(t._s(t.$t("Non-privileged user")))]):e("span",[t._v(t._s(o.value))])])],1)]}}])})],1)],1),e("q-separator",{attrs:{vertical:""}}),e("q-card-actions",{staticClass:"justify-around q-px-md",attrs:{vertical:""}},[e("q-btn",{attrs:{icon:"add",color:"primary"},on:{click:function(e){return t.addNewAccount()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                "+t._s(t.$t("Add Account"))+"\n              ")])],1),e("q-btn",{attrs:{icon:"refresh",loading:t.dataLoading},on:{click:function(e){return t.loadAccountsAndRoles()}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t._v("\n                "+t._s(t.$t("Reload"))+"\n              ")])],1)],1)],1)],1),e("q-dialog",{attrs:{persistent:""},model:{value:t.promptForAccountDetails,callback:function(e){t.promptForAccountDetails=e},expression:"promptForAccountDetails"}},[e("q-card",{staticStyle:{"min-width":"350px"}},[e("q-card-section",{staticClass:"row justify-between"},[null!=t.editingAccountId?e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("User Account Details")))]):e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("New User Account")))]),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close",color:"grey-5"}})],1),e("q-separator"),e("q-card-section",{},[e("q-input",{attrs:{dense:"",outlined:"",label:t.$t("Username"),autofocus:"",disable:null!=t.editingAccountId,rules:[e=>!!e||t.$t("Account Username cannot be empty")]},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.promptForAccountDetails=!1}},model:{value:t.editingAccountUsername,callback:function(e){t.editingAccountUsername=e},expression:"editingAccountUsername"}})],1),e("q-card-section",{staticClass:"q-pt-none q-mb-md"},[e("q-input",{attrs:{dense:"",outlined:"",label:t.$t("Password"),type:t.showPassword?"text":"password",disable:null!=t.editingAccountId},on:{keyup:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"]))return null;t.promptForAccountDetails=!1}},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.showPassword?"o_visibility":"o_visibility_off"},on:{click:function(e){t.showPassword=!t.showPassword}}},[e("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[t.showPassword?e("span",[t._v(t._s(t.$t("Hide Secret")))]):e("span",[t._v(t._s(t.$t("Show Secret")))])])],1)]},proxy:!0}]),model:{value:t.editingAccountPassword,callback:function(e){t.editingAccountPassword=e},expression:"editingAccountPassword"}})],1),e("q-card-section",{staticClass:"q-pt-none q-mb-md"},[e("q-select",{attrs:{dense:"",outlined:"",options:t.rolesOptions,label:t.$t("Role"),"emit-value":"","map-options":""},model:{value:t.editingAccountRoleUid,callback:function(e){t.editingAccountRoleUid=e},expression:"editingAccountRoleUid"}})],1),e("q-separator"),e("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",outline:"",label:t.$t("Cancel")},on:{click:function(e){return t.cleanEditingVariables()}}}),null!=t.editingAccountId?e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",color:"primary",label:t.$t("Update User Account"),disabled:!t.editingAccountRoleUid||!t.editingAccountRoleUid.length},on:{click:function(e){return t.addNewOrUpdateUserAccount()}}}):e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{"no-caps":"",color:"primary",label:t.$t("Add new User Account"),disabled:!t.editingAccountUsername||!t.editingAccountUsername.length||!t.editingAccountPassword||!t.editingAccountPassword.length||!t.editingAccountRoleUid||!t.editingAccountRoleUid.length},on:{click:function(e){return t.addNewOrUpdateUserAccount()}}})],1)],1)],1)],1)},s=[],a=(o("14d9"),o("2f62")),i=o("a87d"),c=o("afd9"),r=o("f423"),l={name:"PageAdminUsers",mixins:[i["a"]],components:{BreadCrumbs:r["a"]},data(){return{searchFilter:"",columns:[{name:"actions",align:"center",label:this.$t("Actions"),field:"actions",sortable:!1},{name:"userLogin",align:"center",label:this.$t("Username"),field:"userLogin",sortable:!0},{name:"roleName",align:"center",label:this.$t("Role"),field:"roleName",sortable:!0},{name:"roleIsPrivileged",align:"center",label:this.$t("Is Privileged"),field:"roleIsPrivileged",sortable:!0}],pagination:{sortBy:"userLogin",descending:!1,rowsPerPage:20},accountsLoading:!1,rolesLoading:!1,promptForAccountDetails:!1,editingAccountId:null,editingAccountUsername:null,editingAccountPassword:null,editingAccountRoleUid:null,showPassword:!1}},computed:{...Object(a["d"])("mainStore",["userAccounts","userRoles"]),tableData(){return this.userAccounts},dataLoading(){return this.accountsLoading||this.rolesLoading},rolesOptions(){const t=[];return this.userRoles.forEach((e=>{t.push({value:e.roleUid,label:1===e.roleIsPrivileged?this.$t("{roleName} (Privileged)",{roleName:e.roleName}):e.roleName,isPrivileged:1===e.roleIsPrivileged})})),t.sort(((t,e)=>{const o=String(t.roleName).toLowerCase(),n=String(e.roleName).toLowerCase();return o<n?-1:o>n?1:0}))},breadCrumbs(){return[{icon:"o_home",link:"/Welcome"},{title:this.$t("Admin"),link:"/Admin"},{title:"RBAC"},{title:this.$t("Manage User Accounts")}]}},methods:{...Object(a["b"])("mainStore",["getUserAccounts","getUserRoles","updateUserAccount","deleteUserAccount"]),loadAccounts(){this.getUserAccounts({loadingVariableName:"accountsLoading",caller:this})},loadRoles(){this.getUserRoles({loadingVariableName:"rolesLoading",caller:this})},loadAccountsAndRoles(){this.loadAccounts(),this.loadRoles()},cleanEditingVariables(){this.editingAccountId=null,this.editingAccountUsername="",this.editingAccountPassword="",this.editingAccountRoleUid=null},addNewAccount(){this.cleanEditingVariables(),this.showPassword=!1,this.promptForAccountDetails=!0},doPromptForAccountDetails(t){this.editingAccountId=t&&t.userId?t.userId:null,this.editingAccountUsername=t&&t.userLogin?t.userLogin:"",this.editingAccountPassword="placeholder.......",this.editingAccountRoleUid=t&&t.roleUid?t.roleUid:null,this.showPassword=!1,this.promptForAccountDetails=!0},addNewOrUpdateUserAccount(){this.updateUserAccount({userId:this.editingAccountId,userLogin:this.editingAccountUsername,userPassword:this.editingAccountPassword,roleUid:this.editingAccountRoleUid,loadingVariableName:"accountsLoading",caller:this,onSuccessCallBack:this.loadAccounts,onErrorCallBack:this.addNewOrUpdateUserAccountFailure}),this.cleanEditingVariables()},addNewOrUpdateUserAccountFailure(t){this.$root.$emit("addAndShowErrorToErrorPanel",t),this.loadAccounts()},deleteAccountPrompt(t){this.$q.dialog({component:c["a"],parent:this,title:this.$t("Confirm"),message:this.$t("Do you REALLY want to delete this User Account?"),persistent:!0}).onOk((()=>{this.deleteAccount(t?t.userId:null)}))},deleteAccount(t){null!=t&&this.deleteUserAccount({userId:t,loadingVariableName:"accountsLoading",caller:this,onSuccessCallBack:this.loadAccounts,onErrorCallBack:this.loadAccounts})}},mounted(){this.userAccounts&&0===this.userAccounts.length&&this.loadAccounts(),this.userRoles&&0===this.userRoles.length&&this.loadRoles()}},d=l,u=o("2877"),p=o("9989"),g=o("e359"),m=o("b498"),h=o("65c6"),A=o("9c40"),b=o("f09f"),f=o("a370"),w=o("eaac"),q=o("05c0"),v=o("27f9"),_=o("0016"),U=o("eb85"),y=o("db86"),k=o("4b7e"),C=o("24e8"),P=o("ddd8"),$=o("7f67"),R=o("eebe"),N=o.n(R),L=Object(u["a"])(d,n,s,!1,null,null,null);e["default"]=L.exports;N()(L,"components",{QPage:p["a"],QHeader:g["a"],QColor:m["a"],QToolbar:h["a"],QBtn:A["a"],QCard:b["a"],QCardSection:f["a"],QTable:w["a"],QTooltip:q["a"],QInput:v["a"],QIcon:_["a"],QSeparator:U["a"],QTd:y["a"],QCardActions:k["a"],QDialog:C["a"],QSelect:P["a"]}),N()(L,"directives",{ClosePopup:$["a"]})}}]);