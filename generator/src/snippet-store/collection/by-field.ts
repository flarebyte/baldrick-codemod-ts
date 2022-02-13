const bySomeField =
  (predicate: (v: string) => boolean) =>
  (value: { someField: string }): boolean =>
    predicate(value.someField);
