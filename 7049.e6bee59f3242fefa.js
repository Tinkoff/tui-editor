(self.webpackChunkeditor_demo=self.webpackChunkeditor_demo||[]).push([[7049],{9430:n=>{n.exports="import type {NodeConfig} from '@tiptap/core';\nimport {Plugin} from '@tiptap/pm/state';\nimport type {EditorView} from '@tiptap/pm/view';\n\nexport const IMAGE_CLIPBOARD_PASTE_EXTENSION: Partial<NodeConfig<unknown, unknown>> = {\n    addProseMirrorPlugins() {\n        return [\n            new Plugin({\n                props: {\n                    handleDOMEvents: {\n                        paste: (view: EditorView, event: ClipboardEvent) => {\n                            const url = event.clipboardData?.getData('text/plain') ?? '';\n                            const isImage =\n                                /^https?:\\/\\/.+\\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(\n                                    url,\n                                );\n\n                            if (isImage) {\n                                const node = view.state.schema.nodes.image?.create({\n                                    src: url,\n                                });\n\n                                if (!node) {\n                                    return;\n                                }\n\n                                const transaction =\n                                    view.state.tr.replaceSelectionWith(node);\n\n                                /**\n                                 * @note:\n                                 * workaround for `Applying a mismatched transaction`\n                                 */\n                                setTimeout(() => view.dispatch(transaction));\n\n                                event.preventDefault();\n                            }\n                        },\n                    },\n                },\n            }),\n        ];\n    },\n};\n"}}]);