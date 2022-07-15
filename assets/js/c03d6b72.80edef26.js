"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[2521],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28482:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(59496),r=n(45924),a="tabItem_G5LH";function i(e){var t=e.children,n=e.hidden,i=e.className;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},38142:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(665),r=n(59496),a=n(45924),i=n(46971),l=n(21),s=n(73962),u=n(15469),p="tabList_A7qg",c="tabItem_Keco";function d(e){var t,n,i=e.lazy,d=e.block,m=e.defaultValue,g=e.values,k=e.groupId,h=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=g?g:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,l.l)(y,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:f[0].props.value;if(null!==b&&!y.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,I=(0,r.useState)(b),A=I[0],C=I[1],x=[],P=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=N[k];null!=j&&j!==A&&y.some((function(e){return e.value===j}))&&C(j)}var L=function(e){var t=e.currentTarget,n=x.indexOf(t),o=y[n].value;o!==A&&(P(t),C(o),null!=k&&T(k,String(o)))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var o,r=x.indexOf(e.currentTarget)+1;n=null!=(o=x[r])?o:x[0];break;case"ArrowLeft":var a,i=x.indexOf(e.currentTarget)-1;n=null!=(a=x[i])?a:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":d},h)},y.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,key:t,ref:function(e){return x.push(e)},onKeyDown:S,onFocus:L,onClick:L},i,{className:(0,a.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":A===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((function(e){return e.props.value===A}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function m(e){var t=(0,i.Z)();return r.createElement(d,(0,o.Z)({key:String(t)},e))}},41825:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}s.isMDXComponent=!0},87334:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}s.isMDXComponent=!0},60192:function(e,t,n){n.r(t),n.d(t,{assets:function(){return T},contentTitle:function(){return w},default:function(){return C},frontMatter:function(){return b},metadata:function(){return N},toc:function(){return I}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(38142),l=n(28482),s=["components"],u={toc:[{value:"Token Parse and Validation",id:"token-parse-and-validation",level:3}]};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"token-parse-and-validation"},"Token Parse and Validation"),(0,a.kt)("p",null,"An encoded ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JWS")," token is constructed with three parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JOSE Header: Declares the code type and encoding algorithm"),(0,a.kt)("li",{parentName:"ul"},"JWS Payload: Includes all the token's claims"),(0,a.kt)("li",{parentName:"ul"},"JWS Signature: Signature signed with JWK")),(0,a.kt)("p",null,"A standard schema of Logto JWS Payload: (claims may vary, based on your OIDC config)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"key"),(0,a.kt)("th",{parentName:"tr",align:null},"description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"jti"),(0,a.kt)("td",{parentName:"tr",align:null},"unique JWT ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"sub"),(0,a.kt)("td",{parentName:"tr",align:null},"subject, usually user-id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iat"),(0,a.kt)("td",{parentName:"tr",align:null},"timestamp token issues at")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"exp"),(0,a.kt)("td",{parentName:"tr",align:null},"timestamp token expires at")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"client_id"),(0,a.kt)("td",{parentName:"tr",align:null},"application id")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"iss"),(0,a.kt)("td",{parentName:"tr",align:null},"token issuer identity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"aud"),(0,a.kt)("td",{parentName:"tr",align:null},"audience of the token")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For development, to visually inspect a JWT you could visit ",(0,a.kt)("a",{parentName:"p",href:"https://jwt.io/"},"jwt.io")," to decode and check the tokens you received. Be careful with the tokens from production env, as a third party provides the service, and your token may be toasted.")),(0,a.kt)("p",null,"The Bearer Token should be accepted only if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the token's JWS format is verified ( See ",(0,a.kt)("a",{parentName:"li",href:"https://datatracker.ietf.org/doc/html/rfc7519#section-7.2"},"JWT")," for more details)"),(0,a.kt)("li",{parentName:"ul"},"the token's issuer is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://<your-logto-domain>/oidc")," (issued by the Logto server)"),(0,a.kt)("li",{parentName:"ul"},"the token's audience is the current API indicator (audience-restricted)"),(0,a.kt)("li",{parentName:"ul"},"the token is with in its valid lifetime")),(0,a.kt)("p",null,"There are various open-source libraries and middleware can help you validate the tokens easily. Most of them are implemented with just one method with various customizable configurations to verify and parse a JWT token."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"js",label:"NodeJs",mdxType:"TabItem"},(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/panva/jose"},"jose")," to validate the token's signature, expiration status, and the required claims."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { jwtVerify } from 'jose';\n\nconst { payload } = await jwtVerify(\n  token, // The raw Bearer Token extracted from the request header\n  publicKey, // jwks inquired from Logto server\n  {\n    // expected issuer of the token, should be (issued by the Logto server)\n    issuer: 'https://<your-logto-domain>/oidc',\n    // expected audience token, should be the resource indicator of the current API\n    audience: '<your request listener>',\n  }\n);\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("p",null,"Use ",(0,a.kt)("a",{parentName:"p",href:"https://javadoc.io/doc/io.jsonwebtoken/jjwt/latest/index.html"},"io.jsonwebtoken")," package"),(0,a.kt)("p",null,"Add package dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>io.jsonwebtoken</groupId>\n  <artifactId>jjwt</artifactId>\n  <version>0.9.1</version>\n</dependency>\n")),(0,a.kt)("p",null,"JwtTokenUtil:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\nimport java.util.Date;\n\nimport io.jsonwebtoken.Claims;\nimport io.jsonwebtoken.Jwts;\n\npublic class JwtTokenUtil {\n\n    private final String secret;\n\n    public JwtTokenUtil(String secret) {\n        this.secret = secret;\n    }\n\n    public Boolean validateToken(String token, String listener, String logtoPath) {\n        final Claims claims = getAllClaimsFromToken(token);\n        final String audience = claims.getAudience();\n        final String issuer = claims.getIssuer();\n\n        return (audience.equals(listener) && issuer.equals(logtoPath) && !isTokenExpired(claims));\n    }\n\n    public Claims getAllClaimsFromToken(String token) {\n        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody();\n    }\n\n    public Date getExpirationDateFromToken(String token) {\n        return getAllClaimsFromToken(token).getExpiration();\n    }\n\n    public String getUserIdFromToken(String token) {\n        return getAllClaimsFromToken(token).getSubject();\n    }\n\n    public String getAudienceFromToken(String token) {\n        return getAllClaimsFromToken(token).getAudience();\n    }\n\n    public String getIssuerFromToken(String token) {\n        return getAllClaimsFromToken(token).getIssuer();\n    }\n\n    private static Boolean isTokenExpired(Claims claims) {\n        return claims.getExpiration().before(new Date());\n    }\n}\n\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Package selections vary depending on the framework you are using.\nI.e., checkout ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/oauth2/jwt/package-summary.html"},"org.springframework.security.oauth2.jwt"),", if you use Spring Framework.")))))}p.isMDXComponent=!0;var c=["components"],d={toc:[{value:"Validate the existence and extract the Bearer Token from Headers",id:"validate-the-existence-and-extract-the-bearer-token-from-headers",level:3}]};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"validate-the-existence-and-extract-the-bearer-token-from-headers"},"Validate the existence and extract the Bearer Token from Headers"),(0,a.kt)("p",null,"The request should contain an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer <access_token>")," format. Extract the Bearer Token from the request header:"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"js",label:"NodeJs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { IncomingHttpHeaders } from 'http';\n\nconst extractBearerTokenFromHeaders = ({ authorization }: IncomingHttpHeaders) => {\n  if (!authorization) {\n    throw new Error({ code: 'auth.authorization_header_missing', status: 401 });\n  }\n\n  if (!authorization.startsWith('Bearer')) {\n    throw new Error({ code: 'auth.authorization_token_type_not_supported', status: 401 });\n  }\n\n  return authorization.slice(bearerTokenIdentifier.length + 1);\n};\n"))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import javax.servlet.ServletException;\nimport javax.servlet.http.HttpServletRequest;\nimport javax.servlet.http.HttpServletResponse;\n\nimport org.springframework.stereotype.Component;\nimport org.springframework.web.filter.OncePerRequestFilter;\n\n@Component\npublic class JwtRequestFilter extends OncePerRequestFilter {\n  @Override\n  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {\n      final String requestTokenHeader = request.getHeader("Authorization");\n      String jwtToken = null;\n\n      if (requestTokenHeader != null && requestTokenHeader.startsWith("Bearer ")) {\n        jwtToken = requestTokenHeader.substring(7);\n      } else {\n        // Not valid token found\n      }\n\n      // ...\n  }\n}\n\n')))))}m.isMDXComponent=!0;var g=["components"],k={toc:[{value:"Get the JWK Public Key",id:"get-the-jwk-public-key",level:3}]};function h(e){var t=e.components,n=(0,r.Z)(e,g);return(0,a.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"get-the-jwk-public-key"},"Get the JWK Public Key"),(0,a.kt)("p",null,"All tokens issued by Logto are signed with ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK"),". (See ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JWS")," for more details)\nBefore moving on, you will need a public key to verify the signature of the Bearer Token (",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),")."),(0,a.kt)("p",null,"The key set can be inquired through Logto's ",(0,a.kt)("strong",{parentName:"p"},"jwks_uri"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/jwks"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All the latest Logto Authorization Server Configurations can be found by ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/.well-known/openid-configuration"),", including the ",(0,a.kt)("strong",{parentName:"p"},"jwks_uri")," and other authorization configs.")),(0,a.kt)("p",null,"As a response, you will get a JWKS (JSON Web Key Sets). ",(0,a.kt)("strong",{parentName:"p"},"Keep it")," on your server. You will need it to verify all the requests' token signatures."))}h.isMDXComponent=!0;var f=n(87334),y=n(41825),v=["components"],b={sidebar_position:2},w="\u2694\ufe0f Protect your API",N={unversionedId:"docs/recipes/protect-your-api/README",id:"docs/recipes/protect-your-api/README",title:"\u2694\ufe0f Protect your API",description:"With a fluent user sign-in experience, by default, Logto comes with the API resources authorization service. It will help you protect your APIs resources from anonymous identities. Let's walk through the following steps and implement the API resource authorization guard of your own using Logto.",source:"@site/docs/docs/recipes/protect-your-api/README.md",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/",permalink:"/docs/recipes/protect-your-api/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/protect-your-api/README.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Vue",permalink:"/docs/recipes/integrate-logto/vue"},next:{title:"\ud83c\udfa8 Customize sign-in experience",permalink:"/docs/recipes/customize-sie/"}},T={},I=[{value:"Register the API resources through Logto <strong>Admin Console</strong>",id:"register-the-api-resources-through-logto-admin-console",level:2},{value:"Integrate the resources authorization flow into your client application",id:"integrate-the-resources-authorization-flow-into-your-client-application",level:2},{value:"Parse and Validate the API request&#39;s authorization token",id:"parse-and-validate-the-api-requests-authorization-token",level:2},{value:"Reference",id:"reference",level:2}],A={toc:I};function C(e){var t=e.components,s=(0,r.Z)(e,v);return(0,a.kt)("wrapper",(0,o.Z)({},A,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\ufe0f-protect-your-api"},"\u2694\ufe0f Protect your API"),(0,a.kt)("p",null,"With a fluent user sign-in experience, by default, Logto comes with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/resources/"},"API resources")," authorization service. It will help you protect your APIs resources from anonymous identities. Let's walk through the following steps and implement the API resource authorization guard of your own using Logto."),(0,a.kt)("h2",{id:"register-the-api-resources-through-logto-admin-console"},"Register the API resources through Logto ",(0,a.kt)("strong",{parentName:"h2"},"Admin Console")),(0,a.kt)("p",null,"Logto will identify the registered ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/resources/"},"API resources")," from an authorization request and issue an audience-restricted ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," accordingly."),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("strong",{parentName:"p"},"API Resources")," section in ",(0,a.kt)("strong",{parentName:"p"},"Admin Console"),". You will notice a build-in resource listed with the API identifier as ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.logto.io.")," This resource indicates all the management APIs you may use to maintain the Logto service. It will guarantee all our APIs are under protection and restricted to the Logto authorized users with Admin Role."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API resources",src:n(33038).Z,width:"1920",height:"964"})),(0,a.kt)("p",null,"Next, click on the ",(0,a.kt)("strong",{parentName:"p"},"Create API Resource")," button and fill out the form to register your API resource:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A human-readable ",(0,a.kt)("strong",{parentName:"li"},"API Name")," that may better helps you to identify this entity."),(0,a.kt)("li",{parentName:"ul"},"A unique ",(0,a.kt)("strong",{parentName:"li"},"API Identifier")," (a.k.a. ",(0,a.kt)("a",{parentName:"li",href:"/docs/references/resources/#resource-indicator"},"Resource Indicator"),") variable in URI format. It represents the resource's identity you'd like to guard.")),(0,a.kt)("img",{src:n(91870).Z,alt:"Create API resource",width:"700px"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The API Identifier is unique and used as the single source of truth of resource indicator for Logto. ",(0,a.kt)("strong",{parentName:"p"},"NOT")," editable once created. Be careful when you make it.")),(0,a.kt)("p",null,"The new API will show up on the list once created. You may manage or delete it on the API details page by clicking on the entity row."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"API resource details",src:n(53817).Z,width:"1920",height:"956"})),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/resources/#logto-api-resource-schema"},"API Resource Logto Schema")," for detailed API setting definitions."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All the API Resources record registered in Logto ",(0,a.kt)("strong",{parentName:"p"},"Admin Console")," will be shared across all your applications.")),(0,a.kt)("h2",{id:"integrate-the-resources-authorization-flow-into-your-client-application"},"Integrate the resources authorization flow into your client application"),(0,a.kt)("p",null,"Once we have your API resource well registered at the Logto server, we may move forward to your applications and see how Logto SDK works."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you haven't integrated Logto SDK with your application yet, we highly recommend you to go through our SDK's ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/integrate-logto/"},(0,a.kt)("strong",{parentName:"a"},"Integration Guide")),'. Logto has various SDKs developed for you. Stick with your business, and let us do the "heavy-duty."')),(0,a.kt)("p",null,"With Logto SDK, all you need is to pass those resource indicators to the SDK configs when it is initiated."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)(f.ZP,{mdxType:"KotlinSetupCode"})),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(y.ZP,{mdxType:"JavaSetupCode"})),(0,a.kt)(l.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { LogtoProvider, LogtoConfig } from '@logto/react';\n\nconst config: LogtoConfig = {\n  appId: '<your-application-id>',\n  endpoint: '<your-logto-endpoint>',\n  resources: ['<your-api-resource>'],\n};\n\nconst App = () => <LogtoProvider config={config}>{/* Your app content */}</LogtoProvider>;\n"))),(0,a.kt)(l.Z,{value:"vue",label:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createLogto, LogtoConfig } from '@logto/vue';\n\nconst config: LogtoConfig = {\n  appId: '<your-application-id>',\n  endpoint: '<your-logto-endpoint>',\n  resources: ['<your-api-resource>'],\n};\n\nconst app = createApp(App);\n\napp.use(createLogto, config);\napp.mount('#app');\n"))),(0,a.kt)(l.Z,{value:"js",label:"VanillaJs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import LogtoClient from '@logto/browser';\n\nconst logtoClient = new LogtoClient({\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  appId: '<your-application-id>',\n});\n")))),(0,a.kt)("p",null,"Take a breath here. Your application is almost ready \ud83d\ude0a. We have Logto SDK well configured at this point. Users could sign in / sign up through the Logto UI flow now."),(0,a.kt)("p",null,"After end-users successfully log in, they may try to get access to some of your backend API resources through the client application upon their request. We'll need to loop Logto in again at this point. Call the Logto server through our SDK to request an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," before making your API request."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The requested target resource should be:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Registered in Logto server."),(0,a.kt)("li",{parentName:"ol"},"Initiated as configs into the Logto SDK at your application."))),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.getAccessToken("<your-target-api-resource>", { logtoException: LogtoException?, result: AccessToken? ->\n  // custom logic\n})\n'))),(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.getAccessToken("<your-target-api-resource>", (logtoException, accessToken) -> {\n    // custom logic\n});\n'))),(0,a.kt)(l.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'  let token = try await client.getAccessToken(for: "<your-target-api-resource>")\n  // custom logic\n'))),(0,a.kt)(l.Z,{value:"react",label:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { getAccessToken } = useLogto();\nconst token = await getAccessToken('<your-target-api-resource>');\n// custom logic\n"))),(0,a.kt)(l.Z,{value:"vue",label:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { getAccessToken } = useLogto();\nconst token = await getAccessToken('<your-target-api-resource>');\n// custom logic\n"))),(0,a.kt)(l.Z,{value:"js",label:"VanillaJs",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const token = await logtoClient.getAccessToken('<your-target-api-resource>');\n// custom logic\n")))),(0,a.kt)("p",null,"If the client is well-authorized, a ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," will be granted and issued by Logto, specifically for the requested resource entity, encrypted, audience-restricted, and with an expiration time. Carry all the necessary info that can represent the authority of this request."),(0,a.kt)("p",null,"Append the token to your request's Authorization header as the Bearer token:"),(0,a.kt)("p",null,"i.e."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://logto.dev/api/users\n\nAuthorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiYXVkIjoiaHR0cHM6Ly9sb2d0by5kZXYvYXBpL3VzZXJzIiwiaXNzIjoiaHR0cHM6Ly9sb2d0by5kZXYvb2lkYyIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMiwiZXhwIjoxNTE2MzI1NDIyfQ.PjIJl00YNC84EPNYLEdpEEAdAxqhekCYhFEckvRokek\n\n")),(0,a.kt)("p",null,"Now you have your application well equipped. All the requests from a sign-in user through your application will be well-authorized. Let's go back to your server-side and block out those anonymous attempts."),(0,a.kt)("h2",{id:"parse-and-validate-the-api-requests-authorization-token"},"Parse and Validate the API request's authorization token"),(0,a.kt)("p",null,"The most crucial step, protect your API resources with trustworthy token validation."),(0,a.kt)("p",null,"As mentioned above, all the authorized requests should carry an ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,a.kt)("inlineCode",{parentName:"p"},"assess_token")," issued by Logto in its Authorization header."),(0,a.kt)(h,{mdxType:"SecretKey"}),(0,a.kt)(m,{mdxType:"TokenExtract"}),(0,a.kt)(p,{mdxType:"TokenValidation"}),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("p",null,"Logto uses the code-based OAuth 2.0 Authorization Protocol to make your API request safer. If you are interested in the strategy behind it, refer to OAuth 2.0's ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.1"},"official document")," for more details."))}C.isMDXComponent=!0},91870:function(e,t,n){t.Z=n.p+"assets/images/create-api-resource-8a6f4c86fb1175ba6877f22e08b260bb.png"},53817:function(e,t,n){t.Z=n.p+"assets/images/api-resource-details-5374ce9fe35f232dfc729570f4125c6c.png"},33038:function(e,t,n){t.Z=n.p+"assets/images/api-resources-381d558bded7d7a2949cee6250e42e40.png"}}]);