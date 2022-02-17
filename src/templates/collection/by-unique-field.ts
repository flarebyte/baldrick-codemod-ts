import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/by-unique-field.ts',
  search: 'sort by an unique field',
  description: 'Sort a list of records by a unique field',
  hydrationKind: 'replaceVariables',
  code: [
    '/**',
    ' * Only return unique version of objects in an array based on key SomeField',
    ' */',
    'export const byUniqueSomeField = (',
    '  value: { someField: string },',
    '  index: number,',
    '  self: { someField: string }[]',
    '): boolean => self.findIndex((v) => v.someField === value.someField) === index;',
    '',
  ],
  variables: [
    { name: 'SomeField', kind: 'TitleCase', description: 'Name of the field' },
  ],
};
