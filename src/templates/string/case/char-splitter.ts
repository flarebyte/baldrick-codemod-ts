import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/case/char-splitter.ts',
  search: 'split string by char',
  description: 'Split a string based on a char separator',
  hydrationKind: 'replaceVariables',
  code: [
    '/**',
    ' * Split a string by ThisString',
    ' * @param text the text to split',
    ' */',
    'export const splitByThisString = (text: string): string[] =>',
    "  text.split('separator');",
    '',
  ],
  variables: [
    { name: 'ThisString', kind: 'TitleCase', description: 'Function suffix' },
    { name: 'separator', kind: 'string', description: 'String separator' },
  ],
};
