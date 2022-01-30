import { Snippet } from '../../../snippet/snippet-model';

export const snippetTemplate: Snippet = {
  variables: [
    {
        name: 'ChangeMe',
        kind: 'camelCase',
        description: 'ChangeMe',
      }
  ],
  configurations: [{
    name: 'ChangeMe',
    value: 'ChangeMe'
  }],
    path: "string/case/camel-case.ts",
    search: "camel case",
    keywords: [],
    description: "Convert string to camel case (camelCase)",
    hydrationKind: "noTransform",
    code: "const capitalizeWord = (text: string): string =>\n  text.length > 0 ? text[0]?.toUpperCase() + text.slice(1).toLowerCase() : '';\n\nconst wordToCamel = (text: string, index: number): string =>\n  index === 0 ? text.toLowerCase() : capitalizeWord(text);\n\n/**\n * See [Camel case](https://en.wikipedia.org/wiki/Camel_case)\n */\nexport const camelCase =\n  (splitter: (textToSplit: string) => string[]) => (text: string) =>\n    text === '' ? '' : splitter(text).map(wordToCamel).join('');\n"
};
