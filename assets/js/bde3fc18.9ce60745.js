"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[70131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40892:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Deploying a Desktop App",sidebar_label:"Electron Desktop App"},a=void 0,p={unversionedId:"deployment/desktop-app",id:"deployment/desktop-app",isDocsHomePage:!1,title:"Deploying a Desktop App",description:"Building a Desktop Application for Windows and macOS App Stores",source:"@site/docs/deployment/desktop-app.md",sourceDirName:"deployment",slug:"/deployment/desktop-app",permalink:"/docs/deployment/desktop-app",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/deployment/desktop-app.md",tags:[],version:"current",frontMatter:{title:"Deploying a Desktop App",sidebar_label:"Electron Desktop App"}},l=[{value:"macOS App",id:"macos-app",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Publishing",id:"publishing",children:[],level:3}],level:2},{value:"Windows App",id:"windows-app",children:[{value:"Requirements",id:"requirements-1",children:[],level:3},{value:"Publishing",id:"publishing-1",children:[],level:3}],level:2}],s={toc:l},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Building a Desktop Application for Windows and macOS App Stores"),(0,o.kt)("meta",{name:"description",content:"Building an Ionic desktop application for Windows and macOS app stores lets you reuse 100% of your code. Learn more about deploying a desktop app with Ionic."})),(0,o.kt)("p",null,'Building a desktop app with Ionic allows developers to reuse 100% of their code and ship a traditional desktop app while still having access to all the native device features, like push notifications. This guide assumes familiarity with Electron, and does not go into "how" to build an electron app. For that, check out the official ',(0,o.kt)("a",{href:"https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app",target:"_blank"},"Electron guide"),"."),(0,o.kt)("h2",{id:"macos-app"},"macOS App"),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"There are two hard requirements for publishing an app on the macOS app store"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Latest version of ",(0,o.kt)("a",{parentName:"li",href:"https://itunes.apple.com/us/app/xcode/id497799835?mt=12"},"Xcode")),(0,o.kt)("li",{parentName:"ul"},"An active developer account ($100 through Apple's developer portal)")),(0,o.kt)("h3",{id:"publishing"},"Publishing"),(0,o.kt)("p",null,"The Electron team has a detailed guide on how to publish an app for macOS. Please review ",(0,o.kt)("a",{parentName:"p",href:"https://electronjs.org/docs/tutorial/mac-app-store-submission-guide"},"the docs here.")),(0,o.kt)("h2",{id:"windows-app"},"Windows App"),(0,o.kt)("h3",{id:"requirements-1"},"Requirements"),(0,o.kt)("p",null,"There are two hard requirements for publishing an app on the Windows app store"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Windows 10 with Anniversary Update (released August 2nd, 2016)"),(0,o.kt)("li",{parentName:"ul"},"The Windows 10 SDK, ",(0,o.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk"},"download here")),(0,o.kt)("li",{parentName:"ul"},"Node"),(0,o.kt)("li",{parentName:"ul"},"electron-windows-store CLI")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"electron-windows-store")," can be installed via npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g electron-windows-store\n")),(0,o.kt)("h3",{id:"publishing-1"},"Publishing"),(0,o.kt)("p",null,"Like macOS, Electron has a detailed guide on how to publish an app for Windows. Please review ",(0,o.kt)("a",{parentName:"p",href:"https://electronjs.org/docs/tutorial/windows-store-guide"},"the docs here")))}d.isMDXComponent=!0}}]);