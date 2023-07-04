import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiLanguageEditor} from '@taiga-ui/i18n';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_OPTIONS,
    TUI_EDITOR_TOOLBAR_TEXTS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';
import {Observable} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

@Component({
    selector: 'tui-text-color',
    templateUrl: './text-color.template.html',
    styleUrls: ['../tools-common.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTextColorComponent {
    @Input()
    colors: ReadonlyMap<string, string> = this.defaultOptions.colors;

    readonly fontColor$ = this.editor.stateChange$.pipe(
        map(() => this.editor.getFontColor() || this.defaultOptions.blankColor),
        distinctUntilChanged(),
    );

    readonly foreColorText$ = this.texts$.pipe(map(texts => texts.foreColor));

    constructor(
        @Inject(TUI_EDITOR_OPTIONS)
        private readonly defaultOptions: TuiEditorOptions,
        @Inject(TuiTiptapEditorService) readonly editor: AbstractTuiEditor,
        @Inject(TUI_EDITOR_TOOLBAR_TEXTS)
        readonly texts$: Observable<TuiLanguageEditor['toolbarTools']>,
    ) {}
}
