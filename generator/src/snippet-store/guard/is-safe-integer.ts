/**
 * Check whether a value is a string
 */
export const isSafeInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isSafeInteger(value);
