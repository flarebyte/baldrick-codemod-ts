const byUniqueSomeField = (
  value: { someField: string },
  index: number,
  self: { someField: string }[]
): boolean => self.findIndex((v) => v.someField === value.someField) === index;
