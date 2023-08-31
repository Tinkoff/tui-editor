import {tuiBeInViewportAssertion, tuiWaitAllImgInside} from '@taiga-ui/testing/cypress';

import {tuiClickOutside} from '../helpers/click-outside';
import {tuiFindDocExample, tuiGetDocExample} from '../helpers/example-id-utils';
import {tuiFocus} from '../helpers/focus';
import {tuiHide} from '../helpers/hide';
import {tuiScrollIntoView} from '../helpers/scroll-into-view';
import {tuiSetLanguage} from '../helpers/set-language';
import {tuiSetNightMode} from '../helpers/set-night-mode';
import {tuiShow} from '../helpers/show';
import {tuiTab} from '../helpers/type-tab';
import {tuiVisit} from '../helpers/visit';
import {
    tuiWaitBeforeAction,
    tuiWaitBeforeScreenshot,
} from '../helpers/wait-before-screenshot';
import {tuiWaitCodeHighlight} from '../helpers/wait-code-highlight';
import {tuiWaitKitDialog} from '../helpers/wait-kit-dialog';

declare global {
    namespace Cypress {
        interface Chainable {
            findByAutomationId(automationId: string): Chainable<JQuery>;

            getByAutomationId(automationId: string): Chainable<JQuery>;

            tuiClickOutside: typeof tuiClickOutside;
            tuiFindByExampleId(): Chainable;
            tuiFocus(): Chainable;
            tuiGetByExampleId(): Chainable;
            tuiHide: typeof tuiHide;
            tuiScrollIntoView(): Chainable;
            tuiSetLanguage: typeof tuiSetLanguage;
            tuiSetNightMode: typeof tuiSetNightMode;

            tuiShow: typeof tuiShow;
            tuiTab(direction: 'backward' | 'forward'): Chainable;
            tuiVisit: typeof tuiVisit;
            tuiWaitAllImgInside(enabled?: boolean): Chainable;
            tuiWaitBeforeAction(): Chainable;
            tuiWaitBeforeScreenshot(): Chainable;
            tuiWaitCodeHighlight: typeof tuiWaitCodeHighlight;
            tuiWaitKitDialog: typeof tuiWaitKitDialog;
        }

        interface Chainer<Subject> {
            (chainer: 'be.inViewport'): Chainable<Subject>;
        }
    }
}

Cypress.Commands.add(`getByAutomationId`, id => cy.get(`[automation-id=${id}]`));
Cypress.Commands.add(`tuiGetByExampleId`, tuiGetDocExample);
Cypress.Commands.add(
    `findByAutomationId`,
    {prevSubject: true},
    <S>(subject: S, id: string) =>
        /**
         * `subject` is just `jQuery`-element which has method `.find()`.
         * This method doesn't have {@link https://docs.cypress.io/guides/core-concepts/retry-ability retry-ability}!
         * ___
         * `cy.wrap(subject)` is a `$Chainer`-element (cypress built-in implementation) which also has method `.find()`.
         * This method has retry-ability!
         */
        cy.wrap(subject, {log: false}).find(`[automation-id=${id}]`),
);
Cypress.Commands.add(`tuiVisit`, tuiVisit);
Cypress.Commands.add(`tuiWaitKitDialog`, tuiWaitKitDialog);
Cypress.Commands.add(`tuiSetLanguage`, tuiSetLanguage);
Cypress.Commands.add(`tuiSetNightMode`, tuiSetNightMode);
Cypress.Commands.add(`tuiWaitCodeHighlight`, tuiWaitCodeHighlight);
Cypress.Commands.add(`tuiHide`, tuiHide);
Cypress.Commands.add(`tuiShow`, tuiShow);
Cypress.Commands.add(`tuiFindByExampleId`, {prevSubject: true}, <S>(subject: S) =>
    tuiFindDocExample<S>(subject),
);
Cypress.Commands.add(`tuiClickOutside`, tuiClickOutside);
Cypress.Commands.add(
    `tuiWaitBeforeScreenshot`,
    {prevSubject: [`optional`]},
    tuiWaitBeforeScreenshot,
);
Cypress.Commands.add(
    `tuiWaitBeforeAction`,
    {prevSubject: [`optional`, `element`, `window`, `document`]},
    tuiWaitBeforeAction,
);
Cypress.Commands.add(
    `tuiTab`,
    {prevSubject: [`optional`, `element`, `window`, `document`]},
    tuiTab,
);
Cypress.Commands.add(
    `tuiScrollIntoView`,
    {prevSubject: [`optional`, `element`, `window`, `document`]},
    tuiScrollIntoView,
);
Cypress.Commands.add(
    `tuiFocus`,
    {prevSubject: [`optional`, `element`, `window`, `document`]},
    tuiFocus,
);
Cypress.Commands.add(
    `tuiWaitAllImgInside`,
    {prevSubject: [`optional`, `element`, `window`, `document`]},
    tuiWaitAllImgInside,
);

chai.use(tuiBeInViewportAssertion);
