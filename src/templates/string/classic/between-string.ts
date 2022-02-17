import { Snippet } from '../../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'string/classic/between-string.ts',
  search: 'between string',
  description: 'Capture string between two terms',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Partial application for start and end token that is used to capture',
    ' * some text between these tokens',
    ' * @param start the token that starts the capture (not included)',
    ' * @param end the token that ends the capture (not included)',
    ' * @param defaultValue a default value if it fails to capture the string',
    ' */',
    'export const betweenString =',
    '  (start: string, end: string, defaultValue: string | false) =>',
    '  (text: string): string | false => {',
    '    const startIdx = text.indexOf(start);',
    '    const endIdx = text.indexOf(end);',
    '    if (startIdx < 0 || endIdx < 0 || startIdx >= endIdx) {',
    '      return defaultValue;',
    '    }',
    '    return text.slice(startIdx + 1, endIdx);',
    '  };',
    '',
  ],
};
