"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6536],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,g=s["".concat(p,".").concat(m)]||s[m]||c[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},67245:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var a=n(45924),o="tabItem_wP3Q",r=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n,children:t})}},31614:function(e,t,n){n.d(t,{Z:function(){return C}});var a=n(59496),o=n(45924),r=n(43226),l=n(59630),i=n(84534),p=n(27995);function u(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,i.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function s(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,i=(0,r.k6)(),p=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:o});return[(0,l._X)(p),(0,a.useCallback)((function(e){if(p){var t=new URLSearchParams(i.location.search);t.set(p,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[p,i])]}function m(e){var t,n,o,r,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,m=e.groupId,g=d(e),k=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:g})})),f=k[0],v=k[1],N=s({queryString:u,groupId:m}),b=N[0],y=N[1],h=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,p.Nk)(t),o=n[0],r=n[1],[o,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),C=h[0],T=h[1],I=function(){var e=null!=b?b:C;return c({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){I&&v(I)}),[I]),{selectedValue:f,selectValue:(0,a.useCallback)((function(e){if(!c({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),T(e)}),[y,T,g]),tabValues:g}}var g=n(80274),k=n(45605),f="tabList_npZo",v="tabItem_InYg",N=n(4637);function b(e){var t=e.className,n=e.block,a=e.selectedValue,r=e.selectValue,l=e.tabValues,i=[],p=(0,g.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==a&&(p(t),r(o))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,o=i.indexOf(e.currentTarget)+1;n=null!=(a=i[o])?a:i[0];break;case"ArrowLeft":var r,l=i.indexOf(e.currentTarget)-1;n=null!=(r=i[l])?r:i[i.length-1]}null==(t=n)||t.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,N.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},r,{className:(0,o.Z)("tabs__item",v,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function y(e){var t=e.lazy,n=e.children,o=e.selectedValue;if(n=Array.isArray(n)?n:[n],t){var r=n.find((function(e){return e.props.value===o}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function h(e){var t=m(e);return(0,N.jsxs)("div",{className:(0,o.Z)("tabs-container",f),children:[(0,N.jsx)(b,Object.assign({},e,t)),(0,N.jsx)(y,Object.assign({},e,t))]})}function C(e){var t=(0,k.Z)();return(0,N.jsx)(h,Object.assign({},e),String(t))}},76209:function(e,t,n){n.r(t),n.d(t,{assets:function(){return E},contentTitle:function(){return I},default:function(){return Z},frontMatter:function(){return T},metadata:function(){return x},toc:function(){return L}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=n(67245),i=n(31614),p=n.p+"assets/images/android-redirect-uri-b0be9e73263a7a824df6066714ebf8ea.png",u=["components"],d={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}c.isMDXComponent=!0;var s=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // \u4f8b\u5982\uff1a http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}g.isMDXComponent=!0;var k=n(22719),f=n(34370),v=n(76981),N=n(17532),b=n(75926),y=n(82620),h=n(13983),C=["components"],T={sidebar_label:"Android"},I="Android\uff1a\u96c6\u6210 Logto Android SDK",x={unversionedId:"docs/recipes/integrate-logto/android",id:"docs/recipes/integrate-logto/android",title:"Android\uff1a\u96c6\u6210 Logto Android SDK",description:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/android",permalink:"/zh-cn/docs/recipes/integrate-logto/android",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/docs/recipes/integrate-logto/android.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"docsSidebar",previous:{title:"\ud83d\udd17 \u5728\u4f60\u7684\u5e94\u7528\u4e2d\u96c6\u6210 Logto",permalink:"/zh-cn/docs/recipes/integrate-logto/"},next:{title:"Express",permalink:"/zh-cn/docs/recipes/integrate-logto/express"}},E={},L=[{value:"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56",id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56",level:2},{value:"\u521d\u59cb\u5316 LogtoClient",id:"\u521d\u59cb\u5316-logtoclient",level:2},{value:"\u767b\u5f55",id:"\u767b\u5f55",level:2},{value:"\u914d\u7f6e Redirect URI",id:"\u914d\u7f6e-redirect-uri",level:3},{value:"\u767b\u5f55",id:"\u767b\u5f55-1",level:3},{value:"\u9000\u51fa\u767b\u5f55",id:"\u9000\u51fa\u767b\u5f55",level:2},{value:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f",level:2},{value:"\u4e3a\u540e\u7aef API \u8bf7\u6c42\u6388\u6743",id:"\u4e3a\u540e\u7aef-api-\u8bf7\u6c42\u6388\u6743",level:2},{value:"\u5ef6\u5c55\u9605\u8bfb",id:"\u5ef6\u5c55\u9605\u8bfb",level:2}],A={toc:L};function Z(e){var t=e.components,n=(0,o.Z)(e,C);return(0,r.kt)("wrapper",(0,a.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"android\u96c6\u6210-logto-android-sdk"},"Android\uff1a\u96c6\u6210 Logto Android SDK"),(0,r.kt)(k.ZP,{type:"\u539f\u751f\u5e94\u7528",mdxType:"AppNote"}),(0,r.kt)("h2",{id:"\u5c06-logto-sdk-\u6dfb\u52a0\u81f3\u4f9d\u8d56"},"\u5c06 Logto SDK \u6dfb\u52a0\u81f3\u4f9d\u8d56"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Logto Andorid SDK \u652f\u6301\u7684\u6700\u5c0f Android API \u7ea7\u522b\u4e3a 24\u3002")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," \u6dfb\u52a0\u5230\u6784\u5efa\u811a\u672c\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"\u6dfb\u52a0 Logto Android SDK \u4f9d\u8d56\uff1a"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,r.kt)(l.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316-logtoclient"},"\u521d\u59cb\u5316 LogtoClient"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u521b\u5efa LogtoClient \u524d\uff0c\u9700\u8981\u786e\u4fdd Application \u5df2\u7ecf\u521d\u59cb\u5316\u3002")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"KotlinSetupCode"})),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"JavaSetupCode"}))),(0,r.kt)("h2",{id:"\u767b\u5f55"},"\u767b\u5f55"),(0,r.kt)("h3",{id:"\u914d\u7f6e-redirect-uri"},"\u914d\u7f6e Redirect URI"),(0,r.kt)("p",null,"\u5728 Andorid \u4e2d\uff0cRedirect URI \u7684\u683c\u5f0f\u5e94\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," \u5e94\u4e3a\u81ea\u5b9a\u4e49\u7684\u53cd\u5411\u57df\u540d\u683c\u5f0f\u7684\u4e00\u4e32\u5b57\u7b26\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," \u4e3a\u4f60\u7684\u5e94\u7528\u5305\u540d\u3002")),(0,r.kt)("p",null,"\u5047\u8bbe\u4f60\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android")," \u8bbe\u5b9a\u4e3a\u4f60\u81ea\u5b9a\u4e49\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," \u662f\u4f60\u7684\u5e94\u7528\u5305\u540d\uff0c\u90a3\u4e48 Redirect URI \u5c31\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5728\u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u914d\u7f6e Redirect URI \u4e86\uff08\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," \u4e3a\u4f8b\uff09\u3002"),(0,r.kt)(v.ZP,{figureSrc:p,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"\u767b\u5f55-1"},"\u767b\u5f55"),(0,r.kt)(h.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n}\n'))),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // \u5f53 `logtoException` \u4e3a null \u65f6\uff0c\u5219\u767b\u5f55\u6210\u529f\u3002\n});\n')))),(0,r.kt)("p",null,"\u5f53\u6210\u529f\u767b\u5f55\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," \u7684\u503c\u5c06\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,r.kt)("h2",{id:"\u9000\u51fa\u767b\u5f55"},"\u9000\u51fa\u767b\u5f55"),(0,r.kt)("p",null,"\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},".signOut(completion)")," \u64cd\u4f5c\u4f1a\u6e05\u9664\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\uff0c\u5373\u4f7f\u5728\u9000\u51fa\u767b\u5f55\u8fc7\u7a0b\u4e2d\u53d1\u751f\u4e86\u5f02\u5e38\u3002"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"logtoClient.signOut { logtoException: LogtoException? ->\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n}\n"))),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"logtoClient.signOut(logtoException -> {\n    // \u65e0\u8bba\u662f\u5426\u5b58\u5728 `logtoException`\uff0c\u672c\u5730\u5b58\u50a8\u7684\u7528\u6237\u76f8\u5173\u51ed\u636e\u90fd\u5df2\u6e05\u9664\u3002\n});\n")))),(0,r.kt)("h2",{id:"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f"),(0,r.kt)(N.ZP,{apiCodeFragment:"logtoClient.fetchUserInfo()",mdxType:"FetchUserInformation"}),(0,r.kt)("h2",{id:"\u4e3a\u540e\u7aef-api-\u8bf7\u6c42\u6388\u6743"},"\u4e3a\u540e\u7aef API \u8bf7\u6c42\u6388\u6743"),(0,r.kt)(y.ZP,{mdxType:"GetAuthorizationToken"}),(0,r.kt)("p",null,"\u5728\u542f\u52a8\u65f6\u5c06\u8fd9\u4e9b\u8d44\u6e90\u7684 ",(0,r.kt)("strong",{parentName:"p"},"API Identifier")," \u4f5c\u4e3a\u914d\u7f6e\u4f20\u7ed9 SDK\u3002"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'override fun onCreate(savedInstanceState: Bundle?) {\n  val logtoConfig = LogtoConfig(\n    endpoint = "<your-logto-endpoint>",\n    appId = "<your-app-id>",\n    scopes = null,\n     // \u6240\u6709\u9700\u8981\u8bf7\u6c42\u7684 API resource\n    resources = listOf("<your-resource-indicators>"),\n    usingPersistStorage = true,\n    prompt = PromptValue.CONSENT,\n  )\n\n  logtoClient = LogtoClient(logtoConfig, application)\n}\n\n'))),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    // \u6240\u6709\u9700\u8981\u8bf7\u6c42\u7684 API resource\n    ArrayList<String> resources = new ArrayList<String>(Arrays.asList("<your-resource-indicators>"));\n\n    LogtoConfig logtoConfig = new LogtoConfig(\n        "<your-logto-endpoint>",  // E.g. http://localhost:3001\n        "<your-app-id>",\n        null,\n        resources,\n        true,\n        PromptValue.CONSENT\n    );\n\n    logtoClient = new LogtoClient(logtoConfig, getApplication());\n}\n')))),(0,r.kt)("p",null,"\u5728\u53d1\u51fa API \u8bf7\u6c42\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4ece Logto \u5904\u83b7\u53d6\u6388\u6743\u4ee4\u724c\uff1a"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.getAccessToken("<resource-indicator>", { logtoException, accessToken ->\n    // \u56de\u6389\u5904\u7406\n})\n'))),(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.getAccessToken("<resource-indicator>", (logtoException, accessToken) -> {\n    // \u56de\u6389\u5904\u7406\n});\n')))),(0,r.kt)(f.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,r.kt)("h2",{id:"\u5ef6\u5c55\u9605\u8bfb"},"\u5ef6\u5c55\u9605\u8bfb"),(0,r.kt)(b.ZP,{mdxType:"FurtherReadings"}))}Z.isMDXComponent=!0},22719:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,"\u672c\u7bc7\u6559\u7a0b\u9ed8\u8ba4\u4f60\u5df2\u7ecf\u5728\u7ba1\u7406\u754c\u9762\u4e2d\u6210\u529f\u521b\u5efa\u4e86\u4e00\u4e2a\u300c",n.type,"\u300d\u7c7b\u578b\u7684\u5e94\u7528\u3002\u5982\u679c\u4f60\u8fd8\u6ca1\u6709\u5b8c\u6210\u8fd9\u4e00\u6b65\u64cd\u4f5c\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"\u8fd9\u7bc7\u6559\u7a0b"),"\uff0c\u521b\u5efa\u5e94\u7528\u4e4b\u540e\u518d\u7ee7\u7eed\u3002")))}p.isMDXComponent=!0},34370:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6839\u636e\u7528\u6237\u7684\u6743\u9650\u53ca\u767b\u5f55\u72b6\u6001\uff0cLogto \u4f1a\u6388\u6743\u5e76\u9881\u53d1\u4e00\u4e2a ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," \u683c\u5f0f\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," \u52a0\u5bc6\u4ee4\u724c\u3002\u8be5\u4ee4\u724c\u643a\u5e26\u4e86\u6240\u6709 API \u6388\u6743\u76f8\u5173\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u4fe1\u606f\uff0c\u4ee4\u724c\u7684\u9881\u53d1\u8005\uff0c\u4ee4\u724c\u7684\u6307\u5b9a\u53d7\u4f17\uff0c\u4ee5\u53ca\u8fc7\u671f\u65f6\u95f4\u7b49\u3002"),(0,r.kt)("p",null,"\u5c06\u8be5\u9881\u53d1\u7684\u4ee4\u724c\u4f5c\u4e3a Bearer \u4ee4\u724c\u9644\u52a0\u5230\u4f60\u7684\u8bf7\u6c42\u5934\u4e2d\uff1a"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Bearer \u4ee4\u724c\u7684\u96c6\u6210\u6d41\u7a0b\u53ef\u80fd\u56e0\u4f7f\u7528\u7684\u6846\u67b6\u6216\u8bf7\u6c42\u65b9\u5f0f\u800c\u5f02\u3002\u8bf7\u6309\u9700\u9009\u62e9\u4f60\u81ea\u5df1\u9002\u7528\u7684\u65b9\u5f0f\u6765\u5e94\u7528\u6388\u6743\u5230\u8bf7\u6c42\u5934\u4e2d\u3002")),(0,r.kt)("p",null,"\u4f8b\u5982\u6700\u7ec8\u5f62\u6210\u7684\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/api/users\n\n--header Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek\n\n")))}p.isMDXComponent=!0},76981:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u5728\u8fd9\u91cc\u5207\u6362\u5230\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u7684\u5e94\u7528\u8be6\u60c5\u9875\u3002\u6dfb\u52a0\u4e00\u4e2a\u503c\u4e3a ",(0,r.kt)("code",null,n.redirectUri)," \u7684 Redirect URI \u5e76\u70b9\u6309\u300c\u4fdd\u5b58\u53d8\u66f4\u300d\u3002"),(0,r.kt)("img",{alt:"\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u7684 Redirect URI",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," \u662f\u4e00\u4e2a OAuth 2.0 \u7684\u6982\u5ff5\uff0c\u7528\u4e8e\u8868\u660e\u5728 authentication \u540e\u91cd\u5b9a\u5411\u81f3\u7684\u4f4d\u7f6e\u3002"))}p.isMDXComponent=!0},17532:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logto SDK \u53ef\u52a9\u4f60\u4ece OIDC \u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint")," \u83b7\u53d6\u7528\u6237\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u767b\u5f55\u540e\u8c03\u7528 ",(0,r.kt)("code",null,n.apiCodeFragment)," \u83b7\u5f97\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,r.kt)("p",null,"Logto \u8fd4\u56de\u7684\u7528\u6237\u4fe1\u606f\u5185\u5bb9\u5c06\u56e0\u4f60\u5728\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"LogtoClient")," \u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"LogtoConfig")," \u914d\u7f6e\u91cc\u9762\u7684 scope \u7ec4\u5408\u5dee\u5f02\u800c\u6709\u6240\u4e0d\u540c\uff0c\u4e0b\u8868\u5217\u51fa\u4e86\u7528\u6237\u4fe1\u606f\u5185\u5bb9\u4e0e scope \u4e4b\u95f4\u7684\u5173\u7cfb\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6240\u9700 Scope"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sub"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"openid")," \u5df2\u7531 Logto SDK \u9ed8\u8ba4\u6dfb\u52a0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")," \u5df2\u7531 Logto SDK \u9ed8\u8ba4\u6dfb\u52a0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")," \u5df2\u7531 Logto SDK \u9ed8\u8ba4\u6dfb\u52a0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"picture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile")," \u5df2\u7531 Logto SDK \u9ed8\u8ba4\u6dfb\u52a0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"email_verified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_number"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"phone_number_verified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"phone")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"custom_data"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"custom_data")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"identities"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"identities")),(0,r.kt)("td",{parentName:"tr",align:null})))))}p.isMDXComponent=!0},75926:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/recipes/customize-sie/"},"\u81ea\u5b9a\u4e49\u767b\u5f55\u4f53\u9a8c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-passcode-sign-in"},"\u542f\u7528\u77ed\u4fe1\u6216\u90ae\u4ef6\u9a8c\u8bc1\u7801\u767b\u5f55")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/tutorials/get-started/enable-social-sign-in"},"\u542f\u7528\u793e\u4ea4\u767b\u5f55"))))}p.isMDXComponent=!0},82620:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Logto \u8fd8\u63d0\u4f9b\u4e86 API \u8bf7\u6c42\u7684\u6388\u6743\u670d\u52a1\uff0c\u4ee5\u5e2e\u52a9\u4f60\u66f4\u597d\u7684\u4fdd\u62a4\u4f60\u7684\u540e\u7aef\u5e94\u7528\u3002 \u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8e\u5982\u4f55\u5728\u540e\u7aef\u5904\u7406 Logto \u7684\u6388\u6743\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/protect-your-api/"},"\u4fdd\u62a4\u4f60\u7684 API")," \u96c6\u6210\u6307\u5357\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 Logto SDK \u8f7b\u677e\u7684\u4e3a\u53d7\u4fdd\u62a4 API \u8d44\u6e90\u7533\u8bf7\u4e00\u4e2a\u8bbf\u95ee\u6388\u6743\u4ee4\u724c\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u80fd\u8ba9 Logto \u7cbe\u51c6\u9881\u53d1\u4e00\u4e2a\u9488\u5bf9\u7279\u5b9a API \u8d44\u6e90\u7684\u6388\u6743\u4ee4\u724c\uff0c\u8bf7\u5148\u786e\u4fdd\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/protect-your-api/#%E5%9C%A8-logto-%E7%AE%A1%E6%8E%A7%E5%88%B6%E5%8F%B0%E5%86%85%E6%B3%A8%E5%86%8C-api-%E8%B5%84%E6%BA%90"},"Logto \u7684 \u7ba1\u7406\u63a7\u5236\u53f0\u4e2d\u6ce8\u518c\u8be5\u8d44\u6e90"),"\u3002")))}p.isMDXComponent=!0},13983:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),r=(n(59496),n(49613)),l=["components"],i={toc:[]};function p(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,"\u5728\u8c03\u7528 ",(0,r.kt)("code",null,n.calling)," \u4e4b\u524d\uff0c\u8bf7\u5148\u786e\u4fdd\u5df2\u7ecf\u5728\u300c\u7ba1\u7406\u63a7\u5236\u53f0\u300d\u4e2d\u6b63\u786e\u914d\u7f6e\u4e86 Redirect URI\u3002")))}p.isMDXComponent=!0}}]);