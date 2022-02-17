import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/string-and.ts',
  search: 'string and operator',
  description: 'And operator applied to a list of string functions',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application of a multiple functions and return true if all return true',
    ' */',
    'export const stringAnd =',
    '  (functions: ((v: string) => boolean)[]) =>',
    '  (value: string): boolean =>',
    '    functions.every((fn) => fn(value));',
    '',
  ],
};
