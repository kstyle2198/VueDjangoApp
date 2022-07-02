(function(t){function e(e){for(var r,i,n=e[0],l=e[1],c=e[2],v=0,u=[];v<n.length;v++)i=n[v],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,n=1;n<a.length;n++){var l=a[n];0!==o[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={home:0},s=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("7cf4")},"402c":function(t,e,a){"use strict";var r=a("2b0e"),o=a("f309");r["a"].use(o["a"]),e["a"]=new o["a"]({})},"7cf4":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("MainMenu"),a("v-main",[a("HelloWorld")],1),a("v-footer",{attrs:{app:""}},[a("span",[t._v("© 2022")])])],1)},s=[],i=a("add6"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{cols:"12"}},[r("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),r("v-col",{staticClass:"mb-4"},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Home ")]),r("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),r("br"),t._v(" please join our online "),r("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v(" Discord Community ")])])]),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),r("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[r("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),r("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return r("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},l=[],c={name:"HelloWorld",data:()=>({ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]})},d=c,v=a("2877"),u=a("6544"),p=a.n(u),f=a("62ad"),g=a("a523"),m=a("adda"),h=a("0fd9"),b=Object(v["a"])(d,n,l,!1,null,null,null),w=b.exports;p()(b,{VCol:f["a"],VContainer:g["a"],VImg:m["a"],VRow:h["a"]});var y={components:{MainMenu:i["a"],HelloWorld:w}},_=y,x=a("7496"),k=a("553a"),C=a("f6c4"),V=Object(v["a"])(_,o,s,!1,null,null,null),j=V.exports;p()(V,{VApp:x["a"],VFooter:k["a"],VMain:C["a"]});var O=a("402c");r["a"].config.productionTip=!1,new r["a"]({vuetify:O["a"],render:t=>t(j)}).$mount("#app")},"9b19":function(t,e,a){t.exports=a.p+"static/img/logo.07d1e22e.svg"},add6:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":"",color:"indigo",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",[t._v("VueDjangoAPP")]),a("v-spacer"),a("v-btn",{attrs:{text:"",href:"/"}},[t._v("Home")]),a("v-btn",{attrs:{text:"",href:"/blog/post/list/"}},[t._v("Blog")]),a("v-btn",{attrs:{text:"",href:"/admin/"}},[t._v("Admin")]),a("v-btn",{attrs:{text:""}},[t._v("/")]),a("v-btn",{attrs:{text:"",href:"post_list.html"}},[t._v("PostList")]),a("v-btn",{attrs:{text:"",href:"post_detail.html"}},[t._v("PostDetail")]),a("v-spacer"),a("v-menu",{attrs:{"offset-y":"",left:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[a("v-btn",t._g(t._b({attrs:{text:""}},"v-btn",o,!1),r),[a("v-icon",[t._v("mdi-account")]),t._v(" "+t._s(t.me.username)+" "),a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",["Anonymous"===t.me.username?[a("v-list-item",{on:{click:function(e){return t.dialogOpen("login")}}},[a("v-list-item-title",[t._v("Login")])],1),a("v-list-item",{on:{click:function(e){return t.dialogOpen("register")}}},[a("v-list-item-title",[t._v("Register")])],1)]:[a("v-list-item",[a("v-list-item-title",[t._v("Logout")])],1),a("v-list-item",{on:{click:function(e){return t.dialogOpen("pwdchg")}}},[a("v-list-item-title",[t._v("Change Password")])],1)]],2)],1)],1),a("v-dialog",{attrs:{"max-width":"450"},model:{value:t.dialog.login,callback:function(e){t.$set(t.dialog,"login",e)},expression:"dialog.login"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Login form")])],1),a("v-card-text",[a("v-form",{ref:"loginForm",attrs:{id:"login-form"}},[a("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),a("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){return t.cancel("login")}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"primary"},on:{click:function(e){return t.save("login")}}},[t._v(" Login ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"450"},model:{value:t.dialog.register,callback:function(e){t.$set(t.dialog,"register",e)},expression:"dialog.register"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"success",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Register form")])],1),a("v-card-text",[a("v-form",{ref:"registerForm",attrs:{id:"register-form"}},[a("v-text-field",{attrs:{label:"Username",name:"username","prepend-icon":"mdi-account",type:"text"}}),a("v-text-field",{attrs:{label:"Password",name:"password1","prepend-icon":"mdi-lock",type:"password"}}),a("v-text-field",{attrs:{label:"Password again",name:"password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.dialog.register=!1}}},[t._v(" Cancel ")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"success"},on:{click:function(e){t.dialog.register=!1}}},[t._v(" Register ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"450"},model:{value:t.dialog.pwdchg,callback:function(e){t.$set(t.dialog,"pwdchg",e)},expression:"dialog.pwdchg"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"warning",dark:"",flat:""}},[a("v-toolbar-title",[t._v("Password change form")])],1),a("v-card-text",[a("v-form",{ref:"pwdchgForm",attrs:{id:"pwdchg-form"}},[a("v-text-field",{attrs:{label:"Old Password",name:"old_password","prepend-icon":"mdi-lock",type:"password"}}),a("v-text-field",{attrs:{label:"New Password",name:"new_password1","prepend-icon":"mdi-lock",type:"password"}}),a("v-text-field",{attrs:{label:"New Password again",name:"new_password2","prepend-icon":"mdi-lock",type:"password"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v("Cancel")]),a("v-btn",{staticClass:"mr-5",attrs:{color:"warning"},on:{click:function(e){t.dialog.pwdchg=!1}}},[t._v(" Password change ")])],1)],1)],1)],1)},o=[],s=a("bc3a"),i=a.n(s);i.a.defaults.xsrfCookieName="csrftoken",i.a.defaults.xsrfHeaderName="X-CSRFToken";var n={data:()=>({drawer:null,dialog:{login:!1,register:!1,pwdchg:!1},me:{username:"Anonymous"},items:[{title:"Dashboard",icon:"mdi-view-dashboard"},{title:"Photos111",icon:"mdi-image"},{title:"About1111",icon:"mdi-help-box"}]}),methods:{dialogOpen(t){console.log("dialogOpen()...",t),"login"===t?this.dialog.login=!0:"register"===t?this.dialog.register=!0:"pwdchg"===t&&(this.dialog.pwdchg=!0)},cancel(t){console.log("cancel()...",t),"login"===t?(this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},save(t){console.log("save()...",t),"login"===t?(this.login(),this.dialog.login=!1,this.$refs.loginForm.reset()):"register"===t?(this.register(),this.dialog.register=!1,this.$refs.registerForm.reset()):"pwdchg"===t&&(this.pwdchg(),this.dialog.pwdchg=!1,this.$refs.pwdchgForm.reset())},login(){console.log("login()...");const t=new FormData(document.getElementById("login-form"));i.a.post("/api/login/",t).then(t=>{console.log("LOGIN POST RES",t),alert(`user ${t.data.username} login success ^^;`),this.me=t.data}).catch(t=>{console.log("LOGIN POST ERR.RESPONSE",t.response),alert("login failure!!!")})}}},l=n,c=a("2877"),d=a("6544"),v=a.n(d),u=a("40dc"),p=a("5bc1"),f=a("8336"),g=a("b0af"),m=a("99d9"),h=a("169a"),b=a("4bd4"),w=a("132d"),y=a("8860"),_=a("da13"),x=a("5d23"),k=a("34c3"),C=a("e449"),V=a("f774"),j=a("2fa4"),O=a("8654"),P=a("71d9"),F=a("2a7f"),L=Object(c["a"])(l,r,o,!1,null,null,null);e["a"]=L.exports;v()(L,{VAppBar:u["a"],VAppBarNavIcon:p["a"],VBtn:f["a"],VCard:g["a"],VCardActions:m["a"],VCardText:m["b"],VDialog:h["a"],VForm:b["a"],VIcon:w["a"],VList:y["a"],VListItem:_["a"],VListItemContent:x["a"],VListItemIcon:k["a"],VListItemTitle:x["b"],VMenu:C["a"],VNavigationDrawer:V["a"],VSpacer:j["a"],VTextField:O["a"],VToolbar:P["a"],VToolbarTitle:F["a"]})}});
//# sourceMappingURL=home.bf3d5651.js.map