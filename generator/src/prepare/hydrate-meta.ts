import { Project, SourceFile, SyntaxKind } from 'ts-morph';
import path from 'path';
import { Snippet } from '../snippet/snippet-model.js';
import { readSnippet } from './copier.js';
import { GeneratorOpts } from '../generator-model.js';
import { setConstantValue } from '@ts-morph/common/lib/typescript';

const srcDir = './src/';
const destTemplateDir = '../src/templates/';

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

const guessSnippetImport = (snippet: Snippet): string => {
  const levels = snippet.path.split('/').length;
  const prefix = '../'.repeat(levels);
  return `${prefix}snippet/snippet-model`;
};
const hydrateSnippet = async (
  opts: GeneratorOpts,
  snippet: Snippet
): Promise<string> => {
  const template = getMetaTemplateSource(opts);
  const snippetContent = await readSnippet(snippet);
  console.log(snippetContent);
  const code = template.getText();
  const newImportPath = guessSnippetImport(snippet);
  const destFilename = path.join(destTemplateDir, snippet.path);
  const destSourceFile = opts.destinationProject.createSourceFile(
    destFilename,
    code
  );
  const importDeclSnippetModel = destSourceFile.getImportDeclarationOrThrow(
    (importDecl) => importDecl.getText().includes('snippet')
  );
  importDeclSnippetModel.setModuleSpecifier(newImportPath);
  const snippetTemplateDecl =
    destSourceFile.getVariableDeclarationOrThrow('snippetTemplate');
  console.log('-'.repeat(10));
  const first = snippetTemplateDecl.getFirstChildByKindOrThrow(
    SyntaxKind.ObjectLiteralExpression
  );
  first.getPropertyOrThrow('path').remove();
  first.addPropertyAssignment({
    name: 'path',
    initializer: `'my-path'`,
  });
  await destSourceFile.save();
  return code;
};

export const hydrateSnippets = async (opts: GeneratorOpts): Promise<void> => {
  const snippet = opts.snippets[0];
  if (snippet) {
    await hydrateSnippet(opts, snippet);
  }
};
