(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5899],{85899:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i,n=o(84911),s=o(20755),r=o(43226),d=o(43232),a=o(49119),l=o(58128),u=o(92425);class c{constructor(){this.sanitizer=(0,s.f3M)(d.H7),this.isE2E=(0,s.f3M)(a.oDT),this.builtInTools=[l.TuiEditorTool.Undo,l.TuiEditorTool.Link,l.TuiEditorTool.Attach],this.control=new r.NI(`\n            <p>Here is video: </p>\n\n            <video controls="controls" width="100%" preload="${this.isE2E?"none":"auto"}" controlsList="nodownload">\n                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">\n            </video>\n\n            <p>Here is audio: </p>\n            <audio controls style="width: 100%" preload="${this.isE2E?"none":"auto"}" controlsList="nodownload">\n              <source src="https://www.w3docs.com/build/audios/audio.mp3" type="audio/mp3">\n            </audio>\n\n            <p></p>\n            `,r.kI.required)}safe(e){return this.sanitizer.bypassSecurityTrustHtml(e??"")}attach([e]){const t=`${e.attrs?.type??""}`.split("/")[0];this.wysiwyg?.editor?.getOriginTiptapEditor()?.commands.insertContent(`<${t} controls width="100%"><source src="${e.link}" type="${e.attrs?.type}"></${t}><p><a href="${e.link}" download="${e.name}">Download ${e.name}</a></p>`)}}(i=c).ɵfac=function(e){return new(e||i)},i.ɵcmp=s.Xpm({type:i,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&s.Gf(l.TuiEditor,5),2&e){let e;s.iGM(e=s.CRH())&&(t.wysiwyg=e.first)}},hostAttrs:[1,"html5-editor-example"],hostVars:2,hostBindings:function(e,t){2&e&&s.ekj("_e2e",t.isE2E)},standalone:!0,features:[s._Bn([{provide:l.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,58128)).then((({TuiStarterKit:e})=>e)),Promise.resolve().then(o.bind(o,23740)).then((({TextStyle:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiLink:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiJumpAnchor:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiFileLink:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiVideo:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiAudio:e})=>e)),Promise.resolve().then(o.bind(o,58128)).then((({TuiSource:e})=>e))]},{provide:l.TUI_ATTACH_FILES_LOADER,useFactory:()=>([e])=>{const t=new FileReader;return t.readAsDataURL(e),(0,a.mLY)(t,"load").pipe((0,u.U)((()=>[{name:e.name,link:String(t.result),attrs:{type:e.type}}])))}},{provide:l.TUI_ATTACH_FILES_OPTIONS,useValue:{accept:"video/mp4,video/x-m4v,video/*,audio/x-m4a,audio/*",multiple:!1}}]),s.jDz],decls:8,vars:4,consts:[[1,"editor",3,"formControl","tools","fileAttached"],[3,"innerHTML"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-editor",0),s.NdJ("fileAttached",(function(e){return t.attach(e)})),s.qZA(),s.TgZ(1,"h4"),s._uU(2,"HTML:"),s.qZA(),s._UZ(3,"div",1),s.TgZ(4,"h4"),s._uU(5,"Text:"),s.qZA(),s.TgZ(6,"p"),s._uU(7),s.qZA()),2&e&&(s.Q6J("formControl",t.control)("tools",t.builtInTools),s.xp6(3),s.Q6J("innerHTML",t.safe(t.control.value),s.oJD),s.xp6(4),s.Oqu(t.control.value))},dependencies:[r.UX,r.JJ,r.oH,l.TuiEditor],styles:["._e2e[_nghost-%COMP%]     video::-webkit-media-controls-current-time-display, ._e2e[_nghost-%COMP%]     video::-webkit-media-controls-time-remaining-display, ._e2e[_nghost-%COMP%]     audio::-webkit-media-controls-current-time-display, ._e2e[_nghost-%COMP%]     audio::-webkit-media-controls-time-remaining-display{display:none}"],changeDetection:0}),(0,n.gn)([a.UMq],c.prototype,"safe",null);const p=c}}]);