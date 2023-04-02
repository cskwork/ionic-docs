"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[6771],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>m});var n=A(67294);function o(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function i(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?i(Object(A),!0).forEach((function(t){o(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function l(e,t){if(null==e)return{};var A,n,o=function(e,t){if(null==e)return{};var A,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||(o[A]=e[A]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(o[A]=e[A])}return o}var r=n.createContext({}),s=function(e){var t=n.useContext(r),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},p=function(e){var t=s(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var A=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(A),c=o,m=d["".concat(r,".").concat(c)]||d[c]||g[c]||i;return A?n.createElement(m,a(a({ref:t},p),{},{components:A})):n.createElement(m,a({ref:t},p))}));function m(e,t){var A=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=A.length,a=new Array(i);a[0]=c;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=A[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}c.displayName="MDXCreateElement"},1771:(e,t,A)=>{A.r(t),A.d(t,{contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>r});var n=A(87462),o=(A(67294),A(3905));const i={title:"Development Tips"},a=void 0,l={unversionedId:"developing/tips",id:"developing/tips",isDocsHomePage:!1,title:"Development Tips",description:"App Development Tips: How to Resolve Permission Errors and Issues",source:"@site/docs/developing/tips.md",sourceDirName:"developing",slug:"/developing/tips",permalink:"/docs/developing/tips",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/developing/tips.md",tags:[],version:"current",frontMatter:{title:"Development Tips"}},r=[{value:"Resolving Permission Errors",id:"resolving-permission-errors",children:[{value:"Option 1",id:"option-1",children:[],level:3},{value:"Option 2",id:"option-2",children:[],level:3}],level:2},{value:"Updating Dependencies",id:"updating-dependencies",children:[],level:2},{value:"Code Editors",id:"code-editors",children:[],level:2},{value:"Using a Debugger",id:"using-a-debugger",children:[],level:2},{value:"Changing Mode",id:"changing-mode",children:[],level:2},{value:"Using the iOS Simulator",id:"using-the-ios-simulator",children:[],level:2},{value:"Using the Genymotion Android Emulator",id:"using-the-genymotion-android-emulator",children:[],level:2}],s={toc:r},p="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(p,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("title",null,"App Development Tips: How to Resolve Permission Errors and Issues"),(0,o.kt)("meta",{name:"description",content:"If errors occur, npm may need to be set up to operate without elevated permissions. Read our Ionic app Development Tips for more on resolving permission issues."})),(0,o.kt)("h2",{id:"resolving-permission-errors"},"Resolving Permission Errors"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"EACCES")," permission errors can occur when packages are installed globally. If this is the case, npm may need to be set up to operate without elevated permissions."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," with npm is ",(0,o.kt)("strong",{parentName:"p"},"not recommended")," because it can lead to further complications."))),(0,o.kt)("p",null,"This guide offers two options for resolving permission issues. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally"},"npm docs")," for full documentation and additional options."),(0,o.kt)("h3",{id:"option-1"},"Option 1"),(0,o.kt)("p",null,"The best way to avoid permission issues is to reinstall NodeJS and npm using a node version manager."),(0,o.kt)("p",null,"This guide will document ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," installation and usage. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installation-and-update"},"nvm docs")," for full documentation. See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm#using-a-node-version-manager-to-install-nodejs-and-npm"},"npm docs")," for additional options and instructions for Windows."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install nvm."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"New terminals will now use nvm. To verify, open a new terminal and run the following. If something prints, the installation was successful."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ command -v nvm\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To download and install the latest LTS release of NodeJS, run:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ nvm install --lts\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Set the newly installed NodeJS as the default environment:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ nvm alias default lts/*\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"New terminals will now use the nvm-controlled NodeJS. To verify:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ node -v  # will print the version installed above\n$ which npm  # will print a path somewhere within the ~/.nvm folder\n")))),(0,o.kt)("p",null,"Global packages will now be installed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.nvm")," directory, so permission errors should no longer occur as long as ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," is used ",(0,o.kt)("em",{parentName:"p"},"without")," ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,o.kt)("h3",{id:"option-2"},"Option 2"),(0,o.kt)("small",null,(0,o.kt)("em",null,"Does not apply to Windows")),(0,o.kt)("p",null,"Change the owner of npm's directories to the current user:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo chown -R $(whoami) /usr/local/{lib/node_modules,bin,share}\n$ sudo chown -R $(whoami) ~/.npm ~/.npmrc\n")),(0,o.kt)("p",null,"Since these global directories are no longer owned by ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),", packages can be installed globally ",(0,o.kt)("em",{parentName:"p"},"without")," ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),"."),(0,o.kt)("h2",{id:"updating-dependencies"},"Updating Dependencies"),(0,o.kt)("p",null,"To update an ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," dependency, run the following, where ",(0,o.kt)("inlineCode",{parentName:"p"},"<package-name>")," is the package to update:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install <package-name>@<version|latest> --save\n")),(0,o.kt)("p",null,"For example, to update the ",(0,o.kt)("inlineCode",{parentName:"p"},"@ionic/angular")," package to the release tagged ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),", run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @ionic/angular@latest --save\n")),(0,o.kt)("p",null,"It is recommended that packages get updated through the CLI since npm will now read package versions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"package-lock.json")," first."),(0,o.kt)("h2",{id:"code-editors"},"Code Editors"),(0,o.kt)("p",null,"There are a lot of code editors to choose from. Here are some of our favorites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com"},"Visual Studio Code"),": a popular and free text editor made by Microsoft"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://atom.io"},"Atom"),": a hackable text editor made by GitHub"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/webstorm/"},"WebStorm"),": a powerful non-free editor by JetBrains")),(0,o.kt)("h2",{id:"using-a-debugger"},"Using a Debugger"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger")," keyword can be used to debug an app. When most browsers encounters a ",(0,o.kt)("inlineCode",{parentName:"p"},"debugger"),' statement, running of JavaScript is stopped, and the browser will load its debugger. This can be used to set "breakpoints" in the app.'),(0,o.kt)("p",null,"For example, if a function is not returning the correct value, the debugger can be used to step through the code and inspect variables."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function myBrokenFunction() {\n  debugger;\n  // do other stuff\n}\n")),(0,o.kt)("p",null,"When an app runs, it will pause at this function. From there, the developer tools can be used to run pieces of JavaScript, line by line, and inspect where exactly the function breaks."),(0,o.kt)("h2",{id:"changing-mode"},"Changing Mode"),(0,o.kt)("p",null,"By default, when an app is viewed in the browser, Ionic will apply the ",(0,o.kt)("inlineCode",{parentName:"p"},"md")," mode. However, since Ionic components adapt according to their platform, it is helpful to be able to view what the app will look like on iOS. To do this, add ",(0,o.kt)("inlineCode",{parentName:"p"},"?ionic:mode=ios")," to the URL where the app is being served. For example, if the app is served on port ",(0,o.kt)("inlineCode",{parentName:"p"},"8100"),", the url would be: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8100/?ionic:mode=ios"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This will not change which platform the browser sees being used. The platform is determined by device detection and inspecting the user-agent. To change the platform, the user-agent must be changed. To do this, open up Chrome DevTools with ",(0,o.kt)("kbd",null,"Ctrl+Shift+I"),"(",(0,o.kt)("kbd",null,"Cmd+Option+I")," on Mac), and then toggle device mode on with ",(0,o.kt)("kbd",null,"Ctrl+Shift+M"),"(",(0,o.kt)("kbd",null,"Cmd+Option+M")," on Mac)."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"app with a different mode",src:A(65145).Z})),(0,o.kt)("p",null,"Selecting devices from the device dropdown will change the user-agent, as well as the dimensions of the viewport."),(0,o.kt)("h2",{id:"using-the-ios-simulator"},"Using the iOS Simulator"),(0,o.kt)("p",null,"The iOS simulator enables testing and debugging of an app before it reaches an actual device."),(0,o.kt)("p",null,"Before it can be used, ",(0,o.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/download/"},"Xcode"),", Apple's IDE, must be installed."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/cli"},"Ionic CLI")," can then be used to run the app in the current directory on the simulator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cordova emulate ios -lc\n")),(0,o.kt)("p",null,"Passing in the ",(0,o.kt)("inlineCode",{parentName:"p"},"-lc")," flag will enable livereload and log console output to a terminal."),(0,o.kt)("p",null,"Xcode can also be used to launch the emulator and debug an app."),(0,o.kt)("p",null,"Open up Xcode and open ",(0,o.kt)("inlineCode",{parentName:"p"},"../path-to-app/platforms/ios/myApp.xcodeproj"),"."),(0,o.kt)("p",null,"After the app loads, console output and device logs will be printed inside of Xcode's output window."),(0,o.kt)("h2",{id:"using-the-genymotion-android-emulator"},"Using the Genymotion Android Emulator"),(0,o.kt)("p",null,"While the Android SDK comes with a stock emulator, it can be slow and unresponsive at times."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.genymotion.com"},"Genymotion")," is an alternate emulator that is faster, and still allows access to native functionality like GPS and camera."))}d.isMDXComponent=!0},65145:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);