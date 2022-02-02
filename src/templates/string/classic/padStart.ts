import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
    path: "string/classic/padStart.ts",
    search: "padStart",
    description: "Pad the current string with another string",
    hydrationKind: "noTransform",
    code: "const padStart =\n  (maxLength: number, fillString?: string) =>\n  (text: string): string =>\n    text.padStart(maxLength, fillString);\n"
}