"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[97754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),g=o,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=g;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[d]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<r;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93857:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var i=t(87462),o=(t(67294),t(3905));const r={},a="Running Apps",p={unversionedId:"studio/running",id:"version-v6/studio/running",isDocsHomePage:!1,title:"Running Apps",description:"Ionic Studio offers support for serving, running, and deploying apps.",source:"@site/versioned_docs/version-v6/studio/running.md",sourceDirName:"studio",slug:"/studio/running",permalink:"/docs/v6/studio/running",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/studio/running.md",tags:[],version:"v6",frontMatter:{}},l=[{value:"Serving Apps",id:"serving-apps",children:[{value:"Serve Window",id:"serve-window",children:[{value:"Debugging",id:"debugging",children:[],level:4}],level:3}],level:2},{value:"Running Apps",id:"running-apps-1",children:[],level:2},{value:"Installing Apps",id:"installing-apps",children:[],level:2}],s={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-apps"},"Running Apps"),(0,o.kt)("p",null,"Ionic Studio offers support for serving, running, and deploying apps."),(0,o.kt)("p",null,"Serving, running, and deploying each have pros and cons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Serving")," is easy and requires no native project setup, but doesn't work with native functionality"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Running")," apps can be complex and difficult to debug, but allows the app to be tested on a real device"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Installing")," is the best way to make sure the app is ready for production, but doesn't work with livereload")),(0,o.kt)("h2",{id:"serving-apps"},"Serving Apps"),(0,o.kt)("p",null,"When an app is served, Ionic Studio starts a Dev Server with ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/reference/glossary#livereload"},"Live Reload")," and displays the app in a separate browser window, called a ",(0,o.kt)("em",{parentName:"p"},"Serve Window"),"."),(0,o.kt)("p",null,"To serve an app, click the Play button in the upper right-hand corner of Ionic Studio. Then choose ",(0,o.kt)("em",{parentName:"p"},"Serve")," from the dropdown."),(0,o.kt)("p",null,"This will compile the app and then watch for changes in source files. When changes are made, the app will automatically be reloaded with the latest changes."),(0,o.kt)("h3",{id:"serve-window"},"Serve Window"),(0,o.kt)("p",null,"After compilation, the app is opened inside a Serve Window."),(0,o.kt)("figure",{class:"device"},(0,o.kt)("img",{alt:"Serve Window",src:"/img/studio/ss-serve-window.png"})),(0,o.kt)("p",null,"The Serve Window toolbar offers features such as changing the device viewport, switching between portrait and landscape orientation, reloading the webview, and opening the DevTools for debugging."),(0,o.kt)("p",null,"When the device viewport changes, the Serve Window is resized and will be reloaded to reflect the appropriate device styles, whether iOS or Material Design."),(0,o.kt)("p",null,"It is possible to open multiple Serve Windows by using the Play button and choosing ",(0,o.kt)("em",{parentName:"p"},"Serve"),". This is useful for testing the look and feel on iOS and Android, testing the app on different viewports or orientations, all at the same time."),(0,o.kt)("h4",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Clicking the debug button will open a proper instance of the Chrome DevTools for the app. Right-clicking on app features will open a context menu with ",(0,o.kt)("em",{parentName:"p"},"Inspect Element"),"."),(0,o.kt)("p",null,"For information on how to use the Chrome DevTools, see the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/chrome-devtools/"},"Chrome DevTools documentation"),"."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Chrome DevTools",src:"/img/studio/ss-devtools.png"})),(0,o.kt)("h2",{id:"running-apps-1"},"Running Apps"),(0,o.kt)("blockquote",null,"Since running an app will install it on an actual native device, some additional setup is required. See the [Native iOS & Android](/docs/v6/studio/setup/native) documentation for setup guides."),(0,o.kt)("p",null,"To run an app, click the Play button in the upper right-hand corner of Ionic Studio. Then choose ",(0,o.kt)("em",{parentName:"p"},"Run")," from the dropdown."),(0,o.kt)("figure",null,(0,o.kt)("img",{alt:"Run Modal",src:"/img/studio/ss-run-modal.png"})),(0,o.kt)("p",null,"Choose a platform and a target device, which can be an emulator or hardware device plugged in to your computer."),(0,o.kt)("p",null,"With the Live Reload option, Ionic Studio will use the same Dev Server as in ",(0,o.kt)("em",{parentName:"p"},"Serve"),", which enables quick development while working with actual devices."),(0,o.kt)("p",null,"To debug running apps, see the docs for debugging ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/developing/ios#debugging-ios-apps"},"iOS Apps")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/v6/developing/android#debugging-android-apps"},"Android Apps"),"."),(0,o.kt)("h2",{id:"installing-apps"},"Installing Apps"),(0,o.kt)("p",null,"To install a standalone version of an app, use ",(0,o.kt)("em",{parentName:"p"},"Run")," and then switch off the ",(0,o.kt)("em",{parentName:"p"},"Live Reload")," option."),(0,o.kt)("p",null,"This will copy app assets onto the target device or emulator, instead of using a Dev Server, which allows the app to continue working when the device is disconnected from the computer."))}d.isMDXComponent=!0}}]);