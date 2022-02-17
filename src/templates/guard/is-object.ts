import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-object.ts',
  search: 'is object',
  description: 'True if the value is an object',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' *',
    ' * Guard to check if a value is an object but not an array',
    ' */',
    'export const isObject = (value: unknown): value is object =>',
    "  typeof value === 'object' && value !== null && !Array.isArray(value);",
    '',
  ],
};
