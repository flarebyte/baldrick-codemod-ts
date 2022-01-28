import { Snippet } from "./snippet-model.js";

export const snippets: Snippet[] = [
    {
      path: 'string/case/camel-case.ts',
      search: 'camel case',
      description: 'Convert string to camel case (camelCase)',
      keywords: [],
      hydrationKind: 'noTransform',
    },
    {
      path: 'string/case/case-change-splitter.ts',
      search: 'split by case',
      description: 'Split string when char change to uppercase',
      keywords: [],
      hydrationKind: 'noTransform',
    },
    {
      path: 'string/case/char-splitter.ts',
      search: 'split string by char',
      description: 'Split a string based on a char separator',
      keywords: [],
      hydrationKind: 'replaceVariables',
      variables: [
        {
          name: 'ThisString',
          kind: 'camelCase',
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
      path: 'string/classic/padStart.ts',
      search: 'padStart',
      description: 'Pad the current string with another string',
      keywords: [],
      hydrationKind: 'noTransform',
    },
  ];
  