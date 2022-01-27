import { noTransform } from "../../../snippet/hydrate";
import { Snippet } from "../../../snippet/snippet-model";

export const camelCaseMeta: Snippet = {
    path: 'string/case/camel-case.ts',
    search: 'camel case',
    description: 'Convert string to camel case (camelCase)',
    keywords: [],
    hydrate: noTransform,
  }