(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6949],{76949:o=>{o.exports="import {ChangeDetectionStrategy, Component, Inject, ViewChild} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiActiveZoneModule, TuiAutoFocusModule} from '@taiga-ui/cdk';\nimport {\n    TuiButtonModule,\n    TuiHostedDropdownComponent,\n    TuiHostedDropdownModule,\n} from '@taiga-ui/core';\nimport {TuiInputInlineModule} from '@taiga-ui/kit';\nimport {TuiTiptapEditorService} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    selector: 'embed-tool',\n    imports: [\n        FormsModule,\n        TuiAutoFocusModule,\n        TuiInputInlineModule,\n        TuiActiveZoneModule,\n        TuiButtonModule,\n        TuiHostedDropdownModule,\n    ],\n    templateUrl: './embed-tool.template.html',\n    styleUrls: ['./embed-tool.styles.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiEmbedToolComponent {\n    @ViewChild('dropdown')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    placeholder = 'https://my-embed.site.com/etc1235';\n    url = '';\n\n    constructor(\n        @Inject(TuiTiptapEditorService)\n        private readonly editor: TuiTiptapEditorService,\n    ) {}\n\n    embedSource(src: string): void {\n        if (src) {\n            this.editor.setIframe({src});\n\n            this.url = '';\n            this.dropdown?.close();\n        }\n    }\n}\n"}}]);