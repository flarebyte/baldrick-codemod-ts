import { Project, SourceFile } from 'ts-morph';
import path from 'path';
import { Snippet } from '../snippet/snippet-model.js';

const storeDir = './src/snippet-store/';

export const createProject = (): Project =>
  new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

export const hydrateMeta = (project: Project, snippet: Snippet): SourceFile => {
  const filename = path.join(storeDir, snippet.path);
  const source = project.getSourceFileOrThrow(filename);
  return source;
};
