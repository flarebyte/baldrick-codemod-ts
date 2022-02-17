import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/unique-strings.ts',
  search: 'unique strings',
  description: 'Returns the sorted list of unique strings',
  hydrationKind: 'noTransform',
  code: [
    'export const uniqueStrings = (values: string[]): string[] =>',
    '  [...new Set(values)].sort();',
    '',
  ],
};
