import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/first.ts',
  search: 'first element of collection',
  description: 'Get the first element of a collection or a default value',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Returns the first value of an array or the default value',
    ' */',
    'export function first<T>(items: T[], defaultValue: T): T {',
    '  return items[0] || defaultValue;',
    '}',
    '',
  ],
};
