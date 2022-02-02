import prompts from 'prompts';
import { Project } from 'ts-morph';
import { Snippet } from './snippet/snippet-model.js';
import { searchableSnippets } from './snippet/search-meta.js';
import { listSourceFiles } from './morphing.js';

export const searchSnippets = async () => {
  const response = await prompts({
    type: 'autocomplete',
    name: 'value',
    message: 'Search the snippet',
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
  console.log('augmentedSnippet', augmentedSnippet);

  return augmentedSnippet;
};

export const promptFilename = async (project: Project): Promise<string> => {
  listSourceFiles(project);
  const response = await prompts({
    type: 'autocomplete',
    name: 'value',
    message: 'Select the destination file',
    choices: listSourceFiles(project).map((s) => ({ title: s })),
  });

  return response.value;
};
