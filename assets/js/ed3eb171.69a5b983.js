"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[25269],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},30073:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Progressive Web Apps in React",sidebar_label:"Progressive Web Apps"},o=void 0,p={unversionedId:"react/pwa",id:"react/pwa",isDocsHomePage:!1,title:"Progressive Web Apps in React",description:"Create Progressive Web Apps (PWA) in React - Ionic Framework",source:"@site/docs/react/pwa.md",sourceDirName:"react",slug:"/react/pwa",permalink:"/docs/react/pwa",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/pwa.md",tags:[],version:"current",frontMatter:{title:"Progressive Web Apps in React",sidebar_label:"Progressive Web Apps"}},s=[{value:"Making your React app a PWA with Vite",id:"making-your-react-app-a-pwa-with-vite",children:[],level:2},{value:"Making your React app a PWA with Create React App",id:"making-your-react-app-a-pwa-with-create-react-app",children:[{value:"Service Worker configuration",id:"service-worker-configuration",children:[],level:3},{value:"Deploying",id:"deploying",children:[{value:"Firebase",id:"firebase",children:[],level:4}],level:3}],level:2}],l={toc:s},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Create Progressive Web Apps (PWA) in React - Ionic Framework"),(0,r.kt)("meta",{name:"description",content:"Create progressive web apps in React with Ionic. Read our React PWA documentation for information on how to make React PWAs."})),(0,r.kt)("h2",{id:"making-your-react-app-a-pwa-with-vite"},"Making your React app a PWA with Vite"),(0,r.kt)("p",null,"The two main requirements of a PWA are a ",(0,r.kt)("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank"},"Service Worker")," and a ",(0,r.kt)("a",{href:"https://developers.google.com/web/fundamentals/web-app-manifest/",target:"_blank"},"Web Application Manifest"),". While it's possible to add both of these to an app manually, we recommend using the ",(0,r.kt)("a",{parentName:"p",href:"https://vite-pwa-org.netlify.app/"},"Vite PWA Plugin")," instead."),(0,r.kt)("p",null,"To get started, install the ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-plugin-pwa")," package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -D vite-plugin-pwa\n")),(0,r.kt)("p",null,"Next, update your ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.js")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," file and add ",(0,r.kt)("inlineCode",{parentName:"p"},"vite-plugin-pwa"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\nimport { VitePWA } from 'vite-plugin-pwa'\n\nexport default defineConfig({\n  plugins: [\n    react(),\n    VitePWA({ registerType: 'autoUpdate' })\n  ],\n})\n")),(0,r.kt)("p",null,"This minimal configuration allows your application to generate the Web Application Manifest and Service Worker on build."),(0,r.kt)("p",null,"For more information on configuring the Vite PWA Plugin, see the ",(0,r.kt)("a",{parentName:"p",href:"https://vite-pwa-org.netlify.app/guide/"},'Vite PWA "Getting Started" Guide'),"."),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://vite-pwa-org.netlify.app/deployment/"},'Vite PWA "Deploy" Guide')," for information on how to deploy your PWA."),(0,r.kt)("h2",{id:"making-your-react-app-a-pwa-with-create-react-app"},"Making your React app a PWA with Create React App"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"As of Ionic CLI v7, Ionic React starter apps ship with Vite instead of Create React App. See ",(0,r.kt)("a",{parentName:"p",href:"#making-your-react-app-a-pwa-with-vite"},"Making your React app a PWA with Vite")," for Vite instructions."))),(0,r.kt)("p",null,"The two main requirements of a PWA are a ",(0,r.kt)("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank"},"Service Worker")," and a ",(0,r.kt)("a",{href:"https://developers.google.com/web/fundamentals/web-app-manifest/",target:"_blank"},"Web Application Manifest"),". While it's possible to add both of these to an app manually, a base project from Create React App (CRA) and the Ionic CLI provides this already."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," for your app, there is a call to a ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceWorker.unregister()")," function. The base that CRA provides has service workers as an opt-in feature, so it must be enabled. To enable, call ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceWorker.register()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App';\nimport * as serviceWorkerRegistration from './serviceWorkerRegistration';\n\nconst container = document.getElementById('root');\nconst root = createRoot(container!);\nroot.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>\n);\n\n// If you want your app to work offline and load faster, you can change\n// unregister() to register() below. Note this comes with some pitfalls.\n// Learn more about service workers: https://cra.link/PWA\nserviceWorkerRegistration.register();\n")),(0,r.kt)("p",null,"Once this package has been added, run ",(0,r.kt)("inlineCode",{parentName:"p"},"ionic build")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory will be ready to deploy as a PWA."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, react apps package comes with the Ionic logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons."))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Features like Service Workers and many JavaScript APIs (such as geolocation) require the app to be hosted in a secure context. When deploying an app through a hosting service, be aware that HTTPS will be required to take full advantage of Service Workers."))),(0,r.kt)("h3",{id:"service-worker-configuration"},"Service Worker configuration"),(0,r.kt)("p",null,"By default, CRA/React Scripts come with a preconfigured Service Worker setup based on ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin"},"Workbox's Webpack plugin"),". This utilises a cache-first strategy, meaning that your app will load from a cache, even if the network returns a newer version of the app."),(0,r.kt)("p",null,"Because of the nature of CRA/React Scripts, the configuration for this is internal to React Scripts, meaning that it cannot be customized without ejecting from React Scripts. Currently, the Ionic CLI does not support an ejected React App, so if this action is taken, you'll need to use npm/yarn scripts instead of the Ionic CLI."),(0,r.kt)("h3",{id:"deploying"},"Deploying"),(0,r.kt)("h4",{id:"firebase"},"Firebase"),(0,r.kt)("p",null,"Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html"},"HTTP2 push"),"."),(0,r.kt)("p",null,"First, if not already available, ",(0,r.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"create the project")," in Firebase."),(0,r.kt)("p",null,"Next, in a Terminal, install the Firebase CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g firebase-tools\n")),(0,r.kt)("p",null,"With the Firebase CLI installed, run ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase init")," within your Ionic project. The CLI prompts:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'"Which Firebase CLI features do you want to set up for this folder?"'),' Choose "Hosting: Configure and deploy Firebase Hosting sites."'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'"Select a default Firebase project for this directory:"')," Choose the project you created on the Firebase website."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'"What do you want to use as your public directory?"'),' Enter "build".'),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'Configure as a single-page app (rewrite all urls to /index.html)?"'),' Enter "Yes".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'"File build/index.html already exists. Overwrite?"'),' Enter "No".'),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase.json")," config file is generated, configuring the app for deployment."),(0,r.kt)("p",null,"The last thing needed is to make sure caching headers are being set correctly. To do this, add a ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," snippet to the ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase.json")," file. The complete ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase.json")," looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hosting": {\n    "public": "build",\n    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],\n    "rewrites": [\n      {\n        "source": "**",\n        "destination": "/index.html"\n      }\n    ],\n    "headers": [\n      {\n        "source": "/**",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "public, max-age=31536000"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase.json")," properties, see the ",(0,r.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting/full-config#section-firebase-json"},"Firebase documentation"),"."),(0,r.kt)("p",null,"Next, build an optimized version of the app by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic build --prod\n")),(0,r.kt)("p",null,"Last, deploy the app by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"firebase deploy\n")),(0,r.kt)("p",null,"After this completes, the app will be live."))}d.isMDXComponent=!0}}]);