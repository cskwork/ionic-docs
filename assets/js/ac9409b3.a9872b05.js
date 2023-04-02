"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[22642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42068:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const o={title:"ionic doctor list",sidebar_label:"doctor list"},a=void 0,c={unversionedId:"cli/commands/doctor-list",id:"version-v6/cli/commands/doctor-list",isDocsHomePage:!1,title:"ionic doctor list",description:"This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.",source:"@site/versioned_docs/version-v6/cli/commands/doctor-list.md",sourceDirName:"cli/commands",slug:"/cli/commands/doctor-list",permalink:"/docs/v6/cli/commands/doctor-list",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/doctor/list.ts",tags:[],version:"v6",frontMatter:{title:"ionic doctor list",sidebar_label:"doctor list"},sidebar:"version-v6/cli",previous:{title:"doctor check",permalink:"/docs/v6/cli/commands/doctor-check"},next:{title:"doctor treat",permalink:"/docs/v6/cli/commands/doctor-treat"}},l=[],s={toc:l},d="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI."))),(0,i.kt)("p",null,"List all issues and their identifiers"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic doctor list\n")),(0,i.kt)("p",null,"Issues can have various tags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"treatable"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic doctor treat")," can attempt to fix the issue"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ignored"),": configured not to be detected in ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic doctor check")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic doctor treat")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"explicit-detection"),": issue is only detected explicitly with ",(0,i.kt)("inlineCode",{parentName:"li"},"ionic doctor check <issue-id>"))),(0,i.kt)("p",null,"You can flip whether an issue is ignored or not by using ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic config set -g doctor.issues.<issue-id>.ignored true/false"),", where ",(0,i.kt)("inlineCode",{parentName:"p"},"<issue-id>")," matches an ID listed with this command."))}p.isMDXComponent=!0}}]);