(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[9560],{71239:e=>{e.exports="import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {TuiActiveZone} from '@taiga-ui/cdk';\nimport {TuiEditor, tuiEditorOptionsProvider} from '@taiga-ui/editor';\n\n@Component({\n    standalone: true,\n    imports: [TuiEditor, ReactiveFormsModule, TuiActiveZone],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        tuiEditorOptionsProvider({\n            appearence: 'no-border',\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly control = new FormControl('');\n    protected readonly builtInTools = [];\n}\n"}}]);