/**
 * Check whether a value is a non empty string
 */
export const isNonEmptyString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0;
