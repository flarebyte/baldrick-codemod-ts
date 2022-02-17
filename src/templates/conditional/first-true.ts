import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'conditional/first-true.ts',
  search: 'first true or ternary',
  description: 'First value that is true',
  hydrationKind: 'noTransform',
  code: [
    '/**',
    ' * Run the first function for which the test is positive. Think advanced ternary operator',
    ' */',
    'export function firstTrue<R>(tests: [boolean, () => R][], defaultValue: R): R {',
    '  for (const current of tests) {',
    '    const [isTriggered, currentFunction] = current;',
    '    if (isTriggered) {',
    '      return currentFunction();',
    '    }',
    '  }',
    '  return defaultValue;',
    '}',
    '',
  ],
};
