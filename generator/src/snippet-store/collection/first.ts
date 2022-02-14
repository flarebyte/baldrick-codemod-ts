/**
 * Returns the first value of an array or the default value
 * @param items a list of items
 * @param defaultValue the default value
 * @returns the first value
 */
export function first<T>(items: T[], defaultValue: T): T {
  return items[0] || defaultValue;
}
