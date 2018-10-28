module.exports = function recursion(tree, index = 0, result = []) {
  if (result[index] === undefined) {
    result[index] = [];
  }
  result[index].push(tree.value);
  const indx = 1 + index;
  if (typeof tree.left === 'object') {
    recursion(tree.left, indx, result);
  }
  if (typeof tree.right === 'object') {
    recursion(tree.right, indx, result);
  }
  return result;
};
