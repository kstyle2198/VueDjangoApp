(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],v=0,f=[];v<o.length;v++)s=o[v],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={home:0},i=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("7cf4")},"402c":function(t,e,a){"use strict";var r=a("2b0e"),n=a("f309");r["a"].use(n["a"]),e["a"]=new n["a"]({})},"7cf4":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("MainMenu"),a("v-main",[a("HelloWorld")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2022")])])],1)},i=[],s=a("add6"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Home ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v(" please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v(" Discord Community ")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},l=[],c={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},u=c,v=a("2877"),f=a("6544"),p=a.n(f),m=a("62ad"),d=a("a523"),h=a("adda"),b=a("0fd9"),y=Object(v["a"])(u,o,l,!1,null,null,null),_=y.exports;p()(y,{VCol:m["a"],VContainer:d["a"],VImg:h["a"],VRow:b["a"]});var g={components:{MainMenu:s["a"],HelloWorld:_}},x=g,w=a("7496"),j=a("553a"),V=a("f6c4"),k=Object(v["a"])(x,n,i,!1,null,null,null),C=k.exports;p()(k,{VApp:w["a"],VFooter:j["a"],VMain:V["a"]});var O=a("402c");r["a"].config.productionTip=!1,new r["a"]({vuetify:O["a"],render:t=>t(C)}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.07d1e22e.svg"},add6:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("VueDjangoAPP")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[t._v(" Home ")]),a("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v(" Blog ")]),a("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v(" Admin ")]),a("v-btn",{attrs:{text:""}},[t._v(" / ")]),a("v-btn",{attrs:{text:"",href:"post_list.html"}},[t._v(" PostList ")]),a("v-btn",{attrs:{text:"",href:"post_detail.html"}},[t._v(" PostDetail ")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("mdi-account")]),t._v(" Anonymous "),a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",[a("v-list-item-title",[t._v("Login")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Signup")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Logout")])],1),a("v-list-item",[a("v-list-item-title",[t._v("Change Password")])],1)],1)],1)],1)],1)},n=[],i={data:()=>({drawer:null,items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos111",icon:"mdi-image"},{title:"About1111",icon:"mdi-help-box"}]})},s=i,o=a("2877"),l=a("6544"),c=a.n(l),u=a("40dc"),v=a("5bc1"),f=a("8336"),p=a("132d"),m=a("8860"),d=a("da13"),h=a("5d23"),b=a("34c3"),y=a("e449"),_=a("f774"),g=a("2fa4"),x=a("2a7f"),w=Object(o["a"])(s,r,n,!1,null,null,null);e["a"]=w.exports;c()(w,{VAppBar:u["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VIcon:p["a"],VList:m["a"],VListItem:d["a"],VListItemContent:h["a"],VListItemIcon:b["a"],VListItemTitle:h["b"],VMenu:y["a"],VNavigationDrawer:_["a"],VSpacer:g["a"],VToolbarTitle:x["a"]})}});
//# sourceMappingURL=home.84b8540a.js.map