# Internal

> Overview of the code base of baldrick-codemod-ts

This document has been generated automatically by
[baldrick-doc-ts](https://github.com/flarebyte/baldrick-doc-ts)

## Diagram of the dependencies

```mermaid
classDiagram
class `client.ts`{
  +runClient()
}
class `filing.ts`{
  +appendSnippetToSourceFile()
}
class `index.ts`
class `morphing.ts`{
  +createLocalProject()
  +listSourceFiles()
}
class `prompting.ts`{
  - customSnippetSearch()
  +searchSnippets()
  +promptVariables()
  - customFileSuggest()
  +promptFilename()
}
class `version.ts`
class `hydrate.ts`{
  +noTransform()
  - replaceAll()
  - upperFirstChar()
  - lowerFirstChar()
  +replaceVariables()
  +replaceVariablesSafer()
  - getVarOrConfig()
  - getVarOrConfigAsInt()
  +replaceWithLindenmayer()
  +locator()
  +importSnippet()
  +runSnippet()
}
class `search-meta.ts`
class `snippet-model.ts`
class `by-field-asc.ts`
class `by-field-desc.ts`
class `by-field.ts`
class `by-unique-field.ts`
class `first.ts`
class `range.ts`
class `shallow-compare-array.ts`
class `coalesce.ts`
class `first-true.ts`
class `highest-rank.ts`
class `lowest-rank.ts`
class `is-array.ts`
class `is-finite-number.ts`
class `is-in-range.ts`
class `is-non-blank-string.ts`
class `is-non-empty-string.ts`
class `is-null-or-undefined.ts`
class `is-object.ts`
class `is-positive-or-zero.ts`
class `is-positive.ts`
class `is-safe-integer.ts`
class `is-string-union-type.ts`
class `is-string.ts`
class `camel-case.ts`
class `case-change-splitter.ts`
class `char-splitter.ts`
class `slugify.ts`
class `snake-case.ts`
class `title-case.ts`
class `between-string.ts`
class `pad-end.ts`
class `pad-start.ts`
class `replace-all.ts`
class `replace-terms-in-string.ts`
class `reverse-string.ts`
class `truncate.ts`
class `by-string-ending-with.ts`
class `by-string-equal.ts`
class `by-string-including.ts`
class `by-string-starting-with.ts`
class `string-and.ts`
class `string-negate.ts`
class `string-or.ts`
class `unique-strings.ts`
class `compare-version.ts`
class `./filing.js`{
  +appendSnippetToSourceFile()
}
class `./morphing.js`{
  +listSourceFiles()
  +createLocalProject()
}
class `./prompting.js`{
  +searchSnippets()
  +promptVariables()
  +promptFilename()
}
class `./snippet/hydrate.js`{
  +runSnippet()
  +importSnippet()
}
class `./snippet/snippet-model.js`{
  +Snippet()
  +SnippetHydrationOpts()
}
class `./version.js`{
  +version()
}
class `fs-jetpack`{
  +jetpack()
}
class `ts-morph`{
  +Project()
}
class `prompts`{
  +prompts()
}
class `node:path`{
  +path()
}
class `./snippet/search-meta.js`{
  +searchableSnippets()
}
class `./snippet-model.js`{
  +SearchableSnippet()
  +SnippetVar()
  +SnippetHydrationOpts()
  +SnippetConfigurationParam()
  +Snippet()
  +HydrationKind()
  +Hydrate()
}
class `../../snippet/snippet-model.js`{
  +Snippet()
}
class `../../../snippet/snippet-model.js`{
  +Snippet()
}
`client.ts`-->`./filing.js`
`client.ts`-->`./morphing.js`
`client.ts`-->`./prompting.js`
`client.ts`-->`./snippet/hydrate.js`
`client.ts`-->`./snippet/snippet-model.js`
`client.ts`-->`./version.js`
`filing.ts`-->`fs-jetpack`
`morphing.ts`-->`ts-morph`
`prompting.ts`-->`prompts`
`prompting.ts`-->`node:path`
`prompting.ts`-->`ts-morph`
`prompting.ts`-->`./snippet/snippet-model.js`
`prompting.ts`-->`./snippet/search-meta.js`
`prompting.ts`-->`./morphing.js`
`hydrate.ts`-->`node:path`
`hydrate.ts`-->`./snippet-model.js`
`search-meta.ts`-->`./snippet-model.js`
`by-field-asc.ts`-->`../../snippet/snippet-model.js`
`by-field-desc.ts`-->`../../snippet/snippet-model.js`
`by-field.ts`-->`../../snippet/snippet-model.js`
`by-unique-field.ts`-->`../../snippet/snippet-model.js`
`first.ts`-->`../../snippet/snippet-model.js`
`range.ts`-->`../../snippet/snippet-model.js`
`shallow-compare-array.ts`-->`../../snippet/snippet-model.js`
`coalesce.ts`-->`../../snippet/snippet-model.js`
`first-true.ts`-->`../../snippet/snippet-model.js`
`highest-rank.ts`-->`../../snippet/snippet-model.js`
`lowest-rank.ts`-->`../../snippet/snippet-model.js`
`is-array.ts`-->`../../snippet/snippet-model.js`
`is-finite-number.ts`-->`../../snippet/snippet-model.js`
`is-in-range.ts`-->`../../snippet/snippet-model.js`
`is-non-blank-string.ts`-->`../../snippet/snippet-model.js`
`is-non-empty-string.ts`-->`../../snippet/snippet-model.js`
`is-null-or-undefined.ts`-->`../../snippet/snippet-model.js`
`is-object.ts`-->`../../snippet/snippet-model.js`
`is-positive-or-zero.ts`-->`../../snippet/snippet-model.js`
`is-positive.ts`-->`../../snippet/snippet-model.js`
`is-safe-integer.ts`-->`../../snippet/snippet-model.js`
`is-string-union-type.ts`-->`../../snippet/snippet-model.js`
`is-string.ts`-->`../../snippet/snippet-model.js`
`camel-case.ts`-->`../../../snippet/snippet-model.js`
`case-change-splitter.ts`-->`../../../snippet/snippet-model.js`
`char-splitter.ts`-->`../../../snippet/snippet-model.js`
`slugify.ts`-->`../../../snippet/snippet-model.js`
`snake-case.ts`-->`../../../snippet/snippet-model.js`
`title-case.ts`-->`../../../snippet/snippet-model.js`
`between-string.ts`-->`../../../snippet/snippet-model.js`
`pad-end.ts`-->`../../../snippet/snippet-model.js`
`pad-start.ts`-->`../../../snippet/snippet-model.js`
`replace-all.ts`-->`../../../snippet/snippet-model.js`
`replace-terms-in-string.ts`-->`../../../snippet/snippet-model.js`
`reverse-string.ts`-->`../../../snippet/snippet-model.js`
`truncate.ts`-->`../../../snippet/snippet-model.js`
`by-string-ending-with.ts`-->`../../../snippet/snippet-model.js`
`by-string-equal.ts`-->`../../../snippet/snippet-model.js`
`by-string-including.ts`-->`../../../snippet/snippet-model.js`
`by-string-starting-with.ts`-->`../../../snippet/snippet-model.js`
`string-and.ts`-->`../../../snippet/snippet-model.js`
`string-negate.ts`-->`../../../snippet/snippet-model.js`
`string-or.ts`-->`../../../snippet/snippet-model.js`
`unique-strings.ts`-->`../../../snippet/snippet-model.js`
`compare-version.ts`-->`../../../snippet/snippet-model.js`
```
