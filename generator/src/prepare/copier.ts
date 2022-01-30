import path from 'path';
import jetpack from 'fs-jetpack';
import { Snippet } from '../snippet/snippet-model';

const storeDir = './src/snippet-store/';
const destTemplateDir = '../src/templates/';

export const readSnippet = async (snippet: Snippet): Promise<string> => {
  const filename = path.join(storeDir, snippet.path);
  const content =
    (await jetpack.readAsync(filename, 'utf8')) || '// Snippet not found';
  return content;
};

export const deletePreviouslyGenerated = async () => {
  console.log('Deleting previously generated template folder')
  await jetpack.removeAsync(destTemplateDir)
}
