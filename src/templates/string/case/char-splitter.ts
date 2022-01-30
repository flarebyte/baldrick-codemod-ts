import { Snippet } from '../../../snippet/snippet-model';

export const snippetTemplate: Snippet = {
    path: "string/case/char-splitter.ts",
    search: "split string by char",
    keywords: [],
    description: "Split a string based on a char separator",
    hydrationKind: "replaceVariables",
    code: "export const splitByThisString = (text: string): string[] =>\n  text.split('separator');\n",
    variables: [{"name":"ThisString","kind":"camelCase","description":"Function suffix"},{"name":"separator","kind":"string","description":"String separator"}]
};
