"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[83923],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(g,i(i({ref:t},s),{},{components:n})):o.createElement(g,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8101:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[{value:"Set up Azure AD in the Azure Portal",id:"set-up-azure-ad-in-the-azure-portal",level:3},{value:"Configure your client secret",id:"configure-your-client-secret",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4},{value:"References",id:"references",level:3}]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"set-up-azure-ad-in-the-azure-portal"},"Set up Azure AD in the Azure Portal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visit the ",(0,r.kt)("a",{parentName:"li",href:"https://portal.azure.com/#home"},"Azure Portal")," and sign in with your Azure account. You need to have an active subscription to access Azure AD."),(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Azure Active Directory")," from the services they offer, and click the ",(0,r.kt)("strong",{parentName:"li"},"App Registrations")," from the left menu."),(0,r.kt)("li",{parentName:"ul"},"Click ",(0,r.kt)("strong",{parentName:"li"},"New Registration")," at the top and enter a description, select your ",(0,r.kt)("strong",{parentName:"li"},"access type")," and add your ",(0,r.kt)("strong",{parentName:"li"},"Redirect URI"),", which redirect the user to the application after logging in. In our case, this will be ",(0,r.kt)("inlineCode",{parentName:"li"},"${your_logto_origin}/callback/${connector_id}"),". e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://logto.dev/callback/${connector_id}"),". You need to select Web as Platform. The ",(0,r.kt)("inlineCode",{parentName:"li"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page."),(0,r.kt)("li",{parentName:"ul"},"If you select ",(0,r.kt)("strong",{parentName:"li"},"Single Tenant")," for access type then you need to enter ",(0,r.kt)("strong",{parentName:"li"},"TenantID"),", else you need to enter ",(0,r.kt)("inlineCode",{parentName:"li"},"common")," as Tenant ID.")),(0,r.kt)("h3",{id:"configure-your-client-secret"},"Configure your client secret"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In your newly created project, click the ",(0,r.kt)("strong",{parentName:"li"},"Certificates & Secrets")," to get a client secret, and click the ",(0,r.kt)("strong",{parentName:"li"},"New client secret")," from the top."),(0,r.kt)("li",{parentName:"ul"},"Enter a description and an expiration."),(0,r.kt)("li",{parentName:"ul"},"This will only show your client secret once. Save the ",(0,r.kt)("strong",{parentName:"li"},"value")," to a secure location.")),(0,r.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add your App Registration's ",(0,r.kt)("strong",{parentName:"li"},"Client ID")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your ",(0,r.kt)("strong",{parentName:"li"},"Client Secret")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your App Registration's ",(0,r.kt)("strong",{parentName:"li"},"Tenant ID")," into logto json."),(0,r.kt)("li",{parentName:"ul"},"Add your Microsoft ",(0,r.kt)("strong",{parentName:"li"},"Login Url"),' into logto json. This defaults to "',(0,r.kt)("a",{parentName:"li",href:"https://login.microsoftonline.com/%22"},'https://login.microsoftonline.com/"')," for many applications, but you can set your custom domain if you have one. (Don't forget the trailing slash)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsonc"},'{\n  "clientId": "<client-id>",\n  "clientSecret": "<client-secret>",\n  "tenantId": "<tenant-id>", // use "common" if you did\'t select **Single Tenant**\n  "cloudInstance": "https://login.microsoftonline.com/"\n}\n')),(0,r.kt)("h4",{id:"config-types"},"Config types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenantId"),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloudInstance"),(0,r.kt)("td",{parentName:"tr",align:null},"string")))),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-web-app-sign-user-overview?tabs=nodejs"},"Web app that signs in users")))}u.isMDXComponent=!0},36223:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(33607),l=n(50020),u=n(97807),c=n(27202),s=n(55414),p=n(2790),d=n(79655),m=["components"],g={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function k(e){var t=e.components,n=(0,a.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,r.kt)(i.ZP,{mdxType:"AddSdk"}),(0,r.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,r.kt)(c.ZP,{mdxType:"InitClient"}),(0,r.kt)("h2",{id:"sign-in"},"Sign in"),(0,r.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,r.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,r.kt)(p.ZP,{figureSrc:s.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,r.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,r.kt)(u.ZP,{mdxType:"ImplementSignIn"}),(0,r.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}k.isMDXComponent=!0},8096:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Connector tab",src:n(63962).Z,width:"3352",height:"1226"})),(0,r.kt)("p",null,'In the openning modal, select "',u.connector,'" and click "Next".'),(0,r.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,r.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}u.isMDXComponent=!0},73390:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],u={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Create application",src:n(16642).Z,width:"2368",height:"226"})),(0,r.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,r.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,r.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,r.kt)("img",{src:i,alt:"Create Application modal",width:"700"}),(0,r.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,r.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,r.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},99183:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sign-in Experience tab",src:n(64283).Z,width:"3160",height:"1822"})),(0,r.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',u.connector," ","sign-in, which may increase your conversion rate."),(0,r.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',u.connector,'". Then you should be able to see a button with text "Continue with ',u.connector,'" in the preview section.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Save changes",src:n(7276).Z,width:"2474",height:"188"})),(0,r.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}u.isMDXComponent=!0},67700:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"For our new friends",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,r.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,r.kt)("span",null," and "),(0,r.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,r.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"Basic knowledge of"," ",(0,r.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("span",null,"A usable ",n.connector," account."))))}u.isMDXComponent=!0},16991:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}u.isMDXComponent=!0},79655:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Test your integration",type:"info"},(0,r.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}u.isMDXComponent=!0},90674:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}u.isMDXComponent=!0},4879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},connector:function(){return b},contentTitle:function(){return h},default:function(){return C},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return y}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(67700),l=n(73390),u=n(8096),c=n(16991),s=n(99183),p=n(90674),d=n(36223),m=n(8101),g=["components"],k={slug:"how-to-build-azure-ad-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","azure-ad","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Android and Logto"},h=void 0,f={permalink:"/tutorial/how-to-build-azure-ad-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-azure-ad.mdx",title:"How to build Azure AD sign-in with Android and Logto",description:"\x3c!--",date:"2023-04-11T05:45:30.077Z",formattedDate:"April 11, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"azure-ad",permalink:"/tutorial/tags/azure-ad"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.29,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-azure-ad-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","azure-ad","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Azure AD sign-in with Android and Logto"},prevItem:{title:"How to build Apple sign-in with Android and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-android-and-logto"},nextItem:{title:"How to build Discord sign-in with Android and Logto",permalink:"/tutorial/how-to-build-discord-sign-in-with-android-and-logto"}},v={authorsImageUrls:[void 0]},y=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add Azure AD connector",id:"add-azure-ad-connector",level:2},{value:"Set up Azure AD",id:"set-up-azure-ad",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable Azure AD connector in Sign-in Experience",id:"enable-azure-ad-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],b="Azure AD",w={toc:y,connector:b};function C(e){var t=e.components,n=(0,a.Z)(e,g);return(0,r.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.ZP,{connector:b,sdk:"Android",link:"https://developer.android.com/",mdxType:"Intro"}),(0,r.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,r.kt)(l.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,r.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,r.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,r.kt)("h2",{id:"add-azure-ad-connector"},"Add Azure AD connector"),(0,r.kt)(u.ZP,{connector:b,mdxType:"AddConnector"}),(0,r.kt)("h2",{id:"set-up-azure-ad"},"Set up Azure AD"),(0,r.kt)(m.ZP,{mdxType:"ConnectorGuide"}),(0,r.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,r.kt)(c.ZP,{connector:b,mdxType:"SaveYourConfiguration"}),(0,r.kt)("h2",{id:"enable-azure-ad-connector-in-sign-in-experience"},"Enable Azure AD connector in Sign-in Experience"),(0,r.kt)(s.ZP,{connector:b,mdxType:"EnableSocialConnector"}),(0,r.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,r.kt)(p.ZP,{connector:b,sdk:"Android",mdxType:"TestingAndValidation"}),(0,r.kt)("h2",{id:"further-readings"},"Further readings"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,r.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,r.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,r.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}C.isMDXComponent=!0},64988:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),a="tabItem_H_V3",r=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n,children:t})}},88442:function(e,t,n){n.d(t,{Z:function(){return C}});var o=n(59496),a=n(45924),r=n(43226),i=n(26777),l=n(36537),u=n(50419);function c(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function s(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,l=(0,r.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,i._X)(u),(0,o.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,a,r,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,m=e.groupId,g=s(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:g})})),h=k[0],f=k[1],v=d({queryString:c,groupId:m}),y=v[0],b=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,u.Nk)(t),a=n[0],r=n[1],[a,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),C=w[0],N=w[1],A=function(){var e=null!=y?y:C;return p({value:e,tabValues:g})?e:null}();return(0,o.useLayoutEffect)((function(){A&&f(A)}),[A]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),N(e)}),[b,N,g]),tabValues:g}}var g=n(13175),k=n(944),h="tabList_c3R8",f="tabItem_V_Qz",v=n(4637);function y(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,i=e.tabValues,l=[],u=(0,g.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==o&&(u(t),r(a))},s=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var o,a=l.indexOf(e.currentTarget)+1;n=null!=(o=l[a])?o:l[0];break;case"ArrowLeft":var r,i=l.indexOf(e.currentTarget)-1;n=null!=(r=l[i])?r:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return l.push(e)},onKeyDown:s,onClick:c},r,{className:(0,a.Z)("tabs__item",f,null==r?void 0:r.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",h),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(b,Object.assign({},e,t))]})}function C(e){var t=(0,k.Z)();return(0,v.jsx)(w,Object.assign({},e),String(t))}},33607:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,r.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,r.kt)(i.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}s.isMDXComponent=!0},50020:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,r.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,r.kt)("br",{parentName:"p"}),"\n","The ",(0,r.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,r.kt)("p",null,"Assuming you treat ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,r.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,r.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,r.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}u.isMDXComponent=!0},97807:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=n(58658),c=["components"],s={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}p.isMDXComponent=!0;var d=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,d);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var k=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,k);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(u.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(g,{mdxType:"KotlinSignInCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"JavaSignInCode"}))),(0,r.kt)("p",null,"After signing in successfully, ",(0,r.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},27202:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=n(64988),l=n(88442),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}s.isMDXComponent=!0;var p=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],k={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,g);return(0,r.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"KotlinSetupCode"})),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(s,{mdxType:"JavaSetupCode"}))))}h.isMDXComponent=!0},2790:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,r.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,r.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},58658:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),r=(n(59496),n(49613)),i=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",null,"Before calling ",(0,r.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}u.isMDXComponent=!0},55414:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},63962:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},16642:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},7276:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},64283:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);