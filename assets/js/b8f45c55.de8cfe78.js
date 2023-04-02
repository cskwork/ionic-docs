"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[53379],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},25383:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={},i="Make It Your Own! Ionic Theming",s={unversionedId:"developer-resources/guides/first-app-v3/theming",id:"developer-resources/guides/first-app-v3/theming",isDocsHomePage:!1,title:"Make It Your Own! Ionic Theming",description:"Previously, we converted our single use Camera app into an epic photo gallery. Now, let\u2019s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box. You can find the code for this in the \u201cpart 3\u201d folder on GitHub.",source:"@site/docs/developer-resources/guides/first-app-v3/theming.md",sourceDirName:"developer-resources/guides/first-app-v3",slug:"/developer-resources/guides/first-app-v3/theming",permalink:"/docs/developer-resources/guides/first-app-v3/theming",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developer-resources/guides/first-app-v3/theming.md",tags:[],version:"current",frontMatter:{}},l=[],p={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"make-it-your-own-ionic-theming"},"Make It Your Own! Ionic Theming"),(0,r.kt)("p",null,"Previously, we converted our single use Camera app into an epic photo gallery. Now, let\u2019s explore how to make the photo gallery our own with Ionic theming. The visual design of the app is incredibly important - fortunately, Ionic provides a lot for us out-of-the-box. You can find the code for this in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part3"},"the \u201cpart 3\u201d folder")," on GitHub."),(0,r.kt)("p",null,"Ionic has five default colors, defined as Sass variables, that can be used to change the color of its UI components:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"v3-theming",src:o(59567).Z})),(0,r.kt)("p",null,"You can customize each color further by supplying a base and contract property. Base acts as the background color and contrast acts as the text color for most components. This provides much more flexible control over your styles:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"v3-theming-colors",src:o(55678).Z})),(0,r.kt)("p",null,"You can find these colors defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/theme/variables.scss"),"."),(0,r.kt)("p",null,"By changing these variables here and there, you can easily update the entire theme of the application! Try changing a few of them and watch the app update in DevApp. For example, change the default blue color for Primary to purple:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Css"},"$colors: (\n  primary:    #7044ff,\n)\n")),(0,r.kt)("p",null,"But wait, there\u2019s more! Ionic automatically provides platform specific styles based on the device the application is running on, giving that native look and feel your users are used to:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ios and android comparison",src:o(11782).Z})),(0,r.kt)("p",null,"In our app, this is clearly visible in how the header and the icons are styled."),(0,r.kt)("p",null,"If you want consistency, you can tell Ionic to use the same mode regardless of platform. For example, to apply Material Design (Android\u2019s platform style), set it globally in the App Module class. Open ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),", then set the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},'imports: [\n    BrowserModule,\n    IonicModule.forRoot(MyApp, {\n      mode: "md"\n    }, null),\n    IonicStorageModule.forRoot()\n  ],\n')),(0,r.kt)("p",null,"Now, the iOS version of our app has a Material Design skin!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ios and android comparison",src:o(94282).Z})),(0,r.kt)("p",null,"Creating gorgeous-looking Ionic apps is easy with Sass variables and platform-specific styling. You now have everything you need to get started with Ionic. Go forth and build great apps!"),(0,r.kt)("p",null,"If you're interested in taking your Ionic apps to the next level, continue on with our exploration of Appflow next."))}u.isMDXComponent=!0},11782:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ion-lab-comparison-88025ce381e3b322f8e2c3206bb71a1d.png"},94282:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/ion-lab-md-styling-d1d0a9aab74f81df2d64d558f0b2785f.png"},55678:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/v3-themeColors-b088fb406be8d58f83308e3007d037d8.png"},59567:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/v3-theming-6571b55a1e20186546bc3910c2f42d7c.png"}}]);