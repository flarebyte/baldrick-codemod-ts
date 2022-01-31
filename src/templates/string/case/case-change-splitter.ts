import { Snippet } from '../../../snippet/snippet-model';

export const snippetTemplate: Snippet = {
    path: "string/case/case-change-splitter.ts",
    search: "split by case",
    description: "Split string when char change to uppercase",
    hydrationKind: "noTransform",
    code: "export const splitOnCaseChange = (text: string): string[] =>\n  text.replace(/([\\da-z])([A-Z])/g, '$1 $2').split(' ');\n"
}