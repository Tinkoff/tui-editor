(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7702],{7702:(e,t,s)=>{s.r(t),s.d(t,{default:()=>se});var r=s(20755),n=s(71209),o=s(3489),a=s(48132),i=s(70109),h=s(55333),l=s(92425),d=s(36293),u=s(84787),p=s(76733);class c{}class m{}class f{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?"string"==typeof e?this.lazyInit=()=>{this.headers=new Map,e.split("\n").forEach((e=>{const t=e.indexOf(":");if(t>0){const s=e.slice(0,t),r=s.toLowerCase(),n=e.slice(t+1).trim();this.maybeSetNormalizedName(s,r),this.headers.has(r)?this.headers.get(r).push(n):this.headers.set(r,[n])}}))}:"undefined"!=typeof Headers&&e instanceof Headers?(this.headers=new Map,e.forEach(((e,t)=>{this.setHeaderEntries(t,e)}))):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach((([e,t])=>{this.setHeaderEntries(e,t)}))}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();const t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof f?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach((e=>this.applyUpdate(e))),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach((t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))}))}clone(e){const t=new f;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof f?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){const t=e.name.toLowerCase();switch(e.op){case"a":case"s":let s=e.value;if("string"==typeof s&&(s=[s]),0===s.length)return;this.maybeSetNormalizedName(e.name,t);const r=("a"===e.op?this.headers.get(t):void 0)||[];r.push(...s),this.headers.set(t,r);break;case"d":const n=e.value;if(n){let e=this.headers.get(t);if(!e)return;e=e.filter((e=>-1===n.indexOf(e))),0===e.length?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,e)}else this.headers.delete(t),this.normalizedNames.delete(t)}}setHeaderEntries(e,t){const s=(Array.isArray(t)?t:[t]).map((e=>e.toString())),r=e.toLowerCase();this.headers.set(r,s),this.maybeSetNormalizedName(e,r)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach((t=>e(this.normalizedNames.get(t),this.headers.get(t))))}}class y{encodeKey(e){return v(e)}encodeValue(e){return v(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}}const g=/%(\d[a-f0-9])/gi,b={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function v(e){return encodeURIComponent(e).replace(g,((e,t)=>b[t]??e))}function w(e){return`${e}`}class T{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new y,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(e,t){const s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach((e=>{const r=e.indexOf("="),[n,o]=-1==r?[t.decodeKey(e),""]:[t.decodeKey(e.slice(0,r)),t.decodeValue(e.slice(r+1))],a=s.get(n)||[];a.push(o),s.set(n,a)})),s}(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach((t=>{const s=e.fromObject[t],r=Array.isArray(s)?s.map(w):[w(s)];this.map.set(t,r)}))):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();const t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){const t=[];return Object.keys(e).forEach((s=>{const r=e[s];Array.isArray(r)?r.forEach((e=>{t.push({param:s,value:e,op:"a"})})):t.push({param:s,value:r,op:"a"})})),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map((e=>{const t=this.encoder.encodeKey(e);return this.map.get(e).map((e=>t+"="+this.encoder.encodeValue(e))).join("&")})).filter((e=>""!==e)).join("&")}clone(e){const t=new T({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach((e=>this.map.set(e,this.cloneFrom.map.get(e)))),this.updates.forEach((e=>{switch(e.op){case"a":case"s":const t=("a"===e.op?this.map.get(e.param):void 0)||[];t.push(w(e.value)),this.map.set(e.param,t);break;case"d":if(void 0===e.value){this.map.delete(e.param);break}{let t=this.map.get(e.param)||[];const s=t.indexOf(w(e.value));-1!==s&&t.splice(s,1),t.length>0?this.map.set(e.param,t):this.map.delete(e.param)}}})),this.cloneFrom=this.updates=null)}}class E{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}}function x(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer}function C(e){return"undefined"!=typeof Blob&&e instanceof Blob}function P(e){return"undefined"!=typeof FormData&&e instanceof FormData}class k{constructor(e,t,s,r){let n;if(this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase(),function(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==s?s:null,n=r):n=s,n&&(this.reportProgress=!!n.reportProgress,this.withCredentials=!!n.withCredentials,n.responseType&&(this.responseType=n.responseType),n.headers&&(this.headers=n.headers),n.context&&(this.context=n.context),n.params&&(this.params=n.params)),this.headers||(this.headers=new f),this.context||(this.context=new E),this.params){const e=this.params.toString();if(0===e.length)this.urlWithParams=t;else{const s=t.indexOf("?"),r=-1===s?"?":s<t.length-1?"&":"";this.urlWithParams=t+r+e}}else this.params=new T,this.urlWithParams=t}serializeBody(){return null===this.body?null:x(this.body)||C(this.body)||P(this.body)||(e=this.body,"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams)||"string"==typeof this.body?this.body:this.body instanceof T?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString();var e}detectContentTypeHeader(){return null===this.body||P(this.body)?null:C(this.body)?this.body.type||null:x(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof T?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(e={}){const t=e.method||this.method,s=e.url||this.url,r=e.responseType||this.responseType,n=void 0!==e.body?e.body:this.body,o=void 0!==e.withCredentials?e.withCredentials:this.withCredentials,a=void 0!==e.reportProgress?e.reportProgress:this.reportProgress;let i=e.headers||this.headers,h=e.params||this.params;const l=e.context??this.context;return void 0!==e.setHeaders&&(i=Object.keys(e.setHeaders).reduce(((t,s)=>t.set(s,e.setHeaders[s])),i)),e.setParams&&(h=Object.keys(e.setParams).reduce(((t,s)=>t.set(s,e.setParams[s])),h)),new k(t,s,n,{params:h,headers:i,context:l,reportProgress:a,responseType:r,withCredentials:o})}}var L=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(L||{});class O{constructor(e,t=200,s="OK"){this.headers=e.headers||new f,this.status=void 0!==e.status?e.status:t,this.statusText=e.statusText||s,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}}class I extends O{constructor(e={}){super(e),this.type=L.ResponseHeader}clone(e={}){return new I({headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class R extends O{constructor(e={}){super(e),this.type=L.Response,this.body=void 0!==e.body?e.body:null}clone(e={}){return new R({body:void 0!==e.body?e.body:this.body,headers:e.headers||this.headers,status:void 0!==e.status?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}}class S extends O{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}}function A(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials}}let U=(()=>{var e;class t{constructor(e){this.handler=e}request(e,t,s={}){let r;if(e instanceof k)r=e;else{let n,o;n=s.headers instanceof f?s.headers:new f(s.headers),s.params&&(o=s.params instanceof T?s.params:new T({fromObject:s.params})),r=new k(e,t,void 0!==s.body?s.body:null,{headers:n,context:s.context,params:o,reportProgress:s.reportProgress,responseType:s.responseType||"json",withCredentials:s.withCredentials})}const o=(0,n.of)(r).pipe((0,i.b)((e=>this.handler.handle(e))));if(e instanceof k||"events"===s.observe)return o;const a=o.pipe((0,h.h)((e=>e instanceof R)));switch(s.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe((0,l.U)((e=>{if(null!==e.body&&!(e.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return e.body})));case"blob":return a.pipe((0,l.U)((e=>{if(null!==e.body&&!(e.body instanceof Blob))throw new Error("Response is not a Blob.");return e.body})));case"text":return a.pipe((0,l.U)((e=>{if(null!==e.body&&"string"!=typeof e.body)throw new Error("Response is not a string.");return e.body})));default:return a.pipe((0,l.U)((e=>e.body)))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${s.observe}}`)}}delete(e,t={}){return this.request("DELETE",e,t)}get(e,t={}){return this.request("GET",e,t)}head(e,t={}){return this.request("HEAD",e,t)}jsonp(e,t){return this.request("JSONP",e,{params:(new T).append(t,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,t={}){return this.request("OPTIONS",e,t)}patch(e,t,s={}){return this.request("PATCH",e,A(s,t))}post(e,t,s={}){return this.request("POST",e,A(s,t))}put(e,t,s={}){return this.request("PUT",e,A(s,t))}}return(e=t).ɵfac=function(t){return new(t||e)(r.LFG(c))},e.ɵprov=r.Yz7({token:e,factory:e.ɵfac}),t})();function N(e,t){return t(e)}function z(e,t){return(s,r)=>t.intercept(s,{handle:t=>e(t,r)})}const F=new r.OlP(""),H=new r.OlP(""),j=new r.OlP("");function M(){let e=null;return(t,s)=>{if(null===e){const t=(0,r.f3M)(F,{optional:!0})??[];e=t.reduceRight(z,N)}const n=(0,r.f3M)(r.HDt),o=n.add();return e(t,s).pipe((0,d.x)((()=>n.remove(o))))}}let _=(()=>{var e;class t extends c{constructor(e,t){super(),this.backend=e,this.injector=t,this.chain=null,this.pendingTasks=(0,r.f3M)(r.HDt)}handle(e){if(null===this.chain){const e=Array.from(new Set([...this.injector.get(H),...this.injector.get(j,[])]));this.chain=e.reduceRight(((e,t)=>function(e,t,s){return(r,n)=>s.runInContext((()=>t(r,(t=>e(t,n)))))}(e,t,this.injector)),N)}const t=this.pendingTasks.add();return this.chain(e,(e=>this.backend.handle(e))).pipe((0,d.x)((()=>this.pendingTasks.remove(t))))}}return(e=t).ɵfac=function(t){return new(t||e)(r.LFG(m),r.LFG(r.lqb))},e.ɵprov=r.Yz7({token:e,factory:e.ɵfac}),t})();const D=/^\)\]\}',?\n/;let q=(()=>{var e;class t{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new r.vHH(-2800,!1);const t=this.xhrFactory;return(t.ɵloadImpl?(0,o.D)(t.ɵloadImpl()):(0,n.of)(null)).pipe((0,u.w)((()=>new a.y((s=>{const r=t.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach(((e,t)=>r.setRequestHeader(e,t.join(",")))),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const t=e.detectContentTypeHeader();null!==t&&r.setRequestHeader("Content-Type",t)}if(e.responseType){const t=e.responseType.toLowerCase();r.responseType="json"!==t?t:"text"}const n=e.serializeBody();let o=null;const a=()=>{if(null!==o)return o;const t=r.statusText||"OK",s=new f(r.getAllResponseHeaders()),n=function(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}(r)||e.url;return o=new I({headers:s,status:r.status,statusText:t,url:n}),o},i=()=>{let{headers:t,status:n,statusText:o,url:i}=a(),h=null;204!==n&&(h=void 0===r.response?r.responseText:r.response),0===n&&(n=h?200:0);let l=n>=200&&n<300;if("json"===e.responseType&&"string"==typeof h){const e=h;h=h.replace(D,"");try{h=""!==h?JSON.parse(h):null}catch(t){h=e,l&&(l=!1,h={error:t,text:h})}}l?(s.next(new R({body:h,headers:t,status:n,statusText:o,url:i||void 0})),s.complete()):s.error(new S({error:h,headers:t,status:n,statusText:o,url:i||void 0}))},h=e=>{const{url:t}=a(),n=new S({error:e,status:r.status||0,statusText:r.statusText||"Unknown Error",url:t||void 0});s.error(n)};let l=!1;const d=t=>{l||(s.next(a()),l=!0);let n={type:L.DownloadProgress,loaded:t.loaded};t.lengthComputable&&(n.total=t.total),"text"===e.responseType&&r.responseText&&(n.partialText=r.responseText),s.next(n)},u=e=>{let t={type:L.UploadProgress,loaded:e.loaded};e.lengthComputable&&(t.total=e.total),s.next(t)};return r.addEventListener("load",i),r.addEventListener("error",h),r.addEventListener("timeout",h),r.addEventListener("abort",h),e.reportProgress&&(r.addEventListener("progress",d),null!==n&&r.upload&&r.upload.addEventListener("progress",u)),r.send(n),s.next({type:L.Sent}),()=>{r.removeEventListener("error",h),r.removeEventListener("abort",h),r.removeEventListener("load",i),r.removeEventListener("timeout",h),e.reportProgress&&(r.removeEventListener("progress",d),null!==n&&r.upload&&r.upload.removeEventListener("progress",u)),r.readyState!==r.DONE&&r.abort()}})))))}}return(e=t).ɵfac=function(t){return new(t||e)(r.LFG(p.JF))},e.ɵprov=r.Yz7({token:e,factory:e.ɵfac}),t})();const B=new r.OlP("XSRF_ENABLED"),X=new r.OlP("XSRF_COOKIE_NAME",{providedIn:"root",factory:()=>"XSRF-TOKEN"}),J=new r.OlP("XSRF_HEADER_NAME",{providedIn:"root",factory:()=>"X-XSRF-TOKEN"});class G{}let K=(()=>{var e;class t{constructor(e,t,s){this.doc=e,this.platform=t,this.cookieName=s,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,p.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return(e=t).ɵfac=function(t){return new(t||e)(r.LFG(p.K0),r.LFG(r.Lbi),r.LFG(X))},e.ɵprov=r.Yz7({token:e,factory:e.ɵfac}),t})();function V(e,t){const s=e.url.toLowerCase();if(!(0,r.f3M)(B)||"GET"===e.method||"HEAD"===e.method||s.startsWith("http://")||s.startsWith("https://"))return t(e);const n=(0,r.f3M)(G).getToken(),o=(0,r.f3M)(J);return null==n||e.headers.has(o)||(e=e.clone({headers:e.headers.set(o,n)})),t(e)}var $=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}($||{});function Z(...e){const t=[U,q,_,{provide:c,useExisting:_},{provide:m,useExisting:q},{provide:H,useValue:V,multi:!0},{provide:B,useValue:!0},{provide:G,useClass:K}];for(const s of e)t.push(...s.ɵproviders);return(0,r.MR2)(t)}const W=new r.OlP("LEGACY_INTERCEPTOR_FN");let Y=(()=>{var e,t,s;class n{}return(e=n).ɵfac=function(t){return new(t||e)},e.ɵmod=r.oAB({type:e}),e.ɵinj=r.cJS({providers:[Z((t=$.LegacyInterceptors,s=[{provide:W,useFactory:M},{provide:H,useExisting:W,multi:!0}],{ɵkind:t,ɵproviders:s}))]}),n})();var Q=s(62022),ee=s(43226),te=s(14407);const se=(()=>{var e;class t{constructor(){this.imageLoader=(0,r.f3M)(te.TUI_IMAGE_LOADER),this.builtInTools=[te.TuiEditorTool.Undo,te.TuiEditorTool.Img],this.base64Image$=(0,r.f3M)(U).get("assets/images/lumberjack.png",{responseType:"blob"}).pipe((0,u.w)((e=>this.imageLoader(e)))),this.control=new ee.NI(""),this.base64Image$.pipe((0,Q.sL)()).subscribe((e=>{this.control.patchValue(`\n                    <img src="${e}" width="300" alt="" />\n                    <p>Try to drag right border of image!</p>\n                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.\n                `)}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=r.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[r._Bn([{provide:te.TUI_EDITOR_EXTENSIONS,deps:[r.zs3],useFactory:e=>[Promise.resolve().then(s.bind(s,14407)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(s.bind(s,14407)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}]),r.jDz],decls:8,vars:4,consts:[[1,"editor",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(r._UZ(0,"tui-editor",0),r.TgZ(1,"h4"),r._uU(2,"HTML:"),r.qZA(),r._UZ(3,"tui-editor-socket",1),r.TgZ(4,"h4"),r._uU(5,"Text:"),r.qZA(),r.TgZ(6,"p"),r._uU(7),r.qZA()),2&e&&(r.Q6J("formControl",t.control)("tools",t.builtInTools),r.xp6(3),r.Q6J("content",t.control.value||""),r.xp6(4),r.Oqu(t.control.value))},dependencies:[ee.UX,ee.JJ,ee.oH,Y,te.TuiEditorSocket,te.TuiEditor],encapsulation:2,changeDetection:0}),t})()}}]);