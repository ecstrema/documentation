"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5196],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),g=n,b=m["".concat(s,".").concat(g)]||m[g]||c[g]||a;return r?o.createElement(b,i(i({ref:t},u),{},{components:r})):o.createElement(b,i({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},78353:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={slug:"turborepo-overhyped",title:"Is Turborepo overhyped?",description:"What is Turborepo and why do we need it? Turoberpo is quite minimalistic and simple to use solution how to speed up pipeline in monorepo.",authors:["sgranat"],image:"/img/blog/turborepo.png",tags:["react","javascript","typescript","integration"]},i=void 0,p={permalink:"/blog/turborepo-overhyped",editUrl:"https://github.com/tolgee/documentation/tree/main/blog/2022-02-08-turborepo-overhyped.md",source:"@site/blog/2022-02-08-turborepo-overhyped.md",title:"Is Turborepo overhyped?",description:"What is Turborepo and why do we need it? Turoberpo is quite minimalistic and simple to use solution how to speed up pipeline in monorepo.",date:"2022-02-08T00:00:00.000Z",formattedDate:"February 8, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"integration",permalink:"/blog/tags/integration"}],readingTime:5.12,hasTruncateMarker:!0,authors:[{name:"\u0160t\u011bp\xe1n Gran\xe1t",title:"Frontend Architect",url:"https://github.com/stepan662",imageURL:"https://avatars.githubusercontent.com/u/8831144?v=4",key:"sgranat"}],frontMatter:{slug:"turborepo-overhyped",title:"Is Turborepo overhyped?",description:"What is Turborepo and why do we need it? Turoberpo is quite minimalistic and simple to use solution how to speed up pipeline in monorepo.",authors:["sgranat"],image:"/img/blog/turborepo.png",tags:["react","javascript","typescript","integration"]},prevItem:{title:"Optimizing Spring Boot tests",permalink:"/blog/optimizing-spring-boot-tests"},nextItem:{title:"Moving project from YouTrack to GitHub",permalink:"/blog/moving-project-from-youtrack-to-github"}},s={authorsImageUrls:[void 0]},l=[],u={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Turborepo",src:r(35879).Z,width:"1000",height:"420"})),(0,n.kt)("p",null,"Two months ago, I was looking for a solution how to speed up pipeline in our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tolgee/tolgee-js"},"monorepo"),". As an immediate answer I found basically two alternatives ",(0,n.kt)("a",{parentName:"p",href:"https://nx.dev/"},"Nx")," (from Google) and ",(0,n.kt)("a",{parentName:"p",href:"https://turborepo.org/"},"Turborepo")," as a new cool project from well known opensource author (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jaredpalmer"},"Jared Palmer"),"). I was immediately drawn towards Turborepo as it was really hyped everywhere. Also, it is quite minimalistic, simple to use and it looked like exact fit for our use-case. So I got into it."))}c.isMDXComponent=!0},35879:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/turborepo-418e636fdcf4ba1882e878ee6b878a2a.png"}}]);