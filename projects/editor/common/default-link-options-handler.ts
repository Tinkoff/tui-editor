export const TUI_EDITOR_LINK_HASH_PREFIX = '#';
export const TUI_EDITOR_LINK_HTTP_PREFIX = 'http://';
export const TUI_EDITOR_LINK_HTTPS_PREFIX = 'https://';
export const TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER = ':';
export const TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER = '://';

export type TuiEditorLinkProtocol =
    | `${string}${typeof TUI_EDITOR_LINK_OSI_PROTOCOL_DIVIDER}`
    | `${string}${typeof TUI_EDITOR_LINK_SIMPLE_PROTOCOL_DIVIDER}`;

export type TuiEditorLinkPrefix =
    | TuiEditorLinkProtocol
    | typeof TUI_EDITOR_LINK_HASH_PREFIX;

export interface TuiEditorLinkOptions {
    readonly protocol: TuiEditorLinkProtocol;
}

export const TUI_DEFAULT_LINK_OPTIONS = {
    protocol: TUI_EDITOR_LINK_HTTPS_PREFIX,
} as const;
