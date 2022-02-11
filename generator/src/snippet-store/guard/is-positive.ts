/**
 * Check whether a value is a string
 */
 export const isPositive = (value: unknown): value is number =>
 typeof value === 'number' && value > 0;