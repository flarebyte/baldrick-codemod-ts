/**
 * Check whether a value is a countable number less than infinity
 */
export const isFiniteNumber = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value);
