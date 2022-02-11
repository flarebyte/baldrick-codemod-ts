/**
 * Returns the first value of an array or throw an exception
 * @param items a list of items
 * @returns the first value
 */
export function firstOrThrow<T>(items: T[]): T {
  const item = items[0];
  if (item === undefined) {
    throw new Error('The array should have at least one item');
  }
  return item;
}
