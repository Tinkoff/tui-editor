(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[5227],{5227:e=>{e.exports="import {fromEvent, Observable} from 'rxjs';\nimport {delay, finalize, map, switchMap} from 'rxjs/operators';\n\nimport {ImgbbService} from './imgbb.service';\n\nexport function imageLoader(service: ImgbbService): (file: File) => Observable<string> {\n    return (file: File) => {\n        const fileReader = new FileReader();\n\n        service.loading$.next(true);\n        fileReader.readAsDataURL(file);\n\n        return fromEvent(fileReader, `load`).pipe(\n            delay(2000), // for simulate throttle network\n            map(() => String(fileReader.result)),\n            switchMap(base64 => service.save(base64)),\n            finalize(() => service.loading$.next(false)),\n        );\n    };\n}\n"}}]);