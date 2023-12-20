/**
 * @note:
 * These types are required for build tiptap-editor service.
 * don't use import directly as `import '@tiptap/*'` for provide types,
 * because the source code of `@tiptap` will be included in bundle
 */
import type {
    BackgroundColor,
    FontColor,
    TuiDetails,
    TuiJumpAnchor,
    Youtube,
} from '@tinkoff/tui-editor/extensions';
import type Highlight from '@tiptap/extension-highlight';
import type {Image} from '@tiptap/extension-image';
import type Link from '@tiptap/extension-link';
import type Subscript from '@tiptap/extension-subscript';
import type Superscript from '@tiptap/extension-superscript';
import type Table from '@tiptap/extension-table';
import type TableCell from '@tiptap/extension-table-cell';
import type TableHeader from '@tiptap/extension-table-header';
import type TableRow from '@tiptap/extension-table-row';
import type TextAlign from '@tiptap/extension-text-align';
import type TextStyle from '@tiptap/extension-text-style';
import type Underline from '@tiptap/extension-underline';
import type StarterKit from '@tiptap/starter-kit';

export {
    BackgroundColor,
    FontColor,
    Highlight,
    Image,
    Link,
    StarterKit,
    Subscript,
    Superscript,
    Table,
    TableCell,
    TableHeader,
    TableRow,
    TextAlign,
    TextStyle,
    TuiDetails,
    TuiJumpAnchor,
    Underline,
    Youtube,
};
