(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[8229],{28229:n=>{n.exports='<tui-hosted-dropdown\n    #dropdown\n    tuiDropdownAlign="left"\n    class="t-wrapper"\n    [content]="youtubeDropdown"\n>\n    <button\n        appearance="flat"\n        automation-id="youtube-tool__button"\n        size="s"\n        tuiIconButton\n        type="button"\n        class="tool-button"\n        [focusable]="dropdown.open"\n        [icon]="youtubeLogo"\n        [pseudoActive]="dropdown.open"\n    ></button>\n    <ng-template\n        #youtubeDropdown\n        let-activeZone\n    >\n        <div\n            class="youtube-tool-content"\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <label class="t-label">\n                <div class="t-label-properties">Youtube URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="insertYoutubeVideo(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</tui-hosted-dropdown>\n'}}]);