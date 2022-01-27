export const splitOnCaseChange = (text: string): string[] =>
  text.replace(/([\da-z])([A-Z])/g, '$1 $2').split(' ');
