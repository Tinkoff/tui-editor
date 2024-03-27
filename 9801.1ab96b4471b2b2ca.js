(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[9801],{79801:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport {TuiDataListModule, TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatarComponent} from '@taiga-ui/kit';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditorComponent,\n    TuiEditorSocketComponent,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\n\ninterface User {\n    name: string;\n    avatar: string;\n    login: string;\n}\n\n@Component({\n    standalone: true,\n    imports: [\n        TuiEditorComponent,\n        ReactiveFormsModule,\n        TuiDataListModule,\n        NgForOf,\n        TuiAvatarComponent,\n        TuiInitialsPipe,\n        TuiEditorSocketComponent,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@tinkoff/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@tinkoff/tui-editor').then(({TuiLink}) => TuiLink),\n                import('@tiptap/extension-text-style').then(\n                    ({default: TextStyle}) => TextStyle,\n                ),\n                import('@tinkoff/tui-editor').then(({TuiMention}) => TuiMention),\n            ],\n        },\n    ],\n})\nexport default class ExampleComponent {\n    @ViewChild(TuiEditorComponent)\n    protected readonly wysiwyg?: TuiEditorComponent;\n\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Size,\n        TuiEditorTool.Link,\n    ];\n\n    protected control = new FormControl(`\n        <p><span data-type=\"mention\">@a.inkin</span> FYI</p>\n    `);\n\n    protected readonly items: readonly User[] = [\n        {\n            name: 'Alexander Inkin',\n            avatar: 'https://taiga-ui.dev/assets/images/avatar.jpg',\n            login: 'a.inkin',\n        },\n        {\n            name: 'Roman Sedov',\n            avatar: '',\n            login: 'r.sedov',\n        },\n    ];\n\n    @tuiPure\n    protected getFilteredItems(items: readonly User[], search?: string): readonly User[] {\n        return search?.length\n            ? items.filter(\n                  ({name, login}) =>\n                      login.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()) ||\n                      name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),\n              )\n            : items;\n    }\n\n    protected setMention(item: User): void {\n        const editor = this.wysiwyg?.editor?.getOriginTiptapEditor();\n\n        if (!editor) {\n            return;\n        }\n\n        const replaceText = `<span data-type=\"mention\">@${item.login}</span>&nbsp;`;\n        const to = editor.state.selection.to;\n        const from =\n            editor.state.selection.from -\n            (this.wysiwyg?.mentionSuggestions.length ?? 0) -\n            1;\n\n        editor.chain().focus().insertContentAt({from, to}, replaceText).run();\n    }\n}\n"}}]);