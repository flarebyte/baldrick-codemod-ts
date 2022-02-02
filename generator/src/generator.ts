import { GeneratorOpts } from './generator-model.js';
import { copyCommon, deletePreviouslyGenerated } from './prepare/copier.js';
import {
  createDestinationProject,
  createGeneratorProject,
  hydrateMeta,
  hydrateSnippets,
} from './prepare/hydrate-meta.js';
import { snippets } from './snippet/meta.js';

console.log('prepare');
const generate = async () => {
  console.log('Stating generation ...');
  await deletePreviouslyGenerated();
  await copyCommon();
  const opts: GeneratorOpts = {
    generatorProject: createGeneratorProject(),
    destinationProject: createDestinationProject(),
    snippets,
  };
  await hydrateSnippets(opts);
  await hydrateMeta(opts)
};

await generate();

export { generate };
