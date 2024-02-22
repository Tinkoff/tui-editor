(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8499],{88499:e=>{e.exports="import {HttpClient} from '@angular/common/http';\nimport {\n    ChangeDetectionStrategy,\n    Component,\n    Inject,\n    INJECTOR,\n    Injector,\n    Self,\n} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {TUI_IS_STACKBLITZ, TuiDestroyService, TuiHandler} from '@taiga-ui/cdk';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TUI_IMAGE_LOADER,\n    TuiEditorTool,\n} from '@tinkoff/tui-editor';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-editor-resizable-editor-example-1',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [INJECTOR],\n            useFactory: (injector: Injector) => [\n                import('@tinkoff/tui-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@tinkoff/tui-editor/extensions/image-editor').then(\n                    ({tuiCreateImageEditorExtension}) =>\n                        tuiCreateImageEditorExtension({injector}),\n                ),\n            ],\n        },\n    ],\n})\nexport class TuiEditorResizableEditorExample1 {\n    private readonly relativePath = this.isStackblitz ? 'https://taiga-ui.dev/' : '';\n\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    base64Image$ = this.http\n        .get(`${this.relativePath}assets/images/lumberjack.png`, {responseType: 'blob'})\n        .pipe(switchMap(file => this.imageLoader(file)));\n\n    control = new FormControl('');\n\n    constructor(\n        @Inject(TUI_IMAGE_LOADER)\n        private readonly imageLoader: TuiHandler<Blob, Observable<string>>,\n        @Inject(HttpClient) private readonly http: HttpClient,\n        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(TUI_IS_STACKBLITZ) private readonly isStackblitz: boolean,\n    ) {\n        this.base64Image$.pipe(takeUntil(destroy$)).subscribe(src => {\n            this.control.patchValue(\n                `\n                    <img data-type=\"image-editor\" src=\"${src}\" width=\"300\">\n                    <p>Try to drag right border of image!</p>\n                    <p>To change min/max size of image use token <code>TUI_IMAGE_EDITOR_OPTIONS</code>.\n                `,\n            );\n        });\n    }\n}\n"}}]);