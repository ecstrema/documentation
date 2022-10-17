"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[400],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>g});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),d=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=o,f=s["".concat(p,".").concat(g)]||s[g]||u[g]||i;return n?t.createElement(f,a(a({ref:r},c),{},{components:n})):t.createElement(f,a({ref:r},c))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58178:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=n(87462),o=(n(67294),n(3905));const i={id:"preparing_for_production",title:"Preparing for production (React)",sidebar_label:"Preparing for production",slug:"/web/using_with_react/preparing_for_production"},a=void 0,l={unversionedId:"web/using_with_react/preparing_for_production",id:"web/using_with_react/preparing_for_production",title:"Preparing for production (React)",description:"In production mode you should never use localization data from Tolgee REST API and you should never leak your API key.",source:"@site/docs/web/using_with_react/preparing_for_production.mdx",sourceDirName:"web/using_with_react",slug:"/web/using_with_react/preparing_for_production",permalink:"/docs/web/using_with_react/preparing_for_production",draft:!1,editUrl:"https://github.com/tolgee/documentation/tree/main/docs/web/using_with_react/preparing_for_production.mdx",tags:[],version:"current",frontMatter:{id:"preparing_for_production",title:"Preparing for production (React)",sidebar_label:"Preparing for production",slug:"/web/using_with_react/preparing_for_production"},sidebar:"someSidebar",previous:{title:"Switching languages",permalink:"/docs/web/using_with_react/switching_languages"},next:{title:"SSR support",permalink:"/docs/web/using_with_react/ssr/ssr"}},p={},d=[{value:"Providing data using dynamic import (recommended)",id:"providing-data-using-dynamic-import-recommended",level:2},{value:"Using imported object",id:"using-imported-object",level:2},{value:"Providing data using filesUrlPrefix option",id:"providing-data-using-filesurlprefix-option",level:2}],c={toc:d};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In production mode you should never use localization data from Tolgee REST API and you should never leak your API key.\nYou should use data exported from Tolgee platform.\nTo get exported localization files, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/platform/exporting_translations"},"exporting translations"),"."),(0,o.kt)("p",null,"There are multiple options to provide static localization data for production builds. Providing a URL prefix where Tolgee can\nfetch the data from or providing imported data as reference or provider in TolgeeProvider config prop."),(0,o.kt)("h2",{id:"providing-data-using-dynamic-import-recommended"},"Providing data using dynamic import (recommended)"),(0,o.kt)("p",null,"To provide your localization data using dynamic import you will need to add providers for every supported language to\nTolgeeProvider's configuration property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"<TolgeeProvider\n  staticData={{\n    en: () => import('./i18n/en.json'),\n    de: () => import('./i18n/de.json'),\n  }}\n  ...\n>\n  ...\n</TolgeePrivider>\n")),(0,o.kt)("p",null,"Using this approach data will be fetched just when it's needed, so you will save some network traffic."),(0,o.kt)("h2",{id:"using-imported-object"},"Using imported object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import * as localeEn from 'i18n/en.json';\nimport * as localeDe from 'i18n/de.json';\n\n...\n\n<TolgeeProvider\n  staticData={{\n    en: localeEn,\n    de: localeDe,\n  }}\n  ...\n>\n  ...\n</TolgeePrivider>\n")),(0,o.kt)("p",null,"Using this approach, all localization data are bundled with your application, so it will be downloaded with your application code.\nThis approach could be very useful for SSR, when you need your localization data imported to be rendered by your SSR engine."),(0,o.kt)("h2",{id:"providing-data-using-filesurlprefix-option"},"Providing data using filesUrlPrefix option"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<TolgeeProvider\n  filesUrlPrefix="i18n/"\n  ...\n>\n  ...\n</TolgeePrivider>\n')),(0,o.kt)("p",null,"This option tells Tolgee, that localization data (en.json, de.json) can be found on ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<your url>/i18n"),",\nso it will be fetched with every page load."))}u.isMDXComponent=!0}}]);