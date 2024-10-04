(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[6481],{6481:n=>{n.exports='import {ChangeDetectionStrategy, Component, ViewEncapsulation} from \'@angular/core\';\nimport {FormControl, ReactiveFormsModule} from \'@angular/forms\';\nimport {\n    TUI_EDITOR_EXTENSIONS,\n    TuiEditor,\n    TuiEditorSocket,\n    TuiEditorTool,\n} from \'@taiga-ui/editor\';\n\n@Component({\n    standalone: true,\n    imports: [ReactiveFormsModule, TuiEditor, TuiEditorSocket],\n    templateUrl: \'./index.html\',\n    encapsulation: ViewEncapsulation.None,\n    changeDetection: ChangeDetectionStrategy.OnPush,\n    providers: [\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(\'@taiga-ui/editor\').then(({TuiStarterKit}) => TuiStarterKit),\n                import(\'@tiptap/extension-text-style\').then(({TextStyle}) => TextStyle),\n            ],\n        },\n    ],\n})\nexport default class Example {\n    protected readonly builtInTools = [\n        TuiEditorTool.Undo,\n        TuiEditorTool.Size,\n        TuiEditorTool.List,\n    ];\n\n    protected control = new FormControl(`\n    <p>Which do you prefer?</p>\n    <ul data-type="taskList">\n        <li\n            data-checked="true"\n            data-type="taskItem"\n        >\n            <label>\n                <input\n                    checked="checked"\n                    type="checkbox"\n                />\n                <span></span>\n            </label>\n            <div>\n                <p>Taiga UI</p>\n                <ul data-type="taskList">\n                    <li\n                        data-checked="false"\n                        data-type="taskItem"\n                    >\n                        <label>\n                            <input type="checkbox" />\n                            <span></span>\n                        </label>\n                        <div><p>v3.x</p></div>\n                    </li>\n                    <li\n                        data-checked="true"\n                        data-type="taskItem"\n                    >\n                        <label>\n                            <input\n                                checked="checked"\n                                type="checkbox"\n                            />\n                            <span></span>\n                        </label>\n                        <div><p>v4.x</p></div>\n                    </li>\n                </ul>\n            </div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Material</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Prime NG</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>NG-Zorro</p></div>\n        </li>\n        <li\n            data-checked="false"\n            data-type="taskItem"\n        >\n            <label>\n                <input type="checkbox" />\n                <span></span>\n            </label>\n            <div><p>Bootstrap</p></div>\n        </li>\n    </ul>\n    <p></p>\n    `);\n}\n'}}]);