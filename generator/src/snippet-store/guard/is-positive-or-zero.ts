/**
 * Check whether a value is a number more or equal to zero
 */
export const isPositiveOrZero = (value: unknown): value is number =>
  typeof value === 'number' && value >= 0;
