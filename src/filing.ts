import jetpack from 'fs-jetpack';

export const appendSnippetToSourceFile = async (
  filenameOrPath: string,
  code: string
) => {
  await jetpack.appendAsync(filenameOrPath, '\n\n' + code);
};
