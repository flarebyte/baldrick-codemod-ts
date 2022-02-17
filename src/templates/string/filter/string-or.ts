import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/string-or.ts',
  search: 'string or operator',
  description: 'Or operator applied to a list of string functions',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application of a multiple functions and return true if any return true',
    ' */',
    'export const stringOr =',
    '  (functions: ((v: string) => boolean)[]) =>',
    '  (value: string): boolean =>',
    '    functions.some((fn) => fn(value));',
    '',
  ],
};
