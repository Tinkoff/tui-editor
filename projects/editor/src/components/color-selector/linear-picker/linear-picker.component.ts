import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

import {TuiPickerService} from '../../../services/picker.service';

@Component({
    standalone: true,
    selector: 'tui-linear-picker',
    templateUrl: './linear-picker.template.html',
    styleUrls: ['./linear-picker.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiPickerService],
})
export class TuiLinearPicker {
    @Input()
    public value = 0;

    @Output()
    public readonly valueChange = new EventEmitter<number>();

    constructor() {
        inject(TuiPickerService)
            .pipe(takeUntilDestroyed())
            .subscribe(([x]) => {
                this.value = x;
                this.valueChange.emit(x);
            });
    }

    protected get left(): number {
        return this.value * 100;
    }
}
