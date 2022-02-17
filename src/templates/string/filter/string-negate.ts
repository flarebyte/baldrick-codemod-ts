import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/filter/string-negate.ts',
  search: 'string negate',
  description: 'Not operator applied to a string function',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application of a function whose result will be inverted (true -> false)',
    ' */',
    'export const stringNegate =',
    '  (fn: (v: string) => boolean) =>',
    '  (value: string): boolean =>',
    '    !fn(value);',
    '',
  ],
};
