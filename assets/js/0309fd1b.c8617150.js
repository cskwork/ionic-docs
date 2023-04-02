"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[15279],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>g});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=r,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return o?a.createElement(g,i(i({ref:t},c),{},{components:o})):a.createElement(g,i({ref:t},c))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=o[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},88694:(e,t,o)=>{o.d(t,{Z:()=>l});var a=o(87462),r=o(86010),n=o(67294);const i={docsButton:"docsButton_MRJH",docsButtonRound:"docsButtonRound_P2GI"};function l(e){let{href:t,round:o=!1,...l}=e;return l.className=(0,r.Z)({[l.className]:Boolean(l.className),[i.docsButton]:!0,"docs-button":!0,[i.docsButtonRound]:o,"docs-button--round":o}),t?n.createElement("a",(0,a.Z)({href:t,className:"docsButton"},l),l.children):n.createElement("button",(0,a.Z)({className:"docsButton"},l),l.children)}},47961:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=o(87462),r=(o(67294),o(3905)),n=o(88694);const i={},l="Creating a Photo Gallery with Device Storage",s={unversionedId:"developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage",id:"developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage",isDocsHomePage:!1,title:"Creating a Photo Gallery with Device Storage",description:"Last time, we successfully added the Camera plugin to the Tab2 page of our Tabs app. Currently, the photo is replaced each time a new one is taken. What if we wanted to display multiple photos together? Let\u2019s create a photo gallery. You can follow along with the complete code for this on GitHub.",source:"@site/docs/developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage.md",sourceDirName:"developer-resources/guides/first-app-v4",slug:"/developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage",permalink:"/docs/developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developer-resources/guides/first-app-v4/creating-photo-gallery-device-storage.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Creating a Dedicated Photo Service",id:"creating-a-dedicated-photo-service",children:[],level:2},{value:"Saving photos to the device",id:"saving-photos-to-the-device",children:[],level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-a-photo-gallery-with-device-storage"},"Creating a Photo Gallery with Device Storage"),(0,r.kt)("p",null,"Last time, we successfully added the Camera plugin to the Tab2 page of our Tabs app. Currently, the photo is replaced each time a new one is taken. What if we wanted to display multiple photos together? Let\u2019s create a photo gallery. You can follow along with the complete code for this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic4"},"on GitHub"),"."),(0,r.kt)("h2",{id:"creating-a-dedicated-photo-service"},"Creating a Dedicated Photo Service"),(0,r.kt)("p",null,"From a terminal window, navigate to your Ionic project and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic g service services/Photo\n")),(0,r.kt)("p",null,'This creates a PhotoService class in a dedicated "services" folder:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Injectable } from '@angular/core';\n\n@Injectable({\n  providedIn: 'root'\n})\nexport class PhotoService {\n  constructor() { }\n}\n")),(0,r.kt)("p",null,"Within this file, add a Photo class. The \u201cdata\u201d property represents the base64 image data of a captured photo:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"class Photo {\n  data: any;\n}\n")),(0,r.kt)("p",null,"Then, create a Photos array to represent our photo gallery:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class PhotoService {\n\n  public photos: Photo[] = [];\n\n  constructor() { }\n}\n")),(0,r.kt)("p",null,"Back in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts"),", import PhotoService:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { PhotoService } from '../services/photo.service';\n")),(0,r.kt)("p",null,"Add it to the Constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"constructor(private camera: Camera, public photoService: PhotoService) {  }\n")),(0,r.kt)("p",null,"Next, move all code pertaining to the Camera plugin to the PhotoService class. This includes the takePicture method, the Camera and CameraOptions imports, and the Tab2Page page constructor."),(0,r.kt)("p",null,"Continuing on, we need to convert currentImage variable references to the new photos array. Start by adding the captured photo data into the photos array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"this.camera.getPicture(options).then((imageData) => {\n    // Add new photo to gallery\n    this.photos.unshift({\n        data: 'data:image/jpeg;base64,' + imageData\n    }); }, (err) => {\n    // Handle error\n    console.log(\"Camera issue: \" + err);\n});\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.ts"),", remove the currentImage variable and the reference to Camera in the constructor, leaving only PhotoService:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class Tab2Page {\n  constructor(public photoService: PhotoService) {  }\n}\n")),(0,r.kt)("p",null,"Next, in ",(0,r.kt)("inlineCode",{parentName:"p"},"tab2.page.html"),", remove the currentImage img tag. In its place, use an ion-grid component, which provides a great way to arrange elements on a page. In this case, we\u2019ll use it to display 2 photos per row."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-grid>\n  <ion-row>\n    <ion-col size="6" *ngFor="let photo of photoService.photos">\n      <img [src]="photo.data" />\n    </ion-col>\n  </ion-row>\n</ion-grid>\n')),(0,r.kt)("p",null,"Here, we loop through each photo in the PhotoServices photos array, adding a new column for each. Since an ion-row consists of 12 \u201cblocks\u201d of space, and we\u2019re setting the size to 6 (",(0,r.kt)("inlineCode",{parentName:"p"},'size="6"'),"), only 2 photos are displayed per row."),(0,r.kt)("p",null,"Last, update the Fab button to call the PhotoService\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"},"takePicture")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Html"},'<ion-fab-button (click)="photoService.takePicture()">\n  <ion-icon name="camera"></ion-icon>\n</ion-fab-button>\n')),(0,r.kt)("p",null,"Excellent! We now have a basic photo gallery working."),(0,r.kt)("h2",{id:"saving-photos-to-the-device"},"Saving photos to the device"),(0,r.kt)("p",null,"Having a working photo gallery is pretty cool, but you\u2019ll likely notice that when the app is closed, the photos are lost forever. That\u2019s no good, so let\u2019s add the ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/storage/"},"Ionic Storage plugin"),", as easy way to store key/value pairs and JSON objects. When running in a native app context, Storage will prioritize using SQLite, one of the most stable and widely used file-based databases. When running on the web or as a Progressive Web App, Storage will attempt to use IndexedDB, WebSQL, and localstorage, in that order."),(0,r.kt)("p",null,"The Storage plugin works perfectly for our base64 image data. To begin, add the SQLite plugin for native:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-sqlite-storage\n")),(0,r.kt)("p",null,"Next, add the JavaScript library for the web:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @ionic/storage\n")),(0,r.kt)("p",null,"Last, import the Storage module and add it to the imports list in ",(0,r.kt)("inlineCode",{parentName:"p"},"app.module.ts"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { IonicStorageModule } from '@ionic/storage';\n\n@NgModule({\n  declarations: [AppComponent],\n  entryComponents: [],\n  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,\n    IonicStorageModule.forRoot()\n  ],\n  providers: [\n    StatusBar,\n    SplashScreen,\n    Camera,\n    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {}\n")),(0,r.kt)("p",null,"It\u2019s now ready to be used in our PhotoService class. Import it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Storage } from '@ionic/storage-angular';\n")),(0,r.kt)("p",null,"Then inject it via the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"constructor(private camera: Camera, private storage: Storage) { }\n")),(0,r.kt)("p",null,"To add the capability to save photos, there\u2019s only a couple steps left. Update the ",(0,r.kt)("inlineCode",{parentName:"p"},"takePicture()")," method to save the entire photos array after each photo is taken using the storage.set method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"this.camera.getPicture(options).then((imageData) => {\n  // Add new photo to gallery\n  this.photos.unshift({\n    data: 'data:image/jpeg;base64,' + imageData\n  });\n\n  // Save all photos for later viewing\n  this.storage.set('photos', this.photos);\n}, (err) => {\n  // Handle error\n  console.log(\"Camera issue: \" + err);\n});\n")),(0,r.kt)("p",null,"We still need to load the saved photos when the app is first opened. This is simple enough - retrieve the \u201cphotos\u201d key then assign its value to the photos array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"loadSaved() {\n  this.storage.get('photos').then((photos) => {\n    this.photos = photos || [];\n  });\n}\n")),(0,r.kt)("p",null,"Over in the Tab2 page, call the loadSaved method once it begins loading:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"ngOnInit() {\n  this.photoService.loadSaved();\n}\n")),(0,r.kt)("p",null,"Sweet! Photos are now saved to your device. To demonstrate that they are indeed being saved, force close DevApp, reopen it, and open the Tab2 page. Or, shake your device to have the Control Menu pop up, then tap \u201cExit preview.\u201d Afterwards, reload this app to view the photos."),(0,r.kt)("p",null,"Next up, we\u2019ll look at how to apply a custom theme to an Ionic app."),(0,r.kt)("div",{style:{textAlign:"right"}},(0,r.kt)(n.Z,{href:"theming",mdxType:"DocsButton"},"Continue"," ",(0,r.kt)("svg",{viewBox:"0 0 512 512"},(0,r.kt)("path",{d:"M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"})))))}u.isMDXComponent=!0}}]);