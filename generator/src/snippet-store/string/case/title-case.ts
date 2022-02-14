const capitalizeWord = (text: string): string =>
  text.length > 0 ? text[0]?.toUpperCase() + text.slice(1).toLowerCase() : '';

/**
 * Partial application of a splitter function, that can be used before
 * converting a string to [title case](https://en.wikipedia.org/wiki/Title_case)
 * @example TitleCase
 * @alias PascalCase
 * @param splitter a function that splits the string into words
 */
export const titleCase =
  (splitter: (textToSplit: string) => string[]) => (text: string) =>
    text === '' ? '' : splitter(text).map(capitalizeWord).join('');
