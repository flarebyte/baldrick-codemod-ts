import { Project } from 'ts-morph';

export const createLocalProject = (): Project =>
  new Project({
    tsConfigFilePath: 'tsconfig.json',
  });

export const listSourceFiles = (project: Project): string[] => {
  const paths = project
    .getSourceFiles()
    .map((sf) => sf.getFilePath().toString())
    .filter((sf) => !sf.includes('/dist/'));
  return paths;
};
