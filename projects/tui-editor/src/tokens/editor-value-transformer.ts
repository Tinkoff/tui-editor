import {InjectionToken} from '@angular/core';
import type {AbstractTuiValueTransformer} from '@taiga-ui/cdk';

export const TUI_EDITOR_VALUE_TRANSFORMER = new InjectionToken<
    AbstractTuiValueTransformer<string | null>
>('[TUI_EDITOR_VALUE_TRANSFORMER]');
