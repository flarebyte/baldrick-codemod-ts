import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-non-empty-string.ts',
  search: 'is non empty string',
  description: 'True if the value is a non empty string',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a non empty string',
    ' */',
    'export const isNonEmptyString = (value: unknown): value is string =>',
    "  typeof value === 'string' && value.length > 0;",
    '',
  ],
};
