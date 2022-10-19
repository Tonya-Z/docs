"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3798],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34630:function(e,t,n){n.d(t,{Z:function(){return o}});n(59496);var a=n(45924),r="tabItem_Fp8l",l=n(4637);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r,o),hidden:n,children:t})}},82312:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(59496),r=n(45924),l=n(36258),o=n(28932),i=n(5301),u=n(61121),s="tabList_eANZ",c="tabItem_yCyO",p=n(4637);function d(e){var t,n,l=e.lazy,d=e.block,m=e.defaultValue,f=e.values,g=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,o.l)(v,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==k&&!v.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,i.U)(),w=N.tabGroupChoices,x=N.setTabGroupChoices,C=(0,a.useState)(k),O=C[0],I=C[1],L=[],T=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=w[g];null!=E&&E!==O&&v.some((function(e){return e.value===E}))&&I(E)}var j=function(e){var t=e.currentTarget,n=L.indexOf(t),a=v[n].value;a!==O&&(T(t),I(a),null!=g&&x(g,String(a)))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=L.indexOf(e.currentTarget)+1;n=null!=(a=L[r])?a:L[0];break;case"ArrowLeft":var l,o=L.indexOf(e.currentTarget)-1;n=null!=(l=L[o])?l:L[L.length-1]}null==(t=n)||t.focus()};return(0,p.jsxs)("div",{className:(0,r.Z)("tabs-container",s),children:[(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b),children:v.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,p.jsx)("li",Object.assign({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,ref:function(e){return L.push(e)},onKeyDown:D,onFocus:j,onClick:j},a,{className:(0,r.Z)("tabs__item",c,null==a?void 0:a.className,{"tabs__item--active":O===t}),children:null!=n?n:t}),t)}))}),l?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):(0,p.jsx)("div",{className:"margin-top--md",children:h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))})]})}function m(e){var t=(0,l.Z)();return(0,p.jsx)(d,Object.assign({},e),String(t))}},94028:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(665),r=n(40151),l=(n(59496),n(49613)),o=n(34630),i=n(82312),u=["components"],s={},c="\ud83d\udda5 Using Logto CLI",p={unversionedId:"docs/tutorials/using-cli/README",id:"docs/tutorials/using-cli/README",title:"\ud83d\udda5 Using Logto CLI",description:"Get started",source:"@site/docs/docs/tutorials/using-cli/README.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/",permalink:"/zh-cn/docs/tutorials/using-cli/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\u5ef6\u5c55\u9605\u8bfb",permalink:"/zh-cn/docs/tutorials/get-started/further-readings"},next:{title:"Install Logto",permalink:"/zh-cn/docs/tutorials/using-cli/install-logto"}},d={},m=[{value:"Get started",id:"get-started",level:2},{value:"Install CLI globally",id:"install-cli-globally",level:3},{value:"Local CLI",id:"local-cli",level:3},{value:"Use CLI by <code>npx</code>",id:"use-cli-by-npx",level:3}],f={toc:m};function g(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"-using-logto-cli"},"\ud83d\udda5 Using Logto CLI"),(0,l.kt)("h2",{id:"get-started"},"Get started"),(0,l.kt)("p",null,"Logto CLI provide a conveneient way to install, maintain, and update your Logto instance without handling those boring tech stuff manually."),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Currently we don't ship binaries, thus Node.js ",(0,l.kt)("inlineCode",{parentName:"p"},"^16.13.0")," is required in the environment.")),(0,l.kt)("h3",{id:"install-cli-globally"},"Install CLI globally"),(0,l.kt)("p",null,"Install via your preferred package manager to use ",(0,l.kt)("inlineCode",{parentName:"p"},"logto")," command globally:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/cli -g\n"))),(0,l.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add @logto/cli\n"))),(0,l.kt)(o.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add -g @logto/cli\n")))),(0,l.kt)("p",null,"You can always append ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," to show the help info of each command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"logto --help\nlogto db seed --help\n")),(0,l.kt)("h3",{id:"local-cli"},"Local CLI"),(0,l.kt)("p",null,"A built-in version of CLI is shipped with every Logto release since v1.0.0-beta.11. Say you already have a Logto instance in ",(0,l.kt)("inlineCode",{parentName:"p"},"~/logto"),", then you can run the commands below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/logto\nnpm run cli # Invoke the local CLI\n")),(0,l.kt)("p",null,"Note if you want to execute with options, you need to prepend a ",(0,l.kt)("inlineCode",{parentName:"p"},"--")," BEFORE the options for Logto CLI, e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm run cli db seed -- --db-url postgresql://your-database-url\n")),(0,l.kt)("h3",{id:"use-cli-by-npx"},"Use CLI by ",(0,l.kt)("inlineCode",{parentName:"h3"},"npx")),(0,l.kt)("p",null,"Another way to use Logto CLI is ",(0,l.kt)("inlineCode",{parentName:"p"},"npx"),", which can execute a package without installation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli\n")),(0,l.kt)("p",null,"This will be helpful for one-off invocations, e.g.:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db seed --db-url postgresql://your-database-url\n")))}g.isMDXComponent=!0}}]);