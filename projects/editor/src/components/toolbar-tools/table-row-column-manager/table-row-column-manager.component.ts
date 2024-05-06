import {AsyncPipe, NgForOf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiDataListModule,
    TuiHintModule,
    TuiHostedDropdownModule,
} from '@taiga-ui/core';
import {map} from 'rxjs';

import {TuiTiptapEditorService} from '../../../directives/tiptap-editor/tiptap-editor.service';
import {TUI_EDITOR_OPTIONS} from '../../../tokens/editor-options';
import {TUI_EDITOR_TABLE_COMMANDS, TUI_EDITOR_TOOLBAR_TEXTS} from '../../../tokens/i18n';

// TODO: change type in v4.0
// eslint-disable-next-line no-restricted-syntax
export enum TuiTableCommands {
    InsertColumnBefore,
    InsertColumnAfter,
    InsertRowBefore,
    InsertRowAfter,
    DeleteColumn,
    DeleteRow,
}

@Component({
    standalone: true,
    selector: 'tui-table-row-column-manager',
    imports: [
        NgForOf,
        TuiDataListModule,
        AsyncPipe,
        TuiButtonDirective,
        TuiHintModule,
        TuiHostedDropdownModule,
        TuiLetDirective,
    ],
    templateUrl: './table-row-column-manager.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableRowColumnManagerComponent {
    private readonly commandsRegistry: Record<TuiTableCommands, () => void> = {
        [TuiTableCommands.InsertColumnAfter]: () => this.editor.addColumnAfter(),
        [TuiTableCommands.InsertColumnBefore]: () => this.editor.addColumnBefore(),
        [TuiTableCommands.InsertRowAfter]: () => this.editor.addRowAfter(),
        [TuiTableCommands.InsertRowBefore]: () => this.editor.addRowBefore(),
        [TuiTableCommands.DeleteColumn]: () => this.editor.deleteColumn(),
        [TuiTableCommands.DeleteRow]: () => this.editor.deleteRow(),
    };

    protected readonly options = inject(TUI_EDITOR_OPTIONS);
    protected readonly editor = inject(TuiTiptapEditorService);
    protected readonly texts$ = inject(TUI_EDITOR_TOOLBAR_TEXTS);
    protected readonly tableCommandTexts$ = inject(TUI_EDITOR_TABLE_COMMANDS);

    protected readonly isActive$ = this.editor.isActive$('table');

    protected readonly rowsColumnsManagingText$ = this.texts$.pipe(
        map(texts => texts.rowsColumnsManaging),
    );

    protected onTableOption(command: TuiTableCommands): void {
        this.commandsRegistry[command]();
    }
}
