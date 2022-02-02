export type SnippetVarKind = 'string' | 'choice' | 'camelCase' | 'TitleCase';
export type HydrationKind = 'noTransform'| 'replaceVariables' | 'replaceWithLindenmayer'


export interface SnippetVar {
  name: string;
  kind: SnippetVarKind;
  description: string;
  choices?: string[];
  value?: string;
}

export interface SnippetConfigurationParam {
  name: string;
  value: string;
}

export interface SnippetHydrationOpts {
  code: string;
  configurations?: SnippetConfigurationParam[];
  variables?: SnippetVar[];
}

export type Hydrate = (opts: SnippetHydrationOpts) => string;

export interface Snippet {
  search: string;
  description: string;
  path: string;
  variables?: SnippetVar[];
  configurations?: SnippetConfigurationParam[];
  code?: string;
  hydrationKind: HydrationKind;
}

export type SearchableSnippet = Pick<
  Snippet,
  'search' | 'description' | 'path'
>;

