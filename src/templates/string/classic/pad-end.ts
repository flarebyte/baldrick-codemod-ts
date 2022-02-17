import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/classic/pad-end.ts',
  search: 'pad end or pad right',
  description: 'Pad the end of the string with a character',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application of maxLength and fillString so they can be used',
    ' * for the padding from the end (right) of the current string.',
    ' * @param maxLength The length of the resulting string once the current string has been padded.',
    ' * @param fillString The string to pad the current string with.',
    ' */',
    'export const padEnd =',
    '  (maxLength: number, fillString?: string) =>',
    '  (text: string): string =>',
    '    text.padEnd(maxLength, fillString);',
    '',
  ],
};
