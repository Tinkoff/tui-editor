(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[3226],{10864:(t,e,n)=>{n.r(e),n.d(e,{default:()=>y});var o=n(84911),i=n(20755),r=n(43226),l=n(43232),s=n(24031),a=n(45599),u=n(40239),c=n(33446),d=n(44336),p=n(39986),m=n(60598);const h=["dropdown"];function f(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",4)(1,"label",5)(2,"div",6),i._uU(3,"Embed URL"),i.qZA(),i.TgZ(4,"div",7)(5,"tui-input-inline",8),i.NdJ("ngModelChange",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.url=e)}))("keydown.enter",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.embedSource(e.url))})),i._uU(6),i.qZA()()()()}if(2&t){const t=e.$implicit,n=i.oxw();i.Q6J("tuiActiveZoneParent",t),i.xp6(5),i.ekj("t-input_filled",n.url),i.Q6J("ngModel",n.url),i.xp6(1),i.hij(" ",n.placeholder," ")}}let g=(()=>{var t;class e{constructor(){this.editor=(0,i.f3M)(u.TuiTiptapEditorService),this.placeholder="https://my-embed.site.com/etc1235",this.url=""}embedSource(t){t&&(this.editor.setIframe({src:t}),this.url="",this.dropdown?.close())}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["embed-tool"]],viewQuery:function(t,e){if(1&t&&i.Gf(h,5),2&t){let t;i.iGM(t=i.CRH())&&(e.dropdown=t.first)}},standalone:!0,features:[i.jDz],decls:5,vars:1,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["appearance","icon","automation-id","embed-tool__button","iconLeft","tuiIconCode","size","s","tuiIconButton","","type","button",1,"tool-button"],["youtubeDropdown",""],[1,"embed-tool-content",3,"tuiActiveZoneParent"],[1,"t-label"],[1,"t-label-properties"],[1,"t-url"],["tuiAutoFocus","",1,"t-input",3,"ngModel","ngModelChange","keydown.enter"]],template:function(t,e){if(1&t&&(i.TgZ(0,"tui-hosted-dropdown",0,1),i._UZ(2,"button",2),i.YNc(3,f,7,5,"ng-template",null,3,i.W1O),i.qZA()),2&t){const t=i.MAs(4);i.Q6J("content",t)}},dependencies:[r.u5,r.JJ,r.On,s.kaH,c.z$l,d.l,s.eJF,a.m$g,a.jhF,p.o,m.Ek],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.embed-tool-content[_ngcontent-%COMP%]{display:flex;min-height:4rem;align-items:center;padding-right:.75rem}.t-label[_ngcontent-%COMP%]{height:var(--tui-height-l);box-sizing:border-box;padding:.4375rem 1rem;min-width:12.5rem;max-width:25rem;width:100%}.t-input[_ngcontent-%COMP%]{flex:1;color:var(--tui-text-02)}.t-input_filled[_ngcontent-%COMP%]{color:var(--tui-text-01)}"],changeDetection:0}),e})();var b,w=n(62417);class v{constructor(){this.sanitizer=(0,i.f3M)(l.H7),this.isE2E=(0,i.f3M)(s.oDT),this.builtInTools=[u.TuiEditorTool.Undo],this.control=new r.NI(`\n        <p>Here is an online IDE:</p>\n        <iframe\n         src="https://codepen.io/mehdinajafi/embed/LYyqNqR?default-tab=html${this.isE2E?"":"%2Cresult"}&editable=true"\n         height="375"\n         width="100%"\n         scrolling="no"\n         frameborder="no"\n         loading="lazy"\n         allowtransparency="true"\n         data-type="iframe-editor"\n         allowfullscreen="true">\n        </iframe>\n        </iframe>\n        <p>Here is a media player:</p>\n        <iframe\n            src="https://bandcamp.com/EmbeddedPlayer/album=2219061201/size=small/bgcol=ffffff/linkcol=63b2cc/transparent=true/"\n            height="42"\n            width="100%"\n            data-type="iframe-editor">\n        </iframe>\n        <p></p>\n    `,r.kI.required)}safe(t){return this.sanitizer.bypassSecurityTrustHtml(t??"")}}(b=v).ɵfac=function(t){return new(t||b)},b.ɵcmp=i.Xpm({type:b,selectors:[["ng-component"]],standalone:!0,features:[i._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,deps:[i.zs3],useFactory:t=>[Promise.resolve().then(n.bind(n,40239)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(n.bind(n,40239)).then((({tuiCreateImageEditorExtension:e})=>e({injector:t})))]}]),i.jDz],decls:13,vars:4,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"],[3,"innerHTML"]],template:function(t,e){1&t&&(i.TgZ(0,"tui-editor",0),i.ynx(1,1),i._UZ(2,"embed-tool",2),i.TgZ(3,"span",3),i._UZ(4,"tui-svg",4),i._uU(5," click it "),i.qZA(),i.BQk(),i.qZA(),i.TgZ(6,"h4"),i._uU(7,"HTML:"),i.qZA(),i._UZ(8,"div",5),i.TgZ(9,"h4"),i._uU(10,"Text:"),i.qZA(),i.TgZ(11,"p"),i._uU(12),i.qZA()),2&t&&(i.Q6J("formControl",e.control)("tools",e.builtInTools),i.xp6(8),i.Q6J("innerHTML",e.safe(e.control.value),i.oJD),i.xp6(4),i.Oqu(e.control.value))},dependencies:[g,a.PNk,r.UX,r.JJ,r.oH,s.HOV,w.w,u.TuiEditorComponent],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),(0,o.gn)([s.UMq],v.prototype,"safe",null);const y=v}}]);