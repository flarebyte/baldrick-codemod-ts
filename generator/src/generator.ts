import { createProject, hydrateMeta } from './prepare/hydrate-meta.js';
import { snippets } from './snippet/meta.js';

console.log('prepare');
const generate = async () => {
  console.log('hi');
  const project = createProject();
  const snippet = snippets[0];
  if (snippet) {
    await hydrateMeta(project, snippet);
  }
};

await generate();

export { generate };
