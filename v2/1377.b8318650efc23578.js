(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1377],{51377:(t,n,o)=>{o.r(n),o.d(n,{default:()=>p});var e=o(43226),i=o(49119),r=o(68704),s=o(58128),a=o(76733),c=o(20755);function u(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"button",6),c.NdJ("click",(function(){const n=c.CHM(t).$implicit,o=c.oxw(2);return c.KtG(o.insertSmile(n))})),c.qZA()}if(2&t){const t=n.$implicit;c.Q6J("innerHTML",t,c.oJD)}}function l(t,n){if(1&t&&(c.TgZ(0,"div",4),c.YNc(1,u,1,1,"button",5),c.qZA()),2&t){const t=c.oxw();c.xp6(1),c.Q6J("ngForOf",t.smiles)}}let d=(()=>{var t;class n{constructor(){this.editor=(0,c.f3M)(s.TuiTiptapEditorService),this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(t){this.editor.getOriginTiptapEditor()?.chain().focus().insertContent(`<p data-type="emoji">${t}</p>`).insertContent(" ").run()}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["smiles-tool"]],standalone:!0,features:[c.jDz],decls:5,vars:2,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"tuiDropdown","tuiDropdownOpen"],["dropdown",""],["appearance","icon","automation-id","smiles-tool__button","iconStart","@tui.star","size","s","tuiIconButton","","type","button",1,"tool-button"],["smileDropdown",""],[1,"smiles"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(t,n){if(1&t&&(c.TgZ(0,"div",0,1),c._UZ(2,"button",2),c.YNc(3,l,2,1,"ng-template",null,3,c.W1O),c.qZA()),2&t){const t=c.MAs(4);c.Q6J("tuiDropdown",t)("tuiDropdownOpen",!1)}},dependencies:[a.sg,r.xGO,r.Ekv,r.tdC,r.Bb2],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-background-neutral-1-hover)}"],changeDetection:0}),n})();const p=(()=>{var t;class n{constructor(){this.builtInTools=[s.TuiEditorTool.Undo],this.control=new e.NI("")}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[c._Bn([{provide:s.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,58128)).then((({TuiStarterKit:t})=>t)),o.e(2330).then(o.bind(o,52330)).then((({EmojiExtension:t})=>t))]}]),c.jDz],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["icon","@tui.arrow-left"]],template:function(t,n){1&t&&(c.TgZ(0,"tui-editor",0),c._uU(1," Smiles are custom tool. Try it. "),c.ynx(2,1),c._UZ(3,"smiles-tool",2),c.TgZ(4,"span",3),c._UZ(5,"tui-icon",4),c._uU(6," click it "),c.qZA(),c.BQk(),c.qZA()),2&t&&c.Q6J("formControl",n.control)("tools",n.builtInTools)},dependencies:[d,e.UX,e.JJ,e.oH,s.TuiEditor,r.RJr,i.WmR],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-border-hover);height:100%;display:flex;align-items:center}"],changeDetection:0}),n})()}}]);