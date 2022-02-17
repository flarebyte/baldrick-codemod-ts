import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/by-field-asc.ts',
  search: 'sort by field in ascending order',
  description: 'Sort a list of records by a field in ascending order',
  hydrationKind: 'replaceVariables',
  code: [
    '/**',
    ' * Sort by ascending order of the key SomeField',
    ' */',
    'export const sortedBySomeField = (',
    '  a: { someField: string },',
    '  b: { someField: string }',
    '): number => {',
    '  if (a.someField > b.someField) return 1;',
    '  if (a.someField < b.someField) return -1;',
    '  return 0;',
    '};',
    '',
  ],
  variables: [
    { name: 'SomeField', kind: 'TitleCase', description: 'Name of the field' },
  ],
};
