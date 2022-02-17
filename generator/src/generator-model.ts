import { Project } from 'ts-morph';
import { Snippet } from './snippet/snippet-model';
export interface GeneratorOpts {
  generatorProject: Project;
  destinationProject: Project;
  snippets: Snippet[];
}
