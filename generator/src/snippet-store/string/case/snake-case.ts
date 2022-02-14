/**
 * Partial application of a splitter function, that can be used before
 * converting a string to [snake case](https://en.wikipedia.org/wiki/Snake_case)
 * @example snake_case
 * @param splitter a function that splits the string into words
 */
export const snakeCase =
  (splitter: (textToSplit: string) => string[]) => (text: string) =>
    text === ''
      ? ''
      : splitter(text)
          .map((t) => t.toLowerCase())
          .join('_');
