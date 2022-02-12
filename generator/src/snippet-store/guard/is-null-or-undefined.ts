export const isNullOrUndefined = (value: unknown): value is null | undefined =>
  typeof value === 'undefined' || value === null;