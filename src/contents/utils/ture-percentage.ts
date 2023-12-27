export const calculateTruePercentage = (array: boolean[]): number => {
  const trueCount = array.filter(value => value).length;
  const truePercentage = (trueCount / array.length) * 100;
  return truePercentage;
};
