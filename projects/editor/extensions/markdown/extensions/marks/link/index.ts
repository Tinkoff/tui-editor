import {Mark} from '@tiptap/core';
import {defaultMarkdownSerializer} from '@tiptap/pm/markdown';

export default Mark.create({
    name: 'link',
}).extend({
    addStorage() {
        return {
            markdown: {
                serialize: defaultMarkdownSerializer.marks.link,
                parse: {
                    // handled by markdown-it
                },
            },
        };
    },
});
