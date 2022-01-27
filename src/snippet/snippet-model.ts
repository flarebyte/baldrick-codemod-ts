export interface SnippetSearch {
  name: string;
  kind: 'function' | 'function-expression' | 'interface';
}

export interface Snippet {
  search: SnippetSearch;
}
