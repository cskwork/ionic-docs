"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[34635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8583:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={title:"Intro Ionic React Quickstart",sidebar_label:"Quickstart"},r=void 0,p={unversionedId:"react/quickstart",id:"react/quickstart",isDocsHomePage:!1,title:"Intro Ionic React Quickstart",description:"Intro to React Native Quickstart Using Ionic CLI: React Basics",source:"@site/docs/react/quickstart.md",sourceDirName:"react",slug:"/react/quickstart",permalink:"/docs/react/quickstart",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/react/quickstart.md",tags:[],version:"current",frontMatter:{title:"Intro Ionic React Quickstart",sidebar_label:"Quickstart"}},l=[{value:"What is Ionic Framework?",id:"what-is-ionic-framework",children:[],level:2},{value:"Creating a project with the Ionic CLI",id:"creating-a-project-with-the-ionic-cli",children:[],level:2},{value:"A look at a React Component",id:"a-look-at-a-react-component",children:[],level:2},{value:"A component with style",id:"a-component-with-style",children:[],level:2},{value:"Creating a new Route",id:"creating-a-new-route",children:[],level:2},{value:"Adding Icons",id:"adding-icons",children:[],level:2},{value:"Build a Native App",id:"build-a-native-app",children:[],level:2},{value:"Where to go from here",id:"where-to-go-from-here",children:[],level:2}],s={toc:l},c="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,o.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("title",null,"Intro to React Native Quickstart Using Ionic CLI: React Basics"),(0,a.kt)("meta",{name:"description",content:"Intro to React Native Quickstart covers the basics of React and Ionic, including any Ionic-specific features. Learn how to build React apps using the Ionic CLI."})),(0,a.kt)("h2",{id:"what-is-ionic-framework"},"What is Ionic Framework?"),(0,a.kt)("p",null,"First off, if you're new here, welcome! Ionic is a free and open source component library for building apps that run on iOS, Android, Electron, and the Web. You write your app once using familiar technologies (HTML, CSS, JavaScript) and deploy to any platform."),(0,a.kt)("p",null,"Along with the UI components, Ionic also provides a command line tool for creating new apps, as well as deploying to the various platforms we support."),(0,a.kt)("p",null,"In this guide, we'll go over the basics of both React and Ionic, including any Ionic specific features. If you're familiar with React, enjoy the guide and learn something new about Ionic. If you're not familiar with either, no worries! This guide will cover the basics and provide enough information to get an app up and running."),(0,a.kt)("h2",{id:"creating-a-project-with-the-ionic-cli"},"Creating a project with the Ionic CLI"),(0,a.kt)("p",null,"To begin, let's install the latest version of the Ionic CLI."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g @ionic/cli\n")),(0,a.kt)("p",null,"From here, the global command ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic")," will allow for the creation of a React project with Ionic and any other dependencies. To create a new project, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic start myApp blank --type=react\ncd myApp\n")),(0,a.kt)("p",null,"From here, we run ",(0,a.kt)("inlineCode",{parentName:"p"},"ionic serve")," and have our project running in the browser."),(0,a.kt)("h2",{id:"a-look-at-a-react-component"},"A look at a React Component"),(0,a.kt)("p",null,"The base of our app will be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory, and the main entry point will be our ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),". If we open our project in a code editor and open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/index.tsx"),", we should see the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n")),(0,a.kt)("p",null,"So what's going on here? Well, the first three lines are pulling in some dependencies. The first being React itself. This allows us to write components in an HTML-like syntax called JSX. We'll talk about JSX a bit later on."),(0,a.kt)("p",null,"The second import is for ReactDOM. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ReactDOM.render")," method is the browser/DOM specific way of taking our components and rendering it to a specified DOM node."),(0,a.kt)("p",null,"The last import is the root component for our app, simply named ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),". This is our first React component and will be used in the bootstrapping process for our React app."),(0,a.kt)("p",null,"If we open ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx"),", we should see the following."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Route } from 'react-router-dom';\nimport { IonApp, IonRouterOutlet } from '@ionic/react';\nimport { IonReactRouter } from '@ionic/react-router';\nimport Home from './pages/Home';\n\n/* Core CSS required for Ionic components to work properly */\nimport '@ionic/react/css/core.css';\n\nconst App: React.FC = () => (\n  <IonApp>\n    <IonReactRouter>\n      <IonRouterOutlet>\n        <Route path=\"/home\" component={Home} exact={true} />\n        <Route exact path=\"/\" render={() => <Redirect to=\"/home\" />} />\n      </IonRouterOutlet>\n    </IonReactRouter>\n  </IonApp>\n);\n")),(0,a.kt)("p",null,"At first glance, it may look like a lot is going on, so let's break it down, starting with the first group of imports."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { Route } from 'react-router-dom';\nimport { IonApp, IonRouterOutlet } from '@ionic/react';\nimport { IonReactRouter } from '@ionic/react-router';\nimport Home from './pages/Home';\n")),(0,a.kt)("p",null,"Similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"index.tsx"),", we first must import React to use JSX."),(0,a.kt)("p",null,"The next import is from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-router-dom"),". We're importing Route, which is how we\u2019ll match the app\u2019s URL with the components we want to render"),(0,a.kt)("p",null,"Following ReactRouter, we next have our first imports for Ionic. To use a component in React, you must first import it. So for Ionic, this means anytime we want to use a Button or a Card, it must be added to our imports. In the case of our App component, we're only using ",(0,a.kt)("inlineCode",{parentName:"p"},"IonApp"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"IonRouterOutlet"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"IonReactRouter"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IonReactRouter")," is a component that wraps ReactRouter\u2019s BrowserRouter component. It more or less behaves the same as BrowserRouter with a few differences. We have a deeper guide that goes over these differences in our ",(0,a.kt)("a",{parentName:"p",href:"/docs/react/navigation"},"React Navigation Docs"),"."),(0,a.kt)("p",null,"The last important import is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component import. This is a component that we will be able to navigate to in our app. We'll look at the navigation part a bit later."),(0,a.kt)("p",null,"The CSS import is pulling in the utility styles from Ionic for things like padding, typography, etc."),(0,a.kt)("p",null,"After reviewing all of the imports, we now get to our first look at a React Component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => (\n  <IonApp>\n    <IonReactRouter>\n      <IonRouterOutlet>\n        <Route path="/home" component={Home} exact={true} />\n        <Route exact path="/" render={() => <Redirect to="/home" />} />\n      </IonRouterOutlet>\n    </IonReactRouter>\n  </IonApp>\n);\n')),(0,a.kt)("p",null,"This React component sets up the initial routing for our app, as well as include some core Ionic components for animations and layout (IonRouterOutlet and IonApp). One thing that stands out is that in React, to do data-binding, the value is passed in curly braces (",(0,a.kt)("inlineCode",{parentName:"p"},"{}"),"). So in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Route")," component, we can set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"component")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component from earlier. This is how React will know that that value is not a string, but a reference to a component."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"What's important to note here is that these are all standard React DOM libraries, meaning there's no custom integration layer or transpilation step."))),(0,a.kt)("h2",{id:"a-component-with-style"},"A component with style"),(0,a.kt)("p",null,"Now the ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," does not really have a lot to modify here. It's a basic example of a container component. With the Router logic set, all it's responsible for is to render a component that matches the given URL route. Since we already have one component/router setup, let's go ahead and modify our ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component."),(0,a.kt)("p",null,"Currently, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component looks like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"React home component",src:n(98197).Z})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';\nimport React from 'react';\n\nconst Home: React.FC = () => {\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>Ionic Blank</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent className=\"ion-padding\">\n        The world is your oyster.\n        <p>\n          If you get lost, the{' '}\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">\n            docs\n          </a>{' '}\n          will be your guide.\n        </p>\n      </IonContent>\n    </IonPage>\n  );\n};\n")),(0,a.kt)("p",null,"Much like the ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component we started with, we have some imports for specific Ionic components, an import for React, and then our React component itself."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," is the base component for all pages (a component with a route/URL), and includes some common building blocks of a full-screen component, like header, title, and content components."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"When creating your own pages, don't forget to have ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," be the root component for them. Having ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," be the root component is important because it helps ensure transitions work properly as well as provides the base CSS the Ionic components rely on."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IonHeader")," is a bit self explanatory. It's a component that is meant to exist at the top of the page. ",(0,a.kt)("inlineCode",{parentName:"p"},"IonHeader")," itself doesn't do much by itself, aside from handling some flexbox-based layout. It's meant to hold other components, like ",(0,a.kt)("inlineCode",{parentName:"p"},"IonToolbar")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"IonSearchbar"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IonContent")," is, as its name suggests, the main content area for our page. It's responsible for providing the scrollable content that users will interact with, plus any scroll events that could be used in an app."),(0,a.kt)("p",null,"Our current content is relatively simple but does not contain anything that could be used in a real app, so let's change that."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"For brevity, we're excluding repeating part of our component, like the function declaration or import statements for other components."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<IonPage>\n  ...\n  <IonContent>\n    <IonList>\n      <IonItem>\n        <IonCheckbox slot="start" />\n        <IonLabel>\n          <h1>Create Idea</h1>\n          <IonNote>Run Idea by Brandy</IonNote>\n        </IonLabel>\n        <IonBadge color="success" slot="end">\n          5 Days\n        </IonBadge>\n      </IonItem>\n    </IonList>\n  </IonContent>\n</IonPage>\n')),(0,a.kt)("p",null,"Here in our ",(0,a.kt)("inlineCode",{parentName:"p"},"IonContent"),", we're adding an ",(0,a.kt)("inlineCode",{parentName:"p"},"IonList")," and a much more involved ",(0,a.kt)("inlineCode",{parentName:"p"},"IonItem")," component. Let's look at ",(0,a.kt)("inlineCode",{parentName:"p"},"IonItem"),", as it's the centerpiece here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<IonItem>\n  <IonCheckbox slot="start" />\n  <IonLabel>\n    <h1>Create Idea</h1>\n    <IonNote>Run Idea by Brandy</IonNote>\n  </IonLabel>\n  <IonBadge color="success" slot="end">\n    5 Days\n  </IonBadge>\n</IonItem>\n')),(0,a.kt)("p",null,"Item is important as it clearly shows the mix of React concepts and Web Component concepts. The first clear example of a React concept is self-closing tags for React Components in ",(0,a.kt)("inlineCode",{parentName:"p"},"IonCheckbox"),". This is just a simpler way of writing components that do not contain any child content."),(0,a.kt)("p",null,"From the Web Components side, we have a special attribute called ",(0,a.kt)("inlineCode",{parentName:"p"},"slot"),". This is key for letting the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonItem")," know where to place the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonCheckbox")," when it renders. This is not a React API, but a web standards API."),(0,a.kt)("p",null,"Let's look at another component from Ionic, FAB. Floating Action Buttons are a nice way to provide a main action that is elevated from the rest of an app. For this FAB, we'll need three components: a FAB, a FAB Button, and an Icon."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { add } from \u2018ionicons/icons\u2019;\n\u2026\n\n<IonContent>\n  <IonList>\n  ...\n  </IonList>\n\n  <IonFab vertical="bottom" horizontal="end" slot="fixed">\n    <IonFabButton>\n      <IonIcon icon={add} />\n    </IonFabButton>\n  </IonFab>\n\n</IonContent>\n')),(0,a.kt)("p",null,"On our main ",(0,a.kt)("inlineCode",{parentName:"p"},"IonFab"),", we're setting its positioning with the vertical and horizontal attributes. We're also setting the render location to \"fixed\" with the slot attribute. This will tell ",(0,a.kt)("inlineCode",{parentName:"p"},"IonFab")," to render outside of the scrollable content in ",(0,a.kt)("inlineCode",{parentName:"p"},"IonContent"),"."),(0,a.kt)("p",null,"Now let's wire up a click handler to this. What we want to do is when we click the button, we'll navigate to a new page (which we'll create in a moment). To do this, we'll need to get access to React Router's ",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," hook API. Thankfully the ",(0,a.kt)("inlineCode",{parentName:"p"},"useHistory")," hook makes this easy since it can be imported from the react-router package. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { add } from 'ionicons/icons';\nimport { useHistory } from 'react-router';\n...\nconst Home: React.FC<RouteComponentProps> = () => {\n  const history = useHistory();\n  return (\n    <IonPage>\n      <IonHeader>...</IonHeader>\n      <IonContent>\n        <IonList>...</IonList>\n        <IonFab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <IonFabButton onClick={() => history.push('/new')}>\n            <IonIcon icon={add} />\n          </IonFabButton>\n        </IonFab>\n      </IonContent>\n    </IonPage>\n  );\n}\nexport default Home;\n")),(0,a.kt)("p",null,"In our component declaration, we're passing in ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," which is of type ",(0,a.kt)("inlineCode",{parentName:"p"},"RouteComponentProps")," (imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"react-router"),"). This ",(0,a.kt)("inlineCode",{parentName:"p"},"props")," object gives us access to the history API from React Router, allowing us to push a new route onto the navigation stack. On our ",(0,a.kt)("inlineCode",{parentName:"p"},"IonFabButton"),", we can add a click handler, and just call ",(0,a.kt)("inlineCode",{parentName:"p"},"props.history.push")," and pass in the new route. In this case, we'll navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"new"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<IonFabButton onClick={() => props.history.push('/new')} >\n")),(0,a.kt)("h2",{id:"creating-a-new-route"},"Creating a new Route"),(0,a.kt)("p",null,"Now that we have the pieces in place to navigate in our app, we need to create a new component and add the new route to our router declaration. Let's open our ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file and add the new route."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'...\nimport Home from \'./pages/Home\';\n\nimport NewItem from \'./pages/NewItem\';\n...\nconst App: React.FC = () => {\n  const isAuthed = true;\n  return (\n    <IonApp>\n      <IonReactRouter>\n        <IonRouterOutlet>\n          <Route path="/home" component={Home} />\n          <Route path="/new" component={NewItem} />\n          <Redirect exact from="/" to="/home" />\n        </IonRouterOutlet>\n      </IonReactRouter>\n    </IonApp>\n  );\n}\nexport default App;\n')),(0,a.kt)("p",null,"With our router now having an entry for the route ",(0,a.kt)("inlineCode",{parentName:"p"},"/new"),", we'll create the component needed, ",(0,a.kt)("inlineCode",{parentName:"p"},"NewItem"),". This will exist in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/NewItem.tsx")),(0,a.kt)("p",null,"Let's fill the ",(0,a.kt)("inlineCode",{parentName:"p"},"NewItem.tsx")," with some placeholder content for the moment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';\nimport React from 'react';\n\nconst NewItem: React.FC = () => {\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonButtons slot=\"start\">\n            <IonBackButton />\n          </IonButtons>\n          <IonTitle>New Item</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent></IonContent>\n    </IonPage>\n  );\n};\nexport default NewItem;\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Each view must contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"IonPage")," component. Page transitions will not work correctly without it. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/react/navigation#ionpage"},"IonPage Documentation")," for more information."))),(0,a.kt)("p",null,"The content here is pretty straight forward and should look similar to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Home")," component. What is new is the ",(0,a.kt)("inlineCode",{parentName:"p"},"IonBackButton")," component. This is used to navigate back to the previous route. Pretty straight forward? Ok, but what if we reload the page?"),(0,a.kt)("p",null,"Well, in this case, the in-memory history is lost, so the back button disappears. To address this, we can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultHref")," attribute value to the URL we want to navigate to if there is no history."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'return (\n  <IonPage>\n    <IonHeader>\n      <IonToolbar>\n        <IonButtons slot="start">\n          <IonBackButton defaultHref="/home" />\n        </IonButtons>\n        <IonTitle>New Item</IonTitle>\n      </IonToolbar>\n    </IonHeader>\n    <IonContent />\n  </IonPage>\n);\n')),(0,a.kt)("p",null,"Here, when we reload, if there is no app history present, we'll be able to navigate back to our home route."),(0,a.kt)("h2",{id:"adding-icons"},"Adding Icons"),(0,a.kt)("p",null,"Ionic React comes with (",(0,a.kt)("a",{parentName:"p",href:"https://ionic.io/ionicons/"},"https://ionic.io/ionicons/"),") pre-installed. All you need to do is import the icon of your choice from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ionicons")," package, and pass it to an ",(0,a.kt)("inlineCode",{parentName:"p"},"IonIcon")," component through the ",(0,a.kt)("inlineCode",{parentName:"p"},"icon")," prop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonButton, IonContent, IonIcon } from '@ionic/react';\nimport { camera } from 'ionicons/icons';\n\nexport const IconExample: React.FC = () => {\n  <IonContent>\n    <IonButton>\n      <IonIcon icon={camera} />\n      Take Picture\n    </IonButton>\n  </IonContent>;\n};\n")),(0,a.kt)("p",null,"Note that for React, we are passing the imported SVG reference, ",(0,a.kt)("strong",{parentName:"p"},"not")," the icon name as a string."),(0,a.kt)("p",null,"Developers also have the option of setting different icons based upon the mode:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { IonButton, IonContent, IonIcon } from '@ionic/react';\nimport { logoAndroid, logoApple } from 'ionicons/icons';\n\nexport const IconExample: React.FC = () => {\n  <IonContent>\n    <IonButton>\n      <IonIcon ios={logoApple} md={logoAndroid} />\n    </IonButton>\n  </IonContent>;\n};\n")),(0,a.kt)("h2",{id:"build-a-native-app"},"Build a Native App"),(0,a.kt)("p",null,"We now have the basics of an Ionic React app down, including some UI components and navigation. The great thing about Ionic\u2019s components is that they work anywhere, including iOS, Android, and PWAs. To deploy to mobile, desktop, and beyond, we use Ionic\u2019s cross-platform app runtime ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com"},"Capacitor"),". It provides a consistent, web-focused set of APIs that enable an app to stay as close to web-standards as possible while accessing rich native device features on platforms that support them."),(0,a.kt)("p",null,"Adding native functionality is easy. First, add Capacitor to your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic integrations enable capacitor\n")),(0,a.kt)("p",null,"Next, build the project, then add your platform of choice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic build\nionic cap add ios\nionic cap add android\n")),(0,a.kt)("p",null,"We use the standard native IDEs (Xcode and Android Studio) to open, build, and run the iOS and Android projects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ionic cap open ios\nionic cap open android\n")),(0,a.kt)("p",null,"Additional details can be found ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/getting-started/with-ionic"},"here"),"."),(0,a.kt)("p",null,"Next, check out ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis"},"all the APIs")," that are available. There\u2019s some great stuff, including the ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/apis/camera"},"Camera API"),". We can implement photo capture functionality in just a few lines of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';\nimport React, { useState } from 'react';\nimport { Plugins, CameraResultType } from '@capacitor/core';\n\nconst Home: React.FC = () => {\n  const { Camera } = Plugins;\n  const [photo, setPhoto] = useState();\n  const takePhoto = async () => {\n    const image = await Camera.getPhoto({\n      quality: 90,\n      allowEditing: true,\n      resultType: CameraResultType.Uri,\n    });\n    setPhoto(image.webPath);\n  };\n  return (\n    <IonPage>\n      <IonHeader>\n        <IonToolbar>\n          <IonTitle>Ionic Blank</IonTitle>\n        </IonToolbar>\n      </IonHeader>\n      <IonContent className=\"ion-padding\">\n        <img src={photo} />\n        <IonButton onClick={takePhoto}>Take Photo</IonButton>\n      </IonContent>\n    </IonPage>\n  );\n};\n\nexport default Home;\n")),(0,a.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,a.kt)("p",null,"This guide covered the basics of creating an Ionic React app, adding some basic navigation, and introducing Capacitor as a way of building native apps. To dive deeper into building complete Ionic apps with React and Capacitor, follow our ",(0,a.kt)("a",{parentName:"p",href:"/docs/react/your-first-app"},"First App guide"),"."),(0,a.kt)("p",null,"For a more detailed look at Ionic\u2019s components, check out the ",(0,a.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/components"},"component API pages"),". For more details on React, review the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React Docs"),". To keep building native features, see the ",(0,a.kt)("a",{parentName:"p",href:"https://capacitorjs.com/docs/"},"Capacitor docs"),"."),(0,a.kt)("p",null,"Happy app building! \ud83c\udf89"))}m.isMDXComponent=!0},98197:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/home-route-d0053c5ce8dfc6b2de6d6bd6fd8f4f7d.png"}}]);