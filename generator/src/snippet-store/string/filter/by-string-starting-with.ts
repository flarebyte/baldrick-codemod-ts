/**
 * Partial application to check whether a string starts with a given value
 * @param given the given value that we expect the string to start with
 */
export const byStringStartingWith =
  (given: string) =>
  (text: string): boolean =>
    text.startsWith(given);
