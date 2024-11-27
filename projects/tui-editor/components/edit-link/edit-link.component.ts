import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Optional,
    Output,
} from '@angular/core';
import {TuiInjectionTokenType, tuiIsElement} from '@taiga-ui/cdk';
import {AbstractTuiEditor} from '@tinkoff/tui-editor/abstract';
import {
    TUI_EDITOR_LINK_HASH_PREFIX,
    TUI_EDITOR_LINK_HTTPS_PREFIX,
    TuiEditorLinkPrefix,
    TuiEditorLinkProtocol,
} from '@tinkoff/tui-editor/constants';
import {TuiTiptapEditorService} from '@tinkoff/tui-editor/directives';
import {
    TUI_EDITOR_LINK_TEXTS,
    TUI_EDITOR_OPTIONS,
    TuiEditorOptions,
} from '@tinkoff/tui-editor/tokens';

import {tuiEditLinkParseUrl} from './utils/edit-link-parse-url';

@Component({
    selector: 'tui-edit-link',
    templateUrl: './edit-link.template.html',
    styleUrls: ['./edit-link.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiEditLinkComponent {
    private isOnlyAnchorMode: boolean = this.detectAnchorMode();

    @Input('editor')
    inputEditor: AbstractTuiEditor | null = null;

    @Output()
    readonly addLink = new EventEmitter<string>();

    @Output()
    readonly removeLink = new EventEmitter<void>();

    url: string = this.getHrefOrAnchorId();

    edit = !this.url;

    prefix: TuiEditorLinkPrefix = this.makeDefaultPrefix();

    anchorIds = this.getAllAnchorsIds();

    constructor(
        @Inject(DOCUMENT)
        private readonly doc: Document,
        @Inject(TUI_EDITOR_LINK_TEXTS)
        readonly texts$: TuiInjectionTokenType<typeof TUI_EDITOR_LINK_TEXTS>,
        @Optional()
        @Inject(TuiTiptapEditorService)
        readonly injectionEditor: AbstractTuiEditor | null,
        @Inject(TUI_EDITOR_OPTIONS) readonly options: TuiEditorOptions,
    ) {}

    get editor(): AbstractTuiEditor | null {
        return this.injectionEditor ?? this.inputEditor;
    }

    get defaultProtocol(): TuiEditorLinkProtocol {
        return this.options.linkOptions?.protocol ?? TUI_EDITOR_LINK_HTTPS_PREFIX;
    }

    @Input()
    set anchorMode(mode: boolean) {
        this.isOnlyAnchorMode = mode;
        this.prefix = mode ? TUI_EDITOR_LINK_HASH_PREFIX : this.makeDefaultPrefix();
    }

    get anchorMode(): boolean {
        return this.isOnlyAnchorMode;
    }

    get prefixIsHashMode(): boolean {
        return this.prefix === TUI_EDITOR_LINK_HASH_PREFIX;
    }

    get hasUrl(): boolean {
        return !!this.url;
    }

    get href(): string {
        return `${this.prefix}${this.url}`;
    }

    get showAnchorsList(): boolean {
        return !this.anchorMode && this.edit && this.anchorIds.length > 0;
    }

    private get isViewMode(): boolean {
        return !this.edit;
    }

    @HostListener('document:selectionchange')
    onSelectionChange(): void {
        if (this.isViewMode) {
            this.url = this.getHrefOrAnchorId();
            this.anchorMode = this.detectAnchorMode();
        }
    }

    @HostListener('mousedown', ['$event'])
    onMouseDown(event: MouseEvent): void {
        if (tuiIsElement(event.target) && !event.target.matches('a, button, input')) {
            event.preventDefault();
        }
    }

    setAnchor(anchor: string): void {
        this.url = anchor;
        this.changePrefix(true);
        this.addLink.emit(this.href);
    }

    changePrefix(useHash: boolean): void {
        this.prefix = useHash ? TUI_EDITOR_LINK_HASH_PREFIX : this.defaultProtocol;
    }

    onSave(): void {
        if (this.url) {
            this.addLink.emit(this.href);
        } else {
            this.removeLink.emit();
        }
    }

    onBackspace(): void {
        if (!this.url) {
            this.prefix = this.isOnlyAnchorMode
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : this.defaultProtocol;
        }
    }

    onEdit(): void {
        this.edit = true;
    }

    onRemove(): void {
        this.removeLink.emit();
    }

    onChange(url: string): void {
        this.url = this.removePrefix(url);
    }

    onClear(): void {
        this.url = '';
    }

    private makeDefaultPrefix(): TuiEditorLinkPrefix {
        const a = this.getAnchorElement();
        const defaultPrefix =
            (tuiEditLinkParseUrl(a?.getAttribute('href') ?? '')
                .prefix as TuiEditorLinkPrefix) || this.defaultProtocol;

        if (a) {
            if (this.isOnlyAnchorMode) {
                return TUI_EDITOR_LINK_HASH_PREFIX;
            }

            return (!a.getAttribute('href') && a.getAttribute('id')) ||
                a.getAttribute('href')?.startsWith(TUI_EDITOR_LINK_HASH_PREFIX)
                ? TUI_EDITOR_LINK_HASH_PREFIX
                : defaultPrefix;
        }

        return defaultPrefix;
    }

    private detectAnchorMode(): boolean {
        const a = this.getAnchorElement();

        return (
            !a?.href &&
            (!!a?.getAttribute('id') || a?.getAttribute('data-type') === 'jump-anchor')
        );
    }

    private getFocusedParentElement(): HTMLElement | null {
        return this.doc.getSelection()?.focusNode?.parentElement || null;
    }

    private getAnchorElement(): HTMLAnchorElement | null {
        const focusable = this.getFocusedParentElement();

        return (
            focusable?.closest('a') ??
            focusable?.querySelector('img')?.closest('a') ??
            null
        );
    }

    private getHrefOrAnchorId(): string {
        const a = this.getAnchorElement();

        return a
            ? this.removePrefix(a.getAttribute('href') || a.getAttribute('id') || '')
            : this.url;
    }

    private removePrefix(url: string): string {
        const fullPath =
            url.startsWith(TUI_EDITOR_LINK_HASH_PREFIX) ||
            this.prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            url.startsWith('/') ||
            url.startsWith('./') ||
            url.startsWith('http') ||
            url.startsWith('://')
                ? url
                : `${this.prefix ?? ''}${url}`;

        const {prefix, path} = tuiEditLinkParseUrl(fullPath);
        const expectAnchorMode =
            this.isOnlyAnchorMode ||
            prefix === TUI_EDITOR_LINK_HASH_PREFIX ||
            (prefix === '' && this.prefix === TUI_EDITOR_LINK_HASH_PREFIX);

        if (expectAnchorMode) {
            this.prefix = TUI_EDITOR_LINK_HASH_PREFIX;
        } else if (prefix === '') {
            this.prefix = this.defaultProtocol;
        } else {
            this.prefix = prefix as TuiEditorLinkPrefix;
        }

        return path;
    }

    private getAllAnchorsIds(): string[] {
        const nodes: Element[] = Array.from(
            this.editor
                ?.getOriginTiptapEditor()
                .view.dom.querySelectorAll('[data-type="jump-anchor"]') ?? [],
        );

        return Array.from(nodes)
            .map(node => node.getAttribute('id') || '')
            .filter(Boolean);
    }
}
