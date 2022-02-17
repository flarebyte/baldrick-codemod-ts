import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/by-string-equal.ts',
  search: 'filter by string equal',
  description: 'Filter all the strings that are equal to a value',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application to check string equality against a given value',
    ' * @param given the given value that we expect to match',
    ' */',
    'export const byStringEqual =',
    '  (given: string) =>',
    '  (text: string): boolean =>',
    '    text === given;',
    '',
  ],
};
