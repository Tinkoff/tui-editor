(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1778],{71778:(t,e,o)=>{o.r(e),o.d(e,{default:()=>v});var n=o(20755),i=o(43226),r=o(24031),s=o(45599),l=o(40239),a=o(33446),c=o(44336),u=o(39986),d=o(60598);const p=["dropdown"];function g(t,e){if(1&t){const t=n.EpF();n.TgZ(0,"div",4)(1,"label",5)(2,"div",6),n._uU(3,"Image URL"),n.qZA(),n.TgZ(4,"div",7)(5,"tui-input-inline",8),n.NdJ("ngModelChange",(function(e){n.CHM(t);const o=n.oxw();return n.KtG(o.url=e)}))("keydown.enter",(function(){n.CHM(t);const e=n.oxw();return n.KtG(e.insertImage(e.url))})),n._uU(6),n.qZA()()()()}if(2&t){const t=e.$implicit,o=n.oxw();n.Q6J("tuiActiveZoneParent",t),n.xp6(5),n.ekj("t-input_filled",o.url),n.Q6J("ngModel",o.url),n.xp6(1),n.hij(" ",o.placeholder," ")}}let h=(()=>{var t;class e{constructor(){this.editor=(0,n.f3M)(l.TuiTiptapEditorService),this.youtubeLogo="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",this.placeholder="https://image.com/etc.png",this.url=""}insertImage(t){t&&(this.editor.setImage(t),this.dropdown?.close())}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["image-tool"]],viewQuery:function(t,e){if(1&t&&n.Gf(p,5),2&t){let t;n.iGM(t=n.CRH())&&(e.dropdown=t.first)}},standalone:!0,features:[n.jDz],decls:5,vars:2,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","flat","automation-id","youtube-tool__button","size","s","tuiIconButton","","type","button",1,"tool-button",3,"iconLeft"],["youtubeDropdown",""],[1,"youtube-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(n.TgZ(0,"tui-hosted-dropdown",0,1),n._UZ(2,"button",2),n.YNc(3,g,7,5,"ng-template",null,3,n.W1O),n.qZA()),2&t){const t=n.MAs(4);n.Q6J("content",t),n.xp6(2),n.Q6J("iconLeft",e.youtubeLogo)}},dependencies:[i.u5,i.JJ,i.On,r.kaH,a.z$l,c.l,r.eJF,s.jhF,u.o,d.Ek,s.m$g],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.youtube-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-url[_ngcontent-%COMP%]{max-width:12.5rem;min-width:12.5rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"],changeDetection:0}),e})();var m=o(27825);const f={addProseMirrorPlugins:()=>[new m.Sy({props:{handleDOMEvents:{paste:(t,e)=>{const o=e.clipboardData?.getData("text/plain")??"";if(/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(o)){const n=t.state.schema.nodes.imageEditor.create({src:o}),i=t.state.tr.replaceSelectionWith(n);setTimeout((()=>t.dispatch(i))),e.preventDefault()}}}}})]};var w=o(62417);const v=(()=>{var t;class e{constructor(){this.builtInTools=[l.TuiEditorTool.Undo],this.control=new i.NI("")}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=n.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[n._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,deps:[n.zs3],useFactory:t=>[Promise.resolve().then(o.bind(o,40239)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(o.bind(o,40239)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t}).extend(f)))]}]),n.jDz],decls:6,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(t,e){1&t&&(n.TgZ(0,"tui-editor",0),n.ynx(1,1),n._UZ(2,"image-tool",2),n.TgZ(3,"span",3),n._UZ(4,"tui-svg",4),n._uU(5," click it "),n.qZA(),n.BQk(),n.qZA()),2&t&&n.Q6J("formControl",e.control)("tools",e.builtInTools)},dependencies:[s.PNk,h,r.HOV,w.w,i.UX,i.JJ,i.oH,l.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),e})()}}]);