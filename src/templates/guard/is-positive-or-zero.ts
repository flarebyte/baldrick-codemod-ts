import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-positive-or-zero.ts',
  search: 'is positive or zero',
  description: 'True if the value is positive or zero',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a number more or equal to zero',
    ' */',
    'export const isPositiveOrZero = (value: unknown): value is number =>',
    "  typeof value === 'number' && value >= 0;",
    '',
  ],
};
