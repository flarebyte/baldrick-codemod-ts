import { SearchableSnippet } from './snippet-model.js'
export const searchableSnippets: SearchableSnippet[] = 
[
  {
    "search": "camel case",
    "description": "Convert string to camel case (camelCase)",
    "path": "string/case/camel-case.ts"
  },
  {
    "search": "split by case",
    "description": "Split string when char change to uppercase",
    "path": "string/case/case-change-splitter.ts"
  },
  {
    "search": "split string by char",
    "description": "Split a string based on a char separator",
    "path": "string/case/char-splitter.ts"
  },
  {
    "search": "padStart",
    "description": "Pad the current string with another string",
    "path": "string/classic/padStart.ts"
  }
]