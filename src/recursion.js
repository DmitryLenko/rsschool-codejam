module.exports = function recursion(tree, index = 0, res = []) {
  if (res[index] === undefined) res[index] = [];
  res[index].push(tree.value);
  if (typeof tree.left === 'object') {
    recursion(tree.left, 1 + index, res);
  }
  if (typeof tree.right === 'object') {
    recursion(tree.right, index, res);
  }
  return res;
};
