(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[8785],{18785:r=>{r.exports="import {Injectable} from '@angular/core';\nimport {AbstractTuiValueTransformer} from '@taiga-ui/cdk';\nimport {tuiLegacyEditorConverter} from '@tinkoff/tui-editor';\n\n@Injectable()\nexport class ExampleEditorConvertLegacyHtmlTransformer extends AbstractTuiValueTransformer<string> {\n    fromControlValue(controlValue: string): string {\n        return tuiLegacyEditorConverter(controlValue);\n    }\n\n    toControlValue(componentValue: string): string {\n        return componentValue;\n    }\n}\n"}}]);