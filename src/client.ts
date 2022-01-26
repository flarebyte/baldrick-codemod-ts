import { howAreYou } from './prompting.js';

/**
 * This function may be merged in the future when the linter does a better job at recognizing .mts files
 */
export async function runClient() {
  try {
    await howAreYou();
  } catch (error) {
    console.log('baldrick-codemod-ts generator will exit with error code 1');
    console.error(error);
    process.exit(1); // eslint-disable-line  unicorn/no-process-exit
  }
}
