import { copyAllSources } from "./prepare/copier.js";

console.log('prepare');
const generate = async () => {
  console.log('hi');
  await copyAllSources()
};

await generate();

export { generate };
