export const isArray = (value: unknown): boolean =>
  typeof value === 'object' && value !== null && Array.isArray(value);
