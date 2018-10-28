module.exports = function sumOfOther(arr) {
  if (arr === undefined) {
    return undefined;
  }
  const sum = arr.reduce((a, item) => a + item, 0);
  return arr.map(element => sum - element);
};
