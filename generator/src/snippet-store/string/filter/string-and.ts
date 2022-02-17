/**
 * Partial application of a multiple functions and return true if all return true
 */
export const stringAnd =
  (functions: ((v: string) => boolean)[]) =>
  (value: string): boolean =>
    functions.every((fn) => fn(value));
