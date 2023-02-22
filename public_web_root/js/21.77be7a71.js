(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{aedb:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e._self._c;return t("q-page",{staticClass:"q-pa-sm"},[t("q-header",{class:e.darkMode?"":"bg-grey-1",style:e.darkMode?"background: var(--q-color-dark);":"",attrs:{bordered:""}},[t("q-toolbar",{staticClass:"q-gutter-x-sm",class:e.darkMode?"":"text-black"},[t("img",{staticClass:"q-mr-md",attrs:{src:e.darkMode?"logrhythm_logo_darkmode_wide.svg":"logrhythm_logo_lightmode_wide.svg",alt:"LogRhythm Open Collector"}}),t("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"mail_outline",color:"primary",label:e.$t("View Notifications"),to:"/MarketPlace/Notifications"}}),t("q-btn",{attrs:{"no-caps":"",flat:"",dense:"",icon:"person",label:e.$t("View My Profile"),to:"/MarketPlace/PublisherProfile"}})],1)],1),t("BreadCrumbs",{attrs:{crumbs:e.breadCrumbs}}),t("q-card",{staticClass:"q-pa-none q-mx-none"},[t("q-card-section",{attrs:{horizontal:""}},[t("q-card-section",{staticClass:"col q-ma-none q-pa-none"},[t("q-card-section",{staticClass:"row wrap justify-between"},[t("div",{staticClass:"text-h4"},[e._v("\n            "+e._s(e.$t("Pipeline Templates"))+"\n          ")]),t("div",{staticClass:"row q-gutter-md"},[t("div",{staticStyle:{width:"300px"}},[t("q-input",{attrs:{outlined:"",dense:"",debounce:"300",placeholder:e.$t("Search")},scopedSlots:e._u([{key:"append",fn:function(){return[e.searchFilter.length?t("q-btn",{attrs:{dense:"",flat:"",icon:"close"},on:{click:function(t){e.searchFilter=""}}}):e._e(),t("q-icon",{attrs:{name:"o_search"}})]},proxy:!0}]),model:{value:e.searchFilter,callback:function(t){e.searchFilter=t},expression:"searchFilter"}})],1)])]),t("q-card-section",[t("q-table",{attrs:{data:e.tableData,columns:e.columns,"row-key":"pipelineTemplateUid",dense:"","no-data-label":e.$t("No Pipeline Template to display."),filter:e.searchFilter,loading:e.dataLoading,"rows-per-page-label":e.$t("Pipeline Templates per page:"),pagination:e.pagination,grid:"","hide-header":""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"item",fn:function(a){return[t("PipelineTemplate",e._b({attrs:{topIndicator:"Visible"!==a.row.status?{text:a.row.status,showBar:!0,icon:"o_warning",color:"deep-orange"}:{}}},"PipelineTemplate",a.row,!1))]}}])})],1)],1),t("q-separator",{attrs:{vertical:""}}),t("q-card-actions",{staticClass:"q-pa-md",attrs:{vertical:""}},[t("q-btn",{attrs:{icon:"refresh",color:"primary",loading:e.dataLoading},on:{click:function(t){return e.reloadEzMarketPipelineTemplates()}}},[t("q-tooltip",{attrs:{"content-style":"font-size: 1rem;"}},[e._v("\n                "+e._s(e.$t("Reload"))+"\n              ")])],1)],1)],1)],1)],1)},n=[],i=a("2f62"),o=a("a87d"),s=a("f423"),r=a("fa89"),c=a("7c4c"),d=a("541d");null==c["a"].getDefaultLocale()&&c["a"].addDefaultLocale(d);var p={name:"PageMarketPipelineTemplates",mixins:[o["a"]],components:{BreadCrumbs:s["a"],PipelineTemplate:r["a"]},data(){return{searchFilter:"",columns:[{name:"actions",align:"center",label:this.$t("Actions"),field:"actions",sortable:!1},{name:"iconPicture",align:"center",label:this.$t("Icon / Logo"),field:"iconPicture",sortable:!1},{name:"name",align:"center",label:this.$t("Pipeline Template Name"),field:"name",sortable:!0,classes:"",style:"white-space: pre-line;"},{name:"pipelineTemplateCollectionStats",align:"center",label:this.$t("Collection"),field:e=>e.stats?`${e.stats.collectionShipper||""}${e.stats.collectionMethod||""}`:null,sortable:!0},{name:"pipelineTemplateFieldsMappingStats",align:"center",label:this.$t("Fields Mapping"),field:e=>e.stats&&e.stats.detectedFields>0?(e.stats.mappedFields||0)/e.stats.detectedFields*100:null,sortable:!0},{name:"publisher",align:"center",label:this.$t("Publisher"),field:"publisher",sortable:!0},{name:"created",align:"center",label:this.$t("Created"),field:"created",sortable:!0},{name:"modified",align:"center",label:this.$t("Modified"),field:"modified",sortable:!0},{name:"status",align:"center",label:this.$t("Status"),field:"status",sortable:!0}],pagination:{sortBy:"created",descending:!0,rowsPerPage:10},dataLoading:!1}},computed:{...Object(i["d"])("mainStore",["collectionMethodsOptions","collectionShippersOptions","ezMarketPipelineTemplates"]),tableData(){return this.ezMarketPipelineTemplates},breadCrumbs(){return[{icon:"o_home",link:"/Welcome"},{title:this.$t("EZ Market Place"),link:"/MarketPlace"},{title:this.$t("Pipeline Templates")}]}},methods:{...Object(i["b"])("mainStore",["reloadEzMarketPipelineTemplates"]),timeAgo(e){let t=this.$t("Some time ago");try{const a=new c["a"]("en-US");t=a.format(new Date(e))}catch(a){}return t},collectionShipperByValue(e){const t={value:"unknown",label:this.$t("Unknown or not set"),icon:"unknown",outputFormat:"json"};return e&&e.length&&this.collectionShippersOptions.find((t=>t.value&&t.value===e))||t},collectionMethodByValue(e){const t={value:"unknown",label:this.$t("Unknown or not set"),icon:"help_center"};return e&&e.length&&this.collectionMethodsOptions.find((t=>t.value&&t.value===e))||t}},mounted(){this.ezMarketPipelineTemplates&&this.ezMarketPipelineTemplates.length||this.reloadEzMarketPipelineTemplates()}},m=p,u=a("2877"),h=a("9989"),b=a("e359"),g=a("b498"),f=a("65c6"),k=a("9c40"),w=a("6ac5"),P=a("f09f"),q=a("a370"),M=a("27f9"),T=a("0016"),$=a("eaac"),y=a("eb85"),C=a("4b7e"),_=a("05c0"),v=a("eebe"),S=a.n(v),Q=Object(u["a"])(m,l,n,!1,null,null,null);t["default"]=Q.exports;S()(Q,"components",{QPage:h["a"],QHeader:b["a"],QColor:g["a"],QToolbar:f["a"],QBtn:k["a"],QToolbarTitle:w["a"],QCard:P["a"],QCardSection:q["a"],QInput:M["a"],QIcon:T["a"],QTable:$["a"],QSeparator:y["a"],QCardActions:C["a"],QTooltip:_["a"]})}}]);