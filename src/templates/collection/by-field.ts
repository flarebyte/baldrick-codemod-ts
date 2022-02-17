import { Snippet } from '../../snippet/snippet-model.js';

export const snippetTemplate: Snippet = {
  path: 'collection/by-field.ts',
  search: 'filter by field',
  description: 'Filter a list of records by a field',
  hydrationKind: 'replaceVariables',
  code: [
    '/**',
    ' * Partial application with a predicate on a string that is used to check',
    ' * whether SomeField matches the criteria',
    ' */',
    'export const bySomeField =',
    '  (predicate: (v: string) => boolean) =>',
    '  (value: { someField: string }): boolean =>',
    '    predicate(value.someField);',
    '',
  ],
  variables: [
    { name: 'SomeField', kind: 'TitleCase', description: 'Name of the field' },
  ],
};
