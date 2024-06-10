(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[4430],{24430:e=>{e.exports="import {\n    ChangeDetectionStrategy,\n    Component,\n    inject,\n    Injector,\n    ViewEncapsulation,\n} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiDialogService} from '@taiga-ui/core';\nimport {\n    TUI_EDITOR_DEFAULT_EXTENSIONS,\n    TUI_EDITOR_DEFAULT_TOOLS,\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n} from '@taiga-ui/editor';\n\n@Component({\n    standalone: true,\n    imports: [TuiEditor, ReactiveFormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                ...TUI_EDITOR_DEFAULT_EXTENSIONS,\n                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>\n                    tuiCreateImageEditorExtension({injector}),\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    private readonly dialog = inject(TuiDialogService);\n\n    protected readonly builtInTools = TUI_EDITOR_DEFAULT_TOOLS;\n\n    protected readonly control = new FormControl(`\n        <h2>What is Lorem Ipsum?</h2>\n        <p>\n            <a\n                href=\"https://www.google.com/search?q=wikipedia&sca_esv=563020551&sxsrf=AB5stBhNcprCNZotMYrhf_8rPUA7JwZ4XQ%3A1693989718615&ei=Vjv4ZKGaJaPMwPAPx5m68Ag&ved=0ahUKEwihnbm7y5WBAxUjJhAIHceMDo4Q4dUDCBA&uact=5&oq=wikipedia&gs_lp=Egxnd3Mtd2l6LXNlcnAiCXdpa2lwZWRpYTIKEAAYigUYsQMYQzIKEAAYgAQYFBiHAjIHEAAYigUYQzILEAAYgAQYsQMYgwEyBxAAGIoFGEMyBxAAGIoFGEMyCBAAGIAEGLEDMgcQABiKBRhDMgUQABiABDIFEAAYgARIqDZQAFjRMXAAeAGQAQCYAYEBoAG4B6oBAzMuNrgBA8gBAPgBAcICBxAjGIoFGCfCAhEQLhiABBixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgINEAAYigUYsQMYgwEYQ8ICExAuGIoFGLEDGIMBGMcBGNEDGEPCAgoQLhiKBRjUAhhDwgINEAAYgAQYsQMYgwEYCsICDRAuGIoFGMcBGNEDGEPiAwQYACBBiAYB&sclient=gws-wiz-serp\"\n            >\n                Lorem Ipsum\n            </a>\n            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and\n            more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n        </p>\n    `);\n\n    protected send(): void {\n        this.dialog.open(this.control.value).subscribe();\n    }\n}\n"}}]);