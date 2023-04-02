"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[83638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return n?o.createElement(u,s(s({ref:t},d),{},{components:n})):o.createElement(u,s({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2126:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"CSS Shadow Parts"},s=void 0,i={unversionedId:"theming/css-shadow-parts",id:"version-v6/theming/css-shadow-parts",isDocsHomePage:!1,title:"CSS Shadow Parts",description:"CSS Shadow Parts - Style CSS Properties Inside of A Shadow Tree",source:"@site/versioned_docs/version-v6/theming/css-shadow-parts.md",sourceDirName:"theming",slug:"/theming/css-shadow-parts",permalink:"/docs/v6/theming/css-shadow-parts",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/theming/css-shadow-parts.md",tags:[],version:"v6",frontMatter:{title:"CSS Shadow Parts"},sidebar:"version-v6/docs",previous:{title:"CSS Variables",permalink:"/docs/v6/theming/css-variables"},next:{title:"Colors",permalink:"/docs/v6/theming/colors"}},l=[{value:"Why Shadow Parts?",id:"why-shadow-parts",children:[],level:2},{value:"Shadow Parts Explained",id:"shadow-parts-explained",children:[{value:"Exposing a part",id:"exposing-a-part",children:[],level:3},{value:"How ::part works",id:"how-part-works",children:[],level:3}],level:2},{value:"Ionic Framework Parts",id:"ionic-framework-parts",children:[],level:2},{value:"Known Limitations",id:"known-limitations",children:[{value:"Browser Support",id:"browser-support",children:[],level:3},{value:"Vendor Prefixed Pseudo-Elements",id:"vendor-prefixed-pseudo-elements",children:[],level:3},{value:"Structural Pseudo-Classes",id:"structural-pseudo-classes",children:[],level:3},{value:"Chaining Parts",id:"chaining-parts",children:[],level:3}],level:2}],p={toc:l},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"CSS Shadow Parts - Style CSS Properties Inside of A Shadow Tree"),(0,a.kt)("meta",{name:"description",content:"CSS Shadow Parts allow developers to style CSS properties on elements inside of a shadow tree. Read to learn more about customizing Ionic Shadow DOM\xa0components."})),(0,a.kt)("p",null,"CSS Shadow Parts allow developers to style CSS properties on an element inside of a shadow tree. This is extremely useful in customizing Ionic Framework ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM",target:"_blank",rel:"noopener noreferrer"},"Shadow DOM")," components."),(0,a.kt)("h2",{id:"why-shadow-parts"},"Why Shadow Parts?"),(0,a.kt)("p",null,"Ionic Framework is a distributed set of ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components",target:"_blank",rel:"noopener noreferrer"},"Web Components"),". Web Components follow the ",(0,a.kt)("a",{href:"https://w3c.github.io/webcomponents/spec/shadow/",target:"_blank",rel:"noopener noreferrer"},"Shadow DOM specification")," in order to encapsulate styles and markup."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Ionic Framework components are ",(0,a.kt)("strong",{parentName:"p"},"not all")," Shadow DOM components. If the component is a Shadow DOM component, there will be a badge in the top right of its ",(0,a.kt)("a",{parentName:"p",href:"/docs/v6/components"},"component documentation"),". An example of a Shadow DOM component is the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v6/api/button"},"button component"),"."))),(0,a.kt)("p",null,"Shadow DOM is useful for preventing styles from leaking out of components and unintentionally applying to other elements. For example, we assign a ",(0,a.kt)("inlineCode",{parentName:"p"},".button")," class to our ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-button")," component. Without Shadow DOM encapsulation, if a user were to set the class ",(0,a.kt)("inlineCode",{parentName:"p"},".button")," on one of their own elements, it would inherit the Ionic Framework button styles. Since ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-button")," is a Shadow component, this is not a problem."),(0,a.kt)("p",null,"However, due to this encapsulation, styles aren\u2019t able to bleed into inner elements of Shadow components either. This means that if a Shadow component renders elements inside of its shadow tree, the inner elements cannot be targeted directly with CSS. Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-select")," component as an example, it renders the following markup:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-select>\n  #shadow-root\n  <div class="select-text select-placeholder"></div>\n  <div class="select-icon"></div>\n</ion-select>\n')),(0,a.kt)("p",null,"The placeholder text and icon elements are inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"#shadow-root"),", which means the following CSS will ",(0,a.kt)("strong",{parentName:"p"},"NOT")," work to style the placeholder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Does NOT work */\nion-select .select-placeholder {\n  color: blue;\n}\n")),(0,a.kt)("p",null,"So how do we solve this? ",(0,a.kt)("a",{parentName:"p",href:"#shadow-parts-explained"},"CSS Shadow Parts"),"!"),(0,a.kt)("h2",{id:"shadow-parts-explained"},"Shadow Parts Explained"),(0,a.kt)("p",null,"Shadow parts allow developers to style inside a shadow tree, from outside of that shadow tree. In order to do so, the ",(0,a.kt)("a",{parentName:"p",href:"#exposing-a-part"},"part must be exposed")," and then it can be styled by using ",(0,a.kt)("a",{parentName:"p",href:"#how-part-works"},"::part"),"."),(0,a.kt)("h3",{id:"exposing-a-part"},"Exposing a part"),(0,a.kt)("p",null,"When creating a Shadow DOM component, a part can be added to an element inside of a shadow tree by assigning a ",(0,a.kt)("inlineCode",{parentName:"p"},"part")," attribute on the element. This is added to the component in Ionic Framework and requires no action from an end user."),(0,a.kt)("p",null,"Continuing to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-select")," component as an example, the markup is updated to look like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-select>\n  #shadow-root\n  <div part="placeholder" class="select-text select-placeholder"></div>\n  <div part="icon" class="select-icon"></div>\n</ion-select>\n')),(0,a.kt)("p",null,"The above shows two parts: ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"icon"),". See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v6/api/select#css-shadow-parts"},"select documentation")," for all of its parts."),(0,a.kt)("p",null,"With these parts exposed, the element can now be styled directly using ",(0,a.kt)("a",{parentName:"p",href:"#how-part-works"},"::part"),"."),(0,a.kt)("h3",{id:"how-part-works"},"How ::part works"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",target:"_blank",rel:"noopener noreferrer"},(0,a.kt)("inlineCode",{parentName:"p"},"::part()"))," pseudo-element allows developers to select elements inside of a shadow tree that have been exposed via a part attribute."),(0,a.kt)("p",null,"Since we know that ",(0,a.kt)("inlineCode",{parentName:"p"},"ion-select")," exposes a ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," part for styling the text when there is no value selected, we can customize it in the following way:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"ion-select::part(placeholder) {\n  color: blue;\n  opacity: 1;\n}\n")),(0,a.kt)("p",null,"Styling using ",(0,a.kt)("inlineCode",{parentName:"p"},"::part")," allows any CSS property that is accepted by that element to be changed."),(0,a.kt)("p",null,"In addition to being able to target the part, ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",target:"_blank",rel:"noopener noreferrer"},"pseudo-elements")," can be styled without them being explicitly exposed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"ion-select::part(placeholder)::first-letter {\n  font-size: 22px;\n  font-weight: 500;\n}\n")),(0,a.kt)("p",null,"Parts work with most ",(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes",target:"_blank",rel:"noopener noreferrer"},"pseudo-classes"),", as well:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"ion-item::part(native):hover {\n  color: green;\n}\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"There are some known limitations with ",(0,a.kt)("a",{parentName:"p",href:"#vendor-prefixed-pseudo-elements"},"vendor prefixed pseudo-elements")," and ",(0,a.kt)("a",{parentName:"p",href:"#structural-pseudo-classes"},"structural pseudo-classes"),"."))),(0,a.kt)("h2",{id:"ionic-framework-parts"},"Ionic Framework Parts"),(0,a.kt)("p",null,"All exposed parts for an Ionic Framework component can be found under the CSS Shadow Parts heading on its API page. To view all components and their API pages, see the ",(0,a.kt)("a",{parentName:"p",href:"/docs/v6/components"},"Component documentation"),"."),(0,a.kt)("p",null,"In order to have parts a component must meet the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It is a ",(0,a.kt)("a",{parentName:"li",href:"/docs/v6/reference/glossary#shadow"},"Shadow DOM")," component. If it is a ",(0,a.kt)("a",{parentName:"li",href:"/docs/v6/reference/glossary#scoped"},"Scoped")," or Light DOM component, the child elements can be targeted directly. If a component is Scoped or Shadow, it will be listed by its name on its ",(0,a.kt)("a",{parentName:"li",href:"/docs/v6/components"},"component documentation page"),"."),(0,a.kt)("li",{parentName:"ul"},"It contains children elements. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"ion-card-header")," is a Shadow component, but all styles are applied to the host element. Since it has no child elements, there\u2019s no need for parts."),(0,a.kt)("li",{parentName:"ul"},"The children elements are not structural. In certain components, including ",(0,a.kt)("inlineCode",{parentName:"li"},"ion-title"),", the child element is a structural element used to position the inner elements. We do not recommend customizing structural elements as this can have unexpected results.")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We welcome recommendations for additional parts. Please create a ",(0,a.kt)("a",{href:"https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+",target:"_blank",rel:"noopener noreferrer"},"new GitHub issue")," with as much information as possible when requesting a part."))),(0,a.kt)("h2",{id:"known-limitations"},"Known Limitations"),(0,a.kt)("h3",{id:"browser-support"},"Browser Support"),(0,a.kt)("p",null,"CSS Shadow Parts are supported in the recent versions of all of the major browsers. However, some of the older versions do not support shadow parts. Verify the ",(0,a.kt)("a",{href:"https://caniuse.com/#feat=mdn-css_selectors_part",target:"_blank",rel:"noopener noreferrer"},"browser support")," meets the requirements before implementing parts in an app. If browser support for older versions is required, we recommend continuing to use ",(0,a.kt)("a",{parentName:"p",href:"/docs/v6/theming/css-variables"},"CSS Variables")," for styling."),(0,a.kt)("h3",{id:"vendor-prefixed-pseudo-elements"},"Vendor Prefixed Pseudo-Elements"),(0,a.kt)("a",{href:"https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix",target:"_blank",rel:"noopener noreferrer"},"Vendor prefixed")," pseudo-elements are not supported at this time. An example of this would be any of the `::-webkit-scrollbar` pseudo-elements:",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Does NOT work */\nmy-component::part(scroll)::-webkit-scrollbar {\n  background: green;\n}\n")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{href:"https://github.com/w3c/csswg-drafts/issues/4530",target:"_blank",rel:"noopener noreferrer"},"this issue on GitHub")," for more information."),(0,a.kt)("h3",{id:"structural-pseudo-classes"},"Structural Pseudo-Classes"),(0,a.kt)("p",null,"Most pseudo-classes are supported with parts, however, ",(0,a.kt)("a",{href:"https://www.w3.org/TR/selectors-4/#structural-pseudos",target:"_blank",rel:"noopener noreferrer"},"structural pseudo-classes")," are not. An example of structural pseudo-classes that do not work is below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},"/* Does NOT work */\nmy-component::part(container):first-child {\n  background: green;\n}\n\n/* Does NOT work */\nmy-component::part(container):last-child {\n  background: green;\n}\n")),(0,a.kt)("h3",{id:"chaining-parts"},"Chaining Parts"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"::part()")," pseudo-element can not match additional ",(0,a.kt)("inlineCode",{parentName:"p"},"::part()"),"s."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"my-component::part(button)::part(label)")," does not match anything. This is because doing so would expose more structural information than is intended."),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"<my-component>"),"\u2019s internal button uses something like ",(0,a.kt)("inlineCode",{parentName:"p"},'part="label => button-label"')," to forward the button\u2019s internal parts up into the panel\u2019s own part element map, then a selector like ",(0,a.kt)("inlineCode",{parentName:"p"},"my-component::part(button-label)")," would select just the one button\u2019s label, ignoring any other labels."))}c.isMDXComponent=!0}}]);