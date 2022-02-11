/**
 * Checks if n is between start and up to, but not including, end. 
 */
export const isInRange =
  (min: number, max: number) =>
  (value: unknown): value is number =>
    typeof value === 'number' && value >= min && value < max;
