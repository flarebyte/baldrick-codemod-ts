import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-null-or-undefined.ts',
  search: 'is null or undefined',
  description: 'True if the value is null or undefined',
  hydrationKind: 'noTransform',
  code: [
    'export const isNullOrUndefined = (value: unknown): value is null | undefined =>',
    "  typeof value === 'undefined' || value === null;",
    '',
  ],
};
