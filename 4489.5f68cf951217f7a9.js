(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4489],{54489:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x});var o,i=n(43226),s=n(5153),c=n(9045),r=n(84911),u=n(76733),l=n(20755),a=n(5393),p=n(12589),d=n(92425),f=n(18004),h=n(52614),g=n(99942),z=n(23854),m=n(39986);function T(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"button",7),l.NdJ("click",(function(){const e=l.CHM(t).$implicit,n=l.oxw(2),o=l.MAs(2);return n.setFontSize(e),l.KtG(o.close())})),l._uU(1),l.qZA()}if(2&t){const t=e.$implicit;l.xp6(1),l.hij(" ",t," ")}}function Z(t,e){if(1&t&&(l.TgZ(0,"tui-data-list"),l.YNc(1,T,2,1,"button",6),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngForOf",t.sizes)}}class S{constructor(){this.editor=(0,l.f3M)(c.TuiTiptapEditorService),this.win=(0,l.f3M)(a.m9),this.sizes=[8,9,10,11,12,14,16,18,24,30],this.size$=this.editor.stateChange$.pipe((0,d.U)((()=>this.fontSize)),(0,f.x)())}get fontSize(){return this.editor.getFontSize()||this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view?.dom)||16}setFontSize(t){this.editor.setFontSize(t)}increase(){const t=this.currentIndex+1;if(t<=this.sizes.length-1){const e=this.sizes[t];this.setFontSize(e)}}decrease(){const t=this.currentIndex-1;if(t>0){const e=this.sizes[t];this.setFontSize(e)}}get currentIndex(){return this.sizes.indexOf(this.fontSize)}getDefaultFontSize(t){return Number(this.win.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)?.[0])}}(o=S).ɵfac=function(t){return new(t||o)},o.ɵcmp=l.Xpm({type:o,selectors:[["font-size-tool"]],standalone:!0,features:[l.jDz],decls:9,vars:4,consts:[["appearance","flat","icon","tuiIconMinus","size","s","tuiIconButton","","type","button",3,"click"],[3,"content"],["fonts",""],["appearance","flat","size","s","tuiButton",""],["fontsDropdown",""],["appearance","flat","icon","tuiIconPlus","size","s","tuiIconButton","","type","button",3,"click"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(t,e){if(1&t&&(l.TgZ(0,"button",0),l.NdJ("click",(function(){return e.decrease()})),l.qZA(),l.TgZ(1,"tui-hosted-dropdown",1,2)(3,"button",3),l._uU(4),l.ALo(5,"async"),l.qZA(),l.YNc(6,Z,2,1,"ng-template",null,4,l.W1O),l.qZA(),l.TgZ(8,"button",5),l.NdJ("click",(function(){return e.increase()})),l.qZA()),2&t){const t=l.MAs(7);l.xp6(1),l.Q6J("content",t),l.xp6(3),l.hij(" ",l.lcZ(5,2,e.size$)," ")}},dependencies:[p.pcV,h.q,g.v,u.sg,p.fNO,z.v,p.jhF,m.o,u.Ov],encapsulation:2,changeDetection:0}),(0,r.gn)([s.UMq],S.prototype,"getDefaultFontSize",null);var v=n(62417);const x=(()=>{var t;class e{constructor(){this.builtInTools=[c.TuiEditorTool.Undo],this.control=new i.NI('\n        <p>Hello</p>\n        <p><span style="font-size: 24px">Hello world</span></p>\n    ')}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[l._Bn([{provide:c.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(n.bind(n,9045)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(n.bind(n,23740)).then((({default:t})=>t)),Promise.resolve().then(n.bind(n,9045)).then((({TuiFontSize:t})=>t))]}]),l.jDz],decls:10,vars:4,consts:[[1,"heading",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[3,"content"]],template:function(t,e){1&t&&(l.TgZ(0,"tui-editor",0),l.ynx(1,1),l._UZ(2,"font-size-tool",2),l.BQk(),l.qZA(),l.TgZ(3,"h4"),l._uU(4,"HTML:"),l.qZA(),l._UZ(5,"tui-editor-socket",3),l.TgZ(6,"h4"),l._uU(7,"Text:"),l.qZA(),l.TgZ(8,"p"),l._uU(9),l.qZA()),2&t&&(l.Q6J("formControl",e.control)("tools",e.builtInTools),l.xp6(5),l.Q6J("content",e.control.value||""),l.xp6(4),l.Oqu(e.control.value))},dependencies:[i.UX,i.JJ,i.oH,S,c.TuiEditorSocketComponent,c.TuiEditorComponent,s.HOV,v.w],encapsulation:2,changeDetection:0}),e})()}}]);