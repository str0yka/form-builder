export const swapArrayElements = <T>(array: T[], firstIndex: number, secondIndex: number): T[] => {
  if (
    firstIndex === secondIndex ||
    firstIndex > array.length ||
    firstIndex < 0 ||
    secondIndex > array.length ||
    secondIndex < 0
  ) {
    return array;
  }

  const result = [] as T[];

  for (let i = 0; i < array.length; i += 1) {
    const element = array[i];

    if (i === firstIndex) {
      result[i] = array[secondIndex];
    } else if (i === secondIndex) {
      result[i] = array[firstIndex];
    } else {
      result[i] = element;
    }
  }

  return result;
};
