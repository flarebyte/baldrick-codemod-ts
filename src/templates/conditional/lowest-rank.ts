import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'conditional/lowest-rank.ts',
  search: 'lowest rank function',
  description: 'Return the function with the lowest rank',
  hydrationKind: 'noTransform',
  code: [
    'function byLowestRank<R>(a: [number, () => R], b: [number, () => R]): number {',
    '  if (a[0] > b[0]) return 1;',
    '  if (a[0] < b[0]) return -1;',
    '  return 0;',
    '}',
    '',
    '/**',
    ' * Run the first function that has the lowest rank',
    ' */',
    'export function lowestRank<R>(ranked: [number, () => R][]): R {',
    '  const sortedRanked = [...ranked].sort(byLowestRank);',
    '  const lowest = sortedRanked[0];',
    '  if (!lowest) {',
    "    throw new Error('The array of ranked value should not be empty !');",
    '  }',
    '  const [, lowestFunction] = lowest;',
    '  return lowestFunction();',
    '}',
    '',
  ],
};
