/**
 * Partial application to check string equality against a given value
 * @param given the given value that we expect to match
 */
export const byStringEqual =
  (given: string) =>
  (text: string): boolean =>
    text === given;
