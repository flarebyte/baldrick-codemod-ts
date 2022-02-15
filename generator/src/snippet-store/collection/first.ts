/**
 * Returns the first value of an array or the default value
 */
export function first<T>(items: T[], defaultValue: T): T {
  return items[0] || defaultValue;
}
