/**
 * Partial application to check whether a string ends with a given value
 * @param given the given value that we expect the string to end with
 */
export const byStringEndingWith =
  (given: string) =>
  (text: string): boolean =>
    text.endsWith(given);
