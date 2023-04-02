"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[39832],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?n.createElement(g,i(i({ref:a},c),{},{components:t})):n.createElement(g,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[d]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},81224:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={},i="Android, iOS, and the Camera - Oh My!",p={unversionedId:"developer-resources/guides/first-app-v3/ios-android-camera",id:"version-v6/developer-resources/guides/first-app-v3/ios-android-camera",isDocsHomePage:!1,title:"Android, iOS, and the Camera - Oh My!",description:"Previously, we got an Ionic app up and running locally in a web browser. Now, let\u2019s get it onto your iOS or Android device, then start building the photo gallery feature. Fortunately, Ionic provides a way to skip the frustration of dealing with native SDK installations: Ionic DevApp!",source:"@site/versioned_docs/version-v6/developer-resources/guides/first-app-v3/ios-android-camera.md",sourceDirName:"developer-resources/guides/first-app-v3",slug:"/developer-resources/guides/first-app-v3/ios-android-camera",permalink:"/docs/v6/developer-resources/guides/first-app-v3/ios-android-camera",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/versioned_docs/version-v6/developer-resources/guides/first-app-v3/ios-android-camera.md",tags:[],version:"v6",frontMatter:{}},l=[{value:"Add the Camera Dependencies via the CLI",id:"add-the-camera-dependencies-via-the-cli",children:[],level:2},{value:"Add Camera plugin to Angular App Module",id:"add-camera-plugin-to-angular-app-module",children:[],level:2},{value:"Add the Camera to the About page",id:"add-the-camera-to-the-about-page",children:[],level:2}],s={toc:l},c="wrapper";function d(e){let{components:a,...o}=e;return(0,r.kt)(c,(0,n.Z)({},s,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android-ios-and-the-camera---oh-my"},"Android, iOS, and the Camera - Oh My!"),(0,r.kt)("p",null,"Previously, we got an Ionic app up and running locally in a web browser. Now, let\u2019s get it onto your iOS or Android device, then start building the photo gallery feature. Fortunately, Ionic provides a way to skip the frustration of dealing with native SDK installations: Ionic DevApp!"),(0,r.kt)("p",null,"The Ionic DevApp is a free app that makes it easy to run your Ionic app directly on your iOS or Android device. Download it here, then open on your device:"),(0,r.kt)("a",{href:"https://itunes.apple.com/us/app/ionic-devapp/id1233447133?ls=1&mt=8"},(0,r.kt)("img",{src:t(8431).Z})),(0,r.kt)("a",{href:"https://play.google.com/store/apps/details?id=io.ionic.devapp&hl=en"},(0,r.kt)("img",{src:t(561).Z})),(0,r.kt)("p",null,"Afterwards, open a terminal and navigate to your Ionic project. Execute the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic serve -c\n")),(0,r.kt)("p",null,"In DevApp, you should now see the app appear. If it doesn't, or you have any issues throughout creating this app, ",(0,r.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/pro/devapp/"},"see here"),"."),(0,r.kt)("p",null,"Much better! Now we can add the camera functionality. By the way, you can find reference code for this in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/photo-gallery-tutorial-ionic3/tree/master/part1"},"the \u201cpart 1\u201d folder")," on GitHub."),(0,r.kt)("p",null,"Back in ",(0,r.kt)("inlineCode",{parentName:"p"},"about.html"),", add the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ion-content>\n  <img />\n\n  <ion-fab center bottom>\n    <button ion-fab>\n      <ion-icon name="camera"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n')),(0,r.kt)("p",null,"Save the file and watch - a camera button appears! Tap on it and notice that it doesn\u2019t do anything. Let\u2019s fix that next."),(0,r.kt)("h2",{id:"add-the-camera-dependencies-via-the-cli"},"Add the Camera Dependencies via the CLI"),(0,r.kt)("p",null,"In order to use the Camera, we need to bring in its JavaScript and native library dependencies. Back over in your Terminal window, run the following command, which adds the JavaScript library to the project, thus exposing the Camera API in TypeScript code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save @awesome-cordova-plugins/camera\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),", you\u2019ll notice a new JavaScript dependency has been added:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'"@awesome-cordova-plugins/camera": "^4.12.0"')),(0,r.kt)("p",null,"Next, run this command to add the native iOS and Android code, effectively allowing the Camera to work on a mobile device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova plugin add cordova-plugin-camera\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml"),", a new plugin entry is created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<plugin name="cordova-plugin-camera" spec="^4.0.3" />\n')),(0,r.kt)("p",null,"The next step is only required for iOS users. As of iOS 10, developers must provide a reason for why the app wishes to access the device camera. Add this to the bottom of ",(0,r.kt)("inlineCode",{parentName:"p"},"config.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Required for iOS 10: Camera permission prompt --\x3e\n<edit-config file="*-Info.plist" mode="merge" target="NSCameraUsageDescription">\n    <string>Used to take pictures</string>\n</edit-config>\n')),(0,r.kt)("h2",{id:"add-camera-plugin-to-angular-app-module"},"Add Camera plugin to Angular App Module"),(0,r.kt)("p",null,"There\u2019s one more step we need to do since this is an Angular project: register the Camera in the App Module (",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/app.module.ts"),"). First, import the Camera module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Camera } from '@awesome-cordova-plugins/camera';\n")),(0,r.kt)("p",null,"Then, add it as a Provider:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"providers: [\n    StatusBar,\n    SplashScreen,\n    Camera,\n    {provide: ErrorHandler, useClass: IonicErrorHandler}\n  ],\n")),(0,r.kt)("p",null,"It can now be used on any of our App pages."),(0,r.kt)("h2",{id:"add-the-camera-to-the-about-page"},"Add the Camera to the About page"),(0,r.kt)("p",null,"Our camera button doesn\u2019t do anything yet. Over in ",(0,r.kt)("inlineCode",{parentName:"p"},"about.html"),", add a click handler to the button:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<button ion-fab (click)="takePicture()"></button>\n')),(0,r.kt)("p",null,"Then, update the image placeholder. The following binds the \u201ccurrentImage\u201d variable (which we\u2019ll work on next) to the image to display to the user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<img [src]="currentImage" *ngIf="currentImage" />\n')),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"about.ts")," next and import the Camera library:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera';\n")),(0,r.kt)("p",null,"Next, define the \u201ccurrentImage\u201d variable and inject the Camera into this class via the constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"export class AboutPage {\n  currentImage: any;\n\n  constructor(public navCtrl: NavController, private camera: Camera) {\n}\n")),(0,r.kt)("p",null,"Finally, add the \u201ctakePicture\u201d method, already wired up to execute once the camera button has been tapped:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"takePicture() {\n    const options: CameraOptions = {\n      quality: 100,\n      destinationType: this.camera.DestinationType.DATA_URL,\n      encodingType: this.camera.EncodingType.JPEG,\n      mediaType: this.camera.MediaType.PICTURE\n    }\n\n    this.camera.getPicture(options).then((imageData) => {\n      this.currentImage = 'data:image/jpeg;base64,' + imageData;\n    }, (err) => {\n     // Handle error\n     console.log(\"Camera issue:\" + err);\n    });\n  }\n")),(0,r.kt)("p",null,"Take notice: there\u2019s no mention of iOS or Android! This is the awesome power of plugins: you use one API (",(0,r.kt)("inlineCode",{parentName:"p"},"camera.getPicture()")," in this case) and the plugin takes care of the platform differences for you. Write once, run everywhere ",(0,r.kt)("inlineCode",{parentName:"p"},":)")),(0,r.kt)("p",null,"Save this file then tap the Camera button in DevApp. Voila! The camera should open on your device. Once a photo has been taken, it displays on the Photo Gallery page."),(0,r.kt)("p",null,"Finally, back up your changes to Appflow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git add .\ngit commit -m \u201cadded camera functionality\u201d\ngit push ionic master\n")),(0,r.kt)("p",null,"Next, we\u2019ll look at how to transform the app into a photo gallery, as well as how to save the photos to your device!"))}d.isMDXComponent=!0},8431:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASgAAABgCAMAAACZpR+eAAAB0VBMVEV6fYOoq7DO0dXp7PBQVFtfY2nX2t7g4+e7vsOSlZptcXfFyMyxtLmGio+doKX3+fv9/f7z9vlAREzw8/dCRk7u8fX19/pGSlJQVFzP09dfY2pJTVVFSVHq7fHS1dmprbKws7lOUlnr7vKSlpxrb3ZxdXyIjJLQ09jBxMmPkphVWWGoq7FscHfs7/NpbXSlqK67v8Ti5elWWmFeYmlkaG9MT1fGyc6WmqDR1NnGys9sb3bd4eWvs7jl6OyKjpRDR0+ipqv3+Pu8v8RcYGfr7vOjpqzCxcqQlJp3e4GhpaudoKafoqjFyM1XW2NXW2JVWWB/gomVmJ6JjZNjZm5na3KxtbqLj5W1uL5ZXWTAw8lhZGzU2NxTV1+UmJ55fYN6fYSorLGcn6Xp7PHm6e3U19zk6Ox/g4m4vMHY2+BSVl1xdHt8f4Zucnh4e4Kgo6nd4OSXmqChpKp8gIdKTlby9PhPU1tBRU3b3uLP0tdtcXiOkZjt8PS/w8iHipFlaXCPk5ng4+itsbZzd35RVV1OUlrT1tvEyM2usbeDho23usBFSVBcX2fy9fi2ub5ydn1laHC2ur/JzNGFiI+RlJro6++xtLrv8vZeYmo/Q0v////x9PjWFqgTAAAGmElEQVR42u2d5ZukOBDGk+A6szLr7u4ut37u7u7u7u4ub+evvQ9NINA0Se+wz87t1fuph2YC+VFVqSp4GjYgWYkRgolATU/Nk6QWzZua1kFNEZHxOlOBWkQ0urRIgSJ7MmhqCGqaSJg0PRgwMig7k2KDAa135rVvMGCDAXEwi0ARKAJFoAgUgSJQJAJFoAjUlQFq89b9bxAoo77aCAAEyqTXTgHAWgLVrQWbAADYQaC6dXjICTcQqE4dnT/ktPBTAtXpeMsKg7qd0oNO7Sk4LTlJoDr1QuF4hyjh7JYLAFixhzLzbp0HAJx7l0oYg1YC+GH1DNV6bTpy24sPLl9yYNPZdVLK7fc8K6Wc2XLNjm3LD5679S+HQBU6tAFKK15ac1JKOXPjR2vLbcsf+tNiEEeInogmOWOM8WSugXK+RV0333n/4vqWL7aYhwmBtBdMnjqq588pUMeXwaz5p43jMMDr4bxDwM2FEGkEiLkE6vhNsNL1hnECAJi9CSRAVHiwE84l19t5hx0nbFjZPVAKz0M+69P2EI9eA55fflBX2WGav3uBYaAYUTR73/OBpMWp2WUHtXS+FaeFZ21mmLTNcmLPc+YkqEfsDGq1caAcrnRcRLM8az5HQT210IrT8zaxJZIygutokYVLKUMGwM2quMy5kFJEHgCWjkARI0bJOffgcc45VwPnMQAvqtbEkAvpcE+1+NXoPYI6YWdQq2xcRkiZAKE+Z+mXORFTTADuZGqr23RVB03r0U5juEeEkTEZeBCrParRY783UL9bcdplPloRx11kOijhwgsDKROG0tZi5DEQ+VL6OXSwaqCG+zYsyomBLJHSSRjg+iWoGC4Xotgh8qUMOHT7niWoX6xAPWbTmcmHkaoKMQIAMkclD8pSGNxygr47kno5LsCC8TEqrtimQOyUYxYfZVY6rw+rkGkFaq0VqA9t0mm/OLdUBxVrwb6YINPzUn/E04beGvljQHHdBjnA1QcEZQxIte+DnkDZJQdPGg+WKSRaviig1yCOW3zD1OyUpzXnMgxCLGkD5bg1sB5cRSRqsT7Htak+rUDZxfKlxrK6vIxpNXGBWpKdF9+wGpqgrZIOIhe6A1aTD+v1X1i4GS83B7Wol9nkFT2C+to0TIUnqOxF1EynXPhZPX33WufihJ62JFagosKEqgvEC1AVOkfPytyeQC22ArXbNEwMTxTySg6iUf0Xk2pkj2MvOtcXNTYm9YyHf/PyoBzglZjNwxNWoPZZgfrcpnFQyZ8EFB87l1BbKFlpf7xtPeQayYZ6AvWeFahTganucFkpV7UQZgtKcsW8+heYQXm8pp5A3W0XpD6xKF9kM4zYgYrGx9sy0OsWFZlATVwWWoFaYwfq7aX2rZGyhdAApdajxlS6ZqbsZ3yMKqrwClQ++SNdVqDeseza7dtrLl8aJy9FvT5ROWljrk1n6gaV15sLKr+tQKWTd1nt2iz3WpLa/4qxfNEaLk4BKqstb54Kt84ovs7srAKV1LmqdLUCFWDiLqsdqPWWoPDldx2NA7/hiaHKzH19K2/JzOOOpmg4Gsylpxe6vroUFSjJ4AaXAtRmWGvX1ePKF68Z27Oy1lOzcmI1w1qtx0fbB3oBUqYHsQavGtNTea4Gytd26LVnfsCe1KPjHCRv7VIKrSUUxGXAZwDcoUs5+Uh9H8VqXRBemXByDW0ExIHaQVHWQMkQ8EKV3yf9gVpjzWnJB+McJGhd1gWQukDGBc+0xhMDiwCPJ2HuVm0YLXX1Ii5CHmslTAC4qeChIoUoFZxpY+qgZAjAZZyzGC13dC4a1MwttqAuGBoHeuCJi/QgUJkyE3o+wN2iwTlSEIsqtY6C2tzLWYeqa8o0D2YjNTUAxGl/oORnlpy2rRuTRYmR4BkIv8yjgjRnEfcbiZMTcpa1P1zgJDxnGQ9ro/o803ZPeMR4GjQPqPNOeCpErzGqemDToGcmTeRE+y3xS3tL5ZLdrpJS/mbVvXtY/u9BWd0sfmsvgZLn/zGDuk8SKCkfMPbv/pAESkopfzJw2vg3gRpqeyenYyslgSp04vsSy3Ovv3rhuvU/V+547eMXdwbtz3S25F3/JVBy1bHhs65PHy0ehFr3zccAgIOrF8grWhM/Z77q5ffX3/WEvuXI6a2Hf90pJYEiESgCRaAIFIEiUASKRKAIFIEiUASKQBEokkk/0s9022ke/fC7naboVQJ2mqaXU9gaFL3uxEKL6AU6VjpDr2Qy683GK5lI9Da0vvQvu5FzMXfQmW4AAAAASUVORK5CYII="},561:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);