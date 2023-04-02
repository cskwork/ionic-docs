"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[59960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||s;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76975:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={title:"ionic ssh setup",sidebar_label:"ssh setup"},i=void 0,a={unversionedId:"cli/commands/ssh-setup",id:"version-v6/cli/commands/ssh-setup",isDocsHomePage:!1,title:"ionic ssh setup",description:"Setup your Ionic SSH keys automatically",source:"@site/versioned_docs/version-v6/cli/commands/ssh-setup.md",sourceDirName:"cli/commands",slug:"/cli/commands/ssh-setup",permalink:"/docs/v6/cli/commands/ssh-setup",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/ssh/setup.ts",tags:[],version:"v6",frontMatter:{title:"ionic ssh setup",sidebar_label:"ssh setup"},sidebar:"version-v6/cli",previous:{title:"ssh list",permalink:"/docs/v6/cli/commands/ssh-list"},next:{title:"ssh use",permalink:"/docs/v6/cli/commands/ssh-use"}},c=[],p={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Setup your Ionic SSH keys automatically"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic ssh setup\n")),(0,o.kt)("p",null,"This command offers a setup wizard for Ionic SSH keys using a series of prompts. For more control, see the commands available for managing SSH keys with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic ssh --help")," command. For an entirely manual approach, see ",(0,o.kt)("strong",{parentName:"p"},"Personal Settings")," => ",(0,o.kt)("strong",{parentName:"p"},"SSH Keys")," in the ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.ionicframework.com/settings/ssh-keys"},"Dashboard"),"."),(0,o.kt)("p",null,"If you are having issues setting up SSH keys, please get in touch with our ",(0,o.kt)("a",{parentName:"p",href:"https://ion.link/support-request"},"Support"),"."))}u.isMDXComponent=!0}}]);