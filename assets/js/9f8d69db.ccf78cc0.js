"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[92371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80867:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Virtual Scroll",i={unversionedId:"angular/virtual-scroll",id:"angular/virtual-scroll",isDocsHomePage:!1,title:"Virtual Scroll",description:"ion-virtual-scroll was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the @angular/cdk package detailed below.",source:"@site/docs/angular/virtual-scroll.md",sourceDirName:"angular",slug:"/angular/virtual-scroll",permalink:"/docs/angular/virtual-scroll",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/virtual-scroll.md",tags:[],version:"current",frontMatter:{}},s=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Usage with Ionic Components",id:"usage-with-ionic-components",children:[],level:2},{value:"Further Reading",id:"further-reading",children:[],level:2}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"virtual-scroll"},"Virtual Scroll"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Looking for ",(0,o.kt)("inlineCode",{parentName:"h5"},"ion-virtual-scroll"),"?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"ion-virtual-scroll")," was deprecated in v6.0.0 and removed in v7.0.0. We recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/cdk")," package detailed below."))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To setup the CDK Scroller, first install ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/cdk"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm add @angular/cdk\n")),(0,o.kt)("p",null,"This provides a collection of different utilities, but we'll focus on ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollingModule")," for now."),(0,o.kt)("p",null,"When we want to use the CDK Scroller, we'll need to import the module in our component. For example, in a tabs starter project, we can add our import to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tabs1.module.ts")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  import { IonicModule } from '@ionic/angular';\n  import { NgModule } from '@angular/core';\n  import { CommonModule } from '@angular/common';\n  import { FormsModule } from '@angular/forms';\n  import { Tab1Page } from './tab1.page';\n  import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';\n+ import { ScrollingModule } from '@angular/cdk/scrolling';\n  import { Tab1PageRoutingModule } from './tab1-routing.module';\n  @NgModule({\n    imports: [\n      IonicModule,\n      CommonModule,\n      FormsModule,\n      ExploreContainerComponentModule,\n      Tab1PageRoutingModule,\n+     ScrollingModule\n    ],\n    declarations: [Tab1Page]\n  })\n  export class Tab1PageModule {}\n")),(0,o.kt)("p",null,"With this added, we have access to the Virtual Scroller in the Tab1Page component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The CDK Virtual Scroller can be added to a component by adding the ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk-virtual-scroll-viewport")," to a component's template."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<ion-content>\n  <cdk-virtual-scroll-viewport> </cdk-virtual-scroll-viewport>\n</ion-content>\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cdk-virtual-scroll-viewport")," becomes the root of our scrollable content and is responsible for recycling DOM nodes as they scroll out of view."),(0,o.kt)("p",null,"The DOM nodes at this point can be any content needed for an app. The difference is that when we want to iterate over a collection, ",(0,o.kt)("inlineCode",{parentName:"p"},"*cdkVirtualFor")," is used instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"*ngFor"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <cdk-virtual-scroll-viewport>\n    <ion-list>\n      <ion-item *cdkVirtualFor="let item of items">\n        <ion-avatar slot="start">\n          <img src="https://loremflickr.com/40/40" />\n        </ion-avatar>\n        <ion-label> {{item }} </ion-label>\n      </ion-item>\n    </ion-list>\n  </cdk-virtual-scroll-viewport>\n</ion-content>\n')),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," is an array, but it can be an array, ",(0,o.kt)("inlineCode",{parentName:"p"},"Observable<Array>"),", or ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSource"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"DataSource")," is an abstract class that can provide the data needed as well as utility methods. For more details, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://material.angular.io/cdk/scrolling/overview"},"CDK Virtual Scrolling docs"),"."),(0,o.kt)("p",null,"The component is not complete yet as the ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk-virtual-scroll-viewport")," needs to know how big each node will be as well as the min/max buffer sizes."),(0,o.kt)("p",null,"At the moment, CDK Virtual Scroller only supports fixed sized elements, but dynamic sized elements are planned for the future. For the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tab1Page")," component, since it is only rendering an item, it can be hard-coded to a fixed size."),(0,o.kt)("p",null,'The min/max buffer size tells the scroller "render as many nodes as it takes to meet this minimum height, but not over this".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350"></cdk-virtual-scroll-viewport>\n')),(0,o.kt)("p",null,"For this case, the ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk-virtual-scroll-viewport")," will render cells at a height 56px until it reaches a height of 900px, but no more at 1350px. These numbers are arbitrary, so be sure to test out what values will work in a real use case."),(0,o.kt)("p",null,"Putting everything together, the final HTML should look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <cdk-virtual-scroll-viewport itemSize="56" minBufferPx="900" maxBufferPx="1350">\n    <ion-list>\n      <ion-item *cdkVirtualFor="let item of items">\n        <ion-avatar slot="start">\n          <img src="https://loremflickr.com/40/40" />\n        </ion-avatar>\n        <ion-label> {{item }} </ion-label>\n      </ion-item>\n    </ion-list>\n  </cdk-virtual-scroll-viewport>\n</ion-content>\n')),(0,o.kt)("p",null,"The last piece needed is a some CSS to size the viewport correctly. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"tab1.page.scss")," file, add the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scss"},"cdk-virtual-scroll-viewport {\n  height: 100%;\n  width: 100%;\n}\n")),(0,o.kt)("p",null,"Since the viewport is built to fit various use cases, the default sizing is not set and is up to developers to set."),(0,o.kt)("h2",{id:"usage-with-ionic-components"},"Usage with Ionic Components"),(0,o.kt)("p",null,"Ionic Framework requires that features such as collapsible large titles, ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-infinite-scroll"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-refresher"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-reorder-group")," be used within an ",(0,o.kt)("inlineCode",{parentName:"p"},"ion-content"),". To use these experiences with virtual scrolling, you must add the ",(0,o.kt)("inlineCode",{parentName:"p"},".ion-content-scroll-host")," class to the virtual scroll viewport."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content [scrollY]="false">\n  <cdk-virtual-scroll-viewport class="ion-content-scroll-host">\n    \x3c!-- Your existing content and configurations --\x3e\n  </cdk-virtual-scroll-viewport>\n</ion-content>\n')),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"This only covers a small portion of what the CDK Virtual Scroller is capable of. For more details, please see the ",(0,o.kt)("a",{parentName:"p",href:"https://material.angular.io/cdk/scrolling/overview"},"Angular CDK Virtual Scrolling docs"),"."))}u.isMDXComponent=!0}}]);