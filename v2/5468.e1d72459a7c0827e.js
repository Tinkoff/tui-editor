(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5468],{35468:o=>{o.exports='<tui-loader [showLoader]="!!(fileIoService.loading$ | async)">\n    <tui-editor\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    ></tui-editor>\n</tui-loader>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value || \'\'"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);