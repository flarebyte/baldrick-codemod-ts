export type SnippetVarKind = "string" | 'choice' |"camelCase" | "TitleCase"

export interface SnippetVar {
  name: string;
  kind: SnippetVarKind
  description: string;
  choices?: string[];
}

export interface SnippetTransform {
  name: string;
  script: string;
}

export interface Snippet {
  search: string;
  description: string;
  path: string;
  keywords: string[];
  content?: string;
  variables?: SnippetVar[];
  transforms?: SnippetTransform[];
}
