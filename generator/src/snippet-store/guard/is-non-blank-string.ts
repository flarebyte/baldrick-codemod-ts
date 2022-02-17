/**
 * Check whether a value is valid string and empty or blank (ex: spaces)
 */
export const isNonBlankString = (value: unknown): value is string =>
  typeof value === 'string' && value.length > 0 && /\S/.test(value);
