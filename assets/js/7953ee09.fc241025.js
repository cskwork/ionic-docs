"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[48742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>u});var n=a(87462),r=a(67294),o=a(72389),l=a(79443);const i=function(){const e=(0,r.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=a(89521),c=a(86010);const d={tabItem:"tabItem_LplD"};function p(e){const{lazy:t,block:a,defaultValue:n,values:o,groupId:l,className:p}=e,u=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),m=o??u.map((e=>{let{props:{value:t,label:a}}=e;return{value:t,label:a}})),h=(0,s.lx)(m,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===n?n:n??u.find((e=>e.props.default))?.props.value??u[0]?.props.value;if(null!==v&&!m.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${m.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:b}=i(),[g,w]=(0,r.useState)(v),f=[],{blockElementScrollPositionUntilNextRender:N}=(0,s.o5)();if(null!=l){const e=k[l];null!=e&&e!==g&&m.some((t=>t.value===e))&&w(e)}const y=e=>{const t=e.currentTarget,a=f.indexOf(t),n=m[a].value;n!==g&&(N(t),w(n),null!=l&&b(l,n))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=f.indexOf(e.currentTarget)+1;t=f[a]||f[0];break}case"ArrowLeft":{const a=f.indexOf(e.currentTarget)-1;t=f[a]||f[f.length-1];break}}t?.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},p)},m.map((e=>{let{value:t,label:a}=e;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",d.tabItem,{"tabs__item--active":g===t}),key:t,ref:e=>f.push(e),onKeyDown:x,onFocus:y,onClick:y},a??t)}))),t?(0,r.cloneElement)(u.filter((e=>e.props.value===g))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})))))}function u(e){const t=(0,o.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},86015:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),o=a(26396),l=a(58215);const i={title:"Hardware Back Button"},s=void 0,c={unversionedId:"developing/hardware-back-button",id:"version-v6/developing/hardware-back-button",isDocsHomePage:!1,title:"Hardware Back Button",description:"Hardware Back Button for Capacitor & Cordova on Android Devices",source:"@site/versioned_docs/version-v6/developing/hardware-back-button.md",sourceDirName:"developing",slug:"/developing/hardware-back-button",permalink:"/docs/v6/developing/hardware-back-button",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/developing/hardware-back-button.md",tags:[],version:"v6",frontMatter:{title:"Hardware Back Button"},sidebar:"version-v6/docs",previous:{title:"Development Tips",permalink:"/docs/v6/developing/tips"},next:{title:"Keyboard",permalink:"/docs/v6/developing/keyboard"}},d=[{value:"Hardware Back Button in Capacitor and Cordova",id:"hardware-back-button-in-capacitor-and-cordova",children:[],level:2},{value:"Hardware Back Button in a Browser",id:"hardware-back-button-in-a-browser",children:[],level:2},{value:"Basic Usage",id:"basic-usage",children:[],level:2},{value:"Calling Multiple Handlers",id:"calling-multiple-handlers",children:[],level:2},{value:"Handlers with the Same Priorities",id:"handlers-with-the-same-priorities",children:[],level:2},{value:"Exiting the App",id:"exiting-the-app",children:[],level:2},{value:"Internal Framework Handlers",id:"internal-framework-handlers",children:[],level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Hardware Back Button for Capacitor & Cordova on Android Devices"),(0,r.kt)("meta",{name:"description",content:"The hardware back button is found on most Android devices. Read to learn more about hardware back button use in Capacitor and Cordova on Ionic applications."})),(0,r.kt)("p",null,"The hardware back button is found on most Android devices. In native applications it can be used to close modals, navigate to the previous view, exit an app, and more. By default in Ionic, when the back button is pressed, the current view will be popped off the navigation stack, and the previous view will be displayed. If no previous view exists in the navigation stack, nothing will happen. This guide will show how to customize the behavior of the hardware back button."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The hardware back button refers to the physical back button on an Android device and should not be confused with either the browser back button or ",(0,r.kt)("inlineCode",{parentName:"p"},"ion-back-button"),". The information in this guide only applies to Android devices."))),(0,r.kt)("h2",{id:"hardware-back-button-in-capacitor-and-cordova"},"Hardware Back Button in Capacitor and Cordova"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@capacitor/app")," package must be installed in Capacitor apps to use the hardware back button."))),(0,r.kt)("p",null,"When running in a Capacitor or Cordova application, Ionic Framework will emit an ",(0,r.kt)("inlineCode",{parentName:"p"},"ionBackButton")," event when a user presses the hardware back button."),(0,r.kt)("p",null,"When listening for the ",(0,r.kt)("inlineCode",{parentName:"p"},"ionBackButton")," event, you can register a handler to be fired. This handler can perform actions such as quitting the app or opening a confirmation dialog. Each handler must be assigned a priority. By default, only one handler is fired per hardware back button press. The priority value is used to determine which callback should be called. This is useful because if you have a modal open, you likely would not want the modal to close ",(0,r.kt)("em",{parentName:"p"},"and")," the app to navigate backwards when pressing the hardware back button. Only running one handler at a time allows the modal to close but still requires another press of the hardware back button to navigate backwards."),(0,r.kt)("p",null,"There are situations where you might want to have multiple handlers fired. Each handler callback passes in a function as a parameter that can be used to tell the framework to call the next handler."),(0,r.kt)("h2",{id:"hardware-back-button-in-a-browser"},"Hardware Back Button in a Browser"),(0,r.kt)("p",null,"When running your app in a mobile browser or as a PWA, hardware back button customization will be limited. This is because Capacitor and Cordova expose additional features that are not exposed in a normal web browser. For example, closing overlays and menus via the hardware back button are functionalities that are currently not supported when running your app in a mobile browser. These are known limitations and do not currently have straightforward solutions."),(0,r.kt)("p",null,"For complete hardware back button support, we recommend using Capacitor or Cordova."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ionBackButton")," event will not be emitted when running an app in a browser or as a PWA."))),(0,r.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,r.kt)(o.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('ionBackButton', (ev) => {\n  ev.detail.register(10, () => {\n    console.log('Handler was called!');\n  });\n});\n\n"))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Platform } from '@ionic/angular';\n\n...\n\nconstructor(private platform: Platform) {\n  this.platform.backButton.subscribeWithPriority(10, () => {\n    console.log('Handler was called!');\n  });\n}\n\n"))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"document.addEventListener('ionBackButton', (ev) => {\n  ev.detail.register(10, () => {\n    console.log('Handler was called!');\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useBackButton } from '@ionic/vue';\n\n...\n\nexport default {\n  setup() {\n    useBackButton(10, () => {\n      console.log('Handler was called!');\n    });\n  }\n}\n")))),(0,r.kt)("p",null,"In this example, we are registering a handler to be called when the hardware back button is pressed. We have set the priority to be 10, and we have not indicated to the framework that we want the next handler to be called. As a result, any handlers with a priority less than 10 will not be called. A handler that has a priority greater than 10 will be called first."),(0,r.kt)("p",null,"In the event that there are handlers with the same priority value, the handler that was registered ",(0,r.kt)("em",{parentName:"p"},"last")," will be called. See ",(0,r.kt)("a",{parentName:"p",href:"#handlers-with-the-same-priorities"},"Handlers with the Same Priorities")," for more information."),(0,r.kt)("h2",{id:"calling-multiple-handlers"},"Calling Multiple Handlers"),(0,r.kt)("p",null,"Each hardware back button callback has a ",(0,r.kt)("inlineCode",{parentName:"p"},"processNextHandler")," parameter. Calling this function allows you to continue calling hardware back button handlers."),(0,r.kt)(o.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('ionBackButton', (ev) => {\n  ev.detail.register(5, () => {\n    console.log('Another handler was called!');\n  });\n\n  ev.detail.register(10, (processNextHandler) => {\n    console.log('Handler was called!');\n\n    processNextHandler();\n  });\n});\n\n"))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Platform } from '@ionic/angular';\n\n...\n\nconstructor(private platform: Platform) {\n  this.platform.backButton.subscribeWithPriority(5, () => {\n    console.log('Another handler was called!');\n  });\n\n  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {\n    console.log('Handler was called!');\n\n    processNextHandler();\n  });\n}\n\n"))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"document.addEventListener('ionBackButton', (ev) => {\n  ev.detail.register(5, () => {\n    console.log('Another handler was called!');\n  });\n\n  ev.detail.register(10, (processNextHandler) => {\n    console.log('Handler was called!');\n\n    processNextHandler();\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useBackButton } from '@ionic/vue';\n\n...\n\nexport default {\n  setup() {\n    useBackButton(5, () => {\n      console.log('Another handler was called!');\n    });\n\n    useBackButton(10, (processNextHandler) => {\n      console.log('Handler was called!');\n\n      processNextHandler();\n    });\n  }\n}\n")))),(0,r.kt)("p",null,"This example shows how to indicate to Ionic Framework that you want the next handler to be fired. All callbacks are provided with a ",(0,r.kt)("inlineCode",{parentName:"p"},"processNextHandler")," function as a parameter. Calling this will cause the next handler, if any exists, to be fired."),(0,r.kt)("h2",{id:"handlers-with-the-same-priorities"},"Handlers with the Same Priorities"),(0,r.kt)("p",null,"Internally, Ionic Framework uses something similar to a priority queue to manage hardware back button handlers. The handler with the largest priority value will be called first. In the event that there are multiple handlers with the same priority value, the ",(0,r.kt)("em",{parentName:"p"},"last")," handler of the same priority added to this queue will be the first handler to be called."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"document.addEventListener('ionBackButton', (ev) => {\n  // Handler A\n  ev.detail.register(10, (processNextHandler) => {\n    console.log('Handler A was called!');\n\n    processNextHandler();\n  });\n\n  // Handler B\n  ev.detail.register(10, (processNextHandler) => {\n    console.log('Handler B was called!');\n\n    processNextHandler();\n  });\n});\n")),(0,r.kt)("p",null,"In the example above, both handlers A and B have a priority of 10. Since handler B was registered last, Ionic Framework will call handler B before it calls handler A."),(0,r.kt)("h2",{id:"exiting-the-app"},"Exiting the App"),(0,r.kt)("p",null,"In some scenarios, it may be desirable to quit the app when pressing the hardware back button. This can be achieved through the use of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ionBackButton")," event combined with methods that Capacitor/Cordova provide."),(0,r.kt)(o.Z,{groupId:"framework",defaultValue:"javascript",values:[{value:"javascript",label:"JavaScript"},{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"vue",label:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BackButtonEvent } from '@ionic/core';\nimport { App } from '@capacitor/app';\n\n...\n\nconst routerEl = document.querySelector('ion-router');\ndocument.addEventListener('ionBackButton', (ev: BackButtonEvent) => {\n  ev.detail.register(-1, () => {\n    const path = window.location.pathname;\n    if (path === routerEl.root) {\n      App.exitApp();\n    }\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Optional } from '@angular/core';\nimport { IonRouterOutlet, Platform } from '@ionic/angular';\nimport { App } from '@capacitor/app';\n\n...\n\nconstructor(\n  private platform: Platform,\n  @Optional() private routerOutlet?: IonRouterOutlet\n) {\n  this.platform.backButton.subscribeWithPriority(-1, () => {\n    if (!this.routerOutlet.canGoBack()) {\n      App.exitApp();\n    }\n  });\n}\n\n"))),(0,r.kt)(l.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useIonRouter } from '@ionic/react';\nimport { App } from '@capacitor/app';\n\n...\n\nconst ionRouter = useIonRouter();\ndocument.addEventListener('ionBackButton', (ev) => {\n  ev.detail.register(-1, () => {\n    if (!ionRouter.canGoBack()) {\n      App.exitApp();\n    }\n  });\n});\n"))),(0,r.kt)(l.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useBackButton, useIonRouter } from '@ionic/vue';\nimport { App } from '@capacitor/app';\n\n...\n\nexport default {\n  setup() {\n    const ionRouter = useIonRouter();\n    useBackButton(-1, () => {\n      if (!ionRouter.canGoBack()) {\n        App.exitApp();\n      }\n    });\n  }\n}\n")))),(0,r.kt)("p",null,"This example shows the application exiting when the user presses the hardware back button and there is nothing left in the navigation stack. It is also possible to display a confirmation dialog before quitting the app."),(0,r.kt)("p",null,"It is recommended to check whether or not the user is on the root page prior to exiting the application. Developers can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"canGoBack")," method on ",(0,r.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet")," in Ionic Angular and ",(0,r.kt)("inlineCode",{parentName:"p"},"IonRouter")," in Ionic React and Ionic Vue."),(0,r.kt)("h2",{id:"internal-framework-handlers"},"Internal Framework Handlers"),(0,r.kt)("p",null,"The table below lists all of the internal hardware back button event handlers that Ionic Framework uses. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Propagates")," column notes whether or not that particular handler tells Ionic Framework to call the next back button handler."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Handler"),(0,r.kt)("th",{parentName:"tr",align:null},"Priority"),(0,r.kt)("th",{parentName:"tr",align:null},"Propagates"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overlays"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to overlay components ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-action-sheet"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-alert"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-loading"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-modal"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-popover"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-picker"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Menu"),(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to ",(0,r.kt)("inlineCode",{parentName:"td"},"ion-menu"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Navigation"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Applies to routing navigation (i.e. Angular Routing).")))))}m.isMDXComponent=!0}}]);