import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'guard/is-string-union-type.ts',
  search: 'is string union type guard',
  description: 'True if the value is part of string union (similar to enum)',
  hydrationKind: 'replaceVariables',
  code: [
    "const stringUnionList = ['red', 'orange', 'yellow'] as const;",
    '',
    '/**',
    ' * Type for description',
    ' */',
    'export type StringUnion = typeof stringUnionList[number];',
    '/**',
    ' *  Guard for description',
    ' */',
    'export const isStringUnion = (value: unknown): value is StringUnion =>',
    '  stringUnionList.includes(value as StringUnion);',
    '',
  ],
  variables: [
    {
      name: 'StringUnion',
      kind: 'TitleCase',
      description: 'Name of the string union',
    },
    {
      name: 'description',
      kind: 'string',
      description: 'Description for the string union (enum)',
    },
  ],
};
