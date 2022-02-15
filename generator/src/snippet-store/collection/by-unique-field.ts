/**
 * Only return unique version of objects in an array based on key SomeField
 */
export const byUniqueSomeField = (
  value: { someField: string },
  index: number,
  self: { someField: string }[]
): boolean => self.findIndex((v) => v.someField === value.someField) === index;
