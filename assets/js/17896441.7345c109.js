"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[27918],{39649:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(87462),l=a(67294),s=a(86010),o=a(95999),i=a(89521);const c="anchorWithStickyNavbar_mojV",r="anchorWithHideOnScrollNavbar_R0VQ",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,i.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[r]:m,[c]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:`#${a}`,title:(0,o.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},25002:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),l=a(67294),s=a(89521);function o(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function i(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:r,maxHeadingLevel:d,...m}=e;const u=(0,s.LU)(),v=r??u.tableOfContents.minHeadingLevel,p=d??u.tableOfContents.maxHeadingLevel,g=(0,s.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:p}),h=(0,l.useMemo)((()=>{if(i&&c)return{linkClassName:i,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:p}}),[i,c,v,p]);return(0,s.Si)(h),l.createElement(o,(0,n.Z)({toc:g,className:a,linkClassName:i},m))}},30745:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(67294),l=a(86010),s=a(93783),o=a(39960),i=a(95999);const c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(o.default,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(o.default,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var r=a(52263),d=a(80907),m=a(89521);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(o.default,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,r.default)(),{pluginId:s}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,m.J)(s),{latestDocSuggestion:i,latestVersionSuggestion:c}=(0,d.Jo)(s),u=i??(g=c).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:c.label,to:u.path,onClick:()=>o(c.name)})))}const h=function(e){let{versionMetadata:t}=e;return t.banner?n.createElement(g,{versionMetadata:t}):n.createElement(n.Fragment,null)};var E=a(41217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function C(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(87462);const _={iconEdit:"iconEdit_UdV7"};function k(e){return n.createElement("svg",(0,N.Z)({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{className:(0,l.Z)(e.className,"icon-edit",_.iconEdit)}),n.createElement("path",{d:"M7 0C3.13438 0 0 3.21563 0 7.17813C0 10.35 2.00625 13.0375 4.7875 13.9875C4.83125 13.9969 4.86875 14 4.90625 14C5.16563 14 5.26562 13.8094 5.26562 13.6438C5.26562 13.4719 5.25938 13.0219 5.25625 12.4219C4.99375 12.4812 4.75938 12.5063 4.55 12.5063C3.20313 12.5063 2.89687 11.4594 2.89687 11.4594C2.57812 10.6313 2.11875 10.4094 2.11875 10.4094C1.50938 9.98125 2.11562 9.96875 2.1625 9.96875H2.16563C2.86875 10.0312 3.2375 10.7125 3.2375 10.7125C3.5875 11.325 4.05625 11.4969 4.475 11.4969C4.80312 11.4969 5.1 11.3906 5.275 11.3094C5.3375 10.8469 5.51875 10.5312 5.71875 10.35C4.16563 10.1688 2.53125 9.55313 2.53125 6.80312C2.53125 6.01875 2.80312 5.37813 3.25 4.87813C3.17812 4.69688 2.9375 3.96563 3.31875 2.97813C3.31875 2.97813 3.36875 2.9625 3.475 2.9625C3.72812 2.9625 4.3 3.05937 5.24375 3.71562C5.80312 3.55625 6.4 3.47812 6.99687 3.475C7.59062 3.47812 8.19063 3.55625 8.75 3.71562C9.69375 3.05937 10.2656 2.9625 10.5188 2.9625C10.625 2.9625 10.675 2.97813 10.675 2.97813C11.0563 3.96563 10.8156 4.69688 10.7437 4.87813C11.1906 5.38125 11.4625 6.02187 11.4625 6.80312C11.4625 9.55937 9.825 10.1656 8.26562 10.3438C8.51562 10.5656 8.74063 11.0031 8.74063 11.6719C8.74063 12.6313 8.73125 13.4062 8.73125 13.6406C8.73125 13.8094 8.82812 14 9.0875 14C9.125 14 9.16875 13.9969 9.2125 13.9875C11.9969 13.0375 14 10.3469 14 7.17813C14 3.21563 10.8656 0 7 0Z",fill:"currentColor"}))}function L(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(k,null),n.createElement(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}const U="tag_hD8n",Z="tagRegular_D6E_",M="tagWithCount_i0QQ";const w=function(e){const{permalink:t,name:a,count:s}=e;return n.createElement(o.default,{href:t,className:(0,l.Z)(U,{[Z]:!s,[M]:s})},a,s&&n.createElement("span",null,s))},T={tags:"tags_XVD_",tag:"tag_JSN8"};function y(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(T.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:T.tag},n.createElement(w,{name:t,permalink:a}))}))))}const A={lastUpdated:"lastUpdated_foO9"};function x(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y,e)))}function H(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:o}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(L,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",A.lastUpdated)},(a||s)&&n.createElement(C,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:s})))}function S(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:o,formattedLastUpdatedAt:i,lastUpdatedBy:c,tags:r}=a,d=r.length>0,u=!!(s||o||c);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(x,{tags:r}),u&&n.createElement(H,{editUrl:s,lastUpdatedAt:o,lastUpdatedBy:c,formattedLastUpdatedAt:i})):n.createElement(n.Fragment,null)}var V=a(16550),B=a(28084),D=a(25002);const I="tableOfContents_cNA8";const O=function(e){let{className:t,...a}=e;return n.createElement("div",{className:(0,l.Z)(I,"thin-scrollbar",t)},n.createElement(D.Z,(0,N.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))};function R(e){let{toc:t,editUrl:a,...l}=e;const{prismicAds:s}=(0,B.usePluginData)("ionic-docs-ads"),[o,i]=(0,n.useState)(),c=(0,V.TH)(),r=t.length<=0;return(0,n.useEffect)((()=>{i(s[Math.floor(Math.random()*s.length)].data)}),[c]),r?null:n.createElement("div",{className:"toc-wrapper"},n.createElement("h2",null,"Contents"),n.createElement(O,(0,N.Z)({toc:t},l)))}const F={tocCollapsible:"tocCollapsible_jdIR",tocCollapsibleButton:"tocCollapsibleButton_Fzxq",tocCollapsibleContent:"tocCollapsibleContent_MpvI",tocCollapsibleExpanded:"tocCollapsibleExpanded_laf4"};function z(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:o}=e;const{collapsed:c,toggleCollapsed:r}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(F.tocCollapsible,{[F.tocCollapsibleExpanded]:!c},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",F.tocCollapsibleButton),onClick:r},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:F.tocCollapsibleContent,collapsed:c},n.createElement(D.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:o})))}var $=a(39649);const P={docItemContainer:"docItemContainer_p3Qu",docItemCol:"docItemCol_nDMA",tocMobile:"tocMobile_diN6"},W=e=>{const[t,a]=(0,n.useState)("ios"),s=(0,n.useRef)(null),o=(0,n.useRef)(!1),i=(0,n.useRef)([]),c=(0,n.useRef)(null);(0,n.useEffect)((()=>{window.addEventListener("demoMessage",r)}),[]);const r=(0,n.useCallback)((async e=>{o.current?d(e):i.current.push(e)}),[]),d=e=>{c.current=e;try{s.current&&s.current.contentWindow&&s.current.contentWindow.postMessage(e.detail,"*")}catch(t){}},m=n.createElement("div",{className:"docs-demo-mode-toggle"},["ios","md"].map((e=>n.createElement("button",{className:(0,l.Z)({"is-selected":e===t}),title:`Toggle ${"ios"===e?"iOS":"Android"} mode`,onClick:()=>a(e)},"ios"===e?"iOS":"Android")))),u=n.createElement("a",{href:e.source,className:"docs-demo-source",target:"_blank",title:"Demo Source"}," View Source"),v=n.createElement("div",{className:`docs-demo-device ${t}`},n.createElement("figure",null,n.createElement("svg",{className:"docs-demo-device__md-bar",viewBox:"0 0 1384.3 40.3"},n.createElement("path",{className:"st0",d:"M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"}),n.createElement("circle",{className:"st0",cx:"1299",cy:"20.2",r:"20"}),n.createElement("path",{className:"st0",d:"M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})),n.createElement("svg",{className:"docs-demo-device__ios-notch",viewBox:"0 0 219 31"},n.createElement("path",{d:"M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z","fill-rule":"evenodd"})),n.createElement("iframe",{loading:"lazy",importance:"low",onLoad:()=>{i.current.forEach((e=>d(e))),d(c.current),i.current=[],o.current=!0},src:`${e.url}?ionic:mode=${t}`,ref:s})));return n.createElement("div",{className:"doc-demo"},m,v,e.source&&u)};function Q(e){const{content:t,versionMetadata:a}=e,{metadata:o,frontMatter:i}=t,{image:r,keywords:d,hide_title:u,hide_table_of_contents:v,toc_min_heading_level:p,toc_max_heading_level:g,demoUrl:b,demoSourceUrl:f}=i,{metadata:{editUrl:C}}=t,{description:N,title:_}=o,k=!u&&void 0===t.contentTitle,L=((0,s.Z)(),!v&&t.toc&&t.toc.length>0);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:_,description:N,keywords:d,image:r}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[P.docItemCol]:!v})},n.createElement(h,{versionMetadata:a}),n.createElement("div",{className:P.docItemContainer},n.createElement("article",null,a.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label),L&&n.createElement(z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:g,className:(0,l.Z)(m.kM.docs.docTocMobile,P.tocMobile)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement($.N,null,_),n.createElement(t,null)),n.createElement(S,e)),n.createElement(c,{metadata:o})),n.createElement("div",{className:"spacer"}),b&&n.createElement("div",{className:(0,l.Z)("doc-demo-wrapper")},n.createElement(W,{url:b,source:f}))),n.createElement("div",{className:"end"},!b&&!v&&t.toc&&n.createElement(R,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:g,editUrl:C,className:m.kM.docs.docTocDesktop}))))}}}]);