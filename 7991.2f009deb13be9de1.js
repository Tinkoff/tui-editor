(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7991],{17991:(e,t,n)=>{n.r(t),n.d(t,{Underline:()=>d,default:()=>d});var r=n(7410);const d=r.Mark.create({name:"underline",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>!!e.includes("underline")&&{}}],renderHTML({HTMLAttributes:e}){return["u",(0,r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}})}}]);