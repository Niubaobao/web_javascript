//  有序矩阵中第K小的元素
var matrix = [
  [ 1,  5,  9],
  [10, 11, 13],
  [12, 13, 15]
]
var k = 8

// 返回 13。

var kthSmallest = (arr, index) => {
  return arr.flat().sort((a, b) => a - b)[index-1];
}

// console.log(kthSmallest(matrix, k));