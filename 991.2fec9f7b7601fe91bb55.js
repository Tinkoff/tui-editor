"use strict";(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[991],{7991:(s,n,t)=>{t.r(n),t.d(n,{Underline:()=>d,default:()=>d});var r=t(1046);const d=r.Mark.create({name:"underline",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>!!e.includes("underline")&&{}}],renderHTML({HTMLAttributes:e}){return["u",(0,r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands(){return{setUnderline:()=>({commands:e})=>e.setMark(this.name),toggleUnderline:()=>({commands:e})=>e.toggleMark(this.name),unsetUnderline:()=>({commands:e})=>e.unsetMark(this.name)}},addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline(),"Mod-U":()=>this.editor.commands.toggleUnderline()}}})}}]);