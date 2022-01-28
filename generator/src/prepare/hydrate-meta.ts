import { Project, SourceFile } from 'ts-morph';
import path from 'path';
import { Snippet } from '../snippet/snippet-model.js';
import { readSnippet } from './copier.js';
import { GeneratorOpts } from '../generator-model.js';

const srcDir = './src/';
const storeDir = './src/snippet-store/';

export const createGeneratorProject = (): Project =>
  new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

export const createDestinationProject = (): Project =>
  new Project({
    tsConfigFilePath: '../tsconfig.json',
  });

const getMetaTemplateSource = (opts: GeneratorOpts): SourceFile => {
  const filename = path.join(srcDir, 'snippet/meta-template.ts');
  const source = opts.generatorProject.getSourceFileOrThrow(filename);
  return source;
};
const hydrateSnippet = async (
  opts: GeneratorOpts,
  snippet: Snippet
): Promise<string> => {
  const template = getMetaTemplateSource(opts);
  const snippetContent = await readSnippet(snippet);
  const code = template.getText();
  console.log(code);
  console.log('-'.repeat(20));
  console.log(snippetContent);
  return code;
};

export const hydrateSnippets = async (opts: GeneratorOpts): Promise<void> => {
  const snippet = opts.snippets[0];
  if (snippet) {
    await hydrateSnippet(opts, snippet);
  }
};
