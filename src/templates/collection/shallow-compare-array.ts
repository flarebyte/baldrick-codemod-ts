import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/shallow-compare-array.ts',
  search: 'shallow compare tow arrays',
  description: 'Compare two arrays by references',
  hydrationKind: 'noTransform',
  code: [
    'export function shallowCompareArray<A>(actual: A[], expected: A[]): boolean {',
    '  if (expected.length !== actual.length) return false;',
    '  if (actual.length === 0) return true;',
    '  for (const [index, expectedValue] of expected.entries()) {',
    '    if (actual[index] !== expectedValue) {',
    '      return false;',
    '    }',
    '  }',
    '  return true;',
    '}',
    '',
  ],
};
