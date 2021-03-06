import prompts from 'prompts';
import path from 'node:path';
import { Project } from 'ts-morph';
import { Snippet } from './snippet/snippet-model.js';
import { searchableSnippets } from './snippet/search-meta.js';
import { listSourceFiles } from './morphing.js';

const customSnippetSearch = (input: string, choices: prompts.Choice[]) =>
  Promise.resolve(
    choices.filter((i) => i.title.toLowerCase().includes(input.toLowerCase()))
  );

export const searchSnippets = async () => {
  const response = await prompts({
    type: 'autocomplete',
    name: 'value',
    message: 'Search the snippet',
    suggest: customSnippetSearch,
    choices: searchableSnippets.map((s) => ({ title: s.search })),
  });

  const foundSnippet = searchableSnippets.find(
    (s) => s.search === response.value
  );
  return foundSnippet;
};

export const promptVariables = async (snippet: Snippet): Promise<Snippet> => {
  if (!snippet.variables) {
    return snippet;
  }

  const questions: prompts.PromptObject[] = snippet.variables.map(
    (variable) => ({
      type: 'text',
      name: variable.name,
      message: variable.description,
      choices: variable.choices
        ? variable.choices.map((s) => ({ title: s }))
        : undefined,
    })
  );

  const response = await prompts(questions);

  console.log('response', response);
  const values = snippet.variables.map((v) => ({
    ...v,
    value: response[v.name],
  }));

  const augmentedSnippet: Snippet = {
    ...snippet,
    variables: values,
  };

  return augmentedSnippet;
};

const customFileSuggest = (input: string, choices: prompts.Choice[]) =>
  Promise.resolve(
    choices.filter((i) => i.title.toLowerCase().includes(input.toLowerCase()))
  );

export const promptFilename = async (project: Project): Promise<string> => {
  const currentDir = process.cwd();
  listSourceFiles(project);
  const response = await prompts({
    type: 'autocomplete',
    name: 'value',
    message: 'Select the destination file',
    suggest: customFileSuggest,
    choices: listSourceFiles(project).map((s) => ({
      title: path.relative(currentDir, s),
      value: s,
    })),
  });

  return response.value;
};
