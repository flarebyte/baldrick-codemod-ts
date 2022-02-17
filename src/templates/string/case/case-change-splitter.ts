import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/case/case-change-splitter.ts',
  search: 'split by case',
  description: 'Split string when char change to uppercase',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * split some text when a character changes case ( uppercase <-> lowercase)',
    ' * @example camelCase camel Case',
    ' */',
    'export const splitOnCaseChange = (text: string): string[] =>',
    "  text.replace(/([\\da-z])([A-Z])/g, '$1 $2').split(' ');",
    '',
  ],
};
