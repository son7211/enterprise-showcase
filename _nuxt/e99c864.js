(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(t,e,o){var content=o(292);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("7388ab72",content,!0,{sourceMap:!1})},228:function(t,e,o){var content=o(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("65b7e416",content,!0,{sourceMap:!1})},251:function(t){t.exports=JSON.parse('[{"name":"code-scanning-javascript-demo","full_name":"octo-faq/code-scanning-javascript-demo","description":"GitHub Advanced Security Code Scanning demo for Javascript using an application with the Zip Slip Vulnerability. ","html_url":"https://github.com/octo-faq/code-scanning-javascript-demo","language":"JavaScript","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["javascript","example-project","code-scanning","advanced-security"]},{"name":"advanced-security-terraform","full_name":"octo-faq/advanced-security-terraform","description":"GitHub Advanced Security Code Scanning tutorial for Terraform. Based on Terragoat and tfsec.  Fork of https://github.com/bridgecrewio/terragoat","html_url":"https://github.com/octo-faq/advanced-security-terraform","language":"HCL","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["terraform","example-project","code-scanning","advanced-security"]},{"name":"enterprise-showcase","full_name":"octo-faq/enterprise-showcase","description":"Showcase all the great work that your peers are working on and happily sharing internally.","html_url":"https://github.com/octo-faq/enterprise-showcase","language":"Vue","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["github-pages","example-project","github-actions"]},{"name":"codespaces-demo-python","full_name":"octo-faq/codespaces-demo-python","description":"A collection of codespace examples created for demonstration purposes.","html_url":"https://github.com/octo-faq/codespaces-demo-python","language":null,"stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["python","example-project","codespaces"]},{"name":"advanced-security-java-webgoat","full_name":"octo-faq/advanced-security-java-webgoat","description":"GitHub Advanced Security Code Scanning demo using WebGoat, a deliberate insecure web application maintained by OWASP designed to teach web application security lessons.","html_url":"https://github.com/octo-faq/advanced-security-java-webgoat","language":"JavaScript","stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["java","example-project","code-scanning","github-advanced-security"]},{"name":"actions-starter-workflows","full_name":"octo-faq/actions-starter-workflows","description":"Looking for GitHub Actions Starter workflows? Look no further! ","html_url":"https://github.com/octo-faq/actions-starter-workflows","language":null,"stargazers_count":0,"watchers_count":0,"forks_count":0,"topics":["example-project","github-actions"]}]')},256:function(t,e,o){"use strict";o(225),o(227),o(27),o(55),o(20),o(182);var n=o(1),r=o(77),c=o(251);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{clipped:!0,drawer:!1,fixed:!1,navigationItems:[{icon:"mdi-apps",title:"Explore",to:"/"},{icon:"mdi-bookshelf",title:"Collections",to:"/collections"},{icon:"mdi-information-outline",title:"Resources",to:"/resources"}],title:"Octo Showcase",descriptionLimit:90,searchEntries:[],isLoading:!1,searchSelection:"",search:""}},computed:f(f({},Object(r.c)({searchEngine:"getSearchEngine",repositoryMap:"getRepositoryMap"})),{},{items:function(){var t=this;return this.searchEntries.map((function(e){if(e.item.description){var o=e.item.description.length>t.descriptionLimit?e.item.description.slice(0,t.descriptionLimit)+"...":e.item.description;return Object.assign({},e.item,{description:o})}return Object.assign({},e.item,{description:""})}))}}),watch:{search:function(t){this.isLoading||(this.isLoading=!0,t&&0!==t.length?this.searchEntries=this.searchEngine.search(t):this.searchEntries=[],this.isLoading=!1)}},created:function(){this.loadRepositories(c)},methods:f(f({},Object(r.b)({loadRepositories:"loadRepositories"})),{},{searchResultSelected:function(){this.searchSelection&&window.open(this.repositoryMap[this.searchSelection].html_url,"_blank")}})},h=(o(303),o(89)),m=o(127),v=o.n(m),y=o(404),_=o(411),w=o(405),x=o(409),S=o(188),k=o(412),j=o(413),O=o(406),E=o(185),V=o(187),M=o(119),A=o(186),L=o(52),C=o(407),P=o(410),z=o(408),I=o(252),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[o("v-navigation-drawer",{attrs:{clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",t._l(t.navigationItems,(function(e,i){return o("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),o("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[o("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),o("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-autocomplete",{staticClass:"searchbox",attrs:{items:t.items,loading:t.isLoading,"search-input":t.search,color:"white","hide-no-data":"","no-filter":"",clearable:"","item-text":"full_name","item-value":"full_name",label:"Search repositories",placeholder:"Start typing to Search","prepend-icon":"mdi-database-search"},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e},change:t.searchResultSelected},scopedSlots:t._u([{key:"item",fn:function(e){var n=e.item;return[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(n.full_name)}}),t._v(" "),o("v-list-item-subtitle",{domProps:{textContent:t._s(n.description)}}),t._v(" "),o("v-chip-group",{attrs:{column:""}},t._l(n.topics,(function(e){return o("v-chip",{key:e,attrs:{small:""}},[t._v("\n              "+t._s(e)+"\n            ")])})),1)],1)]}}]),model:{value:t.searchSelection,callback:function(e){t.searchSelection=e},expression:"searchSelection"}})],1),t._v(" "),o("v-main",[o("v-container",[o("nuxt")],1)],1),t._v(" "),o("v-navigation-drawer",{attrs:{temporary:"",fixed:""}},[o("v-list",[o("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[o("v-list-item-action",[o("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),o("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),o("v-footer",{attrs:{absolute:!t.fixed,app:""}},[o("span",[o("a",{attrs:{href:"https://github.com/octo-faq/enterprise-showcase"}},[t._v("github.com/octo-faq/enterprise-showcase")])])])],1)}),[],!1,null,"7f2126a4",null);e.a=component.exports;v()(component,{VApp:y.a,VAppBar:_.a,VAppBarNavIcon:w.a,VAutocomplete:x.a,VChip:S.a,VChipGroup:k.a,VContainer:j.a,VFooter:O.a,VIcon:E.a,VList:V.a,VListItem:M.a,VListItemAction:A.a,VListItemContent:L.a,VListItemSubtitle:L.b,VListItemTitle:L.c,VMain:C.a,VNavigationDrawer:P.a,VSpacer:z.a,VToolbarTitle:I.a})},267:function(t,e,o){o(268),t.exports=o(269)},291:function(t,e,o){"use strict";o(223)},292:function(t,e,o){(e=o(7)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},297:function(t,e,o){var content=o(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(8).default)("5c670272",content,!0,{sourceMap:!1})},298:function(t,e,o){(e=o(7)(!1)).push([t.i,'.gradient-text{background:linear-gradient(270.97deg,#ffe580 -21.36%,#ff7571 -2.45%,#ea5dad 26.84%,#c2a0fd 64.15%,#3bf0e4 108.29%,#b2f4b6 159.03%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.hxl{display:block;font-family:"alliance",mono,sans-serif!important;font-size:54px!important;line-height:1.1;font-weight:500!important;letter-spacing:-.03em;margin-bottom:24px}@media(min-width:768px){.hxl{font-size:72px!important}}@media(min-width:400px){.hxl{font-size:68px!important}}@media(min-width:420px){.hxl{font-size:72px!important}}@media(min-width:544px){.hxl{font-size:84px!important}}@media(min-width:768px){.hxl{font-size:96px!important}}.plain-link{color:inherit!important;text-decoration:inherit}',""]),t.exports=e},303:function(t,e,o){"use strict";o(228)},304:function(t,e,o){(e=o(7)(!1)).push([t.i,".searchbox[data-v-7f2126a4]{margin-top:20px}",""]),t.exports=e},386:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return l})),o.d(e,"mutations",(function(){return f})),o.d(e,"actions",(function(){return d})),o.d(e,"getters",(function(){return h}));var n=o(253);function r(t,e){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(t);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){o&&(t=o);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,f=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var t=o.next();return l=t.done,t},e:function(t){f=!0,r=t},f:function(){try{l||null==o.return||o.return()}finally{if(f)throw r}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var l=function(){return{repositories:[],repositoryMap:{},topicMap:{},searchEngine:null}},f={repositories:function(t,e){t.repositories=e},repositoryMap:function(t,e){t.repositoryMap=e},topicMap:function(t,e){t.topicMap=e},searchEngine:function(t,e){t.searchEngine=e}},d={loadRepositories:function(t,e){var o,c=t.commit,l=new n.a(e,{keys:["full_name","description","topics"]}),map={},f={},d=r(e);try{for(d.s();!(o=d.n()).done;){var h=o.value;map[h.full_name]=h;var m,v=r(h.topics);try{for(v.s();!(m=v.n()).done;){var y=m.value;f[y]||(f[y]={}),f[y][h.full_name]=h}}catch(t){v.e(t)}finally{v.f()}}}catch(t){d.e(t)}finally{d.f()}c("repositories",e),c("repositoryMap",map),c("topicMap",f),c("searchEngine",l)}},h={getRepositories:function(t){return t.repositories},getRepositoryMap:function(t){return t.repositoryMap},getTopicMap:function(t){return t.topicMap},getTopicRepositories:function(t){return function(e){return t.topicMap[e]}},getSearchEngine:function(t){return t.searchEngine}}},81:function(t,e,o){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(o(291),o(89)),c=o(127),l=o.n(c),f=o(404),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[267,8,1,9]]]);