"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,y=u["".concat(l,".").concat(d)]||u[d]||h[d]||o;return n?a.createElement(y,i(i({ref:t},p),{},{components:n})):a.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={slug:"new-api-keys-and-pats",title:"New Project API key format and Personal Access Tokens \ud83d\udd11",authors:["jcizmar"],image:"/img/blog/new-api-keys-and-pats.jpg",description:"Changing format of API keys in Tolgee. Adding Personal Access Tokens (PATs) which can access all the resources the user has access to.",tags:["authentication","authorization","api-keys","security"]},i=void 0,s={permalink:"/blog/new-api-keys-and-pats",editUrl:"https://github.com/tolgee/documentation/tree/main/blog/2022-08-27-new-api-keys-and-pats.md",source:"@site/blog/2022-08-27-new-api-keys-and-pats.md",title:"New Project API key format and Personal Access Tokens \ud83d\udd11",description:"Changing format of API keys in Tolgee. Adding Personal Access Tokens (PATs) which can access all the resources the user has access to.",date:"2022-08-27T00:00:00.000Z",formattedDate:"August 27, 2022",tags:[{label:"authentication",permalink:"/blog/tags/authentication"},{label:"authorization",permalink:"/blog/tags/authorization"},{label:"api-keys",permalink:"/blog/tags/api-keys"},{label:"security",permalink:"/blog/tags/security"}],readingTime:3.04,hasTruncateMarker:!0,authors:[{name:"Jan Cizmar \ud83d\ude0e",title:"Founder & Full-stack Architect",url:"https://github.com/JanCizmar",imageURL:"https://avatars.githubusercontent.com/u/18496315?v=4",key:"jcizmar"}],frontMatter:{slug:"new-api-keys-and-pats",title:"New Project API key format and Personal Access Tokens \ud83d\udd11",authors:["jcizmar"],image:"/img/blog/new-api-keys-and-pats.jpg",description:"Changing format of API keys in Tolgee. Adding Personal Access Tokens (PATs) which can access all the resources the user has access to.",tags:["authentication","authorization","api-keys","security"]},prevItem:{title:"Let this script type instead of you when you record a video of your browser \u2328",permalink:"/blog/let-this-script-type-instead-of-you-when-you-record-your-browser"},nextItem:{title:"Launching Tolgee pricing \ud83d\ude80",permalink:"/blog/launching-tolgee-pricing"}},l={authorsImageUrls:[void 0]},c=[{value:"What has changed?",id:"what-has-changed",level:2},{value:"Project API keys can authorize operations only in one project",id:"project-api-keys-can-authorize-operations-only-in-one-project",level:2},{value:"API key accessible endpoints have different URLs",id:"api-key-accessible-endpoints-have-different-urls",level:2},{value:"All API keys were revealed in the UI",id:"all-api-keys-were-revealed-in-the-ui",level:2},{value:"TL;DR;",id:"tldr",level:2}],p={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The old way how we were working with the API keys had several problems in security and usability manners. So we had to\ndo some huge changes. However, you can stay calm. The legacy API keys are still supported, and you can use them until\nyou delete them."),(0,r.kt)("h2",{id:"what-has-changed"},"What has changed?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The API keys have a different format now. They are prefixed with ",(0,r.kt)("inlineCode",{parentName:"li"},"tgpak_")," prefix."),(0,r.kt)("li",{parentName:"ul"},"You can still use the legacy API keys without ",(0,r.kt)("inlineCode",{parentName:"li"},"tgpak_")," prefix anyway."),(0,r.kt)("li",{parentName:"ul"},"The API keys are not revealed in the platform, and you can only see them once when you generate them."),(0,r.kt)("li",{parentName:"ul"},"We added Personal Access Tokens (PATs). With PATs you can access all the platform you are permitted to as a user.\nYou can generate PATs in the user settings."),(0,r.kt)("li",{parentName:"ul"},"Both API keys and PATs have expiration dates now, and you can store a description to note, why you've created such\na secret.")),(0,r.kt)("p",null,"To learn more about,\nvisit ",(0,r.kt)("a",{parentName:"p",href:"/docs/platform/api-keys-and-pat-tokens"},"Project API keys and Pats documentation section"),"."),(0,r.kt)("h1",{id:"why-we-did-do-it"},"Why we did do it?"),(0,r.kt)("h2",{id:"project-api-keys-can-authorize-operations-only-in-one-project"},"Project API keys can authorize operations only in one project"),(0,r.kt)("p",null,"The first issue with API keys was that a single API key can work only with resources in one project. Recently we started\nto work on CLI, which will enable users to import, export, and analyze localization data in their projects and code. The\nproblem was, that we had no way how to authenticate in the REST API to manage multiple projects with a single token. So we\nwould have to store the user's credentials somewhere in their computer to authenticate the user for every request. This\nwasn't optimal, so we decided to add Personal Access Tokens, which can access all the resources the user has access to."),(0,r.kt)("h2",{id:"api-key-accessible-endpoints-have-different-urls"},"API key accessible endpoints have different URLs"),(0,r.kt)("p",null,"The endpoints we are using for accessing with API keys are currently different from the endpoints we are using internally\nfor the platform frontend. So in the backend, we have to define 2 different routes for a single endpoint. One with\nproject ID e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"/v2/projects/{projectId}")," and one without ",(0,r.kt)("inlineCode",{parentName:"p"},"/v2/projects"),". This can be also kind of confusing for the\nusers and would be painful when we enable PAT authorization also in our integration libraries. We would have to use\ndifferent endpoints for different tokens."),(0,r.kt)("p",null,"From now, we are prepared to use the same endpoint for all authentication methods. In the new Project API keys the project\nID is encoded in the key, so it can be obtained without requesting the API."),(0,r.kt)("p",null,"The new API key is a string in the format described as ",(0,r.kt)("inlineCode",{parentName:"p"},"<Project ID>_<Legacy API Key>")," encoded with base32 encoding and\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"tgpak_")," prefix."),(0,r.kt)("h2",{id:"all-api-keys-were-revealed-in-the-ui"},"All API keys were revealed in the UI"),(0,r.kt)("p",null,"Yep. This was pretty ugly. You were able to see all your API keys revealed by accessing the API keys section in the\nTolgee platform. Now the keys are visible only when you generate them and never more. Now we don't even store the\nkey values in the DB, but only the hashes of the keys. So we are unable to reveal the keys anymore. This is a great step\nfor security. \ud83c\udf89\ud83c\udf89\ud83c\udf89"),(0,r.kt)("h2",{id:"tldr"},"TL;DR;"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We updated API keys and added the Personal Access Token feature in v 2.38.0"),(0,r.kt)("li",{parentName:"ul"},"The API keys have new format ",(0,r.kt)("inlineCode",{parentName:"li"},"tgpak_ha3tkxzton2wm4twmrsgkmtgmnsgw4bqgvttemttnrwwoyld")),(0,r.kt)("li",{parentName:"ul"},"The API keys are not revealed anymore in the API keys section"),(0,r.kt)("li",{parentName:"ul"},"The Personal Access Tokens allow you to access REST API endpoints across multiple projects and more"),(0,r.kt)("li",{parentName:"ul"},"The Personal Access Tokens have this format ",(0,r.kt)("inlineCode",{parentName:"li"},"tgpat_rh7887fjl1d3q834k5srpql4nj53dmv45d29estbce9arndgmda")),(0,r.kt)("li",{parentName:"ul"},"Both API keys and Personal Access Token can have an expiration date, which you can configure")))}h.isMDXComponent=!0}}]);