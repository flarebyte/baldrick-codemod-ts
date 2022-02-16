/**
 * Run functions sequentially until one succeeds or return Falsy.
 */
export function coalesce<V, R>(
  functions: ((v: V) => R | undefined)[],
  value: V
) {
  for (const fn of functions) {
    const result = fn(value);
    if (result !== undefined) {
      return result;
    }
  }
  return;
}
