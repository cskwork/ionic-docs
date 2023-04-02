"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[9745],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23770:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"ionic integrations list",sidebar_label:"integrations list"},o=void 0,l={unversionedId:"cli/commands/integrations-list",id:"cli/commands/integrations-list",isDocsHomePage:!1,title:"ionic integrations list",description:"List available and active integrations in your app",source:"@site/docs/cli/commands/integrations-list.md",sourceDirName:"cli/commands",slug:"/cli/commands/integrations-list",permalink:"/docs/cli/commands/integrations-list",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/integrations/list.ts",tags:[],version:"current",frontMatter:{title:"ionic integrations list",sidebar_label:"integrations list"},sidebar:"cli",previous:{title:"integrations enable",permalink:"/docs/cli/commands/integrations-enable"},next:{title:"link",permalink:"/docs/cli/commands/link"}},c=[],s={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"List available and active integrations in your app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic integrations list\n")),(0,i.kt)("p",null,"This command will print the status of integrations in Ionic projects. Integrations can be ",(0,i.kt)("strong",{parentName:"p"},"enabled")," (added and enabled), ",(0,i.kt)("strong",{parentName:"p"},"disabled")," (added but disabled), and ",(0,i.kt)("strong",{parentName:"p"},"not added")," (never added to the project)."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To enable or add integrations, see ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic integrations enable --help")),(0,i.kt)("li",{parentName:"ul"},"To disable integrations, see ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic integrations disable --help"))))}d.isMDXComponent=!0}}]);