"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[67286],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>v});var i=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function a(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function l(e,n){if(null==e)return{};var o,i,t=function(e,n){if(null==e)return{};var o,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=i.createContext({}),p=function(e){var n=i.useContext(d),o=n;return e&&(o="function"==typeof e?e(n):a(a({},n),e)),o},s=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(o),m=t,v=c["".concat(d,".").concat(m)]||c[m]||u[m]||r;return o?i.createElement(v,a(a({ref:n},s),{},{components:o})):i.createElement(v,a({ref:n},s))}));function v(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=o.length,a=new Array(r);a[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[c]="string"==typeof e?e:t,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},18258:(e,n,o)=>{o.r(n),o.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=o(87462),t=(o(67294),o(3905));const r={title:"ionic cordova run",sidebar_label:"cordova run"},a=void 0,l={unversionedId:"cli/commands/cordova-run",id:"version-v6/cli/commands/cordova-run",isDocsHomePage:!1,title:"ionic cordova run",description:"ionic cordova run: native-run Android and iOS Apps in Browsers",source:"@site/versioned_docs/version-v6/cli/commands/cordova-run.md",sourceDirName:"cli/commands",slug:"/cli/commands/cordova-run",permalink:"/docs/v6/cli/commands/cordova-run",editUrl:"https://github.com/ionic-team/ionic-cli/edit/develop/packages/@ionic/cli/src/commands/cordova/run.ts",tags:[],version:"v6",frontMatter:{title:"ionic cordova run",sidebar_label:"cordova run"},sidebar:"version-v6/cli",previous:{title:"cordova resources",permalink:"/docs/v6/cli/commands/cordova-resources"},next:{title:"deploy add",permalink:"/docs/v6/cli/commands/deploy-add"}},d=[{value:"platform",id:"platform",children:[],level:3},{value:"Options",id:"options",children:[],level:3},{value:"Advanced Options",id:"advanced-options",children:[],level:3},{value:"Examples",id:"examples",children:[],level:2}],p={toc:d},s="wrapper";function c(e){let{components:n,...o}=e;return(0,t.kt)(s,(0,i.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("head",null,(0,t.kt)("title",null,"ionic cordova run: native-run Android and iOS Apps in Browsers"),(0,t.kt)("meta",{name:"description",content:"Build your app and deploy it to devices and emulators using ionic cordova run. Use the native-run utility to run your app in an Android or iOS device browser."})),(0,t.kt)("p",null,"Run an Ionic project on a connected device"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic cordova run [platform] [options]\n")),(0,t.kt)("p",null,"Build your app and deploy it to devices and emulators using this command. Optionally specify the ",(0,t.kt)("inlineCode",{parentName:"p"},"--livereload")," option to use the dev server from ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic serve")," for livereload functionality."),(0,t.kt)("p",null,"This command will first use ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic build")," to build web assets (or ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic serve")," with the ",(0,t.kt)("inlineCode",{parentName:"p"},"--livereload")," option). Then, ",(0,t.kt)("inlineCode",{parentName:"p"},"cordova build")," is used to compile and prepare your app. Finally, the ",(0,t.kt)("inlineCode",{parentName:"p"},"native-run")," ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/ionic-team/native-run"},"utility")," is used to run your app on a device. To use Cordova for this process instead, use the ",(0,t.kt)("inlineCode",{parentName:"p"},"--no-native-run")," option."),(0,t.kt)("p",null,"If you have multiple devices and emulators, you can target a specific one with the ",(0,t.kt)("inlineCode",{parentName:"p"},"--target")," option. You can list targets with ",(0,t.kt)("inlineCode",{parentName:"p"},"--list"),"."),(0,t.kt)("p",null,"For Android and iOS, you can setup Remote Debugging on your device with browser development tools using these ",(0,t.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/developer-resources/developer-tips"},"docs"),"."),(0,t.kt)("p",null,"When using ",(0,t.kt)("inlineCode",{parentName:"p"},"--livereload")," with hardware devices, remember that livereload needs an active connection between device and computer. In some scenarios, you may need to host the dev server on an external address using the ",(0,t.kt)("inlineCode",{parentName:"p"},"--external")," option. See these ",(0,t.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/cli/livereload"},"docs")," for more information."),(0,t.kt)("p",null,"Just like with ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic cordova build"),", you can pass additional options to the Cordova CLI using the ",(0,t.kt)("inlineCode",{parentName:"p"},"--")," separator. To pass additional options to the dev server, consider using ",(0,t.kt)("inlineCode",{parentName:"p"},"ionic serve")," separately and using the ",(0,t.kt)("inlineCode",{parentName:"p"},"--livereload-url")," option."),(0,t.kt)("h3",{id:"platform"},"platform"),(0,t.kt)("p",null,"The platform to run (e.g. ",(0,t.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"ios"),")"),(0,t.kt)("h3",{id:"options"},"Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--ssl"),": Use HTTPS for the dev server\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--list"),": List all available targets\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--no-build"),": Do not invoke Ionic build\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--external"),": Host dev server on all network interfaces (i.e. ",(0,t.kt)("inlineCode",{parentName:"li"},"--host=0.0.0.0"),")\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--livereload"),": Spin up dev server to live-reload www files (or ",(0,t.kt)("inlineCode",{parentName:"li"},"-l"),")\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--livereload-url=<url>"),": Provide a custom URL to the dev server\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--prod"),": Flag to use the ",(0,t.kt)("inlineCode",{parentName:"li"},"production")," configuration\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--debug"),": Mark as a debug build\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--release"),": Mark as a release build\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--device"),": Deploy build to a device\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--emulator"),": Deploy build to an emulator\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--no-native-run"),": Do not use ",(0,t.kt)("inlineCode",{parentName:"li"},"native-run")," to run the app; use Cordova instead\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--connect"),": Tie the running app to the process\n")),(0,t.kt)("h3",{id:"advanced-options"},"Advanced Options"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--consolelogs"),": Print app console logs to the terminal\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--consolelogs-port=<port>"),": Use specific port for console logs server\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--host=<host>"),": Use specific host for the dev server\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--port=<port>"),": Use specific port for the dev server (or ",(0,t.kt)("inlineCode",{parentName:"li"},"-p"),")\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--public-host=<host>"),": The host used for the browser or web view\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--configuration=<conf>"),": Specify the configuration to use (or ",(0,t.kt)("inlineCode",{parentName:"li"},"-c"),")\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--source-map"),": Output source maps\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--buildConfig=<file>"),": Use the specified build configuration\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--target=<target>"),": Deploy build to a device (use ",(0,t.kt)("inlineCode",{parentName:"li"},"--list")," to see all)\n"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"--json"),": Output targets in JSON\n")),(0,t.kt)("h2",{id:"examples"},"Examples"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},'$ ionic cordova run android\n$ ionic cordova run android --buildConfig=build.json\n$ ionic cordova run android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true\n$ ionic cordova run android --prod --release -- -- --keystore=filename.keystore --alias=myalias\n$ ionic cordova run android --prod --release -- -- --minSdkVersion=21\n$ ionic cordova run android --prod --release -- -- --versionCode=55\n$ ionic cordova run android --prod --release --buildConfig=build.json\n$ ionic cordova run android -l\n$ ionic cordova run ios\n$ ionic cordova run ios --buildConfig=build.json\n$ ionic cordova run ios --livereload --external\n$ ionic cordova run ios --livereload-url=http://localhost:8100\n$ ionic cordova run ios --prod --release\n$ ionic cordova run ios --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"\n$ ionic cordova run ios --prod --release --buildConfig=build.json\n')))}c.isMDXComponent=!0}}]);