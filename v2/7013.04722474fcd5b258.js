(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7013],{7013:e=>{e.exports="import {ChangeDetectionStrategy, Component, inject, Injector} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TUI_IS_STACKBLITZ} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorImagePreview,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from '@taiga-ui/editor';\nimport {TuiPreview} from '@taiga-ui/kit';\n\nimport {ImagePreviewExample} from './image-preview/image-preview.component';\n\n@Component({\n    standalone: true,\n    imports: [\n        ImagePreviewExample,\n        ReactiveFormsModule,\n        TuiPreview,\n        TuiEditorSocket,\n        TuiEditorImagePreview,\n        TuiEditor,\n    ],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@taiga-ui/editor').then(({tuiCreateImageEditorExtension}) =>\n                    tuiCreateImageEditorExtension({injector}),\n                ),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    private readonly isStackblitz = inject(TUI_IS_STACKBLITZ);\n    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';\n\n    protected readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    protected control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            `<p>Small image</p><img src=\"${this.relativePath}assets/images/lumberjack.png\" width=\"300\" /><p>Big image</p><img src=\"${this.relativePath}assets/images/big-wallpaper.jpg\" width=\"500\" />`,\n        );\n    }\n}\n"}}]);