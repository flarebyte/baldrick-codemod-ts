import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-array.ts',
  search: 'is array',
  description: 'True if the value is an array',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Checks if an object is an array',
    ' */',
    'export const isArray = (value: unknown): boolean =>',
    "  typeof value === 'object' && value !== null && Array.isArray(value);",
    '',
  ],
};
