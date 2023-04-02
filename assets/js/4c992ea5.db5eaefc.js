"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[32062],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19627:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_label:"Progressive Web Apps"},i=void 0,s={unversionedId:"vue/pwa",id:"version-v6/vue/pwa",isDocsHomePage:!1,title:"pwa",description:"Vue PWA | Add Progressive Web Apps to Vue.js Projects | Ionic",source:"@site/versioned_docs/version-v6/vue/pwa.md",sourceDirName:"vue",slug:"/vue/pwa",permalink:"/docs/v6/vue/pwa",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/vue/pwa.md",tags:[],version:"v6",frontMatter:{sidebar_label:"Progressive Web Apps"},sidebar:"version-v6/docs",previous:{title:"Platform",permalink:"/docs/v6/vue/platform"},next:{title:"Storage",permalink:"/docs/v6/vue/storage"}},l=[{value:"Making your Vue app a PWA",id:"making-your-vue-app-a-pwa",children:[{value:"Manifest",id:"manifest",children:[],level:3}],level:2},{value:"Deploying",id:"deploying",children:[{value:"Firebase",id:"firebase",children:[],level:3}],level:2}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Vue PWA | Add Progressive Web Apps to Vue.js Projects | Ionic"),(0,a.kt)("meta",{name:"description",content:"Run the 'vue add' command to install the progressive web app plugin. Learn more about how to add PWA to your existing Vue project."})),(0,a.kt)("h1",{id:"progressive-web-apps-in-vue"},"Progressive Web Apps in Vue"),(0,a.kt)("h2",{id:"making-your-vue-app-a-pwa"},"Making your Vue app a PWA"),(0,a.kt)("p",null,"The two main requirements of a PWA are a ",(0,a.kt)("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank"},"Service Worker")," and a ",(0,a.kt)("a",{href:"https://developers.google.com/web/fundamentals/web-app-manifest/",target:"_blank"},"Web Manifest"),". While it's possible to add both of these to an app manually, the Vue CLI has some utilities for adding this for you."),(0,a.kt)("p",null,"For existing projects, you can run the ",(0,a.kt)("inlineCode",{parentName:"p"},"vue add")," command to install the PWA plugin for Vue."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"vue add pwa\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you have changes already in place, be sure to commit them in Git."))),(0,a.kt)("p",null,"Once this is completed, Vue's CLI will have created a new ",(0,a.kt)("inlineCode",{parentName:"p"},"registerServiceWorker.ts")," file and imported it into our ",(0,a.kt)("inlineCode",{parentName:"p"},"main.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from 'vue';\nimport App from './App.vue';\nimport router from './router';\n// Added by the CLI\nimport './registerServiceWorker';\n\ncreateApp(App).use(router).mount('#app');\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"registerServiceWorker.ts")," file will point to a service worker that the CLI will create at build time. Inside of here we can customize the experience users will have when the service worker detects an update, change in network connectivity, or receives an error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { register } from 'register-service-worker';\n\nif (process.env.NODE_ENV === 'production') {\n  register(`${process.env.BASE_URL}service-worker.js`, {\n    ready() {\n      console.log(\n        'App is being served from cache by a service worker.\\n' + 'For more details, visit https://goo.gl/AFskqB'\n      );\n    },\n    registered() {\n      console.log('Service worker has been registered.');\n    },\n    cached() {\n      console.log('Content has been cached for offline use.');\n    },\n    updatefound() {\n      console.log('New content is downloading.');\n    },\n    updated() {\n      console.log('New content is available; please refresh.');\n    },\n    offline() {\n      console.log('No internet connection found. App is running in offline mode.');\n    },\n    error(error) {\n      console.error('Error during service worker registration:', error);\n    },\n  });\n}\n")),(0,a.kt)("p",null,"The service worker that is generated is based on ",(0,a.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin"},"Workbox's webpack plugin"),", and by default is setup to use ",(0,a.kt)("inlineCode",{parentName:"p"},"GenerateSW()"),". Meaning that at build time, Workbox will automatically generate a service worker cache for all the files it processes."),(0,a.kt)("p",null,"If you want to configure this and change the default behavior, checkout the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration"},"PWA plugin docs")," on GitHub."),(0,a.kt)("h3",{id:"manifest"},"Manifest"),(0,a.kt)("p",null,"In addition to the service worker, the Vue PWA plugin also is responsible for creating a manifest file for your app as well. By default, the CLI will generate a manifest that contains the following entries."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "pwa-test",\n  "short_name": "pwa-test",\n  "theme_color": "#4DBA87",\n  "icons": [\n    {\n      "src": "./img/icons/android-chrome-192x192.png",\n      "sizes": "192x192",\n      "type": "image/png"\n    },\n    {\n      "src": "./img/icons/android-chrome-512x512.png",\n      "sizes": "512x512",\n      "type": "image/png"\n    },\n    {\n      "src": "./img/icons/android-chrome-maskable-192x192.png",\n      "sizes": "192x192",\n      "type": "image/png",\n      "purpose": "maskable"\n    },\n    {\n      "src": "./img/icons/android-chrome-maskable-512x512.png",\n      "sizes": "512x512",\n      "type": "image/png",\n      "purpose": "maskable"\n    }\n  ],\n  "start_url": ".",\n  "display": "standalone",\n  "background_color": "#000000"\n}\n')),(0,a.kt)("p",null,"Be sure to update the icons in ",(0,a.kt)("inlineCode",{parentName:"p"},"public/img/icons")," to match your own brand. If you wanted to customize the theme color or name, be sure to read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa#configuration"},"PWA plugin docs")," on GitHub."),(0,a.kt)("h2",{id:"deploying"},"Deploying"),(0,a.kt)("p",null,"You can use various hosts like Firebase, Vercel, Netlify, or even Azure Static Web Apps. All will have similar setup processes that need to be completed. For this guide, Firebase will be used as the hosting example. In addition to this guide, the ",(0,a.kt)("a",{parentName:"p",href:"https://cli.vuejs.org/guide/deployment.html"},"Vue CLI docs")," also have a guide on how to deploy to various providers."),(0,a.kt)("h3",{id:"firebase"},"Firebase"),(0,a.kt)("p",null,"Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html"},"HTTP2 push"),"."),(0,a.kt)("p",null,"First, if not already available, ",(0,a.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"create the project")," in Firebase."),(0,a.kt)("p",null,"Next, in a Terminal, install the Firebase CLI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g firebase-tools\n")),(0,a.kt)("p",null,"With the Firebase CLI installed, run ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase init")," within your Ionic project. The CLI prompts:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"Which Firebase CLI features do you want to set up for this folder?"'),' Choose "Hosting: Configure and deploy Firebase Hosting sites."'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"Select a default Firebase project for this directory:"')," Choose the project you created on the Firebase website."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"What do you want to use as your public directory?"'),' Enter "dist".'),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'Configure as a single-page app (rewrite all urls to /index.html)?"'),' Enter "Yes".'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},'"File dist/index.html already exists. Overwrite?"'),' Enter "No".'),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.json")," config file is generated, configuring the app for deployment."),(0,a.kt)("p",null,"The last thing needed is to make sure caching headers are being set correctly. To do this, add a ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," snippet to the ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.json")," file. The complete ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.json")," looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hosting": {\n    "public": "dist",\n    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],\n    "rewrites": [\n      {\n        "source": "**",\n        "destination": "/index.html"\n      }\n    ],\n    "headers": [\n      {\n        "source": "/**",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "public, max-age=31536000"\n          }\n        ]\n      },\n      {\n        "source": "precache-manifest.*.js",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "no-cache"\n          }\n        ]\n      },\n      {\n        "source": "service-worker.js",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "no-cache"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"For more information about the ",(0,a.kt)("inlineCode",{parentName:"p"},"firebase.json")," properties, see the ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting/full-config#section-firebase-json"},"Firebase documentation"),"."),(0,a.kt)("p",null,"Next, build an optimized version of the app by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic build\n")),(0,a.kt)("p",null,"Last, deploy the app by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"firebase deploy\n")),(0,a.kt)("p",null,"After this completes, the app will be live."))}u.isMDXComponent=!0}}]);