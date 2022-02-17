import { SearchableSnippet } from './snippet-model.js';
export const searchableSnippets: SearchableSnippet[] = [
  {
    search: 'split by case',
    description: 'Split string when char change to uppercase',
    path: 'string/case/case-change-splitter.ts',
  },
  {
    search: 'split string by char',
    description: 'Split a string based on a char separator',
    path: 'string/case/char-splitter.ts',
  },
  {
    search: 'sort by field in ascending order',
    description: 'Sort a list of records by a field in ascending order',
    path: 'collection/by-field-asc.ts',
  },
  {
    search: 'sort by field in descending order',
    description: 'Sort a list of records by a field in descending order',
    path: 'collection/by-field-desc.ts',
  },
  {
    search: 'filter by field',
    description: 'Filter a list of records by a field',
    path: 'collection/by-field.ts',
  },
  {
    search: 'sort by an unique field',
    description: 'Sort a list of records by a unique field',
    path: 'collection/by-unique-field.ts',
  },
  {
    search: 'first element of collection',
    description: 'Get the first element of a collection or a default value',
    path: 'collection/first.ts',
  },
  {
    search: 'range of integer',
    description: 'Generate a range of integer',
    path: 'collection/range.ts',
  },
  {
    search: 'shallow compare tow arrays',
    description: 'Compare two arrays by references',
    path: 'collection/shallow-compare-array.ts',
  },
  {
    search: 'coalesce',
    description: 'Return the value from the first successful function',
    path: 'conditional/coalesce.ts',
  },
  {
    search: 'first true or ternary',
    description: 'First value that is true',
    path: 'conditional/first-true.ts',
  },
  {
    search: 'highest rank function',
    description: 'Return the function with the highest rank',
    path: 'conditional/highest-rank.ts',
  },
  {
    search: 'lowest rank function',
    description: 'Return the function with the lowest rank',
    path: 'conditional/lowest-rank.ts',
  },
  {
    search: 'is array',
    description: 'True if the value is an array',
    path: 'guard/is-array.ts',
  },
  {
    search: 'is a finite number',
    description: 'True if the value is a finite number',
    path: 'guard/is-finite-number.ts',
  },
  {
    search: 'is in range',
    description: 'True if the value is within a range',
    path: 'guard/is-in-range.ts',
  },
  {
    search: 'is non blank string',
    description: 'True if the value is a non blank string',
    path: 'guard/is-non-blank-string.ts',
  },
  {
    search: 'is non empty string',
    description: 'True if the value is a non empty string',
    path: 'guard/is-non-empty-string.ts',
  },
  {
    search: 'is null or undefined',
    description: 'True if the value is null or undefined',
    path: 'guard/is-null-or-undefined.ts',
  },
  {
    search: 'is object',
    description: 'True if the value is an object',
    path: 'guard/is-object.ts',
  },
  {
    search: 'is positive or zero',
    description: 'True if the value is positive or zero',
    path: 'guard/is-positive-or-zero.ts',
  },
  {
    search: 'is positive',
    description: 'True if the value is positive',
    path: 'guard/is-positive.ts',
  },
  {
    search: 'is safe integer',
    description: 'True if the value is a safe integer without infinity',
    path: 'guard/is-safe-integer.ts',
  },
  {
    search: 'is string union type guard',
    description: 'True if the value is part of string union (similar to enum)',
    path: 'guard/is-string-union-type.ts',
  },
  {
    search: 'is string',
    description: 'True if the value is a string',
    path: 'guard/is-string.ts',
  },
  {
    search: 'camel case',
    description: 'Convert to camel case (camelCase)',
    path: 'string/case/camel-case.ts',
  },
  {
    search: 'slugify or kebab case',
    description: 'Transform a string to slug (kebab-case)',
    path: 'string/case/slugify.ts',
  },
  {
    search: 'snake case',
    description: 'Convert to snake case (snake_case)',
    path: 'string/case/snake-case.ts',
  },
  {
    search: 'title case',
    description: 'Convert to title case (TitleCase)',
    path: 'string/case/title-case.ts',
  },
  {
    search: 'between string',
    description: 'Capture string between two terms',
    path: 'string/classic/between-string.ts',
  },
  {
    search: 'pad end or pad right',
    description: 'Pad the end of the string with a character',
    path: 'string/classic/pad-end.ts',
  },
  {
    search: 'pad start or pad left',
    description: 'Pad the start of the string with a character',
    path: 'string/classic/pad-start.ts',
  },
  {
    search: 'replace all',
    description: 'Replace a term in all the paces',
    path: 'string/classic/replace-all.ts',
  },
  {
    search: 'replace many terms strings',
    description: 'Replace several terms in a string',
    path: 'string/classic/replace-terms-in-string.ts',
  },
  {
    search: 'reverse string',
    description: 'Reverse the characters in a string',
    path: 'string/classic/reverse-string.ts',
  },
  {
    search: 'truncate a string',
    description: 'Truncate a string to fit a given width',
    path: 'string/classic/truncate.ts',
  },
  {
    search: 'filter by string ending with',
    description: 'Filter all the strings ending with a suffix',
    path: 'string/filter/by-string-ending-with.ts',
  },
  {
    search: 'filter by string equal',
    description: 'Filter all the strings that are equal to a value',
    path: 'string/filter/by-string-equal.ts',
  },
  {
    search: 'filter by string including',
    description: 'Filter all the strings including a term',
    path: 'string/filter/by-string-including.ts',
  },
  {
    search: 'filter by string starting with',
    description: 'Filter all the strings starting with a prefix',
    path: 'string/filter/by-string-starting-with.ts',
  },
  {
    search: 'string and operator',
    description: 'And operator applied to a list of string functions',
    path: 'string/filter/string-and.ts',
  },
  {
    search: 'string negate',
    description: 'Not operator applied to a string function',
    path: 'string/filter/string-negate.ts',
  },
  {
    search: 'string or operator',
    description: 'Or operator applied to a list of string functions',
    path: 'string/filter/string-or.ts',
  },
  {
    search: 'unique strings',
    description: 'Returns the sorted list of unique strings',
    path: 'string/filter/unique-strings.ts',
  },
  {
    search: 'compare two versions',
    description:
      'Compare two versions with the format 0.0.0 (major.minor.patch)',
    path: 'string/version/compare-version.ts',
  },
];
