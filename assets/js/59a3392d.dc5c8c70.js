"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[29370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?i.createElement(f,r(r({ref:t},u),{},{components:n})):i.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,r[1]=c;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64486:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(87462),o=(n(67294),n(3905));const a={title:"ionic capacitor build",sidebar_label:"capacitor build"},r=void 0,c={unversionedId:"cli/commands/capacitor-build",id:"cli/commands/capacitor-build",isDocsHomePage:!1,title:"ionic capacitor build",description:"Ionic Capacitor Build for Apps - Documentation",source:"@site/docs/cli/commands/capacitor-build.md",sourceDirName:"cli/commands",slug:"/cli/commands/capacitor-build",permalink:"/docs/cli/commands/capacitor-build",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/capacitor/build.ts",tags:[],version:"current",frontMatter:{title:"ionic capacitor build",sidebar_label:"capacitor build"},sidebar:"cli",previous:{title:"capacitor add",permalink:"/docs/cli/commands/capacitor-add"},next:{title:"capacitor copy",permalink:"/docs/cli/commands/capacitor-copy"}},l=[{value:"platform",id:"platform",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Advanced Options",id:"advanced-options",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"Ionic Capacitor Build for Apps - Documentation"),(0,o.kt)("meta",{name:"description",content:"Build an Ionic project for a given platform. Once Ionic Capacitor Build copies web assets into the native platform, you can build your app using the native IDE."})),(0,o.kt)("p",null,"Build an Ionic project for a given platform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor build [platform] [options]\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ionic capacitor build")," will do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Perform ",(0,o.kt)("inlineCode",{parentName:"li"},"ionic build")),(0,o.kt)("li",{parentName:"ul"},"Copy web assets into the specified native platform"),(0,o.kt)("li",{parentName:"ul"},"Open the IDE for your native project (Xcode for iOS, Android Studio for Android)")),(0,o.kt)("p",null,"Once the web assets and configuration are copied into your native project, you can build your app using the native IDE. Unfortunately, programmatically building the native project is not yet supported."),(0,o.kt)("p",null,"To configure your native project, see the common configuration ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/basics/configuring-your-app"},"docs")," as well as low-level configuration for ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/ios/configuration"},"iOS")," and ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/android/configuration"},"Android"),"."),(0,o.kt)("h3",{id:"platform"},"platform"),(0,o.kt)("p",null,"The platform to build for (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ios"),")"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-build"),": Do not invoke Ionic build\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-open"),": Do not invoke Capacitor open\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--prod"),": Flag to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"production")," configuration\n")),(0,o.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--configuration=<conf>"),": Specify the configuration to use (or ",(0,o.kt)("inlineCode",{parentName:"li"},"-c"),")\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--source-map"),": Output source maps\n"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--watch"),": Rebuild when files change\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic capacitor build \n$ ionic capacitor build android\n$ ionic capacitor build ios\n")))}d.isMDXComponent=!0}}]);