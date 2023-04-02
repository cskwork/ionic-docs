"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[86295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?n.createElement(h,c(c({ref:t},d),{},{components:a})):n.createElement(h,c({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},87939:(e,t,a)=>{a.d(t,{Z:()=>o});var n,r,i=a(67294);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},c.apply(this,arguments)}const o=e=>{let{title:t,titleId:a,...o}=e;return i.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",style:{isolation:"isolate"},viewBox:"0 0 512 512",width:"512pt",height:"512pt","aria-labelledby":a},o),t?i.createElement("title",{id:a},t):null,n||(n=i.createElement("defs",null,i.createElement("clipPath",{id:"a"},i.createElement("path",{d:"M0 0h512v512H0z"})))),r||(r=i.createElement("g",{fill:"#61DAFB",clipPath:"url(#a)"},i.createElement("path",{d:"M468 256.043c0-28.088-35.175-54.707-89.104-71.214 12.445-54.966 6.914-98.697-17.458-112.698-5.617-3.284-12.186-4.84-19.359-4.84v19.273c3.976 0 7.173.778 9.853 2.247 11.753 6.741 16.852 32.41 12.877 65.424-.951 8.124-2.507 16.68-4.408 25.409-16.939-4.149-35.434-7.346-54.88-9.421-11.667-15.988-23.766-30.508-35.952-43.212 28.174-26.187 54.62-40.533 72.597-40.533V67.205c-23.767 0-54.88 16.939-86.339 46.324-31.458-29.212-62.571-45.978-86.338-45.978v19.272c17.89 0 44.422 14.261 72.597 40.274-12.1 12.705-24.199 27.138-35.694 43.126-19.532 2.075-38.027 5.272-54.966 9.507a260.628 260.628 0 0 1-4.494-25.063c-4.062-33.014.951-58.682 12.618-65.51 2.593-1.556 5.963-2.247 9.939-2.247V67.637c-7.26 0-13.828 1.556-19.532 4.84-24.286 14.001-29.73 57.645-17.199 112.439C79.002 201.509 44 228.042 44 256.043c0 28.088 35.175 54.707 89.104 71.214-12.445 54.966-6.914 98.697 17.458 112.698 5.617 3.284 12.186 4.84 19.445 4.84 23.767 0 54.88-16.939 86.339-46.324 31.458 29.212 62.571 45.978 86.338 45.978 7.26 0 13.828-1.555 19.532-4.84 24.285-14 29.73-57.645 17.199-112.438C432.998 310.664 468 284.045 468 256.043Zm-112.525-57.645c-3.198 11.149-7.173 22.643-11.667 34.138-3.544-6.914-7.26-13.828-11.322-20.742-3.976-6.914-8.21-13.655-12.445-20.224 12.272 1.815 24.112 4.062 35.434 6.828Zm-39.583 92.042c-6.741 11.668-13.655 22.73-20.828 33.015-12.877 1.123-25.927 1.728-39.064 1.728-13.05 0-26.1-.605-38.891-1.642-7.173-10.285-14.174-21.261-20.915-32.841-6.568-11.322-12.532-22.817-17.976-34.398 5.358-11.58 11.408-23.161 17.89-34.483 6.741-11.667 13.655-22.73 20.828-33.014 12.877-1.124 25.927-1.729 39.064-1.729 13.05 0 26.1.605 38.891 1.642 7.173 10.285 14.174 21.261 20.915 32.842 6.568 11.321 12.532 22.816 17.976 34.397-5.444 11.581-11.408 23.162-17.89 34.483Zm27.916-11.235a370.344 370.344 0 0 1 11.926 34.397c-11.321 2.766-23.248 5.099-35.607 6.914 4.235-6.655 8.47-13.482 12.445-20.483 3.976-6.914 7.692-13.914 11.236-20.828Zm-87.635 92.215c-8.038-8.296-16.075-17.544-24.026-27.656 7.778.346 15.729.605 23.767.605 8.124 0 16.161-.173 24.026-.605a337.325 337.325 0 0 1-23.767 27.656Zm-64.3-50.904c-12.273-1.815-24.113-4.062-35.434-6.827 3.197-11.149 7.173-22.644 11.667-34.138 3.543 6.914 7.26 13.828 11.322 20.742a571.877 571.877 0 0 0 12.445 20.223Zm63.868-179.85c8.037 8.297 16.075 17.544 24.026 27.656-7.778-.346-15.729-.605-23.767-.605-8.124 0-16.161.173-24.026.605a337.298 337.298 0 0 1 23.767-27.656Zm-63.955 50.904c-4.234 6.655-8.469 13.483-12.445 20.483-3.975 6.914-7.692 13.828-11.235 20.742a370.65 370.65 0 0 1-11.927-34.397 419.9 419.9 0 0 1 35.607-6.828Zm-78.214 108.204c-30.594-13.05-50.386-30.162-50.386-43.731 0-13.568 19.792-30.767 50.386-43.731 7.432-3.197 15.556-6.049 23.94-8.729 4.926 16.94 11.408 34.57 19.445 52.633-7.951 17.976-14.346 35.521-19.186 52.373-8.556-2.679-16.68-5.617-24.199-8.815Zm46.496 123.501c-11.753-6.741-16.852-32.409-12.877-65.423.951-8.124 2.507-16.68 4.408-25.409 16.939 4.148 35.434 7.346 54.88 9.42 11.667 15.989 23.766 30.508 35.952 43.212-28.174 26.187-54.62 40.534-72.597 40.534-3.889-.087-7.173-.865-9.766-2.334Zm205-65.856c4.062 33.015-.951 58.683-12.618 65.51-2.593 1.556-5.963 2.248-9.939 2.248-17.89 0-44.422-14.261-72.597-40.274 12.1-12.705 24.199-27.138 35.694-43.126 19.532-2.075 38.027-5.272 54.966-9.507 1.988 8.729 3.543 17.112 4.494 25.149Zm33.274-57.645c-7.433 3.198-15.557 6.05-23.94 8.729-4.926-16.939-11.408-34.57-19.446-52.633 7.951-17.976 14.347-35.52 19.187-52.373 8.556 2.679 16.68 5.618 24.285 8.815 30.594 13.05 50.386 30.163 50.386 43.731-.087 13.569-19.878 30.767-50.472 43.731ZM169.402 67.551Z"}),i.createElement("circle",{vectorEffect:"non-scaling-stroke",cx:255.914,cy:256.043,r:39.496}))))}},47758:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010),i=a(39960),c=a(44996);const o="card_hPMa";const l=function(e){const t=void 0===e.href,a=void 0!==e.href&&/^http/.test(e.href),l="undefined"===e.header?null:n.createElement("header",{className:"Card-header"},e.header),s=e.hoverIcon||e.icon,d=n.createElement(n.Fragment,null,e.img&&n.createElement("img",{src:(0,c.Z)(e.img),className:"Card-image"}),n.createElement("div",{className:"Card-container"},(e.icon||s)&&n.createElement("div",{className:"Card-icon-row"},e.icon&&n.createElement("img",{src:(0,c.Z)(e.icon),className:"Card-icon Card-icon-default"}),s&&n.createElement("img",{src:(0,c.Z)(s),className:"Card-icon Card-icon-hover"})),e.ionicon&&n.createElement("ion-icon",{name:e.ionicon,className:"Card-ionicon"}),e.iconset&&n.createElement("div",{className:"Card-iconset__container"},e.iconset.split(",").map(((t,a)=>n.createElement("img",{src:(0,c.Z)(t),className:"Card-icon "+(a===e.activeIndex?"Card-icon-active":""),"data-index":a,key:a})))),e.header&&l,n.createElement("div",{className:"Card-content"},e.children))),p=(0,r.Z)({"Card-with-image":void 0!==e.img,"Card-without-image":void 0===e.img,"Card-size-lg":"lg"===e.size,[e.className]:e.className});return t?n.createElement("docs-card",{class:p},n.createElement("div",{className:(0,r.Z)(o,"docs-card")},d)):a?n.createElement("docs-card",{class:p},n.createElement("a",{className:(0,r.Z)(o,"docs-card"),href:e.href,target:"_blank"},d)):n.createElement("docs-card",{class:p},n.createElement(i.default,{to:e.href,className:(0,r.Z)(o,"docs-card")},d))}},53445:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){return n.createElement("docs-cards",{class:e.className},e.children)}},59986:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(86010),i=a(67294);const c={pageReact:"pageReact_eDVn"};function o(e){return i.createElement("div",(0,n.Z)({},e,{className:(0,r.Z)(c.pageReact,e.className)}))}},56297:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),i=a(59986),c=a(47758),o=a(53445);const l={title:"Ionic React",sidebar_label:"Overview",hide_title:!0,hide_table_of_contents:!0},s=void 0,d={unversionedId:"react",id:"react",isDocsHomePage:!1,title:"Ionic React",description:"Create an Ionic React App: Framework and Documentation",source:"@site/docs/react.md",sourceDirName:".",slug:"/react",permalink:"/docs/react",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react.md",tags:[],version:"current",frontMatter:{title:"Ionic React",sidebar_label:"Overview",hide_title:!0,hide_table_of_contents:!0}},p=[{value:"Build awesome apps across mobile, desktop, and web, with the React you know and love.",id:"build-awesome-apps-across-mobile-desktop-and-web-with-the-react-you-know-and-love",children:[],level:3},{value:"Amazing Design",id:"amazing-design",children:[],level:2},{value:"Familiar tooling",id:"familiar-tooling",children:[],level:2},{value:"More than mobile",id:"more-than-mobile",children:[],level:2},{value:"Just React",id:"just-react",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],m={toc:p},u="wrapper";function h(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("title",null,"Create an Ionic React App: Framework and Documentation"),(0,r.kt)("meta",{name:"description",content:"One codebase, any platform, just React. View our documentation for creating apps with Ionic React\u2014the native React version of Ionic Framework's open-source SDK."})),(0,r.kt)(i.Z,{mdxType:"PageStyles"},(0,r.kt)("div",{class:"flex main-flex"},(0,r.kt)("div",{class:"pull-left"},(0,r.kt)("h1",null,"One Codebase ",(0,r.kt)("br",null)," Any Platform ",(0,r.kt)("br",null)," ",(0,r.kt)("strong",null,"Just React")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2713 100+ mobile optimized React UI components"),(0,r.kt)("li",{parentName:"ul"},"\u2713 Standard React tooling with react-dom"),(0,r.kt)("li",{parentName:"ul"},"\u2713 iOS / Android / Electron / PWA")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#installation"},"Get Started"))),(0,r.kt)("div",{class:"pull-right"},(0,r.kt)("img",{src:a(30061).Z}))),(0,r.kt)("h3",{id:"build-awesome-apps-across-mobile-desktop-and-web-with-the-react-you-know-and-love"},"Build awesome apps across mobile, desktop, and web, with the React you know and love."),(0,r.kt)("p",null,"Ionic React is native React version of Ionic Framework, the free, open source SDK powering millions of mission-critical apps all over the world."),(0,r.kt)("p",null,"It's everything you need to ship award-winning apps for any platform, with React."),(0,r.kt)("div",{class:"flex"},(0,r.kt)("div",{class:"pull-left"},(0,r.kt)("h2",{id:"amazing-design"},"Amazing Design"),(0,r.kt)("p",null,"Choose from over 100 beautiful, mobile-ready UI components, animations, and gestures, lightweight and customized to fit your brand."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/components"},"Explore UI components"))),(0,r.kt)("div",{class:"pull-right"},(0,r.kt)("img",{src:"/docs/icons/feature-guide-components-icon.png"}))),(0,r.kt)("div",{class:"flex reverse"},(0,r.kt)("div",{class:"pull-left"},(0,r.kt)("h2",{id:"familiar-tooling"},"Familiar tooling"),(0,r.kt)("p",null,"Ionic React projects are just like React projects, leveraging ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html"},"react-dom")," and with setup normally found in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app"},"Create React App (CRA)")," app. For ",(0,r.kt)("a",{parentName:"p",href:"/docs/react/navigation"},"routing and navigation"),", React Router is used under the hood.\nCompatible with React version 16.8 and above.")),(0,r.kt)("div",{class:"pull-right"},(0,r.kt)("img",{src:a(39056).Z,class:"cli"}))),(0,r.kt)("div",{class:"flex"},(0,r.kt)("div",{class:"pull-left"},(0,r.kt)("h2",{id:"more-than-mobile"},"More than mobile"),(0,r.kt)("p",null,"Deploy your Ionic React projects to native iOS, Android, Electron, and the web as a Progressive Web App, using ",(0,r.kt)("a",{parentName:"p",href:"https://capacitorjs.com"},"Capacitor"),", a modern native runtime. All with one shared codebase.")),(0,r.kt)("div",{class:"pull-right"},(0,r.kt)("img",{src:a(51851).Z}))),(0,r.kt)("div",{class:"flex reverse"},(0,r.kt)("div",{class:"pull-left"},(0,r.kt)("h2",{id:"just-react"},"Just React"),(0,r.kt)("p",null,"At the end of the day, it's just React. Ionic React uses open web standards and built-in browser capabilities, so it's compatible with any of the millions of web libraries out there.")),(0,r.kt)("div",{class:"pull-right"},(0,r.kt)("img",{src:a(87939).Z}))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell-session"},"$ npm install -g @ionic/cli\n$ ionic start myApp tabs --type react\n\n$ ionic serve \u2588\n")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)(o.Z,{mdxType:"DocsCards"},(0,r.kt)(c.Z,{header:"Getting Started",href:"react/your-first-app",icon:"/icons/feature-component-actionsheet-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.")),(0,r.kt)(c.Z,{header:"Add Ionic to Existing React App",href:"/docs/react/adding-ionic-react-to-an-existing-react-project",icon:"/icons/logo-react-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Use individual components or the complete app experience.")),(0,r.kt)(c.Z,{header:"Navigation",href:"react/navigation",icon:"/icons/feature-component-navigation-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Learn the basics of navigation inside your app with Ionic and React Router")),(0,r.kt)(c.Z,{header:"Lifecycle",href:"react/lifecycle",icon:"/icons/feature-guide-components-icon.png",mdxType:"DocsCard"},(0,r.kt)("p",null,"Learn about using Ionic lifecycle events in class components and with hooks")))))}h.isMDXComponent=!0},39056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/react-cli-d2592ce4360317d447f6ffa7014190bd.png"},30061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/react-logo-b64b7471f0ebe5f7a9a281ba2f72b63a.png"},51851:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/group-shot-5f1945a85e4cb62ef4bf944844f2da69.png"}}]);