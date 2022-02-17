import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-positive.ts',
  search: 'is positive',
  description: 'True if the value is positive',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a positive number, not equal to zero',
    ' */',
    'export const isPositive = (value: unknown): value is number =>',
    "  typeof value === 'number' && value > 0;",
    '',
  ],
};
