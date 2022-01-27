import { copyAllSources } from './prepare/copier.js';
import { createProject, hydrateMeta } from './prepare/hydrate-meta.js';
import { snippets } from './snippet/meta.js';

console.log('prepare');
const generate = async () => {
  console.log('hi');
  await copyAllSources();

  console.log('-----');
  const project = createProject();
  const snippet = snippets[0];
  if (snippet) {
    hydrateMeta(project, snippet);
  }
};

await generate();

export { generate };
