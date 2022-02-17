import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-in-range.ts',
  search: 'is in range',
  description: 'True if the value is within a range',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Checks if n is between start and up to, but not including, end.',
    ' */',
    'export const isInRange =',
    '  (min: number, max: number) =>',
    '  (value: unknown): value is number =>',
    "    typeof value === 'number' && value >= min && value < max;",
    '',
  ],
};
