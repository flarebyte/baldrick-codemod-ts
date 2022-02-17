import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-non-blank-string.ts',
  search: 'is non blank string',
  description: 'True if the value is a non blank string',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is valid string and empty or blank (ex: spaces)',
    ' */',
    'export const isNonBlankString = (value: unknown): value is string =>',
    "  typeof value === 'string' && value.length > 0 && /\\S/.test(value);",
    '',
  ],
};
