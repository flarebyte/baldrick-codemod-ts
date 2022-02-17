/**
 * Partial application of a function whose result will be inverted (true -> false)
 */
export const stringNegate =
  (fn: (v: string) => boolean) =>
  (value: string): boolean =>
    !fn(value);
