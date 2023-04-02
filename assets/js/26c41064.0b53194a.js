"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15319],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=m(t),h=a,d=s["".concat(l,".").concat(h)]||s[h]||u[h]||o;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},89984:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"Angular Performance",sidebar_label:"Performance"},i=void 0,c={unversionedId:"angular/performance",id:"angular/performance",isDocsHomePage:!1,title:"Angular Performance",description:"Angular Performance: Manage App Component Change with ngFor",source:"@site/docs/angular/performance.md",sourceDirName:"angular",slug:"/angular/performance",permalink:"/docs/angular/performance",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/performance.md",tags:[],version:"current",frontMatter:{title:"Angular Performance",sidebar_label:"Performance"}},l=[{value:"*ngFor with Ionic Components",id:"ngfor-with-ionic-components",children:[],level:2},{value:"From the Ionic Team",id:"from-the-ionic-team",children:[],level:2},{value:"From the Angular Team",id:"from-the-angular-team",children:[],level:2},{value:"From the Community",id:"from-the-community",children:[],level:2}],m={toc:l},p="wrapper";function s(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Angular Performance: Manage App Component Change with ngFor"),(0,a.kt)("meta",{name:"description",content:"Learn how Angular manages change propagation using ngFor with Ionic Components. Read for more information about Angular performance on Ionic apps."})),(0,a.kt)("h2",{id:"ngfor-with-ionic-components"},"*","ngFor with Ionic Components"),(0,a.kt)("p",null,"When using ",(0,a.kt)("inlineCode",{parentName:"p"},"*ngFor")," with Ionic components, we recommend using Angular's ",(0,a.kt)("inlineCode",{parentName:"p"},"trackBy")," option. This allows Angular to manage change propagation in a much more efficient way and only update the content inside of the component rather than re-create the component altogether."),(0,a.kt)("p",null,"By using ",(0,a.kt)("inlineCode",{parentName:"p"},"trackBy")," you can provide a stable identity for each loop element so Angular can track insertions and deletions within the iterator. Below is an example of how to use ",(0,a.kt)("inlineCode",{parentName:"p"},"trackBy"),":"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"home.page.html")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-item *ngFor="let item of items; trackBy:trackItems">\n  <ion-label>{{ item.value }}</ion-label>\n</ion-item>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"home.component.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"\nitems = [\n  { id: 0, value: 'Item 0' },\n  { id: 1, value: 'Item 1' },\n  ...\n]\n\ntrackItems(index: number, itemObject: any) {\n  return itemObject.id;\n}\n")),(0,a.kt)("p",null,"In this example, we have an array of objects called ",(0,a.kt)("inlineCode",{parentName:"p"},"items"),". Each object contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," and an ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Using ",(0,a.kt)("inlineCode",{parentName:"p"},"trackBy"),", we pass a ",(0,a.kt)("inlineCode",{parentName:"p"},"trackItems")," function which returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," of each object. This ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," is used to provide a stable identity for each loop element."),(0,a.kt)("p",null,"For more information on how Angular manages change propagation with ",(0,a.kt)("inlineCode",{parentName:"p"},"ngFor")," see ",(0,a.kt)("a",{parentName:"p",href:"https://angular.io/api/common/NgForOf#change-propagation"},"https://angular.io/api/common/NgForOf#change-propagation"),"."),(0,a.kt)("h2",{id:"from-the-ionic-team"},"From the Ionic Team"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/blog/how-to-lazy-load-in-ionic-angular/"},"How to Lazy Load in Ionic Angular")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/blog/improved-perceived-performance-with-skeleton-screens/"},"Improved Perceived Performance with Skeleton Screens")),(0,a.kt)("h2",{id:"from-the-angular-team"},"From the Angular Team"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://web.dev/angular"},"Build performant and progressive Angular apps")," - web.dev"),(0,a.kt)("h2",{id:"from-the-community"},"From the Community"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.joshmorony.com/high-performance-animations-in-ionic/"},"High Performance Animations in Ionic")," - Josh Morony"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.joshmorony.com/high-performance-list-filtering-in-ionic-2/"},"High Performance List Filtering in Ionic")," - Josh Morony"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.joshmorony.com/increasing-performance-with-efficient-dom-writes-in-ionic-2/"},"Increasing Performance with Efficient DOM Writes in Ionic")," - Josh Morony"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.joshmorony.com/ionic-framework-is-fast-but-your-code-might-not-be/"},"Ionic Framework is Fast (But Your Code Might Not Be)")," - Josh Morony"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Do you have a guide you'd like to share? Click the ",(0,a.kt)("em",{parentName:"p"},"Edit this page")," button below."))))}s.isMDXComponent=!0}}]);