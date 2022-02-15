/**
 * Partial application with a predicate on a string that is used to check
 * whether SomeField matches the criteria
 */
export const bySomeField =
  (predicate: (v: string) => boolean) =>
  (value: { someField: string }): boolean =>
    predicate(value.someField);
