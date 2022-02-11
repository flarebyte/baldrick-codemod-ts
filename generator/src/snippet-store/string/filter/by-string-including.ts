/**
 * Partial application to check whether a string includes a given value
 * @param given the given value that we expect the string to include
 * @returns a function that contains the given text
 */
export const byStringStartingWith =
  (given: string) =>
  (text: string): boolean =>
    text.includes(given);
