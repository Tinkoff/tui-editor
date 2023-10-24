(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2590],{82590:n=>{n.exports="import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {tuiRawLoad} from '@taiga-ui/addon-doc';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport MarkdownIt from 'markdown-it';\nimport {Converter} from 'showdown';\n\nimport {\n    TUI_EDITOR_CONTENT_PROCESSOR,\n    TuiEditorTool,\n} from '../../../../../../../../tui-editor';\n\n@Component({\n    selector: 'tui-editor-markdown-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_EDITOR_CONTENT_PROCESSOR,\n            useValue: (markdown: string): string => new MarkdownIt().render(markdown),\n        },\n    ],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class TuiEditorEditorExample1 implements OnInit {\n    readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Img,\n        TuiEditorTool.Link,\n        TuiEditorTool.Anchor,\n    ];\n\n    control: FormControl = new FormControl('');\n\n    @tuiPure\n    toMarkdown(html: string): string {\n        return new Converter().makeMarkdown(html);\n    }\n\n    async ngOnInit(): Promise<void> {\n        const md = await tuiRawLoad(import('./example.md?raw'));\n\n        this.control.patchValue(md);\n    }\n}\n"}}]);