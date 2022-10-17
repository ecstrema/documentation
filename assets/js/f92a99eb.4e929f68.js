"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[1139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),g=p(n),d=a,h=g["".concat(s,".").concat(d)]||g[d]||u[d]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},95672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={slug:"in-context-production",title:"In-context translating on production",description:"How works in-context feature on production page with Tolgee Chrome extension. How to edit any translation on website while changes are sent to Tolgee platform.",authors:["sgranat"],image:"/img/blog/in-context-production/in-context-cursor.png",tags:["i18n","chrome","integration"]},l=void 0,r={permalink:"/blog/in-context-production",editUrl:"https://github.com/tolgee/documentation/tree/main/blog/2022-02-21-in-context-production.md",source:"@site/blog/2022-02-21-in-context-production.md",title:"In-context translating on production",description:"How works in-context feature on production page with Tolgee Chrome extension. How to edit any translation on website while changes are sent to Tolgee platform.",date:"2022-02-21T00:00:00.000Z",formattedDate:"February 21, 2022",tags:[{label:"i18n",permalink:"/blog/tags/i-18-n"},{label:"chrome",permalink:"/blog/tags/chrome"},{label:"integration",permalink:"/blog/tags/integration"}],readingTime:2.225,hasTruncateMarker:!0,authors:[{name:"\u0160t\u011bp\xe1n Gran\xe1t",title:"Frontend Architect",url:"https://github.com/stepan662",imageURL:"https://avatars.githubusercontent.com/u/8831144?v=4",key:"sgranat"}],frontMatter:{slug:"in-context-production",title:"In-context translating on production",description:"How works in-context feature on production page with Tolgee Chrome extension. How to edit any translation on website while changes are sent to Tolgee platform.",authors:["sgranat"],image:"/img/blog/in-context-production/in-context-cursor.png",tags:["i18n","chrome","integration"]},prevItem:{title:"New Translation Tools Released",permalink:"/blog/new-translation-tools-released"},nextItem:{title:"Optimizing Spring Boot tests",permalink:"/blog/optimizing-spring-boot-tests"}},s={authorsImageUrls:[void 0]},p=[{value:"What do you need",id:"what-do-you-need",level:2},{value:"Get Tolgee Chrome extension",id:"get-tolgee-chrome-extension",level:2},{value:"Possible issues",id:"possible-issues",level:4},{value:"Obtain an API key",id:"obtain-an-api-key",level:2},{value:"Provide the API key to Tolgee",id:"provide-the-api-key-to-tolgee",level:2},{value:"Done!",id:"done",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Image",src:n(21625).Z,width:"910",height:"382"})),(0,a.kt)("p",null,"Tolgee ",(0,a.kt)("a",{parentName:"p",href:"https://tolgee.io/features/dev-tools"},"in-context")," feature is now available on any production page which is using our integration library!\nIn-context translating brings following advantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Translations editing directly on your page"),(0,a.kt)("li",{parentName:"ul"},"Creating and uploading screenshots with one click"),(0,a.kt)("li",{parentName:"ul"},"Assurance that new translations fit into your layout before release")),(0,a.kt)("p",null,"In this article, I will show you how it works and how to set it up."),(0,a.kt)("h2",{id:"what-do-you-need"},"What do you need"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Your web page which is using Tolgee (at least version 3.3.0)"),(0,a.kt)("li",{parentName:"ol"},"Chrome browser"),(0,a.kt)("li",{parentName:"ol"},"Access to ",(0,a.kt)("a",{parentName:"li",href:"https://app.tolgee.io/"},"Tolgee platform")," (or the API key)")),(0,a.kt)("h2",{id:"get-tolgee-chrome-extension"},"Get Tolgee Chrome extension"),(0,a.kt)("p",null,"Firstly, install ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/tolgee-tools/hacnbapajkkfohnonhbmegojnddagfnj"},"Tolgee Tools")," Chrome extension. After installation, it should be visible in the extensions list.\nIt's practical to pin it (with the pin symbol), so it's visible in the header bar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Extensions list",src:n(86243).Z,width:"374",height:"263"})),(0,a.kt)("p",null,"Now, if you navigate to any website which is using Tolgee, it should change its color, if you click on it you should see following dialog:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tolgee Tools dialog",src:n(49499).Z,width:"485",height:"314"})),(0,a.kt)("h4",{id:"possible-issues"},"Possible issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If Tolgee stays grey and you can't open the dialog, try refreshing the page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If it stays grey after the refresh, it means that the page is not using Tolgee SDK"))),(0,a.kt)("li",{parentName:"ul"},"If you use old version of Tolgee, upgrade Tolgee SDK to version 3.3.0 or newer"),(0,a.kt)("li",{parentName:"ul"},"If the dialog opens but the input fields are disabled, it means that in-context is already turned on by default (this should happen only when you run Tolgee locally)")),(0,a.kt)("h2",{id:"obtain-an-api-key"},"Obtain an API key"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have an API key already you can skip this part.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log in to Tolgee platform"),(0,a.kt)("li",{parentName:"ol"},"Click Account settings in the user menu (right-top corner)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Api keys",src:n(87804).Z,width:"188",height:"242"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Pick an API key from a list (make sure it's for correct project):")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Api key list",src:n(2499).Z,width:"1026",height:"374"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'If the key is not created yet, create a new one by "+" button. Make sure, that correct project is selected, leave all permissions enabled and click ',(0,a.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Api key new",src:n(45665).Z,width:"1280",height:"770"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Copy the API key")),(0,a.kt)("h2",{id:"provide-the-api-key-to-tolgee"},"Provide the API key to Tolgee"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate back to your website"),(0,a.kt)("li",{parentName:"ol"},"Open Tolgee Tools extension"),(0,a.kt)("li",{parentName:"ol"},"Fill the API key",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"API url")," is empty, fill it with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://app.tolgee.io")," (unless you use self-hosted Tolgee platform)"))),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Apply")),(0,a.kt)("li",{parentName:"ol"},"You should see green message ",(0,a.kt)("inlineCode",{parentName:"li"},"Valid")," if your url and key are correct")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Api key new",src:n(62026).Z,width:"493",height:"330"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Try opening Translation dialog by holding ",(0,a.kt)("inlineCode",{parentName:"li"},"Alt/Option")," + clicking on any translation"),(0,a.kt)("li",{parentName:"ol"},'You should see "Quick translation" dialog')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Quck translation dialog",src:n(23917).Z,width:"1118",height:"723"})),(0,a.kt)("h2",{id:"done"},"Done!"),(0,a.kt)("p",null,"Now you can use In-context to edit any translation on your website and the changes are sent directly to Tolgee platform."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Read more in ",(0,a.kt)("a",{parentName:"p",href:"/docs/web/in_context"},"In-context documentation"))))}u.isMDXComponent=!0},2499:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/api-key-list-bca02c64698be7674a44d0e01e507ce2.png"},45665:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/api-key-new-eb711dd4f049a4e8aa8e667e4226964d.png"},87804:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/api-keys-47d3ab68be3ea5cce4ed9d1e32bf4e47.png"},86243:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extensions-list-9e94b39459ff15abbfacac0066b028fd.png"},21625:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/in-context-cursor-42ddb30a1fe4c614d0440609c12dab44.png"},23917:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/quick-translation-c4f82dfd11f5d16a8dd5582ce774a689.png"},62026:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tolgee-plugin-dialog-filled-ba5cc0265780cde1cf2f9a839b189c63.png"},49499:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tolgee-plugin-dialog-39bcb6f290851cd355fb880752a2a75a.png"}}]);