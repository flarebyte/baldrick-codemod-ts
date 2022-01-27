export interface Repository {
  name: string;
  location: string;
  copyright: string;
  sourceFolder: string;
}

export interface SnippetSearch {
  name: string;
  kind: 'function' | 'function-expression' | 'interface';
}

export interface Snippet {
  search: SnippetSearch;
  useComments: boolean;
  comment: string;
}
