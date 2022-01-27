import jetpack from "fs-jetpack";

export const copyAllSources = async () => {
  const files = await jetpack.listAsync('../')
};
