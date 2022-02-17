/**
 * split some text when a character changes case ( uppercase <-> lowercase)
 * @example camelCase camel Case
 */
export const splitOnCaseChange = (text: string): string[] =>
  text.replace(/([\da-z])([A-Z])/g, '$1 $2').split(' ');
