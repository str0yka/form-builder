export const moveArrayElement = <T>(array: T[], fromIndex: number, toIndex: number) => {
  if (
    fromIndex === toIndex ||
    fromIndex > array.length ||
    fromIndex < 0 ||
    toIndex > array.length ||
    toIndex < 0
  ) {
    return array;
  }

  const deepCopiedArray = JSON.parse(JSON.stringify(array)) as T[];

  deepCopiedArray.splice(toIndex, 0, deepCopiedArray.splice(fromIndex, 1)[0]);

  return deepCopiedArray;
};
