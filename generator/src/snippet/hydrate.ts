import path from 'node:path';
import {
  Hydrate,
  HydrationKind,
  SearchableSnippet,
  Snippet,
  SnippetConfigurationParam,
  SnippetHydrationOpts,
  SnippetVar,
} from './snippet-model.js';

export const noTransform = (opts: SnippetHydrationOpts): string =>
  opts.code.join('\n');

const specialChars = [
  '▀',
  '▁',
  '▂',
  '▃',
  '▄',
  '▅',
  '▆',
  '▇',
  '█',
  '▉',
  '▊',
  '▋',
  '▌',
  '▍',
];

const replaceAll = (
  text: string,
  search: string,
  replaceValue: string
): string => text.split(search).join(replaceValue);

const upperFirstChar = (text: string): string =>
  text.length > 0 ? text[0]?.toUpperCase() + text.slice(1).trimEnd() : '';

const lowerFirstChar = (text: string): string =>
  text.length > 0 ? text[0]?.toLowerCase() + text.slice(1).trimEnd() : '';

export const replaceVariables = (opts: SnippetHydrationOpts): string => {
  let content = opts.code.join('\n');
  if (!opts.variables) throw new Error('Variables need to be defined');
  for (const variable of opts.variables) {
    if (variable.value) {
      if (variable.kind === 'TitleCase') {
        content = replaceAll(
          content,
          upperFirstChar(variable.name),
          upperFirstChar(variable.value)
        );
        content = replaceAll(
          content,
          lowerFirstChar(variable.name),
          lowerFirstChar(variable.value)
        );
      } else {
        content = replaceAll(content, variable.name, variable.value);
      }
    }
  }
  return content;
};

export const replaceVariablesSafer = (opts: SnippetHydrationOpts): string => {
  let content = opts.code.join('\n');
  if (!opts.variables) {
    throw new Error('Variables need to be defined');
  }
  if (opts.variables.length > specialChars.length) {
    throw new Error(
      `Only ${specialChars.length} variables supported not ${opts.variables.length}`
    );
  }

  const varNames = opts.variables.map((v) => v.name);
  const varValues = opts.variables.map((v) => v.value);
  // First phase, convert to special chars without any text overlap
  for (const [index, varName] of varNames.entries()) {
    const varValue = varValues[index];
    const varSpecial = specialChars[index];
    if (
      varValue === undefined ||
      varName === undefined ||
      varSpecial === undefined
    ) {
      continue;
    }
    content = replaceAll(content, varName, varSpecial);
  }
  // Second phase, convert special chars to expected value
  for (const [index, varName] of varNames.entries()) {
    const varValue = varValues[index];
    const varSpecial = specialChars[index];
    if (
      varValue === undefined ||
      varName === undefined ||
      varSpecial === undefined
    ) {
      continue;
    }
    content = replaceAll(content, varSpecial, varValue);
  }
  return content;
};

const getVarOrConfig = (
  variables: SnippetVar[],
  configurations: SnippetConfigurationParam[],
  name: string,
  defaultValue?: string
): string | undefined => {
  const varValue = variables.find((v) => v.name === name)?.value;
  if (varValue !== undefined) {
    return varValue;
  }
  const configValue = configurations.find(
    (config) => config.name === name
  )?.value;
  if (configValue !== undefined) {
    return configValue;
  }
  return defaultValue;
};

const getVarOrConfigAsInt = (
  variables: SnippetVar[],
  configurations: SnippetConfigurationParam[],
  name: string,
  defaultValue: number
): number => {
  const value = getVarOrConfig(variables, configurations, name);
  if (value === undefined) {
    return defaultValue;
  }
  return Number.parseInt(value);
};

export const replaceWithLindenmayer = (opts: SnippetHydrationOpts): string => {
  let content = opts.code.join('\n');
  if (!opts.variables) throw new Error('Variables need to be defined');
  if (!opts.configurations)
    throw new Error('Configurations need to be defined');
  const limit: number = getVarOrConfigAsInt(
    opts.variables,
    opts.configurations,
    'limit',
    3
  );
  for (let index = 0; index < limit; index++) {
    content = replaceVariablesSafer({ ...opts, code: content.split('\n') });
  }
  return content;
};

export const locator = (hydrationKind: HydrationKind): Hydrate => {
  switch (hydrationKind) {
    case 'noTransform':
      return noTransform;
    case 'replaceVariables':
      return replaceVariables;
    case 'replaceWithLindenmayer':
      return replaceWithLindenmayer;
  }
};

export const importSnippet = async (
  searchableSnippet: SearchableSnippet
): Promise<Snippet> => {
  const importPath = path.join(
    '../templates/',
    searchableSnippet.path.replace('.ts', '.js')
  );
  const imported = await import(importPath);

  const snippetTemplate2: Snippet = imported && imported['snippetTemplate'];
  return snippetTemplate2;
};

export const runSnippet = (kind: HydrationKind, opts: SnippetHydrationOpts) => {
  const hydrate = locator(kind);
  return hydrate(opts);
};
