import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/by-string-starting-with.ts',
  search: 'filter by string starting with',
  description: 'Filter all the strings starting with a prefix',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application to check whether a string starts with a given value',
    ' * @param given the given value that we expect the string to start with',
    ' */',
    'export const byStringStartingWith =',
    '  (given: string) =>',
    '  (text: string): boolean =>',
    '    text.startsWith(given);',
    '',
  ],
};
