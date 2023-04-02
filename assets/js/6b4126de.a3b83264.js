"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[43366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48500:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"ionic generate",sidebar_label:"generate"},o=void 0,l={unversionedId:"cli/commands/generate",id:"version-v6/cli/commands/generate",isDocsHomePage:!1,title:"ionic generate",description:"Ionic Generate: Create Pages, Components, & Angular Features",source:"@site/versioned_docs/version-v6/cli/commands/generate.md",sourceDirName:"cli/commands",slug:"/cli/commands/generate",permalink:"/docs/v6/cli/commands/generate",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/generate.ts",tags:[],version:"v6",frontMatter:{title:"ionic generate",sidebar_label:"generate"},sidebar:"version-v6/cli",previous:{title:"enterprise register",permalink:"/docs/v6/cli/commands/enterprise-register"},next:{title:"git remote",permalink:"/docs/v6/cli/commands/git-remote"}},c=[{value:"type",id:"type",children:[],level:3},{value:"name",id:"name",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:c},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Ionic Generate: Create Pages, Components, & Angular Features"),(0,a.kt)("meta",{name:"description",content:"Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate pages, components, directives, services, and more."})),(0,a.kt)("p",null,"Create Pages, Components, & Angular Features"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic generate [type] [name]\n")),(0,a.kt)("p",null,"Automatically create framework features with Ionic Generate. This command uses the Angular CLI to generate features such as ",(0,a.kt)("inlineCode",{parentName:"p"},"pages"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"components"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"directives"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"services"),", and more."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For a full list of available types, use ",(0,a.kt)("inlineCode",{parentName:"li"},"npx ng g --help")),(0,a.kt)("li",{parentName:"ul"},"For a list of options for a types, use ",(0,a.kt)("inlineCode",{parentName:"li"},"npx ng g <type> --help"))),(0,a.kt)("p",null,"You can specify a path to nest your feature within any number of subdirectories. For example, specify a name of ",(0,a.kt)("inlineCode",{parentName:"p"},'"pages/New Page"')," to generate page files at ",(0,a.kt)("strong",{parentName:"p"},"src/app/pages/new-page/"),"."),(0,a.kt)("p",null,"To test a generator before file modifications are made, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--dry-run")," option."),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"The type of feature (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"page"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"component"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"directive"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"service"),")"),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"The name/path of the feature being generated"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic generate \n$ ionic generate page\n$ ionic generate page contact\n$ ionic generate component contact/form\n$ ionic generate component login-form --change-detection=OnPush\n$ ionic generate directive ripple --skip-import\n$ ionic generate service api/user\n")))}m.isMDXComponent=!0}}]);