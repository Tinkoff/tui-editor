(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1437],{11437:n=>{n.exports='<tui-editor\n    class="editor"\n    [formControl]="control"\n    [tools]="builtInTools"\n>\n    <ng-container ngProjectAs="tools">\n        <youtube-tool tuiItem />\n\n        <span class="hint">\n            <tui-icon icon="@tui.arrow-left" />\n            click it\n        </span>\n    </ng-container>\n</tui-editor>\n\n<h4>HTML:</h4>\n<div [innerHTML]="safe(control.value)"></div>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);