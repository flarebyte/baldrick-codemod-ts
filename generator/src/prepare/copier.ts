import path from 'path';
import jetpack from "fs-jetpack";

const storeDir = './src/snippet-store/'

export const copyAllSources = async () => {
  const filename = path.join(storeDir, 'string/case/camel-case.ts')
  console.log(filename)
  const content = await jetpack.readAsync(filename, 'utf8')
  console.log(content)
};
