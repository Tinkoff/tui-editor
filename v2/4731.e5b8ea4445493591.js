(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4731],{54731:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Q});var i=n(8239),r=n(86841),o=n(74163);const s="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],l=["project","search","ports","settings"],c=["light","dark"],p=["editor","preview"],u={clickToLoad:e=>d("ctl",e),devToolsHeight:e=>m("devtoolsheight",e),forceEmbedLayout:e=>d("embed",e),hideDevTools:e=>d("hidedevtools",e),hideExplorer:e=>d("hideExplorer",e),hideNavigation:e=>d("hideNavigation",e),openFile:e=>f("file",e),showSidebar:e=>function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e),sidebarView:e=>g("sidebarView",e,l),startScript:e=>f("startScript",e),terminalHeight:e=>m("terminalHeight",e),theme:e=>g("theme",e,c),view:e=>g("view",e,p),zenMode:e=>d("zenMode",e)};function d(e,t){return!0===t?`${e}=1`:""}function m(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function g(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function f(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function h(e,t){return`${function(e={}){return("string"==typeof e.origin?e.origin:s).replace(/\/$/,"")}(t)}${e}${function(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&u.hasOwnProperty(e)?u[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}(t)}`}const b=function(e,t){!function(e,t){const n=function({template:e,title:t,description:n,dependencies:i,files:r,settings:o}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const s=[],l=(e,t,n="")=>{s.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};l("project[title]",t),"string"==typeof n&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(i))),o&&l("project[settings]",JSON.stringify(o)),Object.entries(r).forEach((([e,t])=>{l(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...s),c}(e);n.action=h("/run",t),n.target=function(e){return e&&!1===e.newWindow?"_self":"_blank"}(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};var w=n(89570),y=n(13914);class v{get className(){const[,e]=this.rawFileContent.match(/(?:export class\s)(\w*)/i)||[];return e||""}set className(e){this.rawFileContent=this.rawFileContent.replace(/(export class\s)(\w*)/i,`$1${e}`)}get hasNgModule(){return this.rawFileContent.includes("@NgModule")}get hasNgComponent(){return this.rawFileContent.includes("@Component")}constructor(e){if(this.rawFileContent=e,(e.match(/export class/gi)||[]).length>1)throw new y.pbU;this.replaceMetaAssets()}addImport(e,t){const n=t.replace(".ts","");this.rawFileContent=this.rawFileContent.includes(n)?this.addIntoExistingImport(e,n):`import {${e}} from '${n}';\n${this.rawFileContent};`}toString(){return this.rawFileContent}addIntoExistingImport(e,t){const n=new RegExp(`(?:import\\s?\\{\\r?\\n?)(?:(?:.*),\\r?\\n?)*?(?:.*?)\\r?\\n?} from (?:'|")${t}(?:'|");`,"gm");return this.rawFileContent.replace(n,(t=>t.includes(e)?t:t.replace("{",`{${e}, `)))}replaceMetaAssets(){this.rawFileContent=this.rawFileContent.replace("import {assets} from '@demo/utils';\n",""),this.rawFileContent=this.rawFileContent.replace("assets`","`https://taiga-ui.dev/assets")}}class j extends v{set selector(e){this.rawFileContent=this.rawFileContent.replace(/(selector:\s['"`])(.*)(['"`])/gi,`$1${e}$3`)}set templateUrl(e){this.rawFileContent=this.rawFileContent.replace(/(templateUrl:\s['"`])(.*)(['"`])/gi,`$1${e}$3`)}set styleUrls(e){this.rawFileContent=this.rawFileContent.replace(/(styleUrls:\s)(\[.*\])/gi,`$1${JSON.stringify(e)}`)}}class C extends v{addDeclaration(e){this.rawFileContent=this.rawFileContent.replace("declarations: [",`declarations: [${e}, `)}addModuleImport(e){this.rawFileContent=this.rawFileContent.replace("imports: [",`imports: [\n${e}, `)}hasDeclarationEntity(e){const[,t=""]=this.rawFileContent.match(/(?:declarations:\s\[)(.*)(?:\])/i)||[];return t.includes(e)}}var $=n(64537);let k=(()=>{class e{get(){return(0,i.Z)((function*(){const{dependencies:e}=yield n.e(7091).then(n.t.bind(n,77091,19)),{dependencies:t}=yield n.e(7311).then(n.t.bind(n,57311,19)),{dependencies:i,devDependencies:r}=yield n.e(6881).then(n.t.bind(n,66881,19));return{"@angular/cdk":i["@angular/cdk"],"@angular/core":i["@angular/core"],"@angular/common":i["@angular/common"],"@angular/compiler":i["@angular/compiler"],"@angular/forms":i["@angular/forms"],"@angular/localize":i["@angular/localize"],"@angular/platform-browser":i["@angular/platform-browser"],"@angular/platform-browser-dynamic":i["@angular/platform-browser-dynamic"],"@angular/animations":i["@angular/animations"],"@angular/router":i["@angular/router"],"@taiga-ui/cdk":y.Mle,"@taiga-ui/i18n":y.Mle,"@taiga-ui/core":y.Mle,"@taiga-ui/kit":y.Mle,"@taiga-ui/icons":y.Mle,"@taiga-ui/styles":y.Mle,"@ng-web-apis/common":t["@ng-web-apis/common"],"@ng-web-apis/resize-observer":t["@ng-web-apis/resize-observer"],"@ng-web-apis/mutation-observer":t["@ng-web-apis/mutation-observer"],"zone.js":i["zone.js"],dompurify:e.dompurify,typescript:r.typescript,rxjs:i.rxjs,"@tinkoff/tui-editor":"1.x.x","@tinkoff/ng-polymorpheus":t["@tinkoff/ng-polymorpheus"],"@tinkoff/ng-dompurify":e["@tinkoff/ng-dompurify"],"@tinkoff/ng-event-plugins":t["@tinkoff/ng-event-plugins"]}}))()}}return e.ɵfac=function(t){return new(t||e)},e.ɵprov=$.Yz7({token:e,factory:e.ɵfac,providedIn:"root"}),e})();class F{static getProjectFiles(){return(0,i.Z)((function*(){const[e,t,i,o,s,a]=yield Promise.all([n.e(3243).then(n.t.bind(n,63243,17)),n.e(9638).then(n.t.bind(n,89638,17)),n.e(2180).then(n.t.bind(n,92180,17)),n.e(2609).then(n.t.bind(n,2609,17)),n.e(740).then(n.t.bind(n,740,17)),n.e(4334).then(n.t.bind(n,4334,17))].map(r.JQ)),[l,c]=(0,r.vi)(e),[p]=(0,r.vi)(t),[u]=(0,r.vi)(i),[d]=(0,r.vi)(o),[m]=(0,r.vi)(s),[g]=(0,r.vi)(a);return{angularJson:l,tsconfig:c,mainTs:p,indexHtml:u,polyfills:d,appModuleTs:g,styles:m}}))()}}var S=n(18289);let z,x=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=$.Xpm({type:e,selectors:[["stackblitz-edit-button"]],standalone:!0,features:[$.jDz],decls:2,vars:0,consts:[["appearance","flat","icon","assets/icons/stackblitz.svg","size","s","tuiButton","","type","button"]],template:function(e,t){1&e&&($.TgZ(0,"button",0),$._uU(1," Edit "),$.qZA())},dependencies:[o.fNO,S.v],encapsulation:2,changeDetection:0}),e})(),M=e=>e;function N(e){return e===r.N0.TS||e.endsWith(".ts")}const O=e=>e.replace(/@import.+taiga-ui-local(.less)?';/g,"@import '@taiga-ui/core/styles/taiga-ui-local.less';"),E=(e,t="")=>`src/app/${e.join("")}${t}`;let T,I,U,A,P,D=e=>e;const Z=["./app.component.less"];let J=(()=>{class e{constructor(e){this.deps=e,this.name="Stackblitz",this.content=new w.Al(x)}edit(e,t,n){var o=this;return(0,i.Z)((function*(){if(!n.HTML||!n.TypeScript)return;const{appModuleTs:i}=yield F.getProjectFiles(),s=new C(i),a=new j(n.TypeScript),l=(p=n,Object.entries(p).filter((([e,t])=>t&&!function(e){return Object.values(r.N0).includes(e)}(e)))),c=l.filter((([e,t])=>N(e)&&new v(t).hasNgModule)).map((([e,t])=>[e,new C(t)]));var p;const u=(e=>e.filter((([e,t])=>N(e)&&new v(t).hasNgComponent)).map((([e,t])=>[e,new j(t).className])))(l),d=(e=>{const t={};return e.forEach((([e,n])=>{const i=E(z||(z=M`${0}`),e);t[i]=function(e){return e===r.N0.LESS||`${e}`.endsWith(".less")}(e)?O(n):n})),t})(l);return u.forEach((([e,t])=>{c.some((([e,n])=>n.hasDeclarationEntity(t)))||(s.addImport(t,`./${e}`),s.addDeclaration(t))})),a.selector="my-app",a.templateUrl="./app.component.html",a.styleUrls=Z,a.className="AppComponent",b(Object.assign(Object.assign({},yield o.getStackblitzProjectConfig()),{title:`${e}-${t}`,description:"TUI Editor example",files:Object.assign(Object.assign(Object.assign({},yield o.getBaseAngularProjectFiles()),d),{[E(T||(T=D`app.module.ts`))]:s.toString(),[E(I||(I=D`app.component.ts`))]:a.toString(),[E(U||(U=D`app.component.html`))]:`<tui-root>\n\n${n.HTML}\n</tui-root>`,[E(A||(A=D`app.component.less`))]:O(n.LESS||"")})}))}))()}openStarter({title:e,description:t,files:n},r){var o=this;return(0,i.Z)((function*(){return b(Object.assign(Object.assign({},yield o.getStackblitzProjectConfig()),{title:e,description:t,files:Object.assign(Object.assign({},yield o.getBaseAngularProjectFiles()),n)}),r)}))()}getBaseAngularProjectFiles(){return(0,i.Z)((function*(){const{tsconfig:e,angularJson:t,mainTs:n,polyfills:i,indexHtml:r,styles:o,appModuleTs:s}=yield F.getProjectFiles();return{"tsconfig.json":e,"angular.json":t,"src/main.ts":n,"src/polyfills.ts":i,"src/index.html":r,"src/styles.less":o,[E(P||(P=D`app.module.ts`))]:s.toString()}}))()}getStackblitzProjectConfig(){var e=this;return(0,i.Z)((function*(){return{template:"angular-cli",dependencies:yield e.deps.get(),tags:["Angular","Taiga UI","Angular components","UI Kit"]}}))()}}return e.ɵfac=function(t){return new(t||e)($.LFG(k))},e.ɵprov=$.Yz7({token:e,factory:e.ɵfac}),e})();var _=n(57634);let B,H,L,R,W=e=>e,Q=(()=>{class e{constructor(e){this.stackblitz=e}ngOnInit(){var e=this;return(0,i.Z)((function*(){yield e.openStackblitz()}))()}openStackblitz(){var e=this;return(0,i.Z)((function*(){const[t,i,o,s]=yield Promise.all([n.e(7145).then(n.t.bind(n,7145,17)),n.e(7976).then(n.t.bind(n,7976,17)),n.e(5776).then(n.t.bind(n,45776,17)),n.e(52).then(n.t.bind(n,10052,17))].map(r.JQ)).then((e=>e.map((e=>(0,r.vi)(e)[0]))));return e.stackblitz.openStarter({title:"TUI Editor Starter",description:"A starter for TUI Editor\nDocumentation: https://taiga-family.github.io/tui-editor",files:{"src/index.html":o,"src/styles.less":s,[E(B||(B=W`app.component.html`))]:t,[E(H||(H=W`app.component.ts`))]:i,[E(L||(L=W`app.component.less`))]:"@import '@taiga-ui/core/styles/taiga-ui-local.less';"}},{newWindow:!1,openFile:E(R||(R=W`app.component.html`)),hideExplorer:!0})}))()}}return e.ɵfac=function(t){return new(t||e)($.Y36(J))},e.ɵcmp=$.Xpm({type:e,selectors:[["demo-stackblitz-starter"]],standalone:!0,features:[$._Bn([J]),$.jDz],decls:1,vars:1,consts:[["size","xxl","textContent","Stackblitz loading...",1,"loader",3,"overlay"]],template:function(e,t){1&e&&$._UZ(0,"tui-loader",0),2&e&&$.Q6J("overlay",!0)},dependencies:[o.dSp,_.k],styles:[".loader[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;background:var(--tui-base-01);z-index:1}"],changeDetection:0}),e})()}}]);