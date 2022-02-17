/**
 *
 * Guard to check if a value is an object but not an array
 */
export const isObject = (value: unknown): value is object =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
