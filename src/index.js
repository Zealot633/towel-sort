// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == undefined) return [];
  let arr = matrix.slice();
  let result = [];
  arr.forEach((e, index) => {
    index % 2 !== 0
      ? e.reverse().forEach((elem) => result.push(elem))
      : e.forEach((elem) => result.push(elem));
  });
  return result;
};
