"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[89119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94528:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_label:"Deploying Mobile"},r="Deploying to iOS and Android",p={unversionedId:"react/your-first-app/deploying-mobile",id:"react/your-first-app/deploying-mobile",isDocsHomePage:!1,title:"Deploying to iOS and Android",description:"Since we added Capacitor to our project when it was first created, there\u2019s only a handful of steps remaining until the Photo Gallery app is on our device! Remember, you can find the complete source code for this app here.",source:"@site/docs/react/your-first-app/6-deploying-mobile.md",sourceDirName:"react/your-first-app",slug:"/react/your-first-app/deploying-mobile",permalink:"/docs/react/your-first-app/deploying-mobile",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/your-first-app/6-deploying-mobile.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"Deploying Mobile"}},l=[{value:"Capacitor Setup",id:"capacitor-setup",children:[],level:2},{value:"iOS",id:"ios",children:[],level:2},{value:"Android",id:"android",children:[],level:2}],s={toc:l},d="wrapper";function c(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-to-ios-and-android"},"Deploying to iOS and Android"),(0,o.kt)("p",null,"Since we added Capacitor to our project when it was first created, there\u2019s only a handful of steps remaining until the Photo Gallery app is on our device! Remember, you can find the complete source code for this app ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-capacitor-react"},"here"),"."),(0,o.kt)("h2",{id:"capacitor-setup"},"Capacitor Setup"),(0,o.kt)("p",null,"Capacitor is Ionic\u2019s official app runtime that makes it easy to deploy web apps to native platforms like iOS, Android, and more. If you\u2019ve used Cordova in the past, consider reading more about the differences ",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/cordova#differences-between-capacitor-and-cordova"},"here"),"."),(0,o.kt)("p",null,"If you\u2019re still running ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic serve")," in the terminal, cancel it. Complete a fresh build of the Ionic project, fixing any errors that it reports:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic build\n")),(0,o.kt)("p",null,"Next, create both the iOS and Android projects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap add ios\n$ ionic cap add android\n")),(0,o.kt)("p",null,"Both android and ios folders at the root of the project are created. These are entirely standalone native projects that should be considered part of your Ionic app (i.e., check them into source control, edit them using their native tooling, etc.)."),(0,o.kt)("p",null,"Every time you perform a build (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic build"),") that updates your web directory (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),"), you'll need to copy those changes into your native projects:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cap copy\n")),(0,o.kt)("p",null,"Note: After making updates to the native portion of the code (such as adding a new plugin), use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sync")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cap sync\n")),(0,o.kt)("h2",{id:"ios"},"iOS"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To build an iOS app, you\u2019ll need a Mac computer."))),(0,o.kt)("p",null,"Capacitor iOS apps are configured and managed through Xcode (Apple\u2019s iOS/Mac IDE), with dependencies managed by CocoaPods. Before running this app on an iOS device, there's a couple of steps to complete."),(0,o.kt)("p",null,"First, run the Capacitor ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," command, which opens the native iOS project in Xcode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cap open ios\n")),(0,o.kt)("p",null,"In order for some native plugins to work, user permissions must be configured. In our photo gallery app, this includes the Camera plugin: iOS displays a modal dialog automatically after the first time that ",(0,o.kt)("inlineCode",{parentName:"p"},"Camera.getPhoto()")," is called, prompting the user to allow the app to use the Camera. The permission that drives this is labeled \u201cPrivacy - Camera Usage.\u201d To set it, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist")," file must be modified (",(0,o.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/ios/configuration"},"more details here"),'). To access it, click "Info," then expand "Custom iOS Target Properties."'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode Custom iOS Target Properties",src:n(25699).Z})),(0,o.kt)("p",null,"Each setting in ",(0,o.kt)("inlineCode",{parentName:"p"},"Info.plist"),' has a low-level parameter name and a high-level name. By default, the property list editor shows the high-level names, but it\'s often useful to switch to showing the raw, low-level names. To do this, right-click anywhere in the property list editor and toggle "Raw Keys/Values."'),(0,o.kt)("p",null,"Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"NSCameraUsageDescription"),' Key and set the Value to something that describes why the app needs to use the camera, such as "To Take Photos." The Value field is displayed to the app user when the permission prompt opens.'),(0,o.kt)("p",null,"Follow the same process to add the other two Keys required of the Camera plugin: ",(0,o.kt)("inlineCode",{parentName:"p"},"NSPhotoLibraryAddUsageDescription")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"NSPhotoLibraryUsageDescription"),"."),(0,o.kt)("p",null,"Next, click on ",(0,o.kt)("inlineCode",{parentName:"p"},"App")," in the Project Navigator on the left-hand side, then within the ",(0,o.kt)("inlineCode",{parentName:"p"},"Signing & Capabilities")," section, select your Development Team."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode - Selecting Development Team",src:n(85855).Z})),(0,o.kt)("p",null,"With permissions in place and Development Team selected, we are ready to try out the app on a real device! Connect an iOS device to your Mac computer, select it (",(0,o.kt)("inlineCode",{parentName:"p"},"App -> Matthew\u2019s iPhone"),' for me) then click the "Build" button to build, install, and launch the app on your device:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Xcode build button",src:n(63740).Z})),(0,o.kt)("p",null,"Upon tapping the Camera button on the Photo Gallery tab, the permission prompt will display. Tap OK, then take a picture with the Camera. Afterward, the photo shows in the app!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"iOS Camera permissions",src:n(7977).Z})),(0,o.kt)("h2",{id:"android"},"Android"),(0,o.kt)("p",null,"Capacitor Android apps are configured and managed through Android Studio. Before running this app on an Android device, there's a couple of steps to complete."),(0,o.kt)("p",null,"First, run the Capacitor ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," command, which opens the native Android project in Android Studio:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cap open android\n")),(0,o.kt)("p",null,"Similar to iOS, we must enable the correct permissions to use the Camera. Configure these in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file. Android Studio will likely open this file automatically, but in case it doesn't, locate it under ",(0,o.kt)("inlineCode",{parentName:"p"},"android/app/src/main/"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android Manifest location",src:n(64859).Z})),(0,o.kt)("p",null,"Scroll to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Permissions")," section and ensure these entries are included:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>\n<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />\n')),(0,o.kt)("p",null,'Save the file. With permissions in place, we are ready to try out the app on a real device! Connect an Android device to your computer. Within Android Studio, click the "Run" button, select the attached Android device, then click OK to build, install, and launch the app on your device.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Launching app on Android",src:n(41119).Z})),(0,o.kt)("p",null,"Once again, upon tapping the Camera button on the Photo Gallery tab, the permission prompt should be displayed. Tap OK, then take a picture with the Camera. Afterward, the photo should appear in the app."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Android Camera permissions",src:n(31864).Z})),(0,o.kt)("p",null,"Our Photo Gallery app has just been deployed to Android and iOS devices. \ud83c\udf89"),(0,o.kt)("p",null,"In the final portion of this tutorial, we\u2019ll use the Ionic CLI\u2019s Live Reload functionality to quickly implement photo deletion - thus completing our Photo Gallery feature."))}c.isMDXComponent=!0},41119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-device-8b3018202541360e0e96a79e2450000b.png"},64859:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-manifest-647a7d01c724948e2425de15485b32fa.png"},31864:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/android-permissions-photo-8d864969f3b5c99f5e420c2d03d34c25.png"},7977:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ios-permissions-photo-60dc28e6596c4d3705f87a11aafa1791.png"},63740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xcode-build-button-8c12390e6aa4be6b7660a17ff2638ddd.png"},25699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xcode-info-plist-c32d110907f566a8c66942fe4b9c8972.png"},85855:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/xcode-signing-8ed68e36b712b826ee29b0b3c805d664.png"}}]);