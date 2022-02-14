import { ObjectLiteralExpression, Project, SyntaxKind } from 'ts-morph';
import path from 'node:path';
import {
  SearchableSnippet,
  Snippet,
  SnippetConfigurationParam,
  SnippetVar,
} from '../snippet/snippet-model.js';
import { readSnippet } from './copier.js';
import { GeneratorOpts } from '../generator-model.js';
import { snippets } from '../snippet/meta.js';

const destTemplateDir = '../src/templates/';
const destSnippetDir = '../src/snippet/';

export const createGeneratorProject = (): Project =>
  new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

export const createDestinationProject = (): Project =>
  new Project({
    tsConfigFilePath: '../tsconfig.json',
  });

const guessSnippetImport = (snippet: Snippet): string => {
  const levels = snippet.path.split('/').length;
  const prefix = '../'.repeat(levels);
  return `${prefix}snippet/snippet-model.js`;
};

export const removeProperties = (
  ole: ObjectLiteralExpression,
  names: string[]
) => {
  for (const name of names) {
    ole.getPropertyOrThrow(name).remove();
  }
};

const setProperty = (
  ole: ObjectLiteralExpression,
  name: string,
  value: string | string[]
) => {
  ole.addPropertyAssignment({
    name: name,
    initializer: JSON.stringify(value),
  });
};

const setPropertyAsSnippetVarArray = (
  ole: ObjectLiteralExpression,
  name: string,
  value: SnippetVar[]
) => {
  ole.addPropertyAssignment({
    name: name,
    initializer: JSON.stringify(value),
  });
};

const setPropertyAsSnippetConfigurationParamArray = (
  ole: ObjectLiteralExpression,
  name: string,
  value: SnippetConfigurationParam[]
) => {
  ole.addPropertyAssignment({
    name: name,
    initializer: JSON.stringify(value),
  });
};

const hydrateSnippet = async (
  opts: GeneratorOpts,
  snippet: Snippet
): Promise<string> => {
  console.log(`Processing snippet: ${snippet.path} ...`);
  const snippetContent = await readSnippet(snippet);
  const newImportPath = guessSnippetImport(snippet);
  const code = [
    `import { Snippet } from '${newImportPath}';`,
    '',
    'export const snippetTemplate: Snippet = {',
    '}',
  ].join('\n');
  const destFilename = path.join(destTemplateDir, snippet.path);
  const destSourceFile = opts.destinationProject.createSourceFile(
    destFilename,
    code
  );
  const snippetTemplateDecl =
    destSourceFile.getVariableDeclarationOrThrow('snippetTemplate');
  const first = snippetTemplateDecl.getFirstChildByKindOrThrow(
    SyntaxKind.ObjectLiteralExpression
  );
  setProperty(first, 'path', snippet.path);
  setProperty(first, 'search', snippet.search);
  setProperty(first, 'description', snippet.description);
  setProperty(first, 'hydrationKind', snippet.hydrationKind);
  setProperty(first, 'code', snippetContent);
  if (snippet.variables) {
    setPropertyAsSnippetVarArray(first, 'variables', snippet.variables);
  }
  if (snippet.configurations) {
    setPropertyAsSnippetConfigurationParamArray(
      first,
      'configurations',
      snippet.configurations
    );
  }
  await destSourceFile.save();
  return code;
};

export const hydrateSnippets = async (opts: GeneratorOpts): Promise<void> => {
  const snippetPromises = opts.snippets.map((snippet) =>
    hydrateSnippet(opts, snippet)
  );
  await Promise.all(snippetPromises);
};

export const hydrateMeta = async (opts: GeneratorOpts): Promise<void> => {
  const searchableSnippets: SearchableSnippet[] = snippets.map((s) => ({
    search: s.search,
    description: s.description,
    path: s.path,
  }));
  const code = [
    `import { SearchableSnippet } from './snippet-model.js'`,
    'export const searchableSnippets: SearchableSnippet[] = ',
    JSON.stringify(searchableSnippets, null, 2),
  ].join('\n');
  const destSourceFile = opts.destinationProject.createSourceFile(
    path.join(destSnippetDir, 'search-meta.ts'),
    code
  );
  await destSourceFile.save();
};
