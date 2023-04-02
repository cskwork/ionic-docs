"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[5341],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(o),u=i,m=d["".concat(p,".").concat(u)]||d[u]||h[u]||a;return o?n.createElement(m,r(r({ref:t},s),{},{components:o})):n.createElement(m,r({ref:t},s))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<a;c++)r[c]=o[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},76096:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=o(87462),i=(o(67294),o(3905));const a={title:"Rapid App Development with Live Reload",sidebar_label:"Live Reload"},r=void 0,l={unversionedId:"angular/your-first-app/live-reload",id:"angular/your-first-app/live-reload",isDocsHomePage:!1,title:"Rapid App Development with Live Reload",description:"<meta",source:"@site/docs/angular/your-first-app/7-live-reload.md",sourceDirName:"angular/your-first-app",slug:"/angular/your-first-app/live-reload",permalink:"/docs/angular/your-first-app/live-reload",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/your-first-app/7-live-reload.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Rapid App Development with Live Reload",sidebar_label:"Live Reload"}},p=[{value:"Live Reload",id:"live-reload",children:[],level:2},{value:"Deleting Photos",id:"deleting-photos",children:[],level:2}],c={toc:p},s="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(s,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"description",content:"Use the Ionic CLI\u2019s\xa0Live Reload functionality\xa0to boost your productivity when building Ionic apps. Learn how you can utilize rapid app development."})),(0,i.kt)("p",null,"So far, we\u2019ve seen how easy it is to develop a cross-platform app that works everywhere. The development experience is pretty quick, but what if I told you there was a way to go faster?"),(0,i.kt)("p",null,"We can use the Ionic CLI\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"Live Reload functionality")," to boost our productivity when building Ionic apps. When active, Live Reload will reload the browser and/or WebView when changes in the app are detected."),(0,i.kt)("h2",{id:"live-reload"},"Live Reload"),(0,i.kt)("p",null,"Remember ",(0,i.kt)("inlineCode",{parentName:"p"},"ionic serve"),"? That was Live Reload working in the browser, allowing us to iterate quickly."),(0,i.kt)("p",null,"We can also use it when developing on iOS and Android devices. This is particularly useful when writing code that interacts with native plugins - we must run it on a device to verify that it works. Therefore, being able to quickly write, build, test, and deploy code is crucial to keeping up our development speed."),(0,i.kt)("p",null,"Let\u2019s use Live Reload to implement photo deletion, the missing piece of our Photo Gallery feature. Select your platform of choice (iOS or Android) and connect a device to your computer. Next, run either command in a terminal, based on your chosen platform:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cap run ios -l --external\n\n$ ionic cap run android -l --external\n")),(0,i.kt)("p",null,"The Live Reload server will start up, and the native IDE of choice will open if not opened already. Within the IDE, click the Play button to launch the app onto your device."),(0,i.kt)("h2",{id:"deleting-photos"},"Deleting Photos"),(0,i.kt)("p",null,"With Live Reload running and the app open on your device, let\u2019s implement photo deletion functionality. Open ",(0,i.kt)("inlineCode",{parentName:"p"},"tab2.page.html")," and add a new click handler to each ",(0,i.kt)("inlineCode",{parentName:"p"},"<ion-img>")," element. When the app user taps on a photo in our gallery, we\u2019ll display an ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/api/action-sheet"},"Action Sheet")," dialog with the option to either delete the selected photo or cancel (close) the dialog."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">\n  <ion-img [src]="photo.webviewPath" (click)="showActionSheet(photo, position)"></ion-img>\n</ion-col>\n')),(0,i.kt)("p",null,"Over in ",(0,i.kt)("inlineCode",{parentName:"p"},"tab2.page.ts"),", import Action Sheet and add it to the constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ActionSheetController } from '@ionic/angular';\n\nconstructor(public photoService: PhotoService,\n            public actionSheetController: ActionSheetController) {}\n")),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"UserPhoto")," to the import statement."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PhotoService, UserPhoto } from '../services/photo.service';\n")),(0,i.kt)("p",null,"Next, implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"showActionSheet()")," function. We add two options: ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete")," that calls PhotoService\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePicture()")," function (to be added next) and ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel"),", which when given the role of \u201ccancel\u201d will automatically close the action sheet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"public async showActionSheet(photo: UserPhoto, position: number) {\n  const actionSheet = await this.actionSheetController.create({\n    header: 'Photos',\n    buttons: [{\n      text: 'Delete',\n      role: 'destructive',\n      icon: 'trash',\n      handler: () => {\n        this.photoService.deletePicture(photo, position);\n      }\n    }, {\n      text: 'Cancel',\n      icon: 'close',\n      role: 'cancel',\n      handler: () => {\n        // Nothing to do, action sheet is automatically closed\n        }\n    }]\n  });\n  await actionSheet.present();\n}\n")),(0,i.kt)("p",null,"Save both of the files we just edited. The Photo Gallery app will reload automatically, and now when we tap on one of the photos in the gallery, the action sheet displays. Tapping \u201cDelete\u201d doesn\u2019t do anything yet, so head back into your code editor."),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/services/photo.service.ts"),", add the ",(0,i.kt)("inlineCode",{parentName:"p"},"deletePicture()")," function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"public async deletePicture(photo: UserPhoto, position: number) {\n  // Remove this photo from the Photos reference data array\n  this.photos.splice(position, 1);\n\n  // Update photos array cache by overwriting the existing photo array\n  Preferences.set({\n    key: this.PHOTO_STORAGE,\n    value: JSON.stringify(this.photos)\n  });\n\n  // delete photo file from filesystem\n  const filename = photo.filepath\n                      .substr(photo.filepath.lastIndexOf('/') + 1);\n\n  await Filesystem.deleteFile({\n    path: filename,\n    directory: Directory.Data\n  });\n}\n")),(0,i.kt)("p",null,"The selected photo is removed from the Photos array first. Then, we use the Capacitor Preferences API to update the cached version of the Photos array. Finally, we delete the actual photo file itself using the Filesystem API."),(0,i.kt)("p",null,"Save this file, then tap on a photo again and choose the \u201cDelete\u201d option. This time, the photo is deleted! Implemented much faster using Live Reload. \ud83d\udcaa"),(0,i.kt)("p",null,"In the final portion of this tutorial, we\u2019ll walk you through the basics of the Appflow product used to build and deploy your application to users' devices."))}d.isMDXComponent=!0}}]);