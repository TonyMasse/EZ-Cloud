(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{3780:function(t,e,c){"use strict";c.r(e);var n=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("q-page",{staticClass:"flex flex-center column q-gutter-lg"},[c("div",{staticClass:"text-h2",staticStyle:{opacity:".4"}},[t._v("\n      Bye bye\n    ")]),c("div",{staticClass:"text-h6",staticStyle:{opacity:".4"}},[t._v("\n      You have successfuly logged out.\n    ")]),c("q-btn",{attrs:{label:"Log Back In",to:"/Login",color:"primary"}})],1)},s=[],o=c("ded3"),i=c.n(o),a=c("2f62"),u=c("9fa1"),l={name:"PageLogout",mixins:[u["a"]],methods:i()({},Object(a["b"])("mainStore",["signOut"])),mounted(){this.signOut(),this.disconnectSocket()}},d=l,h=c("2877"),r=c("9989"),k=c("9c40"),f=c("eebe"),g=c.n(f),m=Object(h["a"])(d,n,s,!1,null,null,null);e["default"]=m.exports;g()(m,"components",{QPage:r["a"],QBtn:k["a"]})},"9fa1":function(t,e,c){"use strict";var n=c("ded3"),s=c.n(n),o=c("2f62");e["a"]={data(){return{socket:this.$socket}},computed:s()({},Object(o["d"])("mainStore",["jwtToken"])),methods:{connectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect(),this.socket.auth.token=this.jwtToken,this.socket.connect()},disconnectSocket(){this.socket&&this.socket.connected&&this.socket.disconnect()}}}}}]);