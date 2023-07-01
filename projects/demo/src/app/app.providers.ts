import {isPlatformBrowser, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ErrorHandler, inject, PLATFORM_ID, Provider} from '@angular/core';
import {
    TUI_DOC_DEFAULT_TABS,
    TUI_DOC_LOGO,
    TUI_DOC_PAGES,
    TUI_DOC_SOURCE_CODE,
    TUI_DOC_TITLE,
    TuiDocSourceCodePathOptions,
} from '@taiga-ui/addon-doc';
import {HIGHLIGHT_OPTIONS} from 'ngx-highlightjs';

import {LOGO_CONTENT} from './modules/logo/logo.component';
import {DEMO_PAGES} from './pages/pages';
import {ServerErrorHandler} from './server-error-handler';

export const APP_PROVIDERS: Provider[] = [
    {
        provide: ErrorHandler,
        useClass: ServerErrorHandler,
    },
    {
        provide: LocationStrategy,
        useClass: PathLocationStrategy,
    },
    {
        provide: TUI_DOC_TITLE,
        useValue: 'TUI Editor | ',
    },
    {
        provide: TUI_DOC_LOGO,
        useValue: LOGO_CONTENT,
    },
    {
        provide: TUI_DOC_DEFAULT_TABS,
        useValue: ['Description and examples', 'API'],
    },
    {
        provide: TUI_DOC_PAGES,
        useValue: DEMO_PAGES,
    },
    {
        provide: TUI_DOC_SOURCE_CODE,
        useValue: (context: TuiDocSourceCodePathOptions) => {
            const link = `https://github.com/tinkoff/tui-editor/tree/main/projects`;

            if (context.path) {
                return `${link}/${context.path}`;
            }

            if (!context.package || context.package.toLowerCase() !== 'kit') {
                return null;
            }

            return `${link}/${context.package.toLowerCase()}/src/lib/tui-editor/${(
                context.header[0].toLowerCase() + context.header.slice(1)
            ).replace(/[A-Z]/g, m => `-${m.toLowerCase()}`)}`;
        },
    },
    {
        provide: HIGHLIGHT_OPTIONS,
        useFactory: () => {
            const isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

            return {
                coreLibraryLoader: async () => import(`highlight.js/lib/core`),
                lineNumbersLoader: async () =>
                    // SSR ReferenceError: window is not defined
                    isBrowser
                        ? import(`highlightjs-line-numbers.js` as string)
                        : Promise.resolve(),
                languages: {
                    typescript: async () =>
                        import(`highlight.js/lib/languages/typescript`),
                    less: async () => import(`highlight.js/lib/languages/less`),
                    xml: async () => import(`highlight.js/lib/languages/xml`),
                },
            };
        },
    },
];
