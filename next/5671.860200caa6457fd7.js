(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5671],{5671:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var o=i(20755),n=i(43226),s=i(21996),a=i(24031),r=i(40239),c=i(76733),l=i(45599),m=i(80190),p=i(90090);const u=["previewImages"];function g(e,t){if(1&e&&o._UZ(0,"img",4),2&e){const e=o.oxw(2);o.Q6J("src",e.image.src,o.LSH)}}function d(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"tui-preview",1),o.YNc(1,g,1,1,"img",2),o.TgZ(2,"button",3),o.NdJ("click",(function(){const t=o.CHM(e).$implicit;return o.KtG(t.complete())})),o.qZA()()}if(2&e){const e=o.oxw();o.Q6J("rotatable",!0),o.xp6(1),o.Q6J("ngIf",e.image)}}let h=(()=>{var e;class t{constructor(){this.dialogs=(0,o.f3M)(s.iK)}showImage(e){this.image=e,this.dialogs.open(this.template||"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["image-preview-example"]],viewQuery:function(e,t){if(1&e&&o.Gf(u,5),2&e){let e;o.iGM(e=o.CRH())&&(t.template=e.first)}},standalone:!0,features:[o.jDz],decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["alt","","loading","lazy","class","t-image-preview",3,"src",4,"ngIf"],["iconLeft","tuiIconClose","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","","loading","lazy",1,"t-image-preview",3,"src"]],template:function(e,t){1&e&&o.YNc(0,d,3,2,"ng-template",null,0,o.W1O)},dependencies:[s.E6,m.m,p.v,l.m$g,c.O5],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})();const f=(()=>{var e;class t{constructor(){this.isStackblitz=(0,o.f3M)(a.SgE),this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[r.TuiEditorTool.Undo,r.TuiEditorTool.Img],this.control=new n.NI(""),this.control.patchValue(`<p>Small image</p><img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500">`)}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[o._Bn([a.a31,{provide:r.TUI_EDITOR_EXTENSIONS,deps:[o.zs3],useFactory:e=>[Promise.resolve().then(i.bind(i,40239)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(i.bind(i,40239)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}]),o.jDz],decls:6,vars:3,consts:[[1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(e,t){if(1&e){const e=o.EpF();o._UZ(0,"tui-editor",0),o.TgZ(1,"h4"),o._uU(2,"HTML:"),o.qZA(),o.TgZ(3,"tui-editor-socket",1),o.NdJ("imagePreview",(function(t){o.CHM(e);const i=o.MAs(5);return o.KtG(i.showImage(t))})),o._UZ(4,"image-preview-example",null,2),o.qZA()}2&e&&(o.Q6J("formControl",t.control)("tools",t.builtInTools),o.xp6(3),o.Q6J("content",t.control.value||""))},dependencies:[h,n.UX,n.JJ,n.oH,s.E6,r.TuiEditorSocketComponent,r.TuiEditorImagePreviewDirective,r.TuiEditorComponent],encapsulation:2,changeDetection:0}),t})()}}]);