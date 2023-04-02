"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[75471],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>u});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),c=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=c(t.components);return n.createElement(o.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,l=t.originalType,o=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),d=c(a),k=i,u=d["".concat(o,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(u,r(r({ref:e},s),{},{components:a})):n.createElement(u,r({ref:e},s))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var l=a.length,r=new Array(l);r[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[d]="string"==typeof t?t:i,r[1]=p;for(var c=2;c<l;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},97443:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const l={title:"Haptics Capacitor Plugin API",description:"The Haptics API provides physical feedback to the user through touch or vibration.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/haptics/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/haptics/src/definitions.ts",sidebar_label:"Haptics"},r="@capacitor/haptics",p={unversionedId:"native/haptics",id:"version-v6/native/haptics",isDocsHomePage:!1,title:"Haptics Capacitor Plugin API",description:"The Haptics API provides physical feedback to the user through touch or vibration.",source:"@site/versioned_docs/version-v6/native/haptics.md",sourceDirName:"native",slug:"/native/haptics",permalink:"/docs/v6/native/haptics",editUrl:"https://github.com/ionic-team/capacitor-plugins/edit/main/haptics/README.md",tags:[],version:"v6",frontMatter:{title:"Haptics Capacitor Plugin API",description:"The Haptics API provides physical feedback to the user through touch or vibration.",editUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/haptics/README.md",editApiUrl:"https://github.com/ionic-team/capacitor-plugins/blob/main/haptics/src/definitions.ts",sidebar_label:"Haptics"},sidebar:"version-v6/native",previous:{title:"Google Maps",permalink:"/docs/v6/native/google-maps"},next:{title:"Keyboard",permalink:"/docs/v6/native/keyboard"}},o=[{value:"Install",id:"install",children:[],level:2},{value:"Example",id:"example",children:[],level:2},{value:"API",id:"api",children:[{value:"impact(...)",id:"impact",children:[],level:3},{value:"notification(...)",id:"notification",children:[],level:3},{value:"vibrate(...)",id:"vibrate",children:[],level:3},{value:"selectionStart()",id:"selectionstart",children:[],level:3},{value:"selectionChanged()",id:"selectionchanged",children:[],level:3},{value:"selectionEnd()",id:"selectionend",children:[],level:3},{value:"Interfaces",id:"interfaces",children:[{value:"ImpactOptions",id:"impactoptions",children:[],level:4},{value:"NotificationOptions",id:"notificationoptions",children:[],level:4},{value:"VibrateOptions",id:"vibrateoptions",children:[],level:4}],level:3},{value:"Enums",id:"enums",children:[{value:"ImpactStyle",id:"impactstyle",children:[],level:4},{value:"NotificationType",id:"notificationtype",children:[],level:4}],level:3}],level:2}],c={toc:o},s="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(s,(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"capacitorhaptics"},"@capacitor/haptics"),(0,i.kt)("p",null,"The Haptics API provides physical feedback to the user through touch or vibration."),(0,i.kt)("p",null,"On devices that don't have Taptic Engine or Vibrator, the API calls will resolve without performing any action."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @capacitor/haptics\nnpx cap sync\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Haptics, ImpactStyle } from '@capacitor/haptics';\n\nconst hapticsImpactMedium = async () => {\n  await Haptics.impact({ style: ImpactStyle.Medium });\n};\n\nconst hapticsImpactLight = async () => {\n  await Haptics.impact({ style: ImpactStyle.Light });\n};\n\nconst hapticsVibrate = async () => {\n  await Haptics.vibrate();\n};\n\nconst hapticsSelectionStart = async () => {\n  await Haptics.selectionStart();\n};\n\nconst hapticsSelectionChanged = async () => {\n  await Haptics.selectionChanged();\n};\n\nconst hapticsSelectionEnd = async () => {\n  await Haptics.selectionEnd();\n};\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("docgen-index",null,(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#impact"},(0,i.kt)("inlineCode",{parentName:"a"},"impact(...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#notification"},(0,i.kt)("inlineCode",{parentName:"a"},"notification(...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#vibrate"},(0,i.kt)("inlineCode",{parentName:"a"},"vibrate(...)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#selectionstart"},(0,i.kt)("inlineCode",{parentName:"a"},"selectionStart()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#selectionchanged"},(0,i.kt)("inlineCode",{parentName:"a"},"selectionChanged()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#selectionend"},(0,i.kt)("inlineCode",{parentName:"a"},"selectionEnd()"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enums"},"Enums")))),(0,i.kt)("docgen-api",null,(0,i.kt)("h3",{id:"impact"},"impact(...)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"impact(options?: ImpactOptions | undefined) => Promise<void>\n")),(0,i.kt)("p",null,'Trigger a haptics "impact" feedback'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"options"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#impactoptions"},"ImpactOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"notification"},"notification(...)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"notification(options?: NotificationOptions | undefined) => Promise<void>\n")),(0,i.kt)("p",null,'Trigger a haptics "notification" feedback'),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"options"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#notificationoptions"},"NotificationOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"vibrate"},"vibrate(...)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"vibrate(options?: VibrateOptions | undefined) => Promise<void>\n")),(0,i.kt)("p",null,"Vibrate the device"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Param"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"options"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#vibrateoptions"},"VibrateOptions")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectionstart"},"selectionStart()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"selectionStart() => Promise<void>\n")),(0,i.kt)("p",null,"Trigger a selection started haptic hint"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectionchanged"},"selectionChanged()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"selectionChanged() => Promise<void>\n")),(0,i.kt)("p",null,"Trigger a selection changed haptic hint. If a selection was\nstarted already, this will cause the device to provide haptic\nfeedback"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"selectionend"},"selectionEnd()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"selectionEnd() => Promise<void>\n")),(0,i.kt)("p",null,"If selectionStart() was called, selectionEnd() ends the selection.\nFor example, call this when a user has lifted their finger from a control"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Since:")," 1.0.0"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"impactoptions"},"ImpactOptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"style"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#impactstyle"},"ImpactStyle"))),(0,i.kt)("td",{parentName:"tr",align:null},"Impact Feedback Style The mass of the objects in the collision simulated by a ",(0,i.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/uikit/uiimpactfeedbackstyle"},"UIImpactFeedbackGenerator")," object."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"ImpactStyle.Heavy")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("h4",{id:"notificationoptions"},"NotificationOptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"type"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,(0,i.kt)("a",{href:"#notificationtype"},"NotificationType"))),(0,i.kt)("td",{parentName:"tr",align:null},"Notification Feedback Type The type of notification feedback generated by a ",(0,i.kt)("a",{parentName:"td",href:"https://developer.apple.com/documentation/uikit/uinotificationfeedbacktype"},"UINotificationFeedbackGenerator")," object."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"NotificationType.SUCCESS")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("h4",{id:"vibrateoptions"},"VibrateOptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Prop"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"duration"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"number")),(0,i.kt)("td",{parentName:"tr",align:null},"Duration of the vibration in milliseconds."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"300")),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("h3",{id:"enums"},"Enums"),(0,i.kt)("h4",{id:"impactstyle"},"ImpactStyle"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Heavy"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'HEAVY'")),(0,i.kt)("td",{parentName:"tr",align:null},"A collision between large, heavy user interface elements"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Medium"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'MEDIUM'")),(0,i.kt)("td",{parentName:"tr",align:null},"A collision between moderately sized user interface elements"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Light"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'LIGHT'")),(0,i.kt)("td",{parentName:"tr",align:null},"A collision between small, light user interface elements"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")))),(0,i.kt)("h4",{id:"notificationtype"},"NotificationType"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Members"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Since"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Success"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'SUCCESS'")),(0,i.kt)("td",{parentName:"tr",align:null},"A notification feedback type indicating that a task has completed successfully"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Warning"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'WARNING'")),(0,i.kt)("td",{parentName:"tr",align:null},"A notification feedback type indicating that a task has produced a warning"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},(0,i.kt)("inlineCode",{parentName:"strong"},"Error"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'ERROR'")),(0,i.kt)("td",{parentName:"tr",align:null},"A notification feedback type indicating that a task has failed"),(0,i.kt)("td",{parentName:"tr",align:null},"1.0.0"))))))}d.isMDXComponent=!0}}]);