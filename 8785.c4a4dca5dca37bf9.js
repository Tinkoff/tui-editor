(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8785],{18785:r=>{r.exports="import {Injectable} from '@angular/core';\nimport {TuiValueTransformer} from '@taiga-ui/cdk';\nimport {tuiLegacyEditorConverter} from '@tinkoff/tui-editor';\n\n@Injectable()\nexport class ExampleEditorConvertLegacyHtmlTransformer extends TuiValueTransformer<string> {\n    public fromControlValue(controlValue: string): string {\n        return tuiLegacyEditorConverter(controlValue);\n    }\n\n    public toControlValue(componentValue: string): string {\n        return componentValue;\n    }\n}\n"}}]);