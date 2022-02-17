/**
 * Check whether a value is a positive number, not equal to zero
 */
export const isPositive = (value: unknown): value is number =>
  typeof value === 'number' && value > 0;
