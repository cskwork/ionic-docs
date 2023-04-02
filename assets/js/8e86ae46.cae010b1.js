"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[85425],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(r),u=o,h=s["".concat(c,".").concat(u)]||s[u]||m[u]||a;return r?n.createElement(h,l(l({ref:t},d),{},{components:r})):n.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76521:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(86010),o=r(67294);const a="codeColor_rpDs",l="codeColorBlock_R_PT",i="codeColorValue_XeNQ";const c=function(e){let{color:t,...r}=e;return o.createElement("div",{className:(0,n.Z)(a,r.className,"code-color")},o.createElement("span",{className:l,style:{backgroundColor:t,...r.style}}),r.children&&o.createElement("code",{className:i},r.children))}},13164:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(87462),o=r(86010),a=r(67294),l=r(85350);const i={colorDot:"colorDot_exiw",colorDotDark:"colorDotDark_PiIF",colorDotLight:"colorDotLight__nb4"};function c(e){let{color:t,...r}=e;const{isDarkTheme:c}=(0,l.Z)();return a.createElement("div",(0,n.Z)({style:{backgroundColor:t},className:(0,o.Z)(r.className,"color-dot",i.colorDot,i["colorDot"+(c?"Dark":"Light")])},r))}},32569:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(87462),o=r(67294),a=r(86010),l=r(51056),i=r(85350);const c={colorInput:"colorInput_I57V",colorInputLight:"colorInputLight_eUkV",colorInputDark:"colorInputDark_RIlH",colorPickerWrapper:"colorPickerWrapper__C97",colorPicker:"colorPicker_q1HB"};function p(e){let{color:t,setColor:r,...p}=e;const{isDarkTheme:d}=(0,i.Z)();return o.createElement("div",(0,n.Z)({},p,{className:(0,a.Z)("color-input",c.colorInput,p.className,c["colorInput"+(d?"Dark":"Light")])}),o.createElement("div",{className:c.colorPickerWrapper,style:{"--background-c":t}},o.createElement("input",{type:"color",onChange:e=>{let{target:t}=e;return r(t.value)},value:t,className:c.colorPicker})),o.createElement(l.Z,null,o.createElement("input",{onChange:e=>{let{target:t}=e;return r(t.value)},value:t})))}},51056:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(87462),o=r(86010),a=r(67294);const l={inputWrapper:"inputWrapper_snXq",inputWrapperLight:"inputWrapperLight_yY4k",inputWrapperDark:"inputWrapperDark_KYVl"};var i=r(85350);function c(e){let{...t}=e;const{isDarkTheme:r}=(0,i.Z)();return a.createElement("div",(0,n.Z)({},t,{className:(0,o.Z)(t.className,"input-wrapper",l.inputWrapper,l["inputWrapper"+(r?"Dark":"Light")])}))}},90856:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),o=r(76521),a=r(13164),l=r(32569),i=r(10290),c=r(6379),p=r(86010);const d={inputRows:"inputRows_vOSC",codePre:"codePre_uQYp"};function s(e){const[t,r]=(0,n.useState)("#ffffff"),[s,m]=(0,n.useState)("#000000"),[u,h]=(0,n.useState)((0,c.ZP)(t,s));return(0,n.useEffect)((()=>{h((0,c.ZP)(t,s))}),[t,s]),n.createElement("div",{className:(0,p.Z)(e.className,"stepped-color-generator")},n.createElement("div",{className:(0,p.Z)(d.inputRows)},n.createElement(a.Z,{color:t}),n.createElement("h3",null,"Background"),n.createElement(l.Z,{color:t,setColor:r}),n.createElement(a.Z,{color:s}),n.createElement("h3",null,"Text"),n.createElement(l.Z,{color:s,setColor:m})),n.createElement("pre",{className:(0,p.Z)(d.codePre)},n.createElement("code",null,":root ","{","\n","\t","--ion-background-color: ",n.createElement(o.Z,{color:t},t),";","\n","\t","--ion-background-color-rgb:"," ",n.createElement(o.Z,{color:t},new i.I(t).toList()),";","\n","\n","\t","--ion-text-color: ",n.createElement(o.Z,{color:s},s),";","\n","\t","--ion-text-color-rgb: ",n.createElement(o.Z,{color:s},new i.I(s).toList()),";","\n","\n",u.map(((e,t)=>n.createElement(n.Fragment,null,"\t","--ion-color-step-",50*(t+1),": ",n.createElement(o.Z,{color:e},e),";","\n"))),"}","\n")))}},10290:(e,t,r)=>{r.d(t,{I:()=>i});const n=e=>{const t=e.toString(16);return 1===t.length?`0${t}`:t},o=e=>`#${(e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((e,t,r,n)=>t+t+r+r+n+n))).replace("#","")}`,a=e=>{let{r:t,g:r,b:o}=e;return"#"+n(t)+n(r)+n(o)},l=e=>{let{r:t,g:r,b:n}=e;t=Math.max(Math.min(t/255,1),0),r=Math.max(Math.min(r/255,1),0),n=Math.max(Math.min(n/255,1),0);const o=Math.max(t,r,n),a=Math.min(t,r,n),l=Math.min(1,Math.max(0,(o+a)/2));let i,c,p;return o!==a?(i=o-a,p=l>.5?i/(2-o-a):i/(o+a),c=o===t?(r-n)/i+(r<n?6:0):o===r?(n-t)/i+2:(t-r)/i+4,c/=6):c=p=0,{h:Math.round(360*c),s:Math.round(100*p),l:Math.round(100*l)}};class i{constructor(e){if("string"==typeof e&&/rgb\(/.test(e)){const t=/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.exec(e)??[];e={r:parseInt(t[0],10),g:parseInt(t[1],10),b:parseInt(t[2],10)}}else if("string"==typeof e&&/hsl\(/.test(e)){const t=/hsl\((\d{1,3}), ?(\d{1,3}%), ?(\d{1,3}%)\)/.exec(e)??[];e={h:parseInt(t[0],10),s:parseInt(t[1],10),l:parseInt(t[2],10)}}if("string"==typeof e)e=e.replace(/\s/g,""),this.hex=o(e),this.rgb=(e=>{e=(e=o(e)).replace("#","");const t=parseInt(e,16);return{r:t>>16&255,g:t>>8&255,b:255&t}})(this.hex),this.hsl=l(this.rgb);else if("r"in e&&"g"in e&&"b"in e)this.rgb=e,this.hex=a(this.rgb),this.hsl=l(this.rgb);else{if(!("h"in e&&"s"in e&&"l"in e))throw new Error("Incorrect value passed.");this.hsl=e,this.rgb=(e=>{let{h:t,s:r,l:n}=e;if(t/=360,r/=100,n/=100,0===r)return n=Math.round(255*n),{r:n,g:n,b:n};const o=(e,t,r)=>(r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e),a=n<.5?n*(1+r):n+r-n*r,l=2*n-a,i=o(l,a,t+1/3),c=o(l,a,t),p=o(l,a,t-1/3);return{r:Math.round(255*i),g:Math.round(255*c),b:Math.round(255*p)}})(this.hsl),this.hex=a(this.rgb)}this.yiq=(e=>{let{r:t,g:r,b:n}=e;return(299*t+587*r+114*n)/1e3})(this.rgb)}static isColor(e){return!!/rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)/.test(e)||/(^#[0-9a-fA-F]+)/.test(e.trim())}contrast(e){return void 0===e&&(e=128),new i(this.yiq>=e?"#000":"#fff")}mix(e,t){void 0===t&&(t=.5);const r=e instanceof i?e:new i(e);return new i(function(e,t,r){void 0===r&&(r=.5);const n=e.rgb,o=t.rgb,a=1-r;return{r:Math.round(r*o.r+a*n.r),g:Math.round(r*o.g+a*n.g),b:Math.round(r*o.b+a*n.b)}}(this,r,t))}shade(e){return void 0===e&&(e=.12),this.mix({r:0,g:0,b:0},e)}tint(e){return void 0===e&&(e=.1),this.mix({r:255,g:255,b:255},e)}toList(){const{r:e,g:t,b:r}=this.rgb;return`${e},${t},${r}`}}},6379:(e,t,r)=>{r.d(t,{ZP:()=>o,vC:()=>a});var n=r(10290);const o=function(e,t){void 0===e&&(e="#ffffff"),void 0===t&&(t="#000000");const r=new n.I(e);return new Array(19).fill(null).map(((e,n)=>r.mix(t,5*(n+1)/100).hex))},a=e=>{const t=new n.I(e),r=t.contrast(),o=t.tint(),a=t.shade();return{value:e,valueRgb:l(t.rgb),contrast:r.hex,contrastRgb:l(r.rgb),tint:o.hex,shade:a.hex}},l=e=>`${e.r},${e.g},${e.b}`},87470:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=r(76521),l=r(90856);const i={title:"Themes"},c=void 0,p={unversionedId:"theming/themes",id:"theming/themes",isDocsHomePage:!1,title:"Themes",description:"Ionic App Themes | Change Default App Background Themes & Colors",source:"@site/docs/theming/themes.md",sourceDirName:"theming",slug:"/theming/themes",permalink:"/docs/theming/themes",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/theming/themes.md",tags:[],version:"current",frontMatter:{title:"Themes"}},d=[{value:"Application Colors",id:"application-colors",children:[],level:2},{value:"Stepped Colors",id:"stepped-colors",children:[],level:2},{value:"Stepped Color Generator",id:"stepped-color-generator",children:[],level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Ionic App Themes | Change Default App Background Themes & Colors"),(0,o.kt)("meta",{name:"description",content:"Several global variables change the default theme of an entire application. Create a custom background and text color theme for your app with Ionic themes."})),(0,o.kt)("p",null,"Ionic provides several global variables that are used throughout components to change the default theme of an entire application. ",(0,o.kt)("a",{parentName:"p",href:"#application-colors"},"Application Colors")," are useful to change the look of most of the Ionic components, and ",(0,o.kt)("a",{parentName:"p",href:"#stepped-colors"},"Stepped Colors")," are used as variations in some of the Ionic components."),(0,o.kt)("h2",{id:"application-colors"},"Application Colors"),(0,o.kt)("p",null,"The application colors are used in multiple places in Ionic. These are useful for easily creating dark themes or themes that match a brand."),(0,o.kt)("p",null,"It is important to note that the background and text color variables also require a rgb variable to be set in ",(0,o.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/RGB",target:"_blank"},"rgb format"),". See ",(0,o.kt)("a",{parentName:"p",href:"/docs/theming/advanced#the-alpha-problem"},"The Alpha Problem")," for an explanation of why the ",(0,o.kt)("inlineCode",{parentName:"p"},"rgb")," property is also needed."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-background-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Background color of the entire app")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-background-color-rgb")),(0,o.kt)("td",{parentName:"tr",align:null},"Background color of the entire app, rgb format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-text-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the entire app")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-text-color-rgb")),(0,o.kt)("td",{parentName:"tr",align:null},"Text color of the entire app, rgb format")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-backdrop-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the Backdrop component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-backdrop-opacity")),(0,o.kt)("td",{parentName:"tr",align:null},"Opacity of the Backdrop component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-overlay-background-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Background color of the overlays")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-border-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Border color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-box-shadow-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Box shadow color")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the Tab Bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-background-focused")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the focused Tab Bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-border-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Border color of the Tab Bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the Tab Bar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-tab-bar-color-selected")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the selected Tab Button")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-border-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Border color of the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the components in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the Segment Buttons in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-color-checked")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the checked Segment Buttons in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the Segment Buttons in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-background-checked")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the Segment Buttons in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-toolbar-segment-indicator-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the Segment Button indicator in the Toolbar")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-item-background")),(0,o.kt)("td",{parentName:"tr",align:null},"Background of the Item")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-item-border-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Border color of the Item")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-item-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the components in the Item")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"--ion-placeholder-color")),(0,o.kt)("td",{parentName:"tr",align:null},"Color of the placeholder in Inputs")))),(0,o.kt)("h2",{id:"stepped-colors"},"Stepped Colors"),(0,o.kt)("p",null,"After exploring different ways to customize the Ionic theme, we found that we couldn't use just one background or text color. In order to imply importance and depth throughout the design, we need to use different shades of the background and text colors. To accommodate this pattern, we created stepped colors."),(0,o.kt)("p",null,"While updating the background (",(0,o.kt)("inlineCode",{parentName:"p"},"--ion-background-color"),") and text (",(0,o.kt)("inlineCode",{parentName:"p"},"--ion-text-color"),") variables will change the look of the app for most components, there are certain Ionic components where it may look off, or broken. This will be more apparent when applying a darker theme."),(0,o.kt)("p",null,"In some components we use a shade darker than the background or lighter than the text. For example, an item heading text may need to be ",(0,o.kt)(a.Z,{color:"#404040",mdxType:"CodeColor"},"#404040"),", which is a few shades lighter than our default text color. Meanwhile, the loading component background is a shade darker than white, using ",(0,o.kt)(a.Z,{color:"#f2f2f2",mdxType:"CodeColor"},"#f2f2f2"),". We use stepped colors in order to define these slight variations. It is important to update the stepped colors when updating the background or text color of an application."),(0,o.kt)("p",null,"By default, the Ionic stepped colors start at the default background color value ",(0,o.kt)(a.Z,{color:"#ffffff",mdxType:"CodeColor"},"#ffffff")," and mix with the text color value ",(0,o.kt)(a.Z,{color:"#000000",mdxType:"CodeColor"},"#000000")," using an increasing percentage. The full list of stepped colors is shown in the generator below."),(0,o.kt)("h2",{id:"stepped-color-generator"},"Stepped Color Generator"),(0,o.kt)("p",null,"Create a custom background and text color theme for your app. Update the background or text color\u2019s hex values below, then copy and paste the generated code directly into your Ionic project."),(0,o.kt)(l.Z,{mdxType:"SteppedColorGenerator"}))}u.isMDXComponent=!0}}]);