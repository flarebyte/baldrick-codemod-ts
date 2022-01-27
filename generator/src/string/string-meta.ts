type StringMethodSignature = 'string -> boolean' | 'string';
interface MethodMeta {
  name: string;
  description: string;
  signature: StringMethodSignature;
}
export const allStringMethods: MethodMeta[] = [
  {
    name: 'endsWith',
    description: 'Check if a string ends with a word',
    signature: 'string -> boolean',
  },
  {
    name: 'includes',
    description: 'Check if a string includes a word',
    signature: 'string -> boolean',
  },
  {
    name: 'startsWith',
    description: 'Check if a string starts with a word',
    signature: 'string -> boolean',
  },
  {
    name: 'toLowerCase',
    description: 'Convert to lowercase',
    signature: 'string',
  },
  {
    name: 'toUpperCase',
    description: 'Convert to uppercase',
    signature: 'string',
  },
  {
    name: 'trim',
    description: 'Removes whitespace from both sides of a string',
    signature: 'string',
  },
  {
    name: 'trimStart',
    description: 'Removes whitespace at the start of a string',
    signature: 'string',
  },
  {
    name: 'trimEnd',
    description: 'Removes whitespace at the end of a string',
    signature: 'string',
  },
];
