import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/by-field-desc.ts',
  search: 'sort by field in descending order',
  description: 'Sort a list of records by a field in descending order',
  hydrationKind: 'replaceVariables',
  code: [
    '/**',
    ' * Sort by descending order of the key SomeField',
    ' */',
    'export const sortedBySomeFieldDesc = (',
    '  a: { someField: string },',
    '  b: { someField: string }',
    '): number => {',
    '  if (a.someField > b.someField) return -1;',
    '  if (a.someField < b.someField) return 1;',
    '  return 0;',
    '};',
    '',
  ],
  variables: [
    { name: 'SomeField', kind: 'TitleCase', description: 'Name of the field' },
  ],
};
