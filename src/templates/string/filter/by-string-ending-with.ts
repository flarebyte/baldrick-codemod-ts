import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/by-string-ending-with.ts',
  search: 'filter by string ending with',
  description: 'Filter all the strings ending with a suffix',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application to check whether a string ends with a given value',
    ' * @param given the given value that we expect the string to end with',
    ' */',
    'export const byStringEndingWith =',
    '  (given: string) =>',
    '  (text: string): boolean =>',
    '    text.endsWith(given);',
    '',
  ],
};
