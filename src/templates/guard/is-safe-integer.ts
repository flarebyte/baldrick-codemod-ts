import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-safe-integer.ts',
  search: 'is safe integer',
  description: 'True if the value is a safe integer without infinity',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Check whether a value is a safe integer with widespread support',
    ' */',
    'export const isSafeInteger = (value: unknown): value is number =>',
    "  typeof value === 'number' && Number.isSafeInteger(value);",
    '',
  ],
};
