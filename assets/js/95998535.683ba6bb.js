"use strict";(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[93078],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(g,o(o({ref:n},c),{},{components:t})):a.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74272:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={title:"craco-config.js config file analysis"},o="craco-config.js config file analysis",s={unversionedId:"updating/7-0",id:"updating/7-0",isDocsHomePage:!1,title:"craco-config.js config file analysis",description:"\x3c!--",source:"@site/docs/updating/7-0.md",sourceDirName:"updating",slug:"/updating/7-0",permalink:"/docs/updating/7-0",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/updating/7-0.md",tags:[],version:"current",frontMatter:{title:"craco-config.js config file analysis"},sidebar:"docs",previous:{title:"Hugo Install",permalink:"/docs/intro/environment"}},l=[{value:"Source Code",id:"source-code",children:[],level:2},{value:"Analysis",id:"analysis",children:[],level:2},{value:"What is craco-wasm",id:"what-is-craco-wasm",children:[],level:2},{value:"Options to customize config file",id:"options-to-customize-config-file",children:[{value:"1. <strong>Add more Babel plugins</strong>:",id:"1-add-more-babel-plugins",children:[],level:3},{value:"2. <strong>Configure CSS or CSS-in-JS libraries</strong>:",id:"2-configure-css-or-css-in-js-libraries",children:[],level:3},{value:"3. <strong>Configure Webpack loaders</strong>:",id:"3-configure-webpack-loaders",children:[],level:3},{value:"4. <strong>Optimize build</strong>:",id:"4-optimize-build",children:[],level:3},{value:"5. <strong>Alias</strong>:",id:"5-alias",children:[],level:3},{value:"6. <strong>Proxy</strong>:",id:"6-proxy",children:[],level:3},{value:"7. <strong>Environment variables</strong>:",id:"7-environment-variables",children:[],level:3},{value:"8. <strong>TypeScript</strong>:",id:"8-typescript",children:[],level:3},{value:"9. <strong>Performance budget</strong>:",id:"9-performance-budget",children:[],level:3},{value:"10. <strong>Code splitting and lazy loading</strong>:",id:"10-code-splitting-and-lazy-loading",children:[],level:3},{value:"11. <strong>PWA (Progressive Web App) support</strong>:",id:"11-pwa-progressive-web-app-support",children:[],level:3},{value:"12. <strong>Customize build output</strong>:",id:"12-customize-build-output",children:[],level:3},{value:"13. <strong>Integration with testing frameworks</strong>:",id:"13-integration-with-testing-frameworks",children:[],level:3},{value:"14. <strong>Accessibility</strong>:",id:"14-accessibility",children:[],level:3},{value:"15. <strong>Hot Module Replacement (HMR)</strong>:",id:"15-hot-module-replacement-hmr",children:[],level:3},{value:"16. <strong>Bundle Analyzer</strong>:",id:"16-bundle-analyzer",children:[],level:3},{value:"17. Source Maps:",id:"17-source-maps",children:[],level:3},{value:"18. Image optimization:",id:"18-image-optimization",children:[],level:3},{value:"19. Code linting:",id:"19-code-linting",children:[],level:3},{value:"20. Pre-rendering or Server-Side Rendering (SSR):",id:"20-pre-rendering-or-server-side-rendering-ssr",children:[],level:3}],level:2},{value:"Source",id:"source",children:[],level:2}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(c,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"craco-configjs-config-file-analysis"},"craco-config.js config file analysis"),(0,i.kt)("h2",{id:"source-code"},"Source Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const cracoWasm = require("craco-wasm");\nconst webpack = require("webpack");\n\nmodule.exports = {\n  plugins: [\n    cracoWasm(),\n  ],\n  eslint: {\n    enable: false\n  },\n  babel: {\n    plugins: [\n      [\n        \'formatjs\',\n        {\n          removeDefaultMessage: false,\n          idInterpolationPattern: \'[sha512:contenthash:base64:6]\',\n          ast: true\n        }\n      ]\n    ]\n  },\n  webpack: {\n    configure: {\n      resolve: {\n        fallback: {\n          buffer: require.resolve("buffer"),\n        },\n      },\n      plugins: [\n        new webpack.ProvidePlugin({\n          Buffer: ["buffer", "Buffer"],\n        }),\n      ],\n    },\n  },\n}\n')),(0,i.kt)("h2",{id:"analysis"},"Analysis"),(0,i.kt)("p",null,"This code snippet is a configuration file for a JavaScript project that uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," toolchain with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@craco/craco")," package. ",(0,i.kt)("inlineCode",{parentName:"p"},"@craco/craco")," (Create React App Configuration Override) is a package that allows you to customize the Create React App configuration without ejecting the project. The code snippet customizes the project's configuration in several ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"WebAssembly (WASM) support"),": It imports ",(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," and adds it as a plugin. ",(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," is a package that enables WebAssembly (WASM) support for Create React App projects. WebAssembly is a binary instruction format that allows running code written in languages other than JavaScript at near-native speed within web browsers.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ESLint"),": It disables ESLint by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"enable: false"),". ESLint is a popular JavaScript linting tool used to catch syntax errors and enforce coding style rules.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Babel plugins"),": It adds a Babel plugin called 'formatjs'. Babel is a JavaScript compiler used to transform modern JavaScript code into a version that is compatible with older browsers. The 'formatjs' plugin is part of the FormatJS library, which provides internationalization (i18n) support for JavaScript applications. The plugin is configured with options like ",(0,i.kt)("inlineCode",{parentName:"p"},"removeDefaultMessage"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"idInterpolationPattern"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ast"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Webpack configuration"),": It imports ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack")," and customizes the Webpack configuration. Webpack is a popular JavaScript module bundler and build tool."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Resolve fallback"),": It sets a fallback for the ",(0,i.kt)("inlineCode",{parentName:"p"},"buffer")," package to use the 'buffer' package from npm. This is required for certain libraries that depend on Node.js' built-in 'buffer' module when running in a browser environment.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ProvidePlugin"),": It adds the Webpack ",(0,i.kt)("inlineCode",{parentName:"p"},"ProvidePlugin")," to make the 'buffer' package available as ",(0,i.kt)("inlineCode",{parentName:"p"},"Buffer")," throughout the application. This means you don't need to import the 'buffer' package explicitly in each file that uses it."))))),(0,i.kt)("p",null,"In summary, this configuration file enables WebAssembly support, disables ESLint, adds a Babel plugin for internationalization, and provides a fallback for the 'buffer' package in the Webpack configuration."),(0,i.kt)("h2",{id:"what-is-craco-wasm"},"What is craco-wasm"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," is a plugin for the ",(0,i.kt)("inlineCode",{parentName:"p"},"@craco/craco")," package, which is used to customize the Create React App configuration without ejecting the project. The main purpose of ",(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," in a React app is to enable WebAssembly (WASM) support."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"WebAssembly")," is a binary instruction format that allows running code written in languages other than JavaScript, such as C, C++, or Rust, at near-native speed within web browsers. By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," plugin in a React app, you can take advantage of WebAssembly's performance benefits and integrate WASM modules into your application seamlessly."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"craco-wasm")," helps configure the Webpack build process to handle WebAssembly files and makes it possible to import and use WebAssembly modules directly in your React components or other JavaScript code. This allows you to build more performant and resource-efficient applications, especially in cases where computationally intensive tasks are involved."),(0,i.kt)("h2",{id:"options-to-customize-config-file"},"Options to customize config file"),(0,i.kt)("p",null,"There are many options you can use to customize the configuration file based on your project's requirements. Here are some examples:"),(0,i.kt)("h3",{id:"1-add-more-babel-plugins"},"1. ",(0,i.kt)("strong",{parentName:"h3"},"Add more Babel plugins"),":"),(0,i.kt)("p",null,"You can add additional Babel plugins or presets to transform your JavaScript code or add new features, like decorators or class properties. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"   babel: {\n     plugins: [\n       // Your existing plugins\n       '@babel/plugin-proposal-class-properties',\n     ],\n     presets: [\n       // Your existing presets\n       '@babel/preset-react',\n     ],\n   },\n")),(0,i.kt)("h3",{id:"2-configure-css-or-css-in-js-libraries"},"2. ",(0,i.kt)("strong",{parentName:"h3"},"Configure CSS or CSS-in-JS libraries"),":"),(0,i.kt)("p",null,"You can add configuration options for CSS processing, like using Sass or Less, or integrating CSS-in-JS libraries like styled-components or emotion."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sass example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const CracoSass = require('craco-sass');\n\n  // Add to the plugins array\n  plugins: [\n    // Your existing plugins\n    CracoSass(),\n  ],\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Styled-components example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const CracoStyledComponents = require('craco-styled-components');\n\n  // Add to the plugins array\n  plugins: [\n    // Your existing plugins\n    CracoStyledComponents(),\n  ],\n")),(0,i.kt)("h3",{id:"3-configure-webpack-loaders"},"3. ",(0,i.kt)("strong",{parentName:"h3"},"Configure Webpack loaders"),":"),(0,i.kt)("p",null,"You can customize or add Webpack loaders to handle different file types, like images, fonts, or other assets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  webpack: {\n    configure: {\n      module: {\n        rules: [\n          // Your existing rules\n          {\n            test: /\\.(woff(2)?|ttf|eot)(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n            use: [\n              {\n                loader: 'file-loader',\n                options: {\n                  name: '[name].[ext]',\n                  outputPath: 'fonts/',\n                },\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n")),(0,i.kt)("h3",{id:"4-optimize-build"},"4. ",(0,i.kt)("strong",{parentName:"h3"},"Optimize build"),":"),(0,i.kt)("p",null,"You can modify the Webpack configuration to optimize the build process, like enabling code splitting, minimizing CSS, or configuring environment variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  webpack: {\n    configure: {\n      optimization: {\n        splitChunks: {\n          // Your desired splitChunks configuration\n        },\n      },\n      plugins: [\n        // Your existing plugins\n        new webpack.EnvironmentPlugin({\n          'NODE_ENV': 'production',\n          'MY_CUSTOM_ENV_VAR': 'example-value',\n        }),\n      ],\n    },\n  },\n")),(0,i.kt)("h3",{id:"5-alias"},"5. ",(0,i.kt)("strong",{parentName:"h3"},"Alias"),":"),(0,i.kt)("p",null,"You can create aliases for your import paths to make your code more readable and easier to manage. For example, you can set up aliases for common directories like ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"components"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"   webpack: {\n     configure: {\n       resolve: {\n         alias: {\n           // Your existing aliases\n           '@src': path.resolve(__dirname, 'src/'),\n           '@components': path.resolve(__dirname, 'src/components/'),\n         },\n       },\n     },\n   },\n")),(0,i.kt)("h3",{id:"6-proxy"},"6. ",(0,i.kt)("strong",{parentName:"h3"},"Proxy"),":"),(0,i.kt)("p",null,"You can set up a proxy to handle API requests during development, which helps avoid CORS issues and simulates a production environment more closely. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"devServer: {\n  proxy: {\n    '/api': {\n      target: 'https://api.example.com',\n      changeOrigin: true,\n    },\n  },\n},\n")),(0,i.kt)("h3",{id:"7-environment-variables"},"7. ",(0,i.kt)("strong",{parentName:"h3"},"Environment variables"),":"),(0,i.kt)("p",null,"You can configure environment variables for different build environments, like development, staging, and production. Create React App already supports environment variables with the REACT",(0,i.kt)("em",{parentName:"p"},"APP")," prefix, but you can use the configuration file to add more customizations if needed."),(0,i.kt)("h3",{id:"8-typescript"},"8. ",(0,i.kt)("strong",{parentName:"h3"},"TypeScript"),":"),(0,i.kt)("p",null,"If your project uses TypeScript, you can configure the TypeScript compiler options and integrate with other tools like ESLint or Babel."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  typescript: {\n    enableTypeChecking: true, // Enable TypeScript type checking\n    // Other TypeScript options\n  },\n")),(0,i.kt)("h3",{id:"9-performance-budget"},"9. ",(0,i.kt)("strong",{parentName:"h3"},"Performance budget"),":"),(0,i.kt)("p",null,"You can set performance budgets to warn or fail the build if assets exceed certain size limits. This helps to ensure that your application remains lightweight and performs well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  webpack: {\n    configure: {\n      performance: {\n        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,\n        maxAssetSize: 100000, // Size in bytes\n        maxEntrypointSize: 300000, // Size in bytes\n      },\n    },\n  },\n")),(0,i.kt)("h3",{id:"10-code-splitting-and-lazy-loading"},"10. ",(0,i.kt)("strong",{parentName:"h3"},"Code splitting and lazy loading"),":"),(0,i.kt)("p",null,"You can use dynamic imports and React's ",(0,i.kt)("inlineCode",{parentName:"p"},"React.lazy()")," function to split your code into smaller chunks and load them on-demand, improving the initial loading performance of your application."),(0,i.kt)("h3",{id:"11-pwa-progressive-web-app-support"},"11. ",(0,i.kt)("strong",{parentName:"h3"},"PWA (Progressive Web App) support"),":"),(0,i.kt)("p",null,"You can customize the PWA configuration, such as the service worker, caching strategies, or manifest settings, to build a better offline experience for your users."),(0,i.kt)("h3",{id:"12-customize-build-output"},"12. ",(0,i.kt)("strong",{parentName:"h3"},"Customize build output"),":"),(0,i.kt)("p",null,"You can change the output directory, filenames, or public URL of the built assets by customizing the Webpack output configuration."),(0,i.kt)("h3",{id:"13-integration-with-testing-frameworks"},"13. ",(0,i.kt)("strong",{parentName:"h3"},"Integration with testing frameworks"),":"),(0,i.kt)("p",null,"You can configure the testing framework you're using with your Create React App project, such as Jest, to include custom setup, teardown, or mocking functionality."),(0,i.kt)("h3",{id:"14-accessibility"},"14. ",(0,i.kt)("strong",{parentName:"h3"},"Accessibility"),":"),(0,i.kt)("p",null,"You can integrate accessibility tools, like ",(0,i.kt)("inlineCode",{parentName:"p"},"react-axe")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint-plugin-jsx-a11y"),", to enforce best practices and improve the accessibility of your application."),(0,i.kt)("h3",{id:"15-hot-module-replacement-hmr"},"15. ",(0,i.kt)("strong",{parentName:"h3"},"Hot Module Replacement (HMR)"),":"),(0,i.kt)("p",null,"You can enable or configure Hot Module Replacement, which allows you to see the changes you make to your code without refreshing the browser. This can greatly improve your development experience."),(0,i.kt)("h3",{id:"16-bundle-analyzer"},"16. ",(0,i.kt)("strong",{parentName:"h3"},"Bundle Analyzer"),":"),(0,i.kt)("p",null,"You can use tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack-bundle-analyzer")," to visualize the size of your application's bundles and identify areas for optimization."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"   const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');\n   \n   webpack: {\n     configure: {\n       plugins: [\n         // Your existing plugins\n         process.env.ANALYZE && new BundleAnalyzerPlugin(),\n       ].filter(Boolean),\n     },\n   },\n")),(0,i.kt)("h3",{id:"17-source-maps"},"17. Source Maps:"),(0,i.kt)("p",null,"You can customize the source map settings for development and production builds, which can help with debugging your application."),(0,i.kt)("h3",{id:"18-image-optimization"},"18. Image optimization:"),(0,i.kt)("p",null,"You can configure tools like sharp or imagemin-webpack-plugin to optimize images in your application during the build process, reducing the size of the final bundle."),(0,i.kt)("h3",{id:"19-code-linting"},"19. Code linting:"),(0,i.kt)("p",null,"Besides ESLint, you can also configure other linting tools like stylelint for CSS or prettier for code formatting."),(0,i.kt)("h3",{id:"20-pre-rendering-or-server-side-rendering-ssr"},"20. Pre-rendering or Server-Side Rendering (SSR):"),(0,i.kt)("p",null,"You can set up pre-rendering or server-side rendering for your application, which can improve the initial loading performance and SEO."),(0,i.kt)("h2",{id:"source"},"Source"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://chat.openai.com/chat?model=gpt-4"},"https://chat.openai.com/chat?model=gpt-4")))}u.isMDXComponent=!0}}]);