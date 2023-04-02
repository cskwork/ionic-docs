"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[64236],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=m(n),s=l,g=u["".concat(p,".").concat(s)]||u[s]||k[s]||r;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function g(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},78397:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Dialog Capacitor Plugin API",description:"The Dialog API provides methods for triggering native dialog windows for alerts, confirmations, and input prompts",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/dialog/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/dialog/src/definitions.ts",sidebar_label:"Dialog"},i="@capacitor/dialog",o={unversionedId:"native/dialog",id:"version-v6/native/dialog",isDocsHomePage:!1,title:"Dialog Capacitor Plugin API",description:"The Dialog API provides methods for triggering native dialog windows for alerts, confirmations, and input prompts",source:"@site/versioned_docs/version-v6/native/dialog.md",sourceDirName:"native",slug:"/native/dialog",permalink:"/docs/v6/native/dialog",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/dialog/README.md",tags:[],version:"v6",frontMatter:{title:"Dialog Capacitor Plugin API",description:"The Dialog API provides methods for triggering native dialog windows for alerts, confirmations, and input prompts",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/dialog/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/dialog/src/definitions.ts",sidebar_label:"Dialog"},sidebar:"version-v6/native",previous:{title:"Device",permalink:"/docs/v6/native/device"},next:{title:"Filesystem",permalink:"/docs/v6/native/filesystem"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"alert(...)",id:"alert",children:[],level:3},{value:"prompt(...)",id:"prompt",children:[],level:3},{value:"confirm(...)",id:"confirm",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"AlertOptions",id:"alertoptions",children:[],level:4},{value:"PromptResult",id:"promptresult",children:[],level:4},{value:"PromptOptions",id:"promptoptions",children:[],level:4},{value:"ConfirmResult",id:"confirmresult",children:[],level:4},{value:"ConfirmOptions",id:"confirmoptions",children:[],level:4}],level:3}],level:2}],m={toc:p},d="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(d,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"capacitordialog"},"@capacitor/dialog"),(0,l.kt)("p",null,"The Dialog API provides methods for triggering native dialog windows for alerts, confirmations, and input prompts"),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/dialog\nnpx cap sync\n")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Dialog } from '@capacitor/dialog';\n\nconst showAlert = async () => {\n  await Dialog.alert({\n    title: 'Stop',\n    message: 'this is an error',\n  });\n};\n\nconst showConfirm = async () => {\n  const { value } = await Dialog.confirm({\n    title: 'Confirm',\n    message: `Are you sure you'd like to press the red button?`,\n  });\n\n  console.log('Confirmed:', value);\n};\n\nconst showPrompt = async () => {\n  const { value, cancelled } = await Dialog.prompt({\n    title: 'Hello',\n    message: `What's your name?`,\n  });\n\n  console.log('Name:', value);\n  console.log('Cancelled:', cancelled);\n};\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("docgen-index",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#alert"},(0,l.kt)("inlineCode",{parentName:"a"},"alert(...)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prompt"},(0,l.kt)("inlineCode",{parentName:"a"},"prompt(...)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#confirm"},(0,l.kt)("inlineCode",{parentName:"a"},"confirm(...)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")))),(0,l.kt)("docgen-api",null,(0,l.kt)("h3",{id:"alert"},"alert(...)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"alert(options: AlertOptions) => Promise<void>\n")),(0,l.kt)("p",null,"Show an alert dialog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#alertoptions"},"AlertOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prompt"},"prompt(...)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"prompt(options: PromptOptions) => Promise<PromptResult>\n")),(0,l.kt)("p",null,"Show a prompt dialog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#promptoptions"},"PromptOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("code",null,"Promise","<",(0,l.kt)("a",{href:"#promptresult"},"PromptResult"),">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"confirm"},"confirm(...)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"confirm(options: ConfirmOptions) => Promise<ConfirmResult>\n")),(0,l.kt)("p",null,"Show a confirmation dialog"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#confirmoptions"},"ConfirmOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("code",null,"Promise","<",(0,l.kt)("a",{href:"#confirmresult"},"ConfirmResult"),">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"alertoptions"},"AlertOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"title"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"message"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Message to show on the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"buttonTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text to use on the action button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"OK"')),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"promptresult"},"PromptResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text entered on the prompt."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"cancelled"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Whether if the prompt was canceled or accepted."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"promptoptions"},"PromptOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"title"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"message"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Message to show on the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"okButtonTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text to use on the positive action button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"OK"')),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"cancelButtonTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text to use on the negative action button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"Cancel"')),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"inputPlaceholder"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Placeholder text for hints."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"inputText"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Prepopulated text."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"confirmresult"},"ConfirmResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"value"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"true if the positive button was clicked, false otherwise."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"confirmoptions"},"ConfirmOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"title"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Title of the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"message"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Message to show on the dialog."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"okButtonTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text to use on the positive action button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"OK"')),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"cancelButtonTitle"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Text to use on the negative action button."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,'"Cancel"')),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"))))))}u.isMDXComponent=!0}}]);