import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {TuiPickerService} from '@tbank/tui-editor/services';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-flat-picker',
    templateUrl: './flat-picker.template.html',
    styleUrls: ['./flat-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, TuiPickerService],
})
export class TuiFlatPickerComponent {
    @Input()
    value: TuiPoint = [0, 0];

    @Output()
    readonly valueChange = new EventEmitter<[number, number]>();

    constructor(@Inject(TuiPickerService) point$: Observable<TuiPoint>) {
        point$.subscribe(point => {
            this.value = point;
            this.valueChange.emit([point[0], point[1]]);
        });
    }

    get left(): number {
        return this.value[0] * 100;
    }

    get top(): number {
        return this.value[1] * 100;
    }
}
