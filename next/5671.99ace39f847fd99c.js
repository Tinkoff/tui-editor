(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5671],{5671:(e,t,i)=>{i.r(t),i.d(t,{default:()=>g});var o=i(20755),n=i(43226),s=i(58964),r=i(76733),a=i(68704),c=i(96617);const l=["previewImages"];function u(e,t){if(1&e&&o._UZ(0,"img",4),2&e){const e=o.oxw(2);o.Q6J("src",e.image.src,o.LSH)}}function p(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"tui-preview",1),o.YNc(1,u,1,1,"img",2),o.TgZ(2,"button",3),o.NdJ("click",(function(){const t=o.CHM(e).$implicit;return o.KtG(t.complete())})),o.qZA()()}if(2&e){const e=o.oxw();o.Q6J("rotatable",!0),o.xp6(1),o.Q6J("ngIf",e.image)}}let m=(()=>{var e;class t{constructor(){this.dialogs=(0,o.f3M)(c.iK2)}showImage(e){this.image=e,this.dialogs.open(this.template||"").subscribe()}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["image-preview-example"]],viewQuery:function(e,t){if(1&e&&o.Gf(l,5),2&e){let e;o.iGM(e=o.CRH())&&(t.template=e.first)}},standalone:!0,features:[o.jDz],decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["alt","","loading","lazy","class","t-image-preview",3,"src",4,"ngIf"],["iconStart","@tui.x","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","","loading","lazy",1,"t-image-preview",3,"src"]],template:function(e,t){1&e&&o.YNc(0,p,3,2,"ng-template",null,0,o.W1O)},dependencies:[r.O5,a.xGO,c.mEE,c.N8p],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})();const g=(()=>{var e;class t{constructor(){this.builtInTools=[s.TuiEditorTool.Undo,s.TuiEditorTool.Img],this.control=new n.NI(""),this.control.patchValue('<p>Small image</p><img src="assets/images/lumberjack.png" width="300" /><p>Big image</p><img src="assets/images/big-wallpaper.jpg" width="500" />')}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=o.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[o._Bn([{provide:s.TUI_EDITOR_EXTENSIONS,deps:[o.zs3],useFactory:e=>[Promise.resolve().then(i.bind(i,58964)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(i.bind(i,58964)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}]),o.jDz],decls:6,vars:3,consts:[[1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(e,t){if(1&e){const e=o.EpF();o._UZ(0,"tui-editor",0),o.TgZ(1,"h4"),o._uU(2,"HTML:"),o.qZA(),o.TgZ(3,"tui-editor-socket",1),o.NdJ("imagePreview",(function(t){o.CHM(e);const i=o.MAs(5);return o.KtG(i.showImage(t))})),o._UZ(4,"image-preview-example",null,2),o.qZA()}2&e&&(o.Q6J("formControl",t.control)("tools",t.builtInTools),o.xp6(3),o.Q6J("content",t.control.value||""))},dependencies:[m,n.UX,n.JJ,n.oH,s.TuiEditor,s.TuiEditorImagePreview,s.TuiEditorSocket],encapsulation:2,changeDetection:0}),t})()}}]);