import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiActiveZone, TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiEditor} from '@taiga-ui/editor';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiActiveZone, TuiAutoFocus, TuiEditor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Example {
    protected readonly control = new FormControl('');
    protected readonly builtInTools = [];
}
