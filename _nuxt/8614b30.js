(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(t,e,n){var content=n(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("7388ab72",content,!0,{sourceMap:!1})},228:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("65b7e416",content,!0,{sourceMap:!1})},251:function(t){t.exports=JSON.parse('[{"name":"code-scanning-javascript-demo","full_name":"octo-faq/code-scanning-javascript-demo","description":"GitHub Advanced Security Code Scanning demo for Javascript using an application with the Zip Slip Vulnerability. ","html_url":"https://github.com/octo-faq/code-scanning-javascript-demo","language":"JavaScript","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["javascript","example-project","code-scanning","advanced-security"]},{"name":"advanced-security-terraform","full_name":"octo-faq/advanced-security-terraform","description":"GitHub Advanced Security Code Scanning tutorial for Terraform. Based on Terragoat and tfsec.  Fork of https://github.com/bridgecrewio/terragoat","html_url":"https://github.com/octo-faq/advanced-security-terraform","language":"HCL","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["terraform","example-project","code-scanning","advanced-security"]},{"name":"codespaces-demo-python","full_name":"octo-faq/codespaces-demo-python","description":"A collection of codespace examples created for demonstration purposes.","html_url":"https://github.com/octo-faq/codespaces-demo-python","language":null,"stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["python","example-project","codespaces"]},{"name":"advanced-security-java-webgoat","full_name":"octo-faq/advanced-security-java-webgoat","description":"GitHub Advanced Security Code Scanning demo using WebGoat, a deliberate insecure web application maintained by OWASP designed to teach web application security lessons.","html_url":"https://github.com/octo-faq/advanced-security-java-webgoat","language":"JavaScript","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["java","example-project","code-scanning","github-advanced-security"]}]')},256:function(t,e,n){"use strict";n(225),n(227),n(27),n(55),n(20),n(182);var r=n(1),o=n(77),c=n(251);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{clipped:!0,drawer:!1,fixed:!1,navigationItems:[{icon:"mdi-apps",title:"Explore",to:"/"},{icon:"mdi-bookshelf",title:"Collections",to:"/collections"},{icon:"mdi-information-outline",title:"Resources",to:"/resources"}],title:"Octo Showcase",descriptionLimit:90,searchEntries:[],isLoading:!1,searchSelection:"",search:""}},computed:d(d({},Object(o.c)({searchEngine:"getSearchEngine",repositoryMap:"getRepositoryMap"})),{},{items:function(){var t=this;return this.searchEntries.map((function(e){if(e.item.description){var n=e.item.description.length>t.descriptionLimit?e.item.description.slice(0,t.descriptionLimit)+"...":e.item.description;return Object.assign({},e.item,{description:n})}return Object.assign({},e.item,{description:""})}))}}),watch:{search:function(t){this.isLoading||(this.isLoading=!0,t&&0!==t.length?this.searchEntries=this.searchEngine.search(t):this.searchEntries=[],this.isLoading=!1)}},created:function(){this.loadRepositories(c)},methods:d(d({},Object(o.b)({loadRepositories:"loadRepositories"})),{},{searchResultSelected:function(){this.searchSelection&&window.open(this.repositoryMap[this.searchSelection].html_url,"_blank")}})},m=(n(303),n(89)),h=n(127),v=n.n(h),y=n(404),_=n(411),x=n(405),w=n(409),S=n(188),j=n(412),O=n(413),k=n(406),E=n(185),M=n(187),V=n(119),A=n(186),C=n(52),L=n(407),P=n(410),I=n(408),z=n(252),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.navigationItems,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-autocomplete",{staticClass:"searchbox",attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","no-filter":"",clearable:"","item-text":"full_name","item-value":"full_name",label:"Search repositories",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.searchResultSelected},scopedSlots:t._u([{key:"item",fn:function(e){var r=e.item;return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(r.full_name)}}),t._v(" "),n("v-list-item-subtitle",{domProps:{textContent:t._s(r.description)}}),t._v(" "),n("v-chip-group",{attrs:{column:""}},t._l(r.topics,(function(e){return n("v-chip",{key:e,attrs:{small:""}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)],1)]}}]),model:{value:t.searchSelection,callback:function(e){t.searchSelection=e},expression:"searchSelection"}})],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{temporary:"",fixed:""}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[n("a",{attrs:{href:"https://github.com/octo-faq/enterprise-showcase"}},[t._v("github.com/octo-faq/enterprise-showcase")])])])],1)}),[],!1,null,"7f2126a4",null);e.a=component.exports;v()(component,{VApp:y.a,VAppBar:_.a,VAppBarNavIcon:x.a,VAutocomplete:w.a,VChip:S.a,VChipGroup:j.a,VContainer:O.a,VFooter:k.a,VIcon:E.a,VList:M.a,VListItem:V.a,VListItemAction:A.a,VListItemContent:C.a,VListItemSubtitle:C.b,VListItemTitle:C.c,VMain:L.a,VNavigationDrawer:P.a,VSpacer:I.a,VToolbarTitle:z.a})},267:function(t,e,n){n(268),t.exports=n(269)},291:function(t,e,n){"use strict";n(223)},292:function(t,e,n){(e=n(7)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},297:function(t,e,n){var content=n(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("5c670272",content,!0,{sourceMap:!1})},298:function(t,e,n){(e=n(7)(!1)).push([t.i,'.gradient-text{background:linear-gradient(270.97deg,#ffe580 -21.36%,#ff7571 -2.45%,#ea5dad 26.84%,#c2a0fd 64.15%,#3bf0e4 108.29%,#b2f4b6 159.03%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hxl{display:block;font-family:"alliance",mono,sans-serif!important;font-size:54px!important;line-height:1.1;font-weight:500!important;letter-spacing:-.03em;margin-bottom:24px}@media(min-width:768px){.hxl{font-size:72px!important}}@media(min-width:400px){.hxl{font-size:68px!important}}@media(min-width:420px){.hxl{font-size:72px!important}}@media(min-width:544px){.hxl{font-size:84px!important}}@media(min-width:768px){.hxl{font-size:96px!important}}.plain-link{color:inherit!important;text-decoration:inherit}',""]),t.exports=e},303:function(t,e,n){"use strict";n(228)},304:function(t,e,n){(e=n(7)(!1)).push([t.i,".searchbox[data-v-7f2126a4]{margin-top:20px}",""]),t.exports=e},386:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return l})),n.d(e,"mutations",(function(){return d})),n.d(e,"actions",(function(){return f})),n.d(e,"getters",(function(){return m}));var r=n(253);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==n.return||n.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var l=function(){return{repositories:[],repositoryMap:{},topicMap:{},searchEngine:null}},d={repositories:function(t,e){t.repositories=e},repositoryMap:function(t,e){t.repositoryMap=e},topicMap:function(t,e){t.topicMap=e},searchEngine:function(t,e){t.searchEngine=e}},f={loadRepositories:function(t,e){var n,c=t.commit,l=new r.a(e,{keys:["full_name","description","topics"]}),map={},d={},f=o(e);try{for(f.s();!(n=f.n()).done;){var m=n.value;map[m.full_name]=m;var h,v=o(m.topics);try{for(v.s();!(h=v.n()).done;){var y=h.value;d[y]||(d[y]={}),d[y][m.full_name]=m}}catch(t){v.e(t)}finally{v.f()}}}catch(t){f.e(t)}finally{f.f()}c("repositories",e),c("repositoryMap",map),c("topicMap",d),c("searchEngine",l)}},m={getRepositories:function(t){return t.repositories},getRepositoryMap:function(t){return t.repositoryMap},getTopicMap:function(t){return t.topicMap},getTopicRepositories:function(t){return function(e){return t.topicMap[e]}},getSearchEngine:function(t){return t.searchEngine}}},81:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(291),n(89)),c=n(127),l=n.n(c),d=n(404),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[267,8,1,9]]]);