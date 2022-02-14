/**
 * Partial application of a splitter function, that can be used before
 * converting a string to [slug case](https://en.wikipedia.org/wiki/Clean_URL#Slug)
 * @example slug-case
 * @alias kebab-case
 * @param splitter a function that splits the string into words
 */
export const slugify =
  (splitter: (textToSplit: string) => string[]) => (text: string) =>
    text === ''
      ? ''
      : splitter(text)
          .map((t) => t.toLowerCase())
          .join('-');
