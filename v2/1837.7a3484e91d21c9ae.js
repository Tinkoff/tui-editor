(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[1837],{1837:e=>{e.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {TuiTextfieldControllerModule} from '@taiga-ui/core';\nimport {\n    TUI_EDITOR_DEFAULT_EDITOR_TOOLS,\n    TuiInputColorComponent,\n} from '@tinkoff/tui-editor';\n\n@Component({\n    standalone: true,\n    imports: [TuiTextfieldControllerModule, FormsModule, TuiInputColorComponent],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport default class ExampleComponent {\n    protected color = '#ffdd2d';\n\n    protected readonly palette = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;\n}\n"}}]);