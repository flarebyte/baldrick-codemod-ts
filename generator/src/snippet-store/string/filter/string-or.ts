/**
 * Partial application of a multiple functions and return true if any return true
 */
export const stringOr =
  (functions: ((v: string) => boolean)[]) =>
  (value: string): boolean =>
    functions.some((fn) => fn(value));
