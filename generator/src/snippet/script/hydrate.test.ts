import {
  Hydrate,
  SnippetConfigurationParam,
  SnippetHydrationOpts,
  SnippetVar,
} from '../snippet-model';
import {
  noTransform,
  replaceVariables,
  replaceWithLindenmayer,
} from './hydrate';

const createVar = (name: string, value: string): SnippetVar => ({
  name,
  description: `Description of ${name}`,
  kind: 'string',
  value,
});

const createConfigParam = (
  name: string,
  value: string
): SnippetConfigurationParam => ({
  name,
  value,
});

const exampleReplaceWithVars: [
  string,
  Hydrate,
  SnippetHydrationOpts,
  string
][] = [
  [
    'no transform',
    noTransform,
    {
      variables: [],
      code: 'same code',
    },
    'same code',
  ],
  [
    'splitByThisString',
    replaceVariables,
    {
      variables: [
        createVar('ThisString', 'Space'),
        createVar('separator', ' '),
      ],
      code: `splitByThisString = (text: string): string[] => text.split('separator');`,
    },
    `splitBySpace = (text: string): string[] => text.split(' ');`,
  ],
  [
    'A->AA should replace multiple times',
    replaceVariables,
    {
      variables: [
        createVar('A', '-BB-'),
        createVar('B', '-CC-'),
        createVar('C', '-DD-'),
      ],
      code: `A`,
    },
    `---DD--DD----DD--DD---`,
  ],
  [
    'A->AA just one',
    replaceVariables,
    {
      variables: [createVar('A', '-BB-')],
      code: `A`,
    },
    `-BB-`,
  ],
  [
    'Lindenmayer system - Algae',
    replaceWithLindenmayer,
    {
      configurations: [createConfigParam('limit', '5')],
      variables: [createVar('A', 'AB'), createVar('B', 'A')],
      code: `A`,
    },
    `ABAABABAABAAB`,
  ],
];

describe('hydrate', () => {
  it.each(exampleReplaceWithVars)(
    'should hydrate snippet for %s',
    (name, hydrate, opts, expected) => {
      expect(name).toBeDefined();
      const actual = hydrate(opts);
      expect(actual).toStrictEqual(expected);
    }
  );
});
