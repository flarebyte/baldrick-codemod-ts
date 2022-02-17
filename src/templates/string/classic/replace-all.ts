import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/classic/replace-all.ts',
  search: 'replace all',
  description: 'Replace a term in all the paces',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application that takes a search and a replacement value',
    ' * and will apply these to a given text',
    ' * @param search the search value',
    ' * @param replaceValue the replacement value',
    ' */',
    'export const replaceAll =',
    '  (search: string, replaceValue: string) =>',
    '  (text: string): string =>',
    '    text.split(search).join(replaceValue);',
    '',
  ],
};
