"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[95633],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>h});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:e},c),{},{components:n})):a.createElement(h,i({ref:e},c))}));function h(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55865:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={title:"Action Sheet Capacitor Plugin API",description:"The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/action-sheet/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/action-sheet/src/definitions.ts",sidebar_label:"Action Sheet"},i="@capacitor/action-sheet",o={unversionedId:"native/action-sheet",id:"version-v6/native/action-sheet",isDocsHomePage:!1,title:"Action Sheet Capacitor Plugin API",description:"The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.",source:"@site/versioned_docs/version-v6/native/action-sheet.md",sourceDirName:"native",slug:"/native/action-sheet",permalink:"/docs/v6/native/action-sheet",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/action-sheet/README.md",tags:[],version:"v6",frontMatter:{title:"Action Sheet Capacitor Plugin API",description:"The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/action-sheet/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/action-sheet/src/definitions.ts",sidebar_label:"Action Sheet"},sidebar:"version-v6/native",previous:{title:"FAQ",permalink:"/docs/v6/native/faq"},next:{title:"App Launcher",permalink:"/docs/v6/native/app-launcher"}},s=[{value:"Install",id:"install",children:[{value:"Variables",id:"variables",children:[],level:3}],level:2},{value:"PWA Notes",id:"pwa-notes",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"showActions(...)",id:"showactions",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"ShowActionsResult",id:"showactionsresult",children:[],level:4},{value:"ShowActionsOptions",id:"showactionsoptions",children:[],level:4},{value:"ActionSheetButton",id:"actionsheetbutton",children:[],level:4}],level:3},{value:"Enums",id:"enums",children:[{value:"ActionSheetButtonStyle",id:"actionsheetbuttonstyle",children:[],level:4}],level:3}],level:2}],p={toc:s},c="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(c,(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"capacitoraction-sheet"},"@capacitor/action-sheet"),(0,l.kt)("p",null,"The Action Sheet API provides access to native Action Sheets, which come up from the bottom of the screen and display actions a user can take."),(0,l.kt)("h2",{id:"install"},"Install"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/action-sheet\nnpx cap sync\n")),(0,l.kt)("h3",{id:"variables"},"Variables"),(0,l.kt)("p",null,"This plugin will use the following project variables (defined in your app's ",(0,l.kt)("inlineCode",{parentName:"p"},"variables.gradle")," file):"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"$androidxMaterialVersion"),": version of ",(0,l.kt)("inlineCode",{parentName:"li"},"com.google.android.material:material")," (default: ",(0,l.kt)("inlineCode",{parentName:"li"},"1.6.1"),")")),(0,l.kt)("h2",{id:"pwa-notes"},"PWA Notes"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/web/pwa-elements"},"PWA Elements")," are required for Action Sheet plugin to work."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';\n\nconst showActions = async () => {\n  const result = await ActionSheet.showActions({\n    title: 'Photo Options',\n    message: 'Select an option to perform',\n    options: [\n      {\n        title: 'Upload',\n      },\n      {\n        title: 'Share',\n      },\n      {\n        title: 'Remove',\n        style: ActionSheetButtonStyle.Destructive,\n      },\n    ],\n  });\n\n  console.log('Action Sheet result:', result);\n};\n")),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("docgen-index",null,(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#showactions"},(0,l.kt)("inlineCode",{parentName:"a"},"showActions(...)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enums"},"Enums")))),(0,l.kt)("docgen-api",null,(0,l.kt)("h3",{id:"showactions"},"showActions(...)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"showActions(options: ShowActionsOptions) => Promise<ShowActionsResult>\n")),(0,l.kt)("p",null,"Show an Action Sheet style modal with various options for the user\nto select."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Param"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#showactionsoptions"},"ShowActionsOptions")))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns:")," ",(0,l.kt)("code",null,"Promise","<",(0,l.kt)("a",{href:"#showactionsresult"},"ShowActionsResult"),">")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"showactionsresult"},"ShowActionsResult"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"index"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The index of the clicked option (Zero-based)"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"showactionsoptions"},"ShowActionsOptions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"title"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the Action Sheet."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"message"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"A message to show under the title. This option is only supported on iOS."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"options"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"ActionSheetButton[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Options the user can choose from."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h4",{id:"actionsheetbutton"},"ActionSheetButton"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Prop"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"title"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"The title of the option"),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"style"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,(0,l.kt)("a",{href:"#actionsheetbuttonstyle"},"ActionSheetButtonStyle"))),(0,l.kt)("td",{parentName:"tr",align:null},"The style of the option This option is only supported on iOS."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"icon"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Icon for the option (ionicon naming convention) This option is only supported on Web."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,l.kt)("h3",{id:"enums"},"Enums"),(0,l.kt)("h4",{id:"actionsheetbuttonstyle"},"ActionSheetButtonStyle"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Members"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Since"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"Default"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'DEFAULT'")),(0,l.kt)("td",{parentName:"tr",align:null},"Default style of the option."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"Destructive"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'DESTRUCTIVE'")),(0,l.kt)("td",{parentName:"tr",align:null},"Style to use on destructive options."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"strong"},"Cancel"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("code",null,"'CANCEL'")),(0,l.kt)("td",{parentName:"tr",align:null},"Style to use on the option that cancels the Action Sheet. If used, should be on the latest availabe option."),(0,l.kt)("td",{parentName:"tr",align:null},"1.0.0"))))))}u.isMDXComponent=!0}}]);