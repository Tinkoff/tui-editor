(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4746],{34746:(t,n,e)=>{e.r(n),e.d(n,{default:()=>h});var o,i=e(76733),s=e(43226),r=e(12589),u=e(26624),a=e(84911),c=e(20755),l=e(33407),m=e(77202),g=e(52614),p=e(99942);function d(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",(function(){const n=c.CHM(t).$implicit,e=c.oxw();return c.KtG(e.setMention.emit(n))}))("keydown.enter",(function(){const n=c.CHM(t).$implicit,e=c.oxw();return c.KtG(e.setMention.emit(n))})),c._uU(1),c._UZ(2,"tui-avatar",3),c.ALo(3,"tuiInitials"),c.qZA()}if(2&t){const t=n.$implicit,e=n.index;c.Q6J("tuiAutoFocus",0==e),c.xp6(1),c.hij(" ",t.name," "),c.xp6(1),c.Q6J("src",t.avatar||c.lcZ(3,3,t.name))}}class f{constructor(){this.setMention=new c.vpe,this.items=[{name:"Alexander Inkin",avatar:"https://taiga-ui.dev/assets/images/avatar.jpg",login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}]}getFilteredItems(t,n){return n?.length?t.filter((({name:t,login:e})=>e.toLocaleLowerCase().startsWith(n.toLocaleLowerCase())||t.toLocaleLowerCase().startsWith(n.toLocaleLowerCase()))):t}}function w(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"mentions",4),c.NdJ("setMention",(function(n){c.CHM(t);const e=c.oxw();return c.KtG(e.setMention(n))})),c.qZA()}if(2&t){const t=c.oxw();c.Q6J("mentionSuggestions",null==t.wysiwyg?null:t.wysiwyg.mentionSuggestions)}}(o=f).ɵfac=function(t){return new(t||o)},o.ɵcmp=c.Xpm({type:o,selectors:[["mentions"]],inputs:{mentionSuggestions:"mentionSuggestions"},outputs:{setMention:"setMention"},standalone:!0,features:[c.jDz],decls:2,vars:1,consts:[[3,"mouseleave.capture"],["tuiOption","",3,"tuiAutoFocus","click","keydown.enter",4,"ngFor","ngForOf"],["tuiOption","",3,"tuiAutoFocus","click","keydown.enter"],["size","s",3,"src"]],template:function(t,n){1&t&&(c.TgZ(0,"tui-data-list",0),c.NdJ("mouseleave.capture",(function(t){return t.stopPropagation()})),c.YNc(1,d,4,5,"button",1),c.qZA()),2&t&&(c.xp6(1),c.Q6J("ngForOf",n.getFilteredItems(n.items,n.mentionSuggestions)))},dependencies:[r.pcV,g.q,p.v,i.sg,r.XCq,m.JPE,l.kaH],encapsulation:2,changeDetection:0}),(0,a.gn)([l.UMq],f.prototype,"getFilteredItems",null);const h=(()=>{var t;class n{constructor(){this.builtInTools=[u.TuiEditorTool.Undo,u.TuiEditorTool.Size,u.TuiEditorTool.Link],this.control=new s.NI('\n        <p><span class="my-mention" data-type="mention">@a.inkin</span> FYI</p>\n    ')}setMention(t){const n=this.wysiwyg?.editor?.getOriginTiptapEditor();if(!n)return;const e=`<span class="my-mention" data-type="mention">@${t.login}</span>&nbsp;`,o=n.state.selection.to,i=n.state.selection.from-(this.wysiwyg?.mentionSuggestions.length??0)-1;n.chain().focus().insertContentAt({from:i,to:o},e).run()}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,n){if(1&t&&c.Gf(u.TuiEditorComponent,5),2&t){let t;c.iGM(t=c.CRH())&&(n.wysiwyg=t.first)}},standalone:!0,features:[c._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(e.bind(e,26624)).then((({TuiStarterKit:t})=>t)),Promise.resolve().then(e.bind(e,26624)).then((({TuiLink:t})=>t)),Promise.resolve().then(e.bind(e,23740)).then((({default:t})=>t)),Promise.resolve().then(e.bind(e,26624)).then((({TuiMention:t})=>t))]}]),c.jDz],decls:10,vars:5,consts:[[3,"formControl","tools"],["ngProjectAs","mention",5,["mention"]],[3,"mentionSuggestions","setMention",4,"ngIf"],[3,"content"],[3,"mentionSuggestions","setMention"]],template:function(t,n){1&t&&(c.TgZ(0,"tui-editor",0),c.ynx(1,1),c.YNc(2,w,1,1,"mentions",2),c.BQk(),c.qZA(),c.TgZ(3,"h4"),c._uU(4,"HTML:"),c.qZA(),c._UZ(5,"tui-editor-socket",3),c.TgZ(6,"h4"),c._uU(7,"Text:"),c.qZA(),c.TgZ(8,"p"),c._uU(9),c.qZA()),2&t&&(c.Q6J("formControl",n.control)("tools",n.builtInTools),c.xp6(2),c.Q6J("ngIf",null==n.wysiwyg?null:n.wysiwyg.isMentionMode),c.xp6(3),c.Q6J("content",n.control.value||""),c.xp6(4),c.Oqu(n.control.value))},dependencies:[u.TuiEditorComponent,s.UX,s.JJ,s.oH,r.pcV,u.TuiEditorSocketComponent,f,i.O5],styles:["[_nghost-%COMP%]     .my-mention{background:var(--tui-autofill);border:1px solid var(--tui-base-08);border-radius:.4rem;padding:.1rem .3rem;cursor:default}"],changeDetection:0}),n})()}}]);