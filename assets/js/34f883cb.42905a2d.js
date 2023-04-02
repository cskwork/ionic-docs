"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[67699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(n),s=r,f=c["".concat(d,".").concat(s)]||c[s]||u[s]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},20016:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Platform",l={unversionedId:"react/platform",id:"version-v6/react/platform",isDocsHomePage:!1,title:"Platform",description:"isPlatform",source:"@site/versioned_docs/version-v6/react/platform.md",sourceDirName:"react",slug:"/react/platform",permalink:"/docs/v6/react/platform",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/react/platform.md",tags:[],version:"v6",frontMatter:{},sidebar:"version-v6/docs",previous:{title:"Migrating From IonSlides to Swiper.js",permalink:"/docs/v6/react/slides"},next:{title:"Progressive Web Apps",permalink:"/docs/v6/react/pwa"}},d=[{value:"isPlatform",id:"isplatform",children:[],level:2},{value:"getPlatforms",id:"getplatforms",children:[],level:2},{value:"Platforms",id:"platforms",children:[],level:2},{value:"Customizing Platform Detection Functions",id:"customizing-platform-detection-functions",children:[],level:2}],p={toc:d},m="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"platform"},"Platform"),(0,r.kt)("h2",{id:"isplatform"},"isPlatform"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"isPlatform")," method can be used to test if your app is running on a certain platform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { isPlatform } from '@ionic/react';\n\nisPlatform('ios'); // returns true when running on a iOS device\n")),(0,r.kt)("p",null,"Depending on the platform the user is on, isPlatform(platformName) will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: mobile, ios, ipad, and tablet. Additionally, if the app was running from Cordova then cordova would be true."),(0,r.kt)("h2",{id:"getplatforms"},"getPlatforms"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"getPlatforms")," method can be used to determine which platforms your app is currently running on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { getPlatforms } from \'@ionic/react\';\n\ngetPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone\n')),(0,r.kt)("p",null,"Depending on what device you are on, ",(0,r.kt)("inlineCode",{parentName:"p"},"getPlatforms")," can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return mobile, ios, and iphone."),(0,r.kt)("h2",{id:"platforms"},"Platforms"),(0,r.kt)("p",null,"Below is a table listing all the possible platform values along with corresponding descriptions."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Platform Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"android"),(0,r.kt)("td",{parentName:"tr",align:null},"a device running Android")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"capacitor"),(0,r.kt)("td",{parentName:"tr",align:null},"a device running Capacitor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cordova"),(0,r.kt)("td",{parentName:"tr",align:null},"a device running Cordova")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"desktop"),(0,r.kt)("td",{parentName:"tr",align:null},"a desktop device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"electron"),(0,r.kt)("td",{parentName:"tr",align:null},"a desktop device running Electron")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hybrid"),(0,r.kt)("td",{parentName:"tr",align:null},"a device running Capacitor or Cordova")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ios"),(0,r.kt)("td",{parentName:"tr",align:null},"a device running iOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipad"),(0,r.kt)("td",{parentName:"tr",align:null},"an iPad device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"iphone"),(0,r.kt)("td",{parentName:"tr",align:null},"an iPhone device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobile"),(0,r.kt)("td",{parentName:"tr",align:null},"a mobile device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mobileweb"),(0,r.kt)("td",{parentName:"tr",align:null},"a web browser running in a mobile device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phablet"),(0,r.kt)("td",{parentName:"tr",align:null},"a phablet device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pwa"),(0,r.kt)("td",{parentName:"tr",align:null},"a PWA app")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tablet"),(0,r.kt)("td",{parentName:"tr",align:null},"a tablet device")))),(0,r.kt)("h2",{id:"customizing-platform-detection-functions"},"Customizing Platform Detection Functions"),(0,r.kt)("p",null,"The function used to detect a specific platform can be overridden by providing an alternative function in the global ",(0,r.kt)("a",{parentName:"p",href:"../developing/config"},"Ionic config"),". Each function takes ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," as a parameter and returns a boolean."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"setupIonicReact({\n  platform: {\n    /** The default `desktop` function returns false for devices with a touchscreen.\n     * This is not always wanted, so this function tests the User Agent instead.\n     **/\n    desktop: (win) => {\n      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);\n      return !isMobile;\n    },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type PlatformConfig = {\n  android?: ((win: Window) => boolean) | undefined;\n  capacitor?: ((win: Window) => boolean) | undefined;\n  cordova?: ((win: Window) => boolean) | undefined;\n  desktop?: ((win: Window) => boolean) | undefined;\n  electron?: ((win: Window) => boolean) | undefined;\n  hybrid?: ((win: Window) => boolean) | undefined;\n  ios?: ((win: Window) => boolean) | undefined;\n  ipad?: ((win: Window) => boolean) | undefined;\n  iphone?: ((win: Window) => boolean) | undefined;\n  mobile?: ((win: Window) => boolean) | undefined;\n  mobileweb?: ((win: Window) => boolean) | undefined;\n  phablet?: ((win: Window) => boolean) | undefined;\n  pwa?: ((win: Window) => boolean) | undefined;\n  tablet?: ((win: Window) => boolean) | undefined;\n};\n")))}c.isMDXComponent=!0}}]);