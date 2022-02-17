/**
 * Check whether a value is a safe integer with widespread support
 */
export const isSafeInteger = (value: unknown): value is number =>
  typeof value === 'number' && Number.isSafeInteger(value);
