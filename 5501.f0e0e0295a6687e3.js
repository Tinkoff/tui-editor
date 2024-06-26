(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5501],{5501:t=>{t.exports="import {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';\nimport type {SafeHtml} from '@angular/platform-browser';\nimport {DomSanitizer} from '@angular/platform-browser';\nimport {TuiItem, tuiPure} from '@taiga-ui/cdk';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditor, TuiEditorTool} from '@taiga-ui/editor';\n\nimport {ExampleTuiYoutubeTool} from './youtube-tool/youtube-tool.component';\n\n@Component({\n    standalone: true,\n    imports: [ExampleTuiYoutubeTool, ReactiveFormsModule, TuiItem, TuiEditor, TuiIcon],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import('@taiga-ui/editor').then(({TuiStarterKit}) => TuiStarterKit),\n                import('@taiga-ui/editor').then(({TuiYoutube}) => TuiYoutube),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    private readonly sanitizer = inject(DomSanitizer);\n\n    protected readonly builtInTools = [TuiEditorTool.Undo];\n    protected readonly control = new FormControl(\n        `\n        <p>Editor now supports YouTube embeds!</p>\n        <div data-youtube-video>\n            <iframe width=\"100%\" src=\"https://www.youtube.com/watch?v=KdO8CFCXQu0\"></iframe>\n        </div>\n        <p>Try adding your own video to this editor!</p>\n    `,\n        Validators.required,\n    );\n\n    @tuiPure\n    protected safe(content: string | null): SafeHtml {\n        return this.sanitizer.bypassSecurityTrustHtml(content ?? '');\n    }\n}\n"}}]);