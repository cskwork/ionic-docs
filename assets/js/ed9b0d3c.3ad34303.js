"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[70575],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(o),u=n,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||a;return o?r.createElement(h,i(i({ref:t},m),{},{components:o})):r.createElement(h,i({ref:t},m))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},55171:(e,t,o)=>{o.d(t,{Z:()=>l});var r=o(87462),n=o(86010),a=o(67294);const i={colorAccordion:"colorAccordion_rKb4",colorSubmenu:"colorSubmenu_WyoW",colorMenuItem:"colorMenuItem_Hec2",colorMenuText:"colorMenuText_uU9B",colorSubmenuItem:"colorSubmenuItem_TAs6",colorMenuValue:"colorMenuValue_MFkp",colorMenuItemActive:"colorMenuItemActive_zKCF"};function l(e){let{...t}=e;const[o,l]=(0,a.useState)([]),[s,c]=(0,a.useState)(""),m=(0,a.useRef)(null);(0,a.useEffect)((()=>{l(["primary","secondary","tertiary","success","warning","danger","dark","medium","light"])}),[]);const d=(0,a.useCallback)((e=>({baseColor:getComputedStyle(m.current).getPropertyValue(`--ion-color-${e}`),shadeColor:getComputedStyle(m.current).getPropertyValue(`--ion-color-${e}-shade`),tintColor:getComputedStyle(m.current).getPropertyValue(`--ion-color-${e}-tint`)})),[]);return a.createElement("ul",(0,r.Z)({},t,{ref:m,className:(0,n.Z)({[i.colorAccordion]:!0,[t.className]:Boolean(t.className),"color-accordion":!0})}),o.map((e=>{const{baseColor:t,shadeColor:o,tintColor:r}=d(e);return a.createElement("li",{className:(0,n.Z)({[i.colorMenuItem]:!0,[i.colorMenuItemActive]:e===s}),style:{"background-color":`var(--ion-color-${e})`,color:`var(--ion-color-${e}-contrast)`}},a.createElement("div",{className:i.colorMenuText,onClick:()=>c(s===e?"":e)},e[0].toUpperCase()+e.substr(1),a.createElement("div",{className:i.colorMenuValue},t)),a.createElement("svg",{width:"10px",height:"6px",viewBox:"0 0 10 6",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},a.createElement("g",{id:"Welcome",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"},a.createElement("g",{id:"Desktop-HD",transform:"translate(-1025.000000, -335.000000)",stroke:"currentColor","stroke-width":"2"},a.createElement("polyline",{id:"arrow",transform:"translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) ",points:"1028 334 1032 338.020022 1028 342"})))),a.createElement("ul",{className:i.colorSubmenu},a.createElement("li",{className:i.colorSubmenuItem,style:{"background-color":`var(--ion-color-${e}-shade)`,color:`var(--ion-color-${e}-contrast)`}},a.createElement("div",{className:i.colorMenuText},"Shade",a.createElement("div",{className:i.colorMenuValue},o))),a.createElement("li",{className:i.colorSubmenuItem,style:{"background-color":`var(--ion-color-${e}-tint)`,color:`var(--ion-color-${e}-contrast)`}},a.createElement("div",{className:i.colorMenuText},"Tint",a.createElement("div",{className:i.colorMenuValue},r)))))})))}},115:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905)),a=o(55171);const i={title:"Theming Basics",sidebar_label:"Basics"},l=void 0,s={unversionedId:"theming/basics",id:"version-v6/theming/basics",isDocsHomePage:!1,title:"Theming Basics",description:"Theming | Ionic Apps: Color and Theming Basics Definition",source:"@site/versioned_docs/version-v6/theming/basics.md",sourceDirName:"theming",slug:"/theming/basics",permalink:"/docs/v6/theming/basics",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/theming/basics.md",tags:[],version:"v6",frontMatter:{title:"Theming Basics",sidebar_label:"Basics"},sidebar:"version-v6/docs",previous:{title:"CSS Utilities",permalink:"/docs/v6/layout/css-utilities"},next:{title:"Platform Styles",permalink:"/docs/v6/theming/platform-styles"}},c=[{value:"Colors",id:"colors",children:[],level:2},{value:"Platform Standards",id:"platform-standards",children:[],level:2},{value:"CSS Variables",id:"css-variables",children:[],level:2},{value:"CSS Shadow Parts",id:"css-shadow-parts",children:[],level:2},{value:"Branding",id:"branding",children:[],level:2}],m={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("title",null,"Theming | Ionic Apps: Color and Theming Basics Definition"),(0,n.kt)("meta",{name:"description",content:"The definition of theming apps just got simplified. Ionic Framework is built with pre-baked styles and colors which are extremely easy to change and modify."})),(0,n.kt)("p",null,"Ionic Framework is built to be a blank slate that can easily be customized and modified to fit a brand, while still following the standards of the different platforms. Theming Ionic apps is now easier than ever. Because the framework is built with CSS, it comes with pre-baked default styles which are extremely easy to change and modify."),(0,n.kt)("h2",{id:"colors"},"Colors"),(0,n.kt)("p",null,"Ionic has nine default colors that can be used to change the color of many components. Each color is actually a collection of multiple properties, including a ",(0,n.kt)("inlineCode",{parentName:"p"},"shade")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"tint"),", used throughout Ionic."),(0,n.kt)("p",null,"When changing a color, it is important to set all of the related properties. This can be done easily with the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/color-generator"},"Color Generator")," tool, but these can also be manually written if desired. For more information on Ionic colors, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/colors"},"Colors"),"."),(0,n.kt)(a.Z,{mdxType:"ColorAccordion"}),(0,n.kt)("h2",{id:"platform-standards"},"Platform Standards"),(0,n.kt)("p",null,"Ionic components adapt their look and behavior based on the platform the app is running on. We call this ",(0,n.kt)("strong",null,"Adaptive Styling"),'. This allows developers to build apps that use the same codebase for multiple platforms, while still looking "native" to those particular platforms.'),(0,n.kt)("p",null,"Ionic has two ",(0,n.kt)("strong",{parentName:"p"},"modes")," that are used to customize the look of components based on the ",(0,n.kt)("strong",{parentName:"p"},"platform"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ios")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"md"),". Each platform has a default mode, but this can easily be configured. For more information on customizing an application based on the platform, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/platform-styles"},"Platform Styles"),"."),(0,n.kt)("h2",{id:"css-variables"},"CSS Variables"),(0,n.kt)("p",null,"The Ionic Framework components are themed using ",(0,n.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables",target:"_blank",rel:"noopener noreferrer"},"CSS properties (variables)"),". CSS variables add dynamic values to an otherwise static language. This is something that has traditionally required a CSS preprocessor like Sass. The look of an application can easily be changed by changing the value of any of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/css-variables"},"CSS Variables")," Ionic Framework provides."),(0,n.kt)("h2",{id:"css-shadow-parts"},"CSS Shadow Parts"),(0,n.kt)("p",null,"CSS Shadow Parts were added to make it easier to fully customize Ionic Framework Shadow components. In the past, components that use ",(0,n.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",target:"_blank",rel:"noopener noreferrer"},"Shadow DOM")," were unable to have elements inside of their shadow tree styled directly. With the addition of Shadow parts, there is no longer a need for CSS variables for every property on an inner element of a Shadow component. For more information on customizing Ionic Framework components using parts, see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/css-shadow-parts"},"CSS Shadow Parts")," guide."),(0,n.kt)("h2",{id:"branding"},"Branding"),(0,n.kt)("p",null,"Ionic provides application colors that can be used to theme an application to match a brand or color scheme. The default theme uses a light background, but everything from the background color to the text color is fully customizable. For more information on branding, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/v6/theming/themes"},"Themes"),"."))}p.isMDXComponent=!0}}]);