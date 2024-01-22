export const calculateSumCounters = (countersArray) => {
  const countValues = countersArray.map((counter) => counter.count)
  return countValues.reduce((accumulator, counterValue) => accumulator + counterValue, 0);
}
