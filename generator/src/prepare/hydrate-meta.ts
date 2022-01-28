import { Project, SourceFile } from 'ts-morph';
import path from 'path';
import { Snippet } from '../snippet/snippet-model.js';
import { readSnippet } from './copier.js';

const srcDir = './src/';
const storeDir = './src/snippet-store/';

export const createProject = (): Project =>
  new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

const getMetaTemplateSource = (project: Project): SourceFile => {
  const filename = path.join(srcDir, 'snippet/meta-template.ts');
  const source = project.getSourceFileOrThrow(filename);
  return source;
};
export const hydrateMeta = async (
  project: Project,
  snippet: Snippet
): Promise<string> => {
  const template = getMetaTemplateSource(project);
  const snippetContent = await readSnippet(snippet);
  const code = template.getText();
  console.log(code);
  console.log('-'.repeat(20));
  console.log(snippetContent);
  return code;
};
