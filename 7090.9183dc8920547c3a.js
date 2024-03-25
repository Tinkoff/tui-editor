(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7090],{77090:o=>{o.exports='import {ChangeDetectionStrategy, Component, inject, ViewChild} from \'@angular/core\';\nimport {FormsModule} from \'@angular/forms\';\nimport {TuiActiveZoneDirective, TuiAutoFocusDirective} from \'@taiga-ui/cdk\';\nimport type {TuiHostedDropdownComponent} from \'@taiga-ui/core\';\nimport {TuiButtonModule, TuiHostedDropdownModule} from \'@taiga-ui/core\';\nimport {TuiInputInlineModule} from \'@taiga-ui/kit\';\nimport {TuiTiptapEditorService} from \'@tinkoff/tui-editor\';\n\n@Component({\n    standalone: true,\n    selector: \'image-tool\',\n    imports: [\n        FormsModule,\n        TuiAutoFocusDirective,\n        TuiInputInlineModule,\n        TuiActiveZoneDirective,\n        TuiHostedDropdownModule,\n        TuiButtonModule,\n    ],\n    templateUrl: \'./image-tool.template.html\',\n    styleUrls: [\'./image-tool.styles.less\'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleTuiPasteImageToolComponent {\n    @ViewChild(\'dropdown\')\n    private readonly dropdown?: TuiHostedDropdownComponent;\n\n    private readonly editor = inject(TuiTiptapEditorService);\n\n    // eslint-disable-next-line @typescript-eslint/quotes\n    protected youtubeLogo = `<?xml version="1.0" ?><svg width="24px" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="385.829,128 385.829,256 347.429,291.072 307.2,256 272.457,241.371 306.59,165.51 " style="fill:#D32E2A;"/><polygon points="384,385.219 256,385.219 255.39,383.391 226.133,356.291 255.39,308.041 270.629,271.848   355.962,302.043 " style="fill:#3A5BBC;"/><polygon points="256.61,128.61 288.305,164.901 256.61,203.959 241.371,240.152 161.524,200.253 128,126.781   256,126.781 " style="fill:#FBBB00;"/><polygon points="239.543,270.629 204.495,346.843 126.171,384 126.171,256 163.962,232.558 204.8,256 " style="fill:#28B446;"/><polygon points="512,256 384,385.219 270.629,271.848 307.2,256 385.829,256 " style="fill:#518EF8;"/><polygon points="255.39,383.391 255.39,512 126.171,384 239.543,270.629 255.39,307.2 255.39,308.041 " style="fill:#91C646;"/><polygon points="241.371,240.152 204.8,256 126.171,256 0,256 128,126.781 " style="fill:#FFD837;"/><polygon points="385.829,128 272.457,241.371 256.61,204.8 256.61,203.959 256.61,128.61 256.61,0 " style="fill:#F14336;"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>`;\n\n    protected placeholder = \'https://image.com/etc.png\';\n\n    protected url = \'\';\n\n    protected insertImage(src: string): void {\n        if (!src) {\n            return;\n        }\n\n        this.editor.setImage(src);\n        this.dropdown?.close();\n    }\n}\n'}}]);