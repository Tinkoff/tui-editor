(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[2557],{42557:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var o=n(43226),i=n(14407),h=n(59911),s=n(20755);const l=(()=>{var e;class t{constructor(){this.builtInTools=[i.TuiEditorTool.Undo,i.TuiEditorTool.Size],this.control=new o.NI("\n        <h1>This is a 1st level heading</h1>\n        <h2>This is a 2nd level heading</h2>\n        <h3>This is a 3rd level heading</h3>\n        <h4>This is a 4th level heading</h4>\n        <h5>This is a 5th level heading</h5>\n        <h6>This is a 6th level heading</h6>\n        <p>This is a paragraph</p>\n    ")}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,features:[s._Bn([(0,i.tuiEditorOptionsProvider)({fontOptions:()=>[{name:"H1",headingLevel:1,ngClass:"text-h1"},{name:"H2",headingLevel:2,ngClass:"text-h2"},{name:"H3",headingLevel:3,ngClass:"text-h3"},{name:"H4",headingLevel:4,ngClass:"text-h4"},{name:"H5",headingLevel:5,ngClass:"text-h5"},{name:"H6",headingLevel:6,ngClass:"text-h6"}]}),{provide:i.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(n.bind(n,14407)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(n.bind(n,23740)).then((({default:e})=>e)),Promise.resolve().then(n.bind(n,74197)).then((({default:e})=>e.configure({levels:[1,2,3,4,5,6]}).extend({renderHTML({node:e,HTMLAttributes:t}){const n=this.options.levels.includes(e.attrs.level)?e.attrs.level:this.options.levels[0];return[`h${n}`,(0,h.mergeAttributes)(this.options.HTMLAttributes,t,{class:`${{1:"text-h1",2:"text-h2",3:"text-h3",4:"text-h4",5:"text-h5",6:"text-h6"}[n]}`}),0]}})))]}]),s.jDz],decls:8,vars:4,consts:[[1,"heading",3,"formControl","tools"],[3,"content"]],template:function(e,t){1&e&&(s._UZ(0,"tui-editor",0),s.TgZ(1,"h4"),s._uU(2,"HTML:"),s.qZA(),s._UZ(3,"tui-editor-socket",1),s.TgZ(4,"h4"),s._uU(5,"Text:"),s.qZA(),s.TgZ(6,"p"),s._uU(7),s.qZA()),2&e&&(s.Q6J("formControl",t.control)("tools",t.builtInTools),s.xp6(3),s.Q6J("content",t.control.value||""),s.xp6(4),s.Oqu(t.control.value))},dependencies:[o.UX,o.JJ,o.oH,i.TuiEditor,i.TuiEditorSocket],styles:[".text-h1,.text-h2,.text-h3,.text-h4,.text-h5,.text-h6{margin:5px 0}.text-h1,.text-h1[tuiOption]{color:red}.text-h2,.text-h2[tuiOption]{color:#00f}.text-h3,.text-h3[tuiOption]{color:green}.text-h4,.text-h4[tuiOption]{color:gray}.text-h5,.text-h5[tuiOption]{color:pink}.text-h6,.text-h6[tuiOption]{color:#8a2be2}\n"],encapsulation:2,changeDetection:0}),t})()}}]);