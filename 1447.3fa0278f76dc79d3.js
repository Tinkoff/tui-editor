(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1447],{81447:e=>{e.exports="import {CommonModule} from '@angular/common';\nimport {NgModule} from '@angular/core';\nimport {TuiPreviewModule} from '@taiga-ui/addon-preview';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\nimport {TuiEditorImagePreviewModule} from '@tinkoff/tui-editor';\n\nimport {ImagePreviewExampleComponent} from './image-preview.component';\n\n@NgModule({\n    imports: [\n        CommonModule,\n        TuiPreviewModule,\n        TuiButtonModule,\n        PolymorpheusModule,\n        TuiEditorImagePreviewModule,\n    ],\n    declarations: [ImagePreviewExampleComponent],\n    exports: [\n        TuiEditorImagePreviewModule,\n        TuiEditorImagePreviewModule,\n        ImagePreviewExampleComponent,\n    ],\n})\nexport class ImagePreviewExampleModule {}\n"}}]);