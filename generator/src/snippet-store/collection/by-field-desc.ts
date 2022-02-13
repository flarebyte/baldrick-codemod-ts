const sortedBySomeField = (a: { someField: string }, b: { someField: string }): number => {
    if (a.someField > b.someField) return 1;
    if (a.someField < b.someField) return - 1;
    return -0;
  };