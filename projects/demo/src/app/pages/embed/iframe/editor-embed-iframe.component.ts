import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDocExample} from '@taiga-ui/addon-doc';

import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
} from '../../../../../../tui-editor';

@Component({
    selector: 'editor-embed-iframe',
    templateUrl: './editor-embed-iframe.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleTuiEditorEmbedIframeComponent {
    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
        'embed-tool/embed-tool.component.ts': import(
            './examples/1/embed-tool/embed-tool.component.ts?raw'
        ),
        'embed-tool/embed-tool.template.html': import(
            './examples/1/embed-tool/embed-tool.template.html?raw'
        ),
        'embed-tool/embed-tool.styles.less': import(
            './examples/1/embed-tool/embed-tool.styles.less?raw'
        ),
        'embed-tool/embed-tool.module.ts': import(
            './examples/1/embed-tool/embed-tool.module.ts?raw'
        ),
    };
}
