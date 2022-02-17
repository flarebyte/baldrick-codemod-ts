import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/range.ts',
  search: 'range of integer',
  description: 'Generate a range of integer',
  hydrationKind: 'noTransform',
  code: [
    'export const range = (n: number) => [...new Array(n).keys()]; // eslint-disable-line unicorn/no-new-array',
    '',
  ],
};
