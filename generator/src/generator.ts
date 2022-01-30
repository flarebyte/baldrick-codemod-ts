import { GeneratorOpts } from './generator-model.js';
import { deletePreviouslyGenerated } from './prepare/copier.js';
import {
  createDestinationProject,
  createGeneratorProject,
  hydrateSnippets,
} from './prepare/hydrate-meta.js';
import { snippets } from './snippet/meta.js';

console.log('prepare');
const generate = async () => {
  console.log('Stating generation ...');
  await deletePreviouslyGenerated()
  const opts: GeneratorOpts = {
    generatorProject: createGeneratorProject(),
    destinationProject: createDestinationProject(),
    snippets,
  };
  await hydrateSnippets(opts);
};

await generate();

export { generate };
