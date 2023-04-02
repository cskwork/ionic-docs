"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[78931],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return r?n.createElement(f,c(c({ref:t},d),{},{components:r})):n.createElement(f,c({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47758:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010),o=r(39960),c=r(44996);const i="card_hPMa";const s=function(e){const t=void 0===e.href,r=void 0!==e.href&&/^http/.test(e.href),s="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),l=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||l)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),l&&n.createElement("img",{src:(0,c.Z)(l),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,r)=>n.createElement("img",{src:(0,c.Z)(t),className:"Card-icon "+(r===e.activeIndex?"Card-icon-active":""),"data-index":r,key:r})))),e.header&&s,n.createElement("div",{className:"Card-content"},e.children))),p=(0,a.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,a.Z)(i,"docs-card")},d)):r?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,a.Z)(i,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(o.default,{to:e.href,className:(0,a.Z)(i,"docs-card")},d))}},53445:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},19303:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(47758),c=r(53445);const i={title:"Next Steps"},s=void 0,l={unversionedId:"intro/next",id:"intro/next",isDocsHomePage:!1,title:"Next Steps",description:"Next Steps for Starting an App: Choose Your JavaScript Framework",source:"@site/docs/intro/next.md",sourceDirName:"intro",slug:"/intro/next",permalink:"/docs/intro/next",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/intro/next.md",tags:[],version:"current",frontMatter:{title:"Next Steps"}},d=[{value:"Build Your First App",id:"build-your-first-app",children:[],level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Next Steps for Starting an App: Choose Your JavaScript Framework"),(0,a.kt)("meta",{name:"description",content:"In order to build an Ionic app, you first need to choose the JavaScript framework you plan to use. Learn more about next steps for starting an app with Ionic."})),(0,a.kt)("h2",{id:"build-your-first-app"},"Build Your First App"),(0,a.kt)("p",null,"Pick the JavaScript framework you plan to use while building your Ionic app:"),(0,a.kt)(c.Z,{mdxType:"DocsCards"},(0,a.kt)(o.Z,{header:"Start with Angular",href:"../angular/your-first-app",icon:"/icons/logo-angular-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Angular.")),(0,a.kt)(o.Z,{header:"Start with React",href:"../react/your-first-app",icon:"/icons/logo-react-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with React.")),(0,a.kt)(o.Z,{header:"Start with Vue",href:"../vue/your-first-app",icon:"/icons/logo-vue-icon.png",mdxType:"DocsCard"},(0,a.kt)("p",null,"A complete guide to get you up to speed with the basics of building Ionic apps with Vue."))))}m.isMDXComponent=!0}}]);