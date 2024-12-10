(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[942],{942:t=>{t.exports="import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    tuiEditorOptionsProvider,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],\n    templateUrl: './index.html',\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        tuiEditorOptionsProvider({\n            parseOptions: {\n                preserveWhitespace: 'full',\n            },\n        }),\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n\n    protected control = new FormControl('test text\\n\\rtest text 2');\n}\n"}}]);