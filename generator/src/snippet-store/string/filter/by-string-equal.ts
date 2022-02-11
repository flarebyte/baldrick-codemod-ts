/**
 * Partial application to check string equality against a given value
 * @param given the given value that we expect to match
 * @returns a function that matches a given value
 */
export const byStringEqual =
  (given: string) =>
  (text: string): boolean =>
    text === given;
