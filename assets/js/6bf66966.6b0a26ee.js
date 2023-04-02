"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[13970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30342:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"ionic ssl generate",sidebar_label:"ssl generate"},o=void 0,l={unversionedId:"cli/commands/ssl-generate",id:"version-v6/cli/commands/ssl-generate",isDocsHomePage:!1,title:"ionic ssl generate",description:"Generates an SSL key & certificate",source:"@site/versioned_docs/version-v6/cli/commands/ssl-generate.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssl-generate",permalink:"/docs/v6/cli/commands/ssl-generate",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssl/generate.ts",tags:[],version:"v6",frontMatter:{title:"ionic ssl generate",sidebar_label:"ssl generate"},sidebar:"version-v6/cli",previous:{title:"ssh use",permalink:"/docs/v6/cli/commands/ssh-use"},next:{title:"start",permalink:"/docs/v6/cli/commands/start"}},c=[{value:"Options",id:"options",children:[],level:3},{value:"Advanced Options",id:"advanced-options",children:[],level:3}],s={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Generates an SSL key & certificate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssl generate [options]\n")),(0,i.kt)("p",null,"Uses OpenSSL to create a self-signed certificate for ",(0,i.kt)("strong",{parentName:"p"},"localhost")," (by default)."),(0,i.kt)("p",null,"After the certificate is generated, you will still need to add it to your system or browser as a trusted certificate."),(0,i.kt)("p",null,"The default directory for ",(0,i.kt)("inlineCode",{parentName:"p"},"--key-path")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--cert-path")," is ",(0,i.kt)("inlineCode",{parentName:"p"},".ionic/ssl/"),"."),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--key-path=<path>"),": Destination of private key file\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--cert-path=<path>"),": Destination of certificate file\n")),(0,i.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--country-name=<C>"),": The country name (C) of the SSL certificate\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--state-or-province-name=<ST>"),": The state or province name (ST) of the SSL certificate\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--locality-name=<L>"),": The locality name (L) of the SSL certificate\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--organization-name=<O>"),": The organization name (O) of the SSL certificate\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--common-name=<CN>"),": The common name (CN) of the SSL certificate\n"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--bits=<bits>"),": Number of bits in the key (or ",(0,i.kt)("inlineCode",{parentName:"li"},"-b"),")")))}m.isMDXComponent=!0}}]);