(self.webpackChunktui_editor=self.webpackChunktui_editor||[]).push([[9624],{19624:e=>{e.exports="import {Injectable} from '@angular/core';\nimport {AbstractTuiValueTransformer} from '@taiga-ui/cdk';\n\n@Injectable()\nexport class ExampleEditorCleanupHtmlTransformer extends AbstractTuiValueTransformer<string> {\n    fromControlValue(controlValue: string): string {\n        return controlValue;\n    }\n\n    toControlValue(componentValue: string): string {\n        const tree = new DOMParser().parseFromString(componentValue, `text/html`);\n\n        tree.body.querySelectorAll(`*`).forEach(element => {\n            // now we can manipulate with any elements\n            // and cleanup any attributes (class for example)\n            element.removeAttribute(`class`);\n            element.removeAttribute(`style`);\n        });\n\n        return tree.body.innerHTML;\n    }\n}\n"}}]);