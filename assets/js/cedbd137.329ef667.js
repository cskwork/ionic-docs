"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[3501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},59210:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"CORS Errors"},l=void 0,i={unversionedId:"troubleshooting/cors",id:"troubleshooting/cors",isDocsHomePage:!1,title:"CORS Errors",description:"CORS Errors: Cross-Origin Resource Sharing - Ionic Documentation",source:"@site/docs/troubleshooting/cors.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/cors",permalink:"/docs/troubleshooting/cors",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/troubleshooting/cors.md",tags:[],version:"current",frontMatter:{title:"CORS Errors"}},s=[{value:"What is CORS?",id:"what-is-cors",children:[],level:2},{value:"How does CORS work",id:"how-does-cors-work",children:[{value:"Request with preflight",id:"request-with-preflight",children:[],level:3},{value:"Simple requests",id:"simple-requests",children:[],level:3}],level:2},{value:"CORS Headers",id:"cors-headers",children:[{value:"Server Headers (Response)",id:"server-headers-response",children:[],level:3},{value:"Browser Headers (Request)",id:"browser-headers-request",children:[{value:"All Requests",id:"all-requests",children:[],level:4},{value:"Preflight Requests",id:"preflight-requests",children:[],level:4}],level:3}],level:2},{value:"Solutions for CORS Errors",id:"solutions-for-cors-errors",children:[{value:"A. Enabling CORS in a server you control",id:"a-enabling-cors-in-a-server-you-control",children:[{value:"Capacitor",id:"capacitor",children:[],level:4},{value:"Ionic WebView 3.x plugin on Cordova",id:"ionic-webview-3x-plugin-on-cordova",children:[],level:4},{value:"Ionic WebView 2.x plugin on Cordova",id:"ionic-webview-2x-plugin-on-cordova",children:[],level:4},{value:"Local development in the browser",id:"local-development-in-the-browser",children:[],level:4}],level:3},{value:"B. Working around CORS in a server you can&#39;t control",id:"b-working-around-cors-in-a-server-you-cant-control",children:[{value:"Don&#39;t leak your keys!",id:"dont-leak-your-keys",children:[],level:4},{value:"1. Native-only apps (iOS/Android)",id:"1-native-only-apps-iosandroid",children:[{value:"Usage in Ionic Angular 4",id:"usage-in-ionic-angular-4",children:[],level:5}],level:4},{value:"2. Native + PWAs",id:"2-native--pwas",children:[],level:4}],level:3},{value:"C. Disabling CORS or browser web security",id:"c-disabling-cors-or-browser-web-security",children:[{value:"Sources",id:"sources",children:[],level:5}],level:3}],level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"CORS Errors: Cross-Origin Resource Sharing - Ionic Documentation"),(0,a.kt)("meta",{name:"description",content:"CORS errors happen in web apps if requests are made and servers don't return required headers. Read about Cross-Origin Resource Sharing in Ionic Documentation."})),(0,a.kt)("h2",{id:"what-is-cors"},"What is CORS?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cross-Origin Resource Sharing (CORS)")," is a mechanism that browsers and webviews \u2014 like the ones powering Capacitor and Cordova \u2014 use to restrict HTTP and HTTPS requests made from scripts to resources in a different origin for security reasons, mainly to protect your user's data and prevent attacks that would compromise your app."),(0,a.kt)("p",null,"In order to know if an external origin supports CORS, the server has to send some ",(0,a.kt)("a",{parentName:"p",href:"#cors-headers"},"special headers")," for the browser to allow the requests."),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"origin")," is the combination of the ",(0,a.kt)("strong",{parentName:"p"},"protocol"),", ",(0,a.kt)("strong",{parentName:"p"},"domain"),", and ",(0,a.kt)("strong",{parentName:"p"},"port")," from which your Ionic app or the external resource is served. For example, apps running in Capacitor have ",(0,a.kt)("inlineCode",{parentName:"p"},"capacitor://localhost")," (iOS) or ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost")," (Android) as their origin."),(0,a.kt)("p",null,"When the origin where your app is served (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8100")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve"),") and the origin of the resource being requested (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com"),") don't match, the browser's ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy",target:"_blank",rel:"noopener"},"Same Origin Policy")," takes effect and CORS is required for the request to be made."),(0,a.kt)("p",null,"CORS errors are common in web apps when a cross-origin request is made but the server doesn't return the required headers in the response (is not CORS-enabled):"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"XMLHttpRequest cannot load ",(0,a.kt)("a",{parentName:"p",href:"https://api.example.com."},"https://api.example.com.")," No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8100' is therefore not allowed access."))),(0,a.kt)("h2",{id:"how-does-cors-work"},"How does CORS work"),(0,a.kt)("h3",{id:"request-with-preflight"},"Request with preflight"),(0,a.kt)("p",null,"By default, when a web app tries to make a cross-origin request the browser sends a ",(0,a.kt)("strong",{parentName:"p"},"preflight request")," before the actual request. This preflight request is needed in order to know if the external resource supports CORS and if the actual request can be sent safely, since it may impact user data."),(0,a.kt)("p",null,"A preflight request is sent by the browser if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The method is:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"PUT"),(0,a.kt)("li",{parentName:"ul"},"DELETE"),(0,a.kt)("li",{parentName:"ul"},"CONNECT"),(0,a.kt)("li",{parentName:"ul"},"OPTIONS"),(0,a.kt)("li",{parentName:"ul"},"TRACE"),(0,a.kt)("li",{parentName:"ul"},"PATCH"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Or if it has a header other than:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Accept"),(0,a.kt)("li",{parentName:"ul"},"Accept-Language"),(0,a.kt)("li",{parentName:"ul"},"Content-Language"),(0,a.kt)("li",{parentName:"ul"},"Content-Type"),(0,a.kt)("li",{parentName:"ul"},"DPR"),(0,a.kt)("li",{parentName:"ul"},"Downlink"),(0,a.kt)("li",{parentName:"ul"},"Save-Data"),(0,a.kt)("li",{parentName:"ul"},"Viewport-Width"),(0,a.kt)("li",{parentName:"ul"},"Width"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Or if it has a ",(0,a.kt)("inlineCode",{parentName:"strong"},"Content-Type")," header other than:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"application/x-www-form-urlencoded"),(0,a.kt)("li",{parentName:"ul"},"multipart/form-data"),(0,a.kt)("li",{parentName:"ul"},"text/plain"))),(0,a.kt)("li",{parentName:"ul"},"Or if a ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadableStream")," or event listeners in ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequestUpload")," are used.")),(0,a.kt)("p",null,"If any of the conditions above are met, a preflight request with the ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS")," method is sent to the resource URL."),(0,a.kt)("p",null,"Let's suppose we are making a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to a fictional JSON API at ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.example.com")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"application/json"),". The preflight request would be like this (some default headers omitted for clarity):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"OPTIONS / HTTP/1.1\nHost: api.example.com\nOrigin: http://localhost:8100\nAccess-Control-Request-Method: POST\nAccess-Control-Request-Headers: Content-Type\n")),(0,a.kt)("p",null,"If the server is CORS enabled, it will parse the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Request-*")," headers and understand that a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request is trying to be made from ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8100")," with a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type"),"."),(0,a.kt)("p",null,"The server will then respond to this preflight with which origins, methods, and headers are allowed by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-*")," headers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-http"},"HTTP/1.1 200 OK\nAccess-Control-Allow-Origin: http://localhost:8100\nAccess-Control-Allow-Methods: GET, POST, OPTIONS\nAccess-Control-Allow-Headers: Content-Type\n")),(0,a.kt)("p",null,"If the returned origin and method don't match the ones from the actual request, or any of the headers used are not allowed, the request will be blocked by the browser and an error will be shown in the console. Otherwise, the request will be made after the preflight."),(0,a.kt)("p",null,"In our example, since the API expects JSON, all ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," requests will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," header and always be preflighted."),(0,a.kt)("h3",{id:"simple-requests"},"Simple requests"),(0,a.kt)("p",null,"Some requests are always considered safe to send and don't need a preflight if they meet all of the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The method is:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"GET"),(0,a.kt)("li",{parentName:"ul"},"HEAD"),(0,a.kt)("li",{parentName:"ul"},"POST"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Have only these headers:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Accept"),(0,a.kt)("li",{parentName:"ul"},"Accept-Language"),(0,a.kt)("li",{parentName:"ul"},"Content-Language"),(0,a.kt)("li",{parentName:"ul"},"Content-Type"),(0,a.kt)("li",{parentName:"ul"},"DPR"),(0,a.kt)("li",{parentName:"ul"},"Downlink"),(0,a.kt)("li",{parentName:"ul"},"Save-Data"),(0,a.kt)("li",{parentName:"ul"},"Viewport-Width"),(0,a.kt)("li",{parentName:"ul"},"Width"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"strong"},"Content-Type")," header is:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"application/x-www-form-urlencoded"),(0,a.kt)("li",{parentName:"ul"},"multipart/form-data"),(0,a.kt)("li",{parentName:"ul"},"text/plain"))),(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("inlineCode",{parentName:"li"},"ReadableStream")," or event listeners in ",(0,a.kt)("inlineCode",{parentName:"li"},"XMLHttpRequestUpload")," are used.")),(0,a.kt)("p",null,"In our example API, ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")," requests don't need to be preflighted because no JSON data is being sent, and so the app doesn't need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type: application/json")," header. They will always be simple requests."),(0,a.kt)("h2",{id:"cors-headers"},"CORS Headers"),(0,a.kt)("h3",{id:"server-headers-response"},"Server Headers (Response)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Access-Control-Allow-Origin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"origin")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"*")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the origin to be allowed, like ",(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:8100")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"*")," to allow all origins.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Access-Control-Allow-Methods")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"methods")),(0,a.kt)("td",{parentName:"tr",align:null},"Which methods are allowed when accessing the resource: ",(0,a.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"CONNECT"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"TRACE"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"PATCH"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Access-Control-Allow-Headers")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"headers")),(0,a.kt)("td",{parentName:"tr",align:null},"Used in response to a preflight request to indicate which headers can be used when making the actual request, aside from the ",(0,a.kt)("a",{parentName:"td",href:"#simple-requests"},"simple headers"),", which are always allowed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Allow-Credentials"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"false")),(0,a.kt)("td",{parentName:"tr",align:null},"Whether or not the request can be made with credentials.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Expose-Headers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"headers")),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the headers that the browser is allowed to access.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Max-Age"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"seconds")),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates how long the results of a preflight request can be cached.")))),(0,a.kt)("h3",{id:"browser-headers-request"},"Browser Headers (Request)"),(0,a.kt)("p",null,"The browser automatically sends the appropriate headers for CORS in every request to the server, including the preflight requests. Please note that the headers below are for reference only, and ",(0,a.kt)("strong",{parentName:"p"},"should not be set in your app code")," (the browser will ignore them)."),(0,a.kt)("h4",{id:"all-requests"},"All Requests"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Origin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"origin")),(0,a.kt)("td",{parentName:"tr",align:null},"Indicates the origin of the request.")))),(0,a.kt)("h4",{id:"preflight-requests"},"Preflight Requests"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Header"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Access-Control-Request-Method")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"method")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to let the server know what method will be used when the actual request is made.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access-Control-Request-Headers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"headers")),(0,a.kt)("td",{parentName:"tr",align:null},"Used to let the server know what non-simple headers will be used when the actual request is made.")))),(0,a.kt)("h2",{id:"solutions-for-cors-errors"},"Solutions for CORS Errors"),(0,a.kt)("h3",{id:"a-enabling-cors-in-a-server-you-control"},"A. Enabling CORS in a server you control"),(0,a.kt)("p",null,"The correct and easiest solution is to enable CORS by returning the ",(0,a.kt)("a",{parentName:"p",href:"#server-headers-response-"},"right response headers")," from the web server or backend and responding to preflight requests, as it allows to keep using ",(0,a.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch"),", or abstractions like ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient")," in Angular."),(0,a.kt)("p",null,"Ionic apps may be run from different origins, but only one origin can be specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header. Therefore we recommend checking the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Origin")," header from the request and reflecting it in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," header in the response."),(0,a.kt)("p",null,"Please note that all of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-*")," headers have to be sent from the server, and don't belong in your app code."),(0,a.kt)("p",null,"Here are some of the origins your Ionic app may be served from:"),(0,a.kt)("h4",{id:"capacitor"},"Capacitor"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"capacitor://localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost"))))),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with your own hostname if you have changed the default in the Capacitor config."),(0,a.kt)("h4",{id:"ionic-webview-3x-plugin-on-cordova"},"Ionic WebView 3.x plugin on Cordova"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ionic://localhost"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost"))))),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with your own hostname if you have changed the default in the plugin config."),(0,a.kt)("h4",{id:"ionic-webview-2x-plugin-on-cordova"},"Ionic WebView 2.x plugin on Cordova"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Platform"),(0,a.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iOS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:8080"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Android"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:8080"))))),(0,a.kt)("p",null,"Replace port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," with your own if you have changed the default in the plugin config."),(0,a.kt)("h4",{id:"local-development-in-the-browser"},"Local development in the browser"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Origin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ionic serve")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:8100")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"http://YOUR_MACHINE_IP:8100"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"npm run start")," or ",(0,a.kt)("inlineCode",{parentName:"td"},"ng serve")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"http://localhost:4200")," for Ionic Angular apps.")))),(0,a.kt)("p",null,"Port numbers can be higher if you are serving multiple apps at the same time."),(0,a.kt)("p",null,"Allowing any origin with ",(0,a.kt)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin: *")," is guaranteed to work in all scenarios but may have security implications \u2014 like some CSRF attacks \u2014 depending on how the server controls access to resources and use sessions and cookies."),(0,a.kt)("p",null,"For more information on how to enable CORS in different web and app servers, please check ",(0,a.kt)("a",{href:"https://enable-cors.org",target:"_blank",rel:"noopener"},"enable-cors.org")),(0,a.kt)("p",null,"CORS can be easily enabled in Express/Connect apps with the ",(0,a.kt)("a",{href:"https://github.com/expressjs/cors",target:"_blank",rel:"noopener"},"cors")," middleware:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const express = require('express');\nconst cors = require('cors');\nconst app = express();\n\nconst allowedOrigins = [\n  'capacitor://localhost',\n  'ionic://localhost',\n  'http://localhost',\n  'http://localhost:8080',\n  'http://localhost:8100',\n];\n\n// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)\nconst corsOptions = {\n  origin: (origin, callback) => {\n    if (allowedOrigins.includes(origin) || !origin) {\n      callback(null, true);\n    } else {\n      callback(new Error('Origin not allowed by CORS'));\n    }\n  },\n};\n\n// Enable preflight requests for all routes\napp.options('*', cors(corsOptions));\n\napp.get('/', cors(corsOptions), (req, res, next) => {\n  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });\n});\n\napp.listen(3000, () => {\n  console.log('CORS-enabled web server listening on port 3000');\n});\n")),(0,a.kt)("h3",{id:"b-working-around-cors-in-a-server-you-cant-control"},"B. Working around CORS in a server you can't control"),(0,a.kt)("h4",{id:"dont-leak-your-keys"},"Don't leak your keys!"),(0,a.kt)("p",null,"If you are trying to connect to a 3rd-party API, first check in its documentation that is safe to use it directly from the app (client-side) and that it won't leak any secret/private keys or credentials, as it's easy to see them in clear text in Javascript code. Many APIs don't support CORS on purpose, in order to force developers to use them in the server and protect important information or keys."),(0,a.kt)("h4",{id:"1-native-only-apps-iosandroid"},"1. Native-only apps (iOS/Android)"),(0,a.kt)("p",null,"Use the to make the requests natively from outside the webview. Please note that this plugin doesn't work in the browser, so the development and testing of the app must always be done in a device or simulator going forward."),(0,a.kt)("h5",{id:"usage-in-ionic-angular-4"},"Usage in Ionic Angular 4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Component } from '@angular/core';\nimport { HTTP } from '@awesome-cordova-plugins/http/ngx';\n\n@Component({\n  selector: 'app-home',\n  templateUrl: './home.page.html',\n  styleUrls: ['./home.page.scss'],\n})\nexport class HomePage {\n  constructor(private http: HTTP) {}\n\n  async getData() {\n    try {\n      const url = 'https://api.example.com';\n      const params = {};\n      const headers = {};\n\n      const response = await this.http.get(url, params, headers);\n\n      console.log(response.status);\n      console.log(JSON.parse(response.data)); // JSON data returned by server\n      console.log(response.headers);\n    } catch (error) {\n      console.error(error.status);\n      console.error(error.error); // Error message as string\n      console.error(error.headers);\n    }\n  }\n}\n")),(0,a.kt)("h4",{id:"2-native--pwas"},"2. Native + PWAs"),(0,a.kt)("p",null,"Send the requests through an HTTP/HTTPS proxy that bypasses them to the external resources and adds the necessary CORS headers to the responses. This proxy must be trusted or under your control, as it will be intercepting most traffic made by the app."),(0,a.kt)("p",null,"Also, keep in mind that the browser or webview will not receive the original HTTPS certificates but the one being sent from the proxy if it's provided. URLs may need to be rewritten in your code in order to use the proxy."),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{href:"https://github.com/Rob--W/cors-anywhere/",target:"_blank",rel:"noopener"},"cors-anywhere")," for a Node.js CORS proxy that can be deployed in your own server. Using free hosted CORS proxies in production is not recommended."),(0,a.kt)("h3",{id:"c-disabling-cors-or-browser-web-security"},"C. Disabling CORS or browser web security"),(0,a.kt)("p",null,"Please be aware that CORS exists for a reason (security of user data and to prevent attacks against your app). ",(0,a.kt)("strong",{parentName:"p"},"It's not possible or advisable to try to disable CORS"),"."),(0,a.kt)("p",null,"Older webviews like ",(0,a.kt)("inlineCode",{parentName:"p"},"UIWebView")," on iOS don't enforce CORS but are deprecated and are very likely to disappear soon. Modern webviews like iOS ",(0,a.kt)("inlineCode",{parentName:"p"},"WKWebView")," or Android ",(0,a.kt)("inlineCode",{parentName:"p"},"WebView")," (both used by Capacitor) do enforce CORS and provide huge security and performance improvements."),(0,a.kt)("p",null,"If you are developing a PWA or testing in the browser, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-web-security")," flag in Google Chrome or an extension to disable CORS is a really bad idea. You will be exposed to all kind of attacks, you can't ask your users to take the risk, and your app won't work once in production."),(0,a.kt)("h5",{id:"sources"},"Sources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://fdezromero.com/cors-errors-in-ionic-apps",target:"_blank",rel:"noopener"},"CORS Errors in Ionic Apps")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",target:"_blank",rel:"noopener"},"MDN"))))}c.isMDXComponent=!0}}]);