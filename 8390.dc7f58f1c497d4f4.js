(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8390],{8390:o=>{o.exports="import type {OnInit} from '@angular/core';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {tuiRawLoad, tuiTryParseMarkdownCodeBlock} from '@taiga-ui/addon-doc';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useFactory: () => [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n            ],\n        },\n    ],\n})\nexport default class Example implements OnInit {\n    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Code];\n\n    protected control = new FormControl('');\n\n    public async ngOnInit(): Promise<void> {\n        const [code] = tuiTryParseMarkdownCodeBlock(\n            await tuiRawLoad(import('./example.md?raw')),\n        );\n\n        if (code) {\n            this.control.patchValue(code);\n        }\n    }\n}\n"}}]);