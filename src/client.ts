import { createLocalProject } from './morphing.js';
import {
  promptFilename,
  promptVariables,
  searchSnippets,
} from './prompting.js';
import { importSnippet, runSnippet } from './snippet/hydrate.js';
import { SnippetHydrationOpts } from './snippet/snippet-model.js';

/**
 * This function may be merged in the future when the linter does a better job at recognizing .mts files
 */
export async function runClient() {
  try {
    const pickedSnippet = await searchSnippets();
    if (!pickedSnippet) {
      throw new Error('Could not pick the snippet');
    }
    const project = createLocalProject();
    const codeSnippet = await importSnippet(pickedSnippet);
    const augmentedSnippet = await promptVariables(codeSnippet);
    const destfilename = await promptFilename(project);
    console.log('filename', destfilename);
    const opts: SnippetHydrationOpts = {
      code: codeSnippet.code || '',
      variables: augmentedSnippet.variables,
      configurations: augmentedSnippet.configurations,
    };
    const generated = runSnippet(codeSnippet.hydrationKind, opts);
    console.log(generated);
  } catch (error) {
    console.log('baldrick-codemod-ts generator will exit with error code 1');
    console.error(error);
    process.exit(1); // eslint-disable-line  unicorn/no-process-exit
  }
}
