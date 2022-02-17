import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/classic/reverse-string.ts',
  search: 'reverse string',
  description: 'Reverse the characters in a string',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Reverse the order of the characters in the string',
    ' * ```ts',
    " *  reverseString('abc')",
    ' *  // return cba',
    ' * ```',
    ' * @param text the string to reverse',
    ' * @returns the characters in reverse',
    ' */',
    'export const reverseString = (text: string): string =>',
    "  [...text].reverse().join('');",
    '',
  ],
};
