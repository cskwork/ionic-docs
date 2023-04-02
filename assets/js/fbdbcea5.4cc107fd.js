"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[60398],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=d(a),u=r,k=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(k,i(i({ref:e},c),{},{components:a})):n.createElement(k,i({ref:e},c))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23294:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"Clipboard Capacitor Plugin API",description:"The Clipboard API enables copy and pasting to/from the system clipboard.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/clipboard/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/clipboard/src/definitions.ts",sidebar_label:"Clipboard"},i="@capacitor/clipboard",o={unversionedId:"native/clipboard",id:"version-v6/native/clipboard",isDocsHomePage:!1,title:"Clipboard Capacitor Plugin API",description:"The Clipboard API enables copy and pasting to/from the system clipboard.",source:"@site/versioned_docs/version-v6/native/clipboard.md",sourceDirName:"native",slug:"/native/clipboard",permalink:"/docs/v6/native/clipboard",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/clipboard/README.md",tags:[],version:"v6",frontMatter:{title:"Clipboard Capacitor Plugin API",description:"The Clipboard API enables copy and pasting to/from the system clipboard.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/clipboard/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/clipboard/src/definitions.ts",sidebar_label:"Clipboard"},sidebar:"version-v6/native",previous:{title:"Camera",permalink:"/docs/v6/native/camera"},next:{title:"Device",permalink:"/docs/v6/native/device"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"write(...)",id:"write",children:[],level:3},{value:"read()",id:"read",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"WriteOptions",id:"writeoptions",children:[],level:4},{value:"ReadResult",id:"readresult",children:[],level:4}],level:3}],level:2}],d={toc:p},c="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"capacitorclipboard"},"@capacitor/clipboard"),(0,r.kt)("p",null,"The Clipboard API enables copy and pasting to/from the system clipboard."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/clipboard\nnpx cap sync\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Clipboard } from '@capacitor/clipboard';\n\nconst writeToClipboard = async () => {\n  await Clipboard.write({\n    string: \"Hello World!\"\n  });\n};\n\nconst checkClipboard = async () => {\n  const { type, value } = await Clipboard.read();\n\n  console.log(`Got ${type} from clipboard: ${value}`);\n};\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("docgen-index",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#write"},(0,r.kt)("inlineCode",{parentName:"a"},"write(...)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#read"},(0,r.kt)("inlineCode",{parentName:"a"},"read()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")))),(0,r.kt)("docgen-api",null,(0,r.kt)("h3",{id:"write"},"write(...)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"write(options: WriteOptions) => Promise<void>\n")),(0,r.kt)("p",null,'Write a value to the clipboard (the "copy" action)'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Param"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"options"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,(0,r.kt)("a",{href:"#writeoptions"},"WriteOptions")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"read"},"read()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"read() => Promise<ReadResult>\n")),(0,r.kt)("p",null,'Read a value from the clipboard (the "paste" action)'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns:")," ",(0,r.kt)("code",null,"Promise","<",(0,r.kt)("a",{href:"#readresult"},"ReadResult"),">")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"writeoptions"},"WriteOptions"),(0,r.kt)("p",null,"Represents the data to be written to the clipboard."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Since"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"string"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Text value to copy."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"image"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Image in ",(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs"},"Data URL")," format to copy."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"url"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"URL string to copy."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"label"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"User visible label to accompany the copied data (Android Only)."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,r.kt)("h4",{id:"readresult"},"ReadResult"),(0,r.kt)("p",null,"Represents the data read from the clipboard."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Since"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"value"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Data read from the clipboard."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"type"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of data in the clipboard."),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0"))))))}s.isMDXComponent=!0}}]);