import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-finite-number.ts',
  search: 'is a finite number',
  description: 'True if the value is a finite number',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a countable number less than infinity',
    ' */',
    'export const isFiniteNumber = (value: unknown): value is number =>',
    "  typeof value === 'number' && Number.isFinite(value);",
    '',
  ],
};
