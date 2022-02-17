import { Snippet } from './snippet-model.js';

export const snippets: Snippet[] = [
  {
    path: 'string/case/case-change-splitter.ts',
    search: 'split by case',
    description: 'Split string when char change to uppercase',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/case/char-splitter.ts',
    search: 'split string by char',
    description: 'Split a string based on a char separator',
    hydrationKind: 'replaceVariables',
    variables: [
      {
        name: 'ThisString',
        kind: 'TitleCase',
        description: 'Function suffix',
      },
      {
        name: 'separator',
        kind: 'string',
        description: 'String separator',
      },
    ],
  },
  {
    path: 'collection/by-field-asc.ts',
    search: 'sort by field in ascending order',
    description: 'Sort a list of records by a field in ascending order',
    hydrationKind: 'replaceVariables',
    variables: [
      {
        name: 'SomeField',
        kind: 'TitleCase',
        description: 'Name of the field',
      },
    ],
  },
  {
    path: 'collection/by-field-desc.ts',
    search: 'sort by field in descending order',
    description: 'Sort a list of records by a field in descending order',
    hydrationKind: 'replaceVariables',
    variables: [
      {
        name: 'SomeField',
        kind: 'TitleCase',
        description: 'Name of the field',
      },
    ],
  },
  {
    path: 'collection/by-field.ts',
    search: 'filter by field',
    description: 'Filter a list of records by a field',
    hydrationKind: 'replaceVariables',
    variables: [
      {
        name: 'SomeField',
        kind: 'TitleCase',
        description: 'Name of the field',
      },
    ],
  },
  {
    path: 'collection/by-unique-field.ts',
    search: 'sort by an unique field',
    description: 'Sort a list of records by a unique field',
    hydrationKind: 'replaceVariables',
    variables: [
      {
        name: 'SomeField',
        kind: 'TitleCase',
        description: 'Name of the field',
      },
    ],
  },
  {
    path: 'collection/first.ts',
    search: 'first element of collection',
    description: 'Get the first element of a collection or a default value',
    hydrationKind: 'noTransform',
  },
  {
    path: 'collection/range.ts',
    search: 'range of integer',
    description: 'Generate a range of integer',
    hydrationKind: 'noTransform',
  },
  {
    path: 'collection/shallow-compare-array.ts',
    search: 'shallow compare tow arrays',
    description: 'Compare two arrays by references',
    hydrationKind: 'noTransform',
  },
  {
    path: 'conditional/coalesce.ts',
    search: 'coalesce',
    description: 'Return the value from the first successful function',
    hydrationKind: 'noTransform',
  },
  {
    path: 'conditional/first-true.ts',
    search: 'first true or ternary',
    description: 'First value that is true',
    hydrationKind: 'noTransform',
  },
  {
    path: 'conditional/highest-rank.ts',
    search: 'highest rank function',
    description: 'Return the function with the highest rank',
    hydrationKind: 'noTransform',
  },
  {
    path: 'conditional/lowest-rank.ts',
    search: 'lowest rank function',
    description: 'Return the function with the lowest rank',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-array.ts',
    search: 'is array',
    description: 'True if the value is an array',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-finite-number.ts',
    search: 'is a finite number',
    description: 'True if the value is a finite number',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-in-range.ts',
    search: 'is in range',
    description: 'True if the value is within a range',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-non-blank-string.ts',
    search: 'is non blank string',
    description: 'True if the value is a non blank string',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-non-empty-string.ts',
    search: 'is non empty string',
    description: 'True if the value is a non empty string',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-null-or-undefined.ts',
    search: 'is null or undefined',
    description: 'True if the value is null or undefined',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-object.ts',
    search: 'is object',
    description: 'True if the value is an object',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-positive-or-zero.ts',
    search: 'is positive or zero',
    description: 'True if the value is positive or zero',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-positive.ts',
    search: 'is positive',
    description: 'True if the value is positive',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-safe-integer.ts',
    search: 'is safe integer',
    description: 'True if the value is a safe integer without infinity',
    hydrationKind: 'noTransform',
  },
  {
    path: 'guard/is-string-union-type.ts',
    search: 'is string union type guard',
    description: 'True if the value is part of string union (similar to enum)',
    hydrationKind: 'replaceVariables',
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
  },
  {
    path: 'guard/is-string.ts',
    search: 'is string',
    description: 'True if the value is a string',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/case/camel-case.ts',
    search: 'camel case',
    description: 'Convert to camel case (camelCase)',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/case/slugify.ts',
    search: 'slugify or kebab case',
    description: 'Transform a string to slug (kebab-case)',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/case/snake-case.ts',
    search: 'snake case',
    description: 'Convert to snake case (snake_case)',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/case/title-case.ts',
    search: 'title case',
    description: 'Convert to title case (TitleCase)',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/classic/between-string.ts',
    search: 'between string',
    description: 'Capture string between two terms',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/classic/pad-end.ts',
    search: 'pad end or pad right',
    description: 'Pad the end of the string with a character',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/classic/pad-start.ts',
    search: 'pad start or pad left',
    description: 'Pad the start of the string with a character',
    hydrationKind: 'noTransform',
  },
  {
    path: 'string/classic/replace-all.ts',
    search: 'replace all',
    description: 'Replace a term in all the paces',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/classic/replace-terms-in-string.ts',
    search: 'replace many terms strings',
    description: 'Replace several terms in a string',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/classic/reverse-string.ts',
    search: 'reverse string',
    description: 'Reverse the characters in a string',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/classic/truncate.ts',
    search: 'truncate a string',
    description: 'Truncate a string to fit a given width',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/by-string-ending-with.ts',
    search: 'filter by string ending with',
    description: 'Filter all the strings ending with a suffix',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/by-string-equal.ts',
    search: 'filter by string equal',
    description: 'Filter all the strings that are equal to a value',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/by-string-including.ts',
    search: 'filter by string including',
    description: 'Filter all the strings including a term',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/by-string-starting-with.ts',
    search: 'filter by string starting with',
    description: 'Filter all the strings starting with a prefix',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/string-and.ts',
    search: 'string and operator',
    description: 'And operator applied to a list of string functions',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/string-negate.ts',
    search: 'string negate',
    description: 'Not operator applied to a string function',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/string-or.ts',
    search: 'string or operator',
    description: 'Or operator applied to a list of string functions',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/filter/unique-strings.ts',
    search: 'unique strings',
    description: 'Returns the sorted list of unique strings',
    hydrationKind: 'noTransform',
  },

  {
    path: 'string/version/compare-version.ts',
    search: 'compare two versions',
    description:
      'Compare two versions with the format 0.0.0 (major.minor.patch)',
    hydrationKind: 'noTransform',
  },
];
