import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/classic/truncate.ts',
  search: 'truncate a string',
  description: 'Truncate a string to fit a given width',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    " * Truncates string if it's longer than the given maximum string length.",
    ' */',
    'export const truncate =',
    '  (maxLength: number) =>',
    '  (text: string): string =>',
    '    text.length > maxLength ? text.slice(0, maxLength) : text;',
    '',
  ],
};
