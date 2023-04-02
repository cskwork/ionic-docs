"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[8322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,b=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49607:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"ionic integrations disable",sidebar_label:"integrations disable"},o=void 0,c={unversionedId:"cli/commands/integrations-disable",id:"cli/commands/integrations-disable",isDocsHomePage:!1,title:"ionic integrations disable",description:"Disable an integration",source:"@site/docs/cli/commands/integrations-disable.md",sourceDirName:"cli/commands",slug:"/cli/commands/integrations-disable",permalink:"/docs/cli/commands/integrations-disable",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/integrations/disable.ts",tags:[],version:"current",frontMatter:{title:"ionic integrations disable",sidebar_label:"integrations disable"},sidebar:"cli",previous:{title:"init",permalink:"/docs/cli/commands/init"},next:{title:"integrations enable",permalink:"/docs/cli/commands/integrations-enable"}},l=[{value:"name",id:"name",children:[],level:3}],s={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Disable an integration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic integrations disable [name]\n")),(0,i.kt)("p",null,"Integrations, such as Cordova, can be disabled with this command."),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"The integration to disable (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"capacitor"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cordova"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"enterprise"),")"))}d.isMDXComponent=!0}}]);