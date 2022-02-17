import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-string.ts',
  search: 'is string',
  description: 'True if the value is a string',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a string',
    ' */',
    'export const isString = (value: unknown): value is string =>',
    "  typeof value === 'string';",
    '',
  ],
};
