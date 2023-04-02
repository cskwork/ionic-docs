"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[14168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(s,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},96209:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const l={title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/src/definitions.ts",sidebar_label:"Network"},i="@capacitor/network",o={unversionedId:"native/network",id:"version-v6/native/network",isDocsHomePage:!1,title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",source:"@site/versioned_docs/version-v6/native/network.md",sourceDirName:"native",slug:"/native/network",permalink:"/docs/v6/native/network",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/network/README.md",tags:[],version:"v6",frontMatter:{title:"Network Capacitor Plugin API",description:"The Network API provides network and connectivity information.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/network/src/definitions.ts",sidebar_label:"Network"},sidebar:"version-v6/native",previous:{title:"Motion",permalink:"/docs/v6/native/motion"},next:{title:"Preferences",permalink:"/docs/v6/native/preferences"}},s=[{value:"Install",id:"install",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"getStatus()",id:"getstatus",children:[],level:3},{value:"addListener(&#39;networkStatusChange&#39;, ...)",id:"addlistenernetworkstatuschange-",children:[],level:3},{value:"removeAllListeners()",id:"removealllisteners",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"ConnectionStatus",id:"connectionstatus",children:[],level:4},{value:"PluginListenerHandle",id:"pluginlistenerhandle",children:[],level:4}],level:3},{value:"Type Aliases",id:"type-aliases",children:[{value:"ConnectionType",id:"connectiontype",children:[],level:4},{value:"ConnectionStatusChangeListener",id:"connectionstatuschangelistener",children:[],level:4}],level:3}],level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"capacitornetwork"},"@capacitor/network"),(0,r.kt)("p",null,"The Network API provides network and connectivity information."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/network\nnpx cap sync\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Network } from '@capacitor/network';\n\nNetwork.addListener('networkStatusChange', status => {\n  console.log('Network status changed', status);\n});\n\nconst logCurrentNetworkStatus = async () => {\n  const status = await Network.getStatus();\n\n  console.log('Network status:', status);\n};\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("docgen-index",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#getstatus"},(0,r.kt)("inlineCode",{parentName:"a"},"getStatus()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#addlistenernetworkstatuschange"},(0,r.kt)("inlineCode",{parentName:"a"},"addListener('networkStatusChange', ...)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#removealllisteners"},(0,r.kt)("inlineCode",{parentName:"a"},"removeAllListeners()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#type-aliases"},"Type Aliases")))),(0,r.kt)("docgen-api",null,(0,r.kt)("h3",{id:"getstatus"},"getStatus()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"getStatus() => Promise<ConnectionStatus>\n")),(0,r.kt)("p",null,"Query the current status of the network connection."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("code",null,"Promise","<",(0,r.kt)("a",{href:"#connectionstatus"},"ConnectionStatus"),">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"addlistenernetworkstatuschange-"},"addListener('networkStatusChange', ...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"addListener(eventName: 'networkStatusChange', listenerFunc: ConnectionStatusChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle\n")),(0,r.kt)("p",null,"Listen for changes in the network connection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"eventName"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"'networkStatusChange'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"listenerFunc"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{href:"#connectionstatuschangelistener"},"ConnectionStatusChangeListener")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("code",null,"Promise","<",(0,r.kt)("a",{href:"#pluginlistenerhandle"},"PluginListenerHandle"),">"," & ",(0,r.kt)("a",{href:"#pluginlistenerhandle"},"PluginListenerHandle"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"removealllisteners"},"removeAllListeners()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"removeAllListeners() => Promise<void>\n")),(0,r.kt)("p",null,"Remove all listeners (including the network status changes) for this plugin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connectionstatus"},"ConnectionStatus"),(0,r.kt)("p",null,"Represents the state and type of the network connection."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Since"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"connected"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether there is an active connection or not."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"connectionType"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{href:"#connectiontype"},"ConnectionType"))),(0,r.kt)("td",{parentName:"tr",align:null},"The type of network connection currently in use. If there is no active network connection, ",(0,r.kt)("inlineCode",{parentName:"td"},"connectionType")," will be ",(0,r.kt)("inlineCode",{parentName:"td"},"'none'"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,r.kt)("h4",{id:"pluginlistenerhandle"},"PluginListenerHandle"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"remove"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"() =",">"," Promise","<","void",">"))))),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h4",{id:"connectiontype"},"ConnectionType"),(0,r.kt)("p",null,"The type of network connection that a device might have."),(0,r.kt)("code",null,"'wifi' | 'cellular' | 'none' | 'unknown'"),(0,r.kt)("h4",{id:"connectionstatuschangelistener"},"ConnectionStatusChangeListener"),(0,r.kt)("p",null,"Callback to receive the status change notifications."),(0,r.kt)("code",null,"(status: ",(0,r.kt)("a",{href:"#connectionstatus"},"ConnectionStatus"),"): void")))}u.isMDXComponent=!0}}]);