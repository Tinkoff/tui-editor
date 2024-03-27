(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8669],{78669:(e,t,i)=>{i.r(t),i.d(t,{ExampleTuiEditorUploadImagesModule:()=>_});var o=i(12057),r=i(24751),n=i(34016),a=i(47029),s=i(42600),u=i(43232),d=i(64962),c=i(37195),l=i(74788),p=i(15997),g=i(73460),m=i(42328),h=i(22759),v=i(87874),f=i(88002),b=i(43190),L=i(68939);function T(e){return t=>{const i=new FileReader;return e.loading$.next(!0),i.readAsDataURL(t),(0,h.R)(i,"load").pipe((0,v.g)(2e3),(0,f.U)((()=>String(i.result))),(0,b.w)((t=>e.save(t))),(0,L.x)((()=>e.loading$.next(!1))))}}var Z=i(97582),y=i(26215),w=i(97968);let I=(()=>{class e{constructor(){this.loading$=new y.X(!1)}static createBody(e){const t=new FormData;return t.append("image",e.split(",").pop()||""),new URLSearchParams(t)}get isLoading(){return this.loading$.getValue()}save(t){return(0,w.D)(fetch("https://api.imgbb.com/1/upload?key=3c1615980dcf693b282c4b0fb608b28a&expiration=300",{method:"POST",body:e.createBody(t),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((e=>(0,Z.mG)(this,void 0,void 0,(function*(){return e.json()}))))).pipe((0,f.U)((e=>e.data.url)))}}return e.ɵfac=function(t){return new(t||e)},e.ɵprov=l.Yz7({token:e,factory:e.ɵfac,providedIn:"root"}),e})();var x=i(57634),j=i(8820),A=i(66161),M=i(24956),S=i(76690),N=i(18569);const D=function(){return[]};let U=(()=>{class e{constructor(e,t,i){this.doc=e,this.imgbbService=t,this.isStackblitz=i,this.relativePath=this.isStackblitz?"https://taiga-ui.dev/":"",this.builtInTools=[c._2.Undo,c._2.Img],this.control=new r.NI(""),this.validator=({value:e})=>{var t;return(null===(t=this.editor)||void 0===t?void 0:t.focused)||this.imgbbService.isLoading||!this.doc.hasFocus()||e.length?null:{empty:new s.T8v("ERROR: content must not be empty")}},this.control.patchValue(`\n                <img data-type="image-editor" src="${this.relativePath}assets/images/lumberjack.png" width="300">\n                <p>Try to drag right border of image!</p>\n                <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.</p>\n                <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDUwIDUwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjxzdHlsZT4uYXtmaWxsOiNkZDAwMzF9LmJ7ZmlsbDojYzMwMDJmfS5je2ZpbGw6I2ZmZn08L3N0eWxlPjxwYXRoIGNsYXNzPSJhIiBkPSJtNDMuNiAxMi42bC0yLjggMjQuNy0xNS44IDguNy0xNS44LTguNy0yLjgtMjQuNyAxOC42LTYuNnoiLz48cGF0aCBjbGFzcz0iYiIgZD0ibTI1IDZsMTguNiA2LjYtMi44IDI0LjctMTUuOCA4Ljd2LTE1LjMtMjAuMy00LjR6Ii8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGFzcz0iYyIgZD0ibTM2LjYgMzYuNWgtNC4zbC0yLjQtNS44aC05LjlsLTIuMyA1LjhoLTQuM2wxMS42LTI2LjF6bS0xMS42LTE3LjZsLTMuNCA4LjJoNi44eiIvPjwvc3ZnPg==" />`)}}return e.ɵfac=function(t){return new(t||e)(l.Y36(o.K0),l.Y36(I),l.Y36(s.SgE))},e.ɵcmp=l.Xpm({type:e,selectors:[["tui-editor-upload-images-example-1"]],viewQuery:function(e,t){if(1&e&&l.Gf(c.aI,7),2&e){let e;l.iGM(e=l.CRH())&&(t.editor=e.first)}},features:[l._Bn([s.a31,{provide:c.Wf,deps:[l.gxx],useFactory:e=>[Promise.resolve().then(i.bind(i,28730)).then((({StarterKit:e})=>e)),Promise.resolve().then(i.bind(i,89681)).then((({createImageEditorExtension:t})=>t(e))),Promise.resolve().then(i.bind(i,44632)).then((({default:e})=>e.configure({inline:!0,allowBase64:!0})))]},{provide:c.kB,useValue:150},{provide:c.VE,useValue:400},{provide:c.p7,useFactory:T,deps:[I]}])],decls:13,vars:16,consts:[[3,"overlay","showLoader"],[1,"editor",3,"formControl","tools","tuiValidator"],[3,"error","formControl"],[3,"content"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-loader",0),l.ALo(1,"async"),l._UZ(2,"tui-editor",1),l.qZA(),l._UZ(3,"tui-error",2),l.ALo(4,"async"),l.ALo(5,"tuiFieldError"),l.TgZ(6,"h4"),l._uU(7,"HTML:"),l.qZA(),l._UZ(8,"tui-editor-socket",3),l.TgZ(9,"h4"),l._uU(10,"Text:"),l.qZA(),l.TgZ(11,"p"),l._uU(12),l.qZA()),2&e&&(l.Q6J("overlay",!0)("showLoader",!!l.lcZ(1,9,t.imgbbService.loading$)),l.xp6(2),l.Q6J("formControl",t.control)("tools",t.builtInTools)("tuiValidator",t.validator),l.xp6(1),l.Q6J("error",l.lcZ(4,11,l.lcZ(5,13,l.DdM(15,D))))("formControl",t.control),l.xp6(5),l.Q6J("content",t.control.value||""),l.xp6(4),l.Oqu(t.control.value))},directives:[x.k,j.a,r.JJ,r.oH,A.W,M.v,S.D],pipes:[o.Ov,N.A],encapsulation:2,changeDetection:0}),e})(),z=(()=>{class e{constructor(){this.example1={TypeScript:i.e(585).then(i.t.bind(i,30585,17)),HTML:i.e(6042).then(i.t.bind(i,46036,17)),"image-loader.ts":i.e(5227).then(i.t.bind(i,5227,17)),"imgbb.service.ts":i.e(1646).then(i.t.bind(i,61646,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=l.Xpm({type:e,selectors:[["editor-upload-images"]],features:[l._Bn([{provide:c.Wf,useValue:c.PD}])],decls:11,vars:1,consts:[["header","Editor","type","components"],["href","https://www.tiptap.dev/","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["id","upload-images","heading","Upload images to a web server",3,"content"]],template:function(e,t){1&e&&(l.TgZ(0,"tui-doc-page",0),l.TgZ(1,"p"),l._uU(2," Rich Text Editor based on "),l.TgZ(3,"a",1),l._uU(4," TipTap Editor "),l.qZA(),l._uU(5," for using with Angular forms. For safety reasons use a "),l.TgZ(6,"a",2),l._uU(7," sanitizer "),l.qZA(),l._uU(8," with this component. "),l.qZA(),l.TgZ(9,"tui-doc-example",3),l._UZ(10,"tui-editor-upload-images-example-1"),l.qZA(),l.qZA()),2&e&&(l.xp6(9),l.Q6J("content",t.example1))},directives:[p.q,g.V,n.yS,m.f,U],encapsulation:2,changeDetection:0}),e})(),_=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=l.oAB({type:e}),e.ɵinj=l.cJS({imports:[[o.ez,s.Ah6,u.EIu,u.jzK,u.jhF,u.fNO,a.fV,r.u5,r.UX,c.T_,u.dSp,c.GK,u.Shu,d.YuV,n.Bz.forChild((0,a.Ve)(z)),s.op3]]}),e})()}}]);