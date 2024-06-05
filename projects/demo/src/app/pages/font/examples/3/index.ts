import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {
    TUI_EDITOR_EXTENSIONS,
    TuiEditorComponent,
    TuiEditorSocketComponent,
    TuiEditorTool,
} from '@tbank/tui-editor';

import {ExampleTuiFontSizeToolComponent} from './font-size-tool/font-size-tool.component';

@Component({
    standalone: true,
    imports: [
        ReactiveFormsModule,
        ExampleTuiFontSizeToolComponent,
        TuiEditorSocketComponent,
        TuiEditorComponent,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: [
                import('@tbank/tui-editor').then(({TuiStarterKit}) => TuiStarterKit),
                import('@tiptap/extension-text-style').then(
                    ({default: TextStyle}) => TextStyle,
                ),
                import('@tbank/tui-editor').then(({TuiFontSize}) => TuiFontSize),
            ],
        },
    ],
})
export default class ExampleComponent {
    protected readonly builtInTools = [TuiEditorTool.Undo];

    protected control = new FormControl(`
        <p>Hello</p>
        <p><span style="font-size: 24px">Hello world</span></p>
    `);
}
