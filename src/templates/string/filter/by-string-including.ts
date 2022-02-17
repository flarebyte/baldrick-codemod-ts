import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/by-string-including.ts',
  search: 'filter by string including',
  description: 'Filter all the strings including a term',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application to check whether a string includes a given value',
    ' * @param given the given value that we expect the string to include',
    ' */',
    'export const byStringStartingWith =',
    '  (given: string) =>',
    '  (text: string): boolean =>',
    '    text.includes(given);',
    '',
  ],
};
