(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8841],{78841:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiEditorPreviewImagesToolModule:()=>E});var n=i(12057),r=i(24751),o=i(34016),a=i(47029),s=i(42600),c=i(43232),l=i(37195),p=i(74788),u=i(15997),m=i(73460),g=i(42328),d=i(8820),w=i(76690);let h=(()=>{class e{constructor(){this.imagePreview=new p.vpe}click(e){e instanceof HTMLImageElement&&this.imagePreview.emit(e)}}return e.ɵfac=function(t){return new(t||e)},e.ɵdir=p.lG2({type:e,selectors:[["tui-editor-socket","imagePreview",""]],hostAttrs:[1,"_preview-image"],hostBindings:function(e,t){1&e&&p.NdJ("click",(function(e){return t.click(e.target)}))},outputs:{imagePreview:"imagePreview"}}),e})();var v=i(83044),f=i(3017),b=i(18289),Z=i(26922);const T=["previewImages"];function y(e,t){if(1&e&&p._UZ(0,"img",4),2&e){const e=p.oxw(2);p.Q6J("src",e.image.src,p.LSH)}}function _(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-preview",1),p.YNc(1,y,1,1,"img",2),p.TgZ(2,"button",3),p.NdJ("click",(function(){return p.CHM(e).$implicit.complete()})),p.qZA(),p.qZA()}if(2&e){const e=p.oxw();p.Q6J("rotatable",!0),p.xp6(1),p.Q6J("ngIf",e.image)}}let k=(()=>{class e{constructor(e){this.dialogs=e}showImage(e){this.image=e,this.dialogs.open(this.template||"").subscribe()}}return e.ɵfac=function(t){return new(t||e)(p.Y36(v.iK))},e.ɵcmp=p.Xpm({type:e,selectors:[["image-preview-example"]],viewQuery:function(e,t){if(1&e&&p.Gf(T,5),2&e){let e;p.iGM(e=p.CRH())&&(t.template=e.first)}},decls:2,vars:0,consts:[["previewImages",""],[3,"rotatable"],["alt","","loading","lazy","class","t-image-preview",3,"src",4,"ngIf"],["icon","tuiIconCloseLarge","title","Close","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","","loading","lazy",1,"t-image-preview",3,"src"]],template:function(e,t){1&e&&p.YNc(0,_,3,2,"ng-template",null,0,p.W1O)},directives:[f.m,n.O5,b.v,Z.v],styles:[".t-image-preview[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),e})(),P=(()=>{class e{constructor(e){this.isStackblitz=e,this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[l._2.Undo,l._2.Img],this.control=new r.NI(""),this.control.patchValue(`<p>Small image</p><img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300"><p>Big image</p><img data-type="image-editor" src="${this.relativePath}assets/images/big-wallpaper.jpg" width="500">`)}}return e.ɵfac=function(t){return new(t||e)(p.Y36(s.SgE))},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-editor-preview-images-example-1"]],features:[p._Bn([s.a31,{provide:l.Wf,deps:[p.zs3],useFactory:e=>[Promise.resolve().then(i.bind(i,93107)).then((({StarterKit:e})=>e)),Promise.resolve().then(i.bind(i,89681)).then((({tuiCreateImageEditorExtension:t})=>t({injector:e})))]}])],decls:6,vars:3,consts:[[1,"editor",3,"formControl","tools"],[3,"content","imagePreview"],["preview",""]],template:function(e,t){if(1&e){const e=p.EpF();p._UZ(0,"tui-editor",0),p.TgZ(1,"h4"),p._uU(2,"HTML:"),p.qZA(),p.TgZ(3,"tui-editor-socket",1),p.NdJ("imagePreview",(function(t){return p.CHM(e),p.MAs(5).showImage(t)})),p._UZ(4,"image-preview-example",null,2),p.qZA()}2&e&&(p.Q6J("formControl",t.control)("tools",t.builtInTools),p.xp6(3),p.Q6J("content",t.control.value||""))},directives:[d.a,r.JJ,r.oH,w.D,h,k],encapsulation:2,changeDetection:0}),e})(),A=(()=>{class e{constructor(){this.example1={TypeScript:i.e(7013).then(i.t.bind(i,7013,17)),HTML:i.e(8712).then(i.t.bind(i,48712,17)),"image-preview/image-preview.template.html":i.e(9095).then(i.t.bind(i,99095,17)),"image-preview/image-preview.style.less":i.e(8537).then(i.t.bind(i,68537,17)),"image-preview/image-preview.component.ts":i.e(1023).then(i.t.bind(i,91023,17)),"image-preview/image-preview.module.ts":i.e(1447).then(i.t.bind(i,81447,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["editor-preview-images"]],features:[p._Bn([{provide:l.Wf,useValue:l.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","preview-image","heading","Preview for images",3,"content"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.TgZ(1,"p"),p._uU(2," Rich Text Editor based on "),p.TgZ(3,"a",1),p._uU(4," TipTap Editor "),p.qZA(),p._uU(5," for using with Angular forms. For safety reasons use a "),p.TgZ(6,"a",2),p._uU(7," sanitizer "),p.qZA(),p._uU(8," with this component. "),p.qZA(),p.TgZ(9,"tui-doc-example",3),p._UZ(10,"tui-editor-preview-images-example-1"),p.qZA(),p.qZA()),2&e&&(p.xp6(9),p.Q6J("content",t.example1))},directives:[u.q,m.V,o.yS,g.f,P],encapsulation:2,changeDetection:0}),e})();var I=i(89570);let x=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[n.ez,v.E6,c.fNO,I.wq,l.BN],l.BN,l.BN]}),e})(),E=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[n.ez,s.Ah6,c.EIu,c.jzK,c.jhF,c.fNO,a.fV,r.u5,r.UX,l.T_,l.GK,x,o.Bz.forChild((0,a.Ve)(A))]]}),e})()}}]);