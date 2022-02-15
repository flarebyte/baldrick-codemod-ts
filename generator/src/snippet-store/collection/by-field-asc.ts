/**
 * Sort by ascending order of the key SomeField
 */
export const sortedBySomeField = (
  a: { someField: string },
  b: { someField: string }
): number => {
  if (a.someField > b.someField) return 1;
  if (a.someField < b.someField) return -1;
  return 0;
};
