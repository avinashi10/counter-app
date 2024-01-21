export const calculateSumCounters = (countersArray) => {
  return countersArray.reduce((accumulator, counterValue) => accumulator + counterValue, 0);
}
