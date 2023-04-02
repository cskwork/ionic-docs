"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[80186],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>v});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return t?o.createElement(v,a(a({ref:n},d),{},{components:t})):o.createElement(v,a({ref:n},d))}));function v(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54174:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={title:"ionic cordova plugin",sidebar_label:"cordova plugin"},a=void 0,l={unversionedId:"cli/commands/cordova-plugin",id:"cli/commands/cordova-plugin",isDocsHomePage:!1,title:"ionic cordova plugin",description:"Install Ionic Cordova Plugin to Manage Updates and Plugin List",source:"@site/docs/cli/commands/cordova-plugin.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-plugin",permalink:"/docs/cli/commands/cordova-plugin",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/plugin.ts",tags:[],version:"current",frontMatter:{title:"ionic cordova plugin",sidebar_label:"cordova plugin"},sidebar:"cli",previous:{title:"cordova platform",permalink:"/docs/cli/commands/cordova-platform"},next:{title:"cordova prepare",permalink:"/docs/cli/commands/cordova-prepare"}},c=[{value:"action",id:"action",children:[],level:3},{value:"plugin",id:"plugin",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Advanced Options",id:"advanced-options",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(d,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Install Ionic Cordova Plugin to Manage Updates and Plugin List"),(0,r.kt)("meta",{name:"description",content:"Install the Ionic Cordova plugin to manage your list of Cordova plugins and all inputs, updates, and more. Read to learn more about the Ionic Cordova plugin."})),(0,r.kt)("p",null,"Manage Cordova plugins"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova plugin [action] [plugin] [options]\n")),(0,r.kt)("p",null,"Like running ",(0,r.kt)("inlineCode",{parentName:"p"},"cordova plugin")," directly, but provides friendly checks."),(0,r.kt)("h3",{id:"action"},"action"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," a plugin; ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"save")," all project plugins"),(0,r.kt)("h3",{id:"plugin"},"plugin"),(0,r.kt)("p",null,"The name of the plugin (corresponds to ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove"),")"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--variable=<KEY=VALUE>"),": Specify plugin variables\n")),(0,r.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--force"),": Force overwrite the plugin if it exists (corresponds to ",(0,r.kt)("inlineCode",{parentName:"li"},"add"),")\n")),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova plugin \n$ ionic cordova plugin add cordova-plugin-inappbrowser@latest\n$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX\n$ ionic cordova plugin rm cordova-plugin-camera\n")))}u.isMDXComponent=!0}}]);