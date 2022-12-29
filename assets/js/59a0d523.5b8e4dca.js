(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[4193],{54604:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var s=r(73608),n=r(73290),i=JSON.parse('{"openapi":"3.0.1","info":{"title":"Logto Core","version":"0.1.0"},"paths":{"/api/session":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/consent":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/password/username":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/password/email":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/password/sms":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone","password"],"properties":{"phone":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/password/check-username":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/password/username":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/passwordless/sms/send":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone","flow"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"flow":{"type":"string","enum":["Continue","ForgotPassword","Register","SignIn"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/passwordless/email/send":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","flow"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"flow":{"type":"string","enum":["Continue","ForgotPassword","Register","SignIn"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/passwordless/sms/verify":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["phone","code","flow"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"code":{"type":"string"},"flow":{"type":"string","enum":["Continue","ForgotPassword","Register","SignIn"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/passwordless/email/verify":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["email","code","flow"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"code":{"type":"string"},"flow":{"type":"string","enum":["Continue","ForgotPassword","Register","SignIn"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/passwordless/sms":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/passwordless/email":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/register/passwordless/sms":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/register/passwordless/email":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","state","redirectUri"],"properties":{"connectorId":{"type":"string"},"state":{"type":"string"},"redirectUri":{"type":"object","description":"Validator function"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/social/auth":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","data"],"properties":{"connectorId":{"type":"string"},"data":{"example":{}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/bind-social-related-user":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/register/social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/bind-social":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"connectorId":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/continue/password":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/continue/username":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/continue/email":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/sign-in/continue/sms":{"post":{"tags":["Session"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/session/forgot-password/reset":{"post":{"tags":["Session"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["event"],"properties":{"event":{"type":"string","enum":["SignIn","Register","ForgotPassword"]},"identifier":{"oneOf":[{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["phone","password"],"properties":{"phone":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","passcode"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"passcode":{"type":"string","minLength":1}}},{"type":"object","required":["phone","passcode"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"passcode":{"type":"string","minLength":1}}},{"type":"object","required":["connectorId","connectorData"],"properties":{"connectorId":{"type":"string"},"connectorData":{"type":"object","description":"arbitrary"}}},{"type":"object","required":["connectorId","identityType"],"properties":{"connectorId":{"type":"string"},"identityType":{"oneOf":[{"type":"string","format":"\\"phone\\""},{"type":"string","format":"\\"email\\""}]}}}]},"profile":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/event":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["event"],"properties":{"event":{"type":"string","enum":["SignIn","Register","ForgotPassword"]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/identifiers":{"patch":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["username","password"],"properties":{"username":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","password"],"properties":{"email":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["phone","password"],"properties":{"phone":{"type":"string","minLength":1},"password":{"type":"string","minLength":1}}},{"type":"object","required":["email","passcode"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"passcode":{"type":"string","minLength":1}}},{"type":"object","required":["phone","passcode"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"passcode":{"type":"string","minLength":1}}},{"type":"object","required":["connectorId","connectorData"],"properties":{"connectorId":{"type":"string"},"connectorData":{"type":"object","description":"arbitrary"}}},{"type":"object","required":["connectorId","identityType"],"properties":{"connectorId":{"type":"string"},"identityType":{"oneOf":[{"type":"string","format":"\\"phone\\""},{"type":"string","format":"\\"email\\""}]}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/profile":{"put":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"connectorId":{"type":"string"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/submit":{"post":{"tags":["Interaction"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/interaction/verification/social-authorization-uri":{"post":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","state","redirectUri"],"properties":{"connectorId":{"type":"string"},"state":{"type":"string"},"redirectUri":{"type":"object","description":"Validator function"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/interaction/verification/passcode":{"post":{"tags":["Interaction"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"oneOf":[{"type":"object","required":["email"],"properties":{"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}},{"type":"object","required":["phone"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}]}}}},"responses":{"200":{"description":"OK"}}}},"/api/profile":{"get":{"tags":["Profile"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"nullable":true,"type":"string"},"avatar":{"nullable":true,"type":"string"},"customData":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/profile/username":{"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["username"],"properties":{"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/profile/password":{"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/profile/email":{"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["primaryEmail"],"properties":{"primaryEmail":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Profile"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/profile/phone":{"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["primaryPhone"],"properties":{"primaryPhone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Profile"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/profile/identities":{"patch":{"tags":["Profile"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId","data"],"properties":{"connectorId":{"type":"string"},"data":{"example":{}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/profile/identities/:target":{"delete":{"tags":["Profile"],"parameters":[{"name":"target","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/applications":{"get":{"tags":["Applications"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Applications"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","type"],"properties":{"name":{"type":"string","maxLength":256},"secret":{"type":"string","maxLength":64},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional","MachineToMachine"]},"oidcClientMetadata":{"type":"object","required":["redirectUris","postLogoutRedirectUris"],"properties":{"redirectUris":{"type":"array","items":{"oneOf":[{"type":"object","description":"Validator function"},{"type":"object","description":"Validator function"}]}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"}}},"roleNames":{"type":"array","items":{"type":"string"}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/applications/:id":{"get":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","maxLength":256},"secret":{"type":"string","maxLength":64},"description":{"nullable":true,"type":"string"},"type":{"type":"string","enum":["Native","SPA","Traditional","MachineToMachine"]},"oidcClientMetadata":{"type":"object","properties":{"redirectUris":{"type":"array","items":{"oneOf":[{"type":"object","description":"Validator function"},{"type":"object","description":"Validator function"}]}},"postLogoutRedirectUris":{"type":"array","items":{"type":"string","format":"url"}},"logoUri":{"type":"string"}}},"customClientMetadata":{"type":"object","properties":{"corsAllowedOrigins":{"type":"array","items":{"type":"string","format":"url"}},"idTokenTtl":{"type":"number"},"refreshTokenTtl":{"type":"number"}}},"roleNames":{"type":"array","items":{"type":"string"}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Applications"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/settings":{"get":{"tags":["Settings"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Settings"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"adminConsole":{"type":"object","properties":{"demoChecked":{"type":"boolean"},"applicationCreated":{"type":"boolean"},"signInExperienceCustomized":{"type":"boolean"},"passwordlessConfigured":{"type":"boolean"},"socialSignInConfigured":{"type":"boolean"},"furtherReadingsChecked":{"type":"boolean"}}}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connectors":{"get":{"tags":["Connectors"],"parameters":[{"name":"target","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Connectors"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["connectorId"],"properties":{"config":{"type":"object","description":"arbitrary"},"connectorId":{"type":"string","maxLength":128},"metadata":{"type":"object","properties":{"target":{"type":"string"},"name":{"type":"object","description":"Validator function"},"logo":{"type":"string"},"logoDark":{"nullable":true,"type":"string"}}},"syncProfile":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/connector-factories":{"get":{"tags":["Connector Factories"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id":{"get":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"config":{"type":"object","description":"arbitrary"},"metadata":{"type":"object","properties":{"target":{"type":"string"},"name":{"type":"object","description":"Validator function"},"logo":{"type":"string"},"logoDark":{"nullable":true,"type":"string"}}},"syncProfile":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/connectors/:id/test":{"post":{"tags":["Connectors"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["config"],"properties":{"phone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"email":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"config":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources":{"get":{"tags":["Resources"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Resources"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["name","indicator"],"properties":{"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/resources/:id":{"get":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string"},"indicator":{"type":"string"},"accessTokenTtl":{"type":"number"}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Resources"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"204":{"description":"No Content"}}}},"/api/sign-in-exp":{"get":{"tags":["Sign In Exp"],"parameters":[],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Sign In Exp"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"color":{"type":"object","required":["primaryColor","isDarkModeEnabled","darkPrimaryColor"],"properties":{"primaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"},"isDarkModeEnabled":{"type":"boolean"},"darkPrimaryColor":{"type":"string","format":"regex","pattern":"/^#[\\\\da-f]{3}([\\\\da-f]{3})?$/i"}}},"branding":{"type":"object","required":["style","logoUrl"],"properties":{"style":{"type":"string","enum":["Logo","Logo_Slogan"]},"logoUrl":{"type":"string","format":"url"},"darkLogoUrl":{"type":"string","format":"url"},"slogan":{"type":"string"}}},"languageInfo":{"type":"object","required":["autoDetect","fallbackLanguage"],"properties":{"autoDetect":{"type":"boolean"},"fallbackLanguage":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}},"signIn":{"type":"object","required":["methods"],"properties":{"methods":{"type":"array","items":{"type":"object","required":["identifier","password","verificationCode","isPasswordPrimary"],"properties":{"identifier":{"type":"string","enum":["username","email","sms"]},"password":{"type":"boolean"},"verificationCode":{"type":"boolean"},"isPasswordPrimary":{"type":"boolean"}}}}}},"signUp":{"type":"object","required":["identifiers","password","verify"],"properties":{"identifiers":{"type":"array","items":{"type":"string","enum":["username","email","sms"]}},"password":{"type":"boolean"},"verify":{"type":"boolean"}}},"socialSignInConnectorTargets":{"type":"array","items":{"type":"string"}},"signInMode":{"type":"string","enum":["SignIn","Register","SignInAndRegister"]},"termsOfUseUrl":{"oneOf":[{"nullable":true,"type":"string","format":"url"},{"type":"string","format":"empty"}]}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users":{"get":{"tags":["Users"],"parameters":[{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}},"post":{"tags":["Users"],"parameters":[],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"primaryPhone":{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},"primaryEmail":{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},"username":{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"},"isAdmin":{"type":"boolean"},"name":{"type":"string"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"username":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^[A-Z_a-z]\\\\w*$/"},{"type":"string","format":"empty"}]},"primaryEmail":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^\\\\S+@\\\\S+\\\\.\\\\S+$/"},{"type":"string","format":"empty"}]},"primaryPhone":{"nullable":true,"oneOf":[{"type":"string","format":"regex","pattern":"/^\\\\d+$/"},{"type":"string","format":"empty"}]},"name":{"nullable":true,"oneOf":[{"type":"string"},{"type":"string","format":"empty"}]},"avatar":{"nullable":true,"oneOf":[{"type":"string","format":"url"},{"type":"string","format":"empty"}]},"customData":{"type":"object","description":"arbitrary"},"roleNames":{"type":"array","items":{"type":"string"}}}}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"204":{"description":"No Content"}}}},"/api/users/:userId/custom-data":{"get":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}},"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["customData"],"properties":{"customData":{"type":"object","description":"arbitrary"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/password":{"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["password"],"properties":{"password":{"type":"string","format":"regex","pattern":"/^.{6,}$/"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/is-suspended":{"patch":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","required":["isSuspended"],"properties":{"isSuspended":{"type":"boolean"}}}}}},"responses":{"200":{"description":"OK"}}}},"/api/users/:userId/identities/:target":{"delete":{"tags":["Users"],"parameters":[{"name":"userId","in":"path","required":true,"schema":{"type":"string"}},{"name":"target","in":"path","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/logs":{"get":{"tags":["Logs"],"parameters":[{"name":"userId","in":"query","required":false,"schema":{"type":"string"}},{"name":"applicationId","in":"query","required":false,"schema":{"type":"string"}},{"name":"logKey","in":"query","required":false,"schema":{"type":"string"}},{"name":"page","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":1}},{"name":"page_size","in":"query","required":false,"schema":{"type":"integer","minimum":1,"default":20}}],"responses":{"200":{"description":"OK"}}}},"/api/logs/:id":{"get":{"tags":["Logs"],"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","minLength":1}}],"responses":{"200":{"description":"OK"}}}},"/api/roles":{"get":{"tags":["Roles"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/total":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/new":{"get":{"tags":["Dashboard"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/dashboard/users/active":{"get":{"tags":["Dashboard"],"parameters":[{"name":"date","in":"query","required":false,"schema":{"type":"string","format":"regex","pattern":"/^\\\\d{4}(-\\\\d{2}){2}/"}}],"responses":{"200":{"description":"OK"}}}},"/api/custom-phrases":{"get":{"tags":["Custom Phrases"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/custom-phrases/:languageTag":{"get":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"responses":{"200":{"description":"OK"}}},"put":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"requestBody":{"required":true,"content":{"application/json":{"schema":{"$ref":"#/components/schemas/TranslationObject"}}}},"responses":{"200":{"description":"OK"}}},"delete":{"tags":["Custom Phrases"],"parameters":[{"name":"languageTag","in":"path","required":true,"schema":{"type":"string","enum":["af-ZA","am-ET","ar-AR","as-IN","az-AZ","be-BY","bg-BG","bn-IN","br-FR","bs-BA","ca-ES","cb-IQ","co-FR","cs-CZ","cx-PH","cy-GB","da-DK","de","de-DE","el-GR","en","en-GB","en-US","eo-EO","es","es-ES","es-419","et-EE","eu-ES","fa-IR","ff-NG","fi-FI","fo-FO","fr","fr-CA","fr-FR","fy-NL","ga-IE","gl-ES","gn-PY","gu-IN","ha-NG","he-IL","hi-IN","hr-HR","ht-HT","hu-HU","hy-AM","id-ID","ik-US","is-IS","it","it-IT","iu-CA","ja","ja-JP","ja-KS","jv-ID","ka-GE","kk-KZ","km-KH","kn-IN","ko","ko-KR","ku-TR","ky-KG","lo-LA","lt-LT","lv-LV","mg-MG","mk-MK","ml-IN","mn-MN","mr-IN","ms-MY","mt-MT","my-MM","nb-NO","ne-NP","nl-BE","nl-NL","nn-NO","or-IN","pa-IN","pl-PL","ps-AF","pt","pt-BR","pt-PT","ro-RO","ru","ru-RU","rw-RW","sc-IT","si-LK","sk-SK","sl-SI","sn-ZW","sq-AL","sr-RS","sv-SE","sw-KE","sy-SY","sz-PL","ta-IN","te-IN","tg-TJ","th-TH","tl-PH","tr","tr-TR","tt-RU","tz-MA","uk-UA","ur-PK","uz-UZ","vi-VN","zh","zh-CN","zh-HK","zh-MO","zh-TW","zz-TR"]}}],"responses":{"200":{"description":"OK"}}}},"/api/phrase":{"get":{"tags":["Phrase"],"parameters":[],"responses":{"200":{"description":"OK"}}}},"/api/.well-known/sign-in-exp":{"get":{"tags":[".well-known"],"parameters":[],"responses":{"200":{"description":"OK"},"304":{"description":"No Modified"}}}},"/api/status":{"get":{"tags":["Status"],"parameters":[],"responses":{"204":{"description":"No Content"}}}},"/api/authn/hasura":{"get":{"tags":["Authn"],"parameters":[{"name":"resource","in":"query","required":true,"schema":{"type":"string","minLength":1}},{"name":"unauthorizedRole","in":"query","required":false,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"}}}},"/api/swagger.json":{"get":{"tags":["Swagger.json"],"parameters":[],"responses":{"200":{"description":"OK"}}}}},"components":{"schemas":{"TranslationObject":{"type":"object","properties":{"[translationKey]":{"$ref":"#/components/schemas/Translation"}},"example":{"input":{"username":"Username","password":"Password"},"action":{"sign_in":"Sign In","continue":"Continue"}}},"Translation":{"oneOf":[{"type":"string"},{"$ref":"#/components/schemas/Translation"}]}}}}'),a=r(4637),o=function(){return(0,a.jsx)(s.Z,{title:"API",children:(0,a.jsx)(n.Z,{spec:i})})}},63965:function(){},15526:function(){},49592:function(){},98597:function(){},29559:function(){},6615:function(){}}]);