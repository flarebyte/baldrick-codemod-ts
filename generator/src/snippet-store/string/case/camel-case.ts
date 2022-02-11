const capitalizeWord = (text: string): string =>
  text.length > 0 ? text[0]?.toUpperCase() + text.slice(1).toLowerCase() : '';

const wordToCamel = (text: string, index: number): string =>
  index === 0 ? text.toLowerCase() : capitalizeWord(text);

/**
 * Partial application of a splitter function, that can be used before
 * converting a string to [camel case](https://en.wikipedia.org/wiki/Camel_case)
 * @example camelCase
 * @param splitter the function that splits the string into an array of strings
 * @returns a function that takes a string and returns a camel case string
 */
export const camelCase =
  (splitter: (textToSplit: string) => string[]) => (text: string) =>
    text === '' ? '' : splitter(text).map(wordToCamel).join('');
