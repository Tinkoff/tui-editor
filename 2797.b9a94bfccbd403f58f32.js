(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[2797],{32797:n=>{n.exports='<button\n    appearance="flat"\n    icon="tuiIconMinus"\n    size="s"\n    tuiIconButton\n    type="button"\n    (click)="decrease()"\n></button>\n\n<tui-hosted-dropdown\n    #fonts\n    [content]="fontsDropdown"\n>\n    <button\n        appearance="flat"\n        size="s"\n        tuiButton\n    >\n        {{ size$ | async }}\n    </button>\n\n    <ng-template #fontsDropdown>\n        <tui-data-list>\n            <button\n                *ngFor="let size of sizes"\n                tuiOption\n                (click)="setFontSize(size); fonts.close()"\n            >\n                {{ size }}\n            </button>\n        </tui-data-list>\n    </ng-template>\n</tui-hosted-dropdown>\n\n<button\n    appearance="flat"\n    icon="tuiIconPlus"\n    size="s"\n    tuiIconButton\n    type="button"\n    (click)="increase()"\n></button>\n'}}]);