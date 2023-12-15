(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8929],{98929:n=>{n.exports="import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\n@Component({\n    selector: 'tui-editor-mark-text-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tiptap/extension-text-align').then(({default: TextAlign}) =>\n                    TextAlign.configure({types: ['heading', 'paragraph']}),\n                ),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tiptap/extension-highlight').then(({Highlight}) =>\n                    Highlight.configure({\n                        multicolor: true,\n                        HTMLAttributes: {\n                            class: 'marked',\n                        },\n                    }),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorMarkTextExample1 {\n    @ViewChild(TuiEditorComponent)\n    private readonly wysiwyg?: TuiEditorComponent;\n\n    readonly builtInTools = [TuiEditorTool.Undo];\n\n    control = new FormControl(\n        `\n        <p>This isn’t highlighted.</p>\n        <p>\n            <mark data-color=\"#e1d0fb\">Grammar</mark>\n            <mark data-color=\"#c8eefc\">can</mark> be tricky,\n            <mark style=\"background-color: #fae498\">especially</mark>\n            for the <mark>uninitiated</mark>\n        </p>\n        `,\n    );\n\n    toggleHighlight(): void {\n        this.wysiwyg?.editor\n            ?.getOriginTiptapEditor()\n            .commands.toggleHighlight({color: '#c8eefc'});\n    }\n}\n"}}]);