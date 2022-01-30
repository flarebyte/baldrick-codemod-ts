import { Snippet } from '../../../snippet/snippet-model';

export const snippetTemplate: Snippet = {
    path: "string/classic/padStart.ts",
    search: "padStart",
    keywords: [],
    description: "Pad the current string with another string",
    hydrationKind: "noTransform",
    code: "const padStart =\n  (maxLength: number, fillString?: string) =>\n  (text: string): string =>\n    text.padStart(maxLength, fillString);\n"
};
