(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[67],{10067:(t,e,n)=>{n.r(e),n.d(e,{default:()=>S});var o,i=n(37222),s=n(29253),r=n(91920),c=n(97270),u=n(56610),l=n(2978),a=n(33241),p=n(22792),d=n(93527),f=n(73793);function h(t,e){if(1&t){const t=l.RV6();l.j41(0,"button",7),l.bIt("click",(function(){const e=l.eBV(t).$implicit,n=l.XpG(2);return l.Njj(n.setFontSize(e))})),l.EFF(1),l.k0s()}if(2&t){const t=e.$implicit;l.R7$(1),l.SpI(" ",t," ")}}function z(t,e){if(1&t&&(l.j41(0,"tui-data-list"),l.DNE(1,h,2,1,"button",6),l.k0s()),2&t){const t=l.XpG();l.R7$(1),l.Y8G("ngForOf",t.sizes)}}class F{constructor(){this.editor=(0,l.WQX)(r.TuiTiptapEditorService),this.win=(0,l.WQX)(a.jf),this.sizes=[8,9,10,11,12,14,16,18,24,30],this.size$=this.editor.stateChange$.pipe((0,d.T)((()=>this.fontSize)),(0,f.F)())}get fontSize(){return this.editor.getFontSize()||this.getDefaultFontSize(this.editor.getOriginTiptapEditor()?.view?.dom)||16}setFontSize(t){this.editor.setFontSize(t)}increase(){const t=this.currentIndex+1;if(t<=this.sizes.length-1){const e=this.sizes[t];this.setFontSize(e)}}decrease(){const t=this.currentIndex-1;if(t>0){const e=this.sizes[t];this.setFontSize(e)}}get currentIndex(){return this.sizes.indexOf(this.fontSize)}getDefaultFontSize(t){return t?Number(this.win.getComputedStyle(t).getPropertyValue("font-size").match(/\d+/)?.[0]):16}}(o=F).ɵfac=function(t){return new(t||o)},o.ɵcmp=l.VBU({type:o,selectors:[["font-size-tool"]],standalone:!0,features:[l.aNF],decls:9,vars:5,consts:[["appearance","flat","iconStart","@tui.minus","size","s","tuiIconButton","","type","button",3,"click"],[3,"tuiDropdown","tuiDropdownOpen"],["fonts",""],["appearance","flat","size","s","tuiButton",""],["fontsDropdown",""],["appearance","flat","iconStart","@tui.plus","size","s","tuiIconButton","","type","button",3,"click"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"]],template:function(t,e){if(1&t&&(l.j41(0,"button",0),l.bIt("click",(function(){return e.decrease()})),l.k0s(),l.j41(1,"div",1,2)(3,"button",3),l.EFF(4),l.nI1(5,"async"),l.k0s(),l.DNE(6,z,2,1,"ng-template",null,4,l.C5r),l.k0s(),l.j41(8,"button",5),l.bIt("click",(function(){return e.increase()})),l.k0s()),2&t){const t=l.sdS(7);l.R7$(1),l.Y8G("tuiDropdown",t)("tuiDropdownOpen",!1),l.R7$(3),l.SpI(" ",l.bMT(5,3,e.size$)," ")}},dependencies:[u.Jj,u.Sq,p.paf,p.uEM,p.aOZ,p.pUb,p.iEg],styles:["[_nghost-%COMP%]{display:flex}"],changeDetection:0}),(0,c.Cg)([s.PEb],F.prototype,"getDefaultFontSize",null);const S=(()=>{var t;class e{constructor(){this.builtInTools=[r.TuiEditorTool.Undo],this.control=new i.MJ('\n        <p>Hello</p>\n        <p><span style="font-size: 24px">Hello world</span></p>\n    ')}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=l.VBU({type:t,selectors:[["ng-component"]],standalone:!0,features:[l.Jv_([{provide:r.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(n.bind(n,91920)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(n.bind(n,25377)).then((({default:t})=>t)),Promise.resolve().then(n.bind(n,91920)).then((({TuiFontSizeExtension:t})=>t))]}]),l.aNF],decls:10,vars:4,consts:[[1,"heading",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[3,"content"]],template:function(t,e){1&t&&(l.j41(0,"tui-editor",0),l.qex(1,1),l.nrm(2,"font-size-tool",2),l.bVm(),l.k0s(),l.j41(3,"h4"),l.EFF(4,"HTML:"),l.k0s(),l.nrm(5,"tui-editor-socket",3),l.j41(6,"h4"),l.EFF(7,"Text:"),l.k0s(),l.j41(8,"p"),l.EFF(9),l.k0s()),2&t&&(l.Y8G("formControl",e.control)("tools",e.builtInTools),l.R7$(5),l.Y8G("content",e.control.value||""),l.R7$(4),l.JRh(e.control.value))},dependencies:[F,i.X1,i.BC,i.l_,r.TuiEditor,r.TuiEditorSocket,s.KV0],encapsulation:2,changeDetection:0}),e})()}}]);