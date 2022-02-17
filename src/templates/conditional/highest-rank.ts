import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'conditional/highest-rank.ts',
  search: 'highest rank function',
  description: 'Return the function with the highest rank',
  hydrationKind: 'noTransform',
  code: [
    'function byHighestRank<R>(a: [number, () => R], b: [number, () => R]): number {',
    '  if (a[0] > b[0]) return -1;',
    '  if (a[0] < b[0]) return 1;',
    '  return 0;',
    '}',
    '',
    '/**',
    ' * Run the first function that has the highest rank',
    ' */',
    'export function highestRank<R>(ranked: [number, () => R][]): R {',
    '  const sortedRanked = [...ranked].sort(byHighestRank);',
    '  const highest = sortedRanked[0];',
    '  if (!highest) {',
    "    throw new Error('The array of ranked value should not be empty !');",
    '  }',
    '  const [, highestFunction] = highest;',
    '  return highestFunction();',
    '}',
    '',
  ],
};
