import {
  Hydrate,
  HydrationKind,
  SnippetConfigurationParam,
  SnippetHydrationOpts,
  SnippetVar,
} from './snippet-model';

export const noTransform = (opts: SnippetHydrationOpts): string => opts.code;

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

export const replaceVariables = (opts: SnippetHydrationOpts): string => {
  let content = opts.code;
  if (!opts.variables) throw new Error('Variables need to be defined');
  for (const variable of opts.variables) {
    if (variable.value) {
      content = replaceAll(content, variable.name, variable.value);
    }
  }
  return content;
};

export const replaceVariablesSafer = (opts: SnippetHydrationOpts): string => {
  let content = opts.code;
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
  let content = opts.code;
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
    content = replaceVariablesSafer({ ...opts, code: content });
  }
  return content;
};

export const locator = (hydrationKind: HydrationKind): Hydrate => {
  switch(hydrationKind) {
    case 'noTransform': return noTransform;
    case 'replaceVariables': return replaceVariables;
    case 'replaceWithLindenmayer': return replaceWithLindenmayer;
  }
}
