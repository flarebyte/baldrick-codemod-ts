const capitalizeWord = (text: string): string =>
  text.length > 0 ? text[0]?.toUpperCase() + text.slice(1).toLowerCase() : '';

const wordToCamel = (text: string, index: number): string =>
  index === 0 ? text.toLowerCase() : capitalizeWord(text);

/**
 * See [Camel case](https://en.wikipedia.org/wiki/Camel_case)
 */
export const camelCase =
  (splitter: (textToSplit: string) => string[]) => (text: string) =>
    text === '' ? '' : splitter(text).map(wordToCamel).join('');
