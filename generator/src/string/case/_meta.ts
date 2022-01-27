import { noTransform, replaceVariables } from '../../snippet/script/hydrate';
import { Snippet } from '../../snippet/snippet-model';

export const snippets: Snippet[] = [
  {
    path: 'string/case/camel-case.ts',
    search: 'camel case',
    description: 'Convert string to camel case (camelCase)',
    keywords: [],
    hydrate: noTransform,
  },
  {
    path: 'string/case/case-change-splitter.ts',
    search: 'split by case',
    description: 'Split string when char change to uppercase',
    keywords: [],
    hydrate: noTransform,
  },
  {
    path: 'string/case/char-splitter.ts',
    search: 'split string by char',
    description: 'Split a string based on a char separator',
    keywords: [],
    hydrate: replaceVariables,
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
];
