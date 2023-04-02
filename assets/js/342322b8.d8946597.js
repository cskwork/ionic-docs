"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[13743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,v=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73938:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Live Reload",l={unversionedId:"cli/livereload",id:"cli/livereload",isDocsHomePage:!1,title:"Live Reload",description:"Using the Live Reload option will reload the browser or Web View when you change your app's code in your development environment. This is particularly useful for developing using hardware devices.",source:"@site/docs/cli/livereload.md",sourceDirName:"cli",slug:"/cli/livereload",permalink:"/docs/cli/livereload",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/cli/livereload.md",tags:[],version:"current",frontMatter:{},sidebar:"cli",previous:{title:"Configuration",permalink:"/docs/cli/configuration"},next:{title:"Using a Proxy",permalink:"/docs/cli/using-a-proxy"}},s=[{value:"Terms",id:"terms",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Capacitor",id:"capacitor",children:[],level:3},{value:"Cordova",id:"cordova",children:[{value:"Android",id:"android",children:[],level:4},{value:"iOS",id:"ios",children:[],level:4}],level:3}],level:2},{value:"Tips",id:"tips",children:[{value:"Using SSL",id:"using-ssl",children:[],level:3}],level:2}],d={toc:s},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"live-reload"},"Live Reload"),(0,a.kt)("p",null,"Using the Live Reload option will reload the browser or ",(0,a.kt)("a",{parentName:"p",href:"/docs/core-concepts/webview"},"Web View")," when you change your app's code in your development environment. This is particularly useful for developing using hardware devices."),(0,a.kt)("h2",{id:"terms"},"Terms"),(0,a.kt)("p",null,"Live Reload is a conflated term. With ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve"),", Live Reload just refers to reloading the browser when changes are made. Live Reload can also be used with Capacitor and Cordova to provide the same experience on virtual and hardware devices, which eliminates the need for re-deploying a native binary."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Since Live Reload requires the Web View to load your app from a URL hosted by your computer instead of just reading files on the device, setting up live-reload for hardware devices can be tricky."),(0,a.kt)("p",null,"As with regular device deploys, you will need a cable to connect your device to your computer. The difference is the Ionic CLI configures the Web View to load your app from the dev server on your computer."),(0,a.kt)("h3",{id:"capacitor"},"Capacitor"),(0,a.kt)("p",null,"To use Live Reload with Capacitor, make sure you're either using a virtual device or a hardware device connected to the same Wi-Fi network as your computer. Then, you'll need to specify that you want to use an external IP address for the dev server using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--external")," flag."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor run ios -l --external\n$ ionic capacitor run android -l --external\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Remember, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--external")," option, others on your Wi-Fi network will be able to access your app."))),(0,a.kt)("h3",{id:"cordova"},"Cordova"),(0,a.kt)("h4",{id:"android"},"Android"),(0,a.kt)("p",null,"For Android devices, the Ionic CLI will automatically forward the dev server port. This means you can use a ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," address and it will refer to your computer when loaded in the Web View, not the device."),(0,a.kt)("p",null,"The following all-in-one command will start a live-reload server on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," and deploy the app to an Android device using Cordova:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run android -l\n")),(0,a.kt)("h4",{id:"ios"},"iOS"),(0,a.kt)("p",null,"For iOS devices, port forwarding is not yet an option. This means you'll need to connect your device to the same Wi-Fi network as your computer and use an external address for the dev server."),(0,a.kt)("p",null,"In some cases, the Ionic CLI won't know the address with which to configure the Web View, so you may be prompted to select one. Be sure to select the address of your computer on your Wi-Fi network."),(0,a.kt)("p",null,"The following all-in-one command will start a live-reload server on ",(0,a.kt)("strong",{parentName:"p"},"all addresses")," and deploy the app to an iOS device using Cordova:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova run ios -l --external\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Remember, with the ",(0,a.kt)("inlineCode",{parentName:"p"},"--external")," option, others on your Wi-Fi network will be able to access your app."))),(0,a.kt)("h2",{id:"tips"},"Tips"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With Cordova, use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--device"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"--emulator"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"--target")," options to narrow down target devices. Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"--list")," option to list all targets. See usage in the ",(0,a.kt)("a",{parentName:"li",href:"/docs/cli/commands/cordova-run"},"command docs"),"."),(0,a.kt)("li",{parentName:"ul"},"You can separate the dev server process and the deploy process by using ",(0,a.kt)("inlineCode",{parentName:"li"},"ionic serve")," and the ",(0,a.kt)("inlineCode",{parentName:"li"},"--livereload-url")," option of ",(0,a.kt)("inlineCode",{parentName:"li"},"ionic cordova run")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"ionic capacitor run"),"."),(0,a.kt)("li",{parentName:"ul"},"For Android, it is possible to configure ",(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/command-line/adb"},"adb")," to always forward ports while the adb server is running (see ",(0,a.kt)("inlineCode",{parentName:"li"},"adb reverse"),"). With port forwarding set up, an external address would no longer be required. You can also setup the adb bridge over TCP such that subsequent deploys no longer need a USB cable.")),(0,a.kt)("h3",{id:"using-ssl"},"Using SSL"),(0,a.kt)("p",null,"Live reload will use HTTP by default which will cause web APIs that require a secure context (like ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API"},"web crypto"),") to fail. To establish a secure context you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--ssl")," argument to use HTTPS."),(0,a.kt)("p",null,"For example, with an Angular application you can run the following to pass a certificate and private key and serve your app with HTTPS:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic capacitor run android --livereload --external --ssl -- --ssl-cert='server.crt' --ssl-key='server.key'\n")),(0,a.kt)("p",null,"Using a self signed certificate and ensuring it is trusted by the device is a complicated topic and is covered in ",(0,a.kt)("a",{parentName:"p",href:"https://ionic.zendesk.com/hc/en-us/articles/11384425513623"},"this article"),"."))}p.isMDXComponent=!0}}]);