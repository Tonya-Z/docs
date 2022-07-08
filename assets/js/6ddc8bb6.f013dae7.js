"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4449],{9613:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return l}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),l=r,f=m["".concat(p,".").concat(l)]||m[l]||d[l]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function l(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8853:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=a(5443),r=a(3010),o=(a(9496),a(9613)),i=["components"],s={sidebar_label:"Custom data",sidebar_position:2},p="Custom data",c={unversionedId:"docs/references/users/custom-data",id:"docs/references/users/custom-data",title:"Custom data",description:"customdata_ stores additional user info not listed in the pre-defined user properties.",source:"@site/docs/docs/references/users/custom-data.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/custom-data",permalink:"/docs/references/users/custom-data",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/custom-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Custom data",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Social identities",permalink:"/docs/references/users/social-identities"}},u={},d=[],m={toc:d};function l(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-data"},"Custom data"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"custom_data")," stores additional user info not listed in the pre-defined user properties."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("em",{parentName:"p"},"custom_data")," to do the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Record whether specific actions have been done by the user, such as having seen the welcome page."),(0,o.kt)("li",{parentName:"ul"},"Store application-specific data in the user profile, such as the user's preferred language and appearance per application."),(0,o.kt)("li",{parentName:"ul"},"Maintain other arbitrary data related to the user.")),(0,o.kt)("p",null,"Sample ",(0,o.kt)("em",{parentName:"p"},"custom_data")," from an admin user in Logto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminConsolePreferences": {\n    "language": "en",\n    "appearanceMode": "system",\n    "experienceNoticeConfirmed": true\n  },\n  "customDataFoo": {\n    "foo": "foo"\n  },\n  "customDataBar": {\n    "bar": "bar"\n  }\n}\n')),(0,o.kt)("p",null,"Each user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is stored in an individual JSON object."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"DO NOT put sensitive data in ",(0,o.kt)("em",{parentName:"h5"},"custom_data"))),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You may fetch a user profile containing ",(0,o.kt)("em",{parentName:"p"},"custom_data")," using Management API and send it to the frontend apps or external backend services.\nTherefore, putting the sensitive information in ",(0,o.kt)("em",{parentName:"p"},"custom_data")," may cause data leaks."),(0,o.kt)("p",{parentName:"div"},"If you still want to put the sensitive information in ",(0,o.kt)("em",{parentName:"p"},"custom_data"),", we recommend encrypting it first.\nOnly encrypt/decrypt it in a trusted party like your backend services, and avoid doing it in the frontend apps.\nThese will minimize the loss if your users' ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is leaked by mistake."))),(0,o.kt)("p",null,"You can update the user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," using\n",(0,o.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-admin-console#view-and-update-user-profile"},"Admin Console")," or\n",(0,o.kt)("a",{parentName:"p",href:"../../../docs/recipes/manage-users/using-management-api"},"Management API"),",\nsuch as ",(0,o.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/patch",target:"_blank"},(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/:userId")),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Update carefully")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Updating a user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," will completely overwrite its original content in the storage."),(0,o.kt)("p",{parentName:"div"},"For example, if your input of calling update ",(0,o.kt)("em",{parentName:"p"},"custom_data")," API looks like this (suppose that the original ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is previous shown sample data):"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"then new ",(0,o.kt)("em",{parentName:"p"},"custom_data")," value after updating should be:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n')),(0,o.kt)("p",{parentName:"div"},"That is, the updated field value has nothing to do with the previous value."))))}l.isMDXComponent=!0}}]);