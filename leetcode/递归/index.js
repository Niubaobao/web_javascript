// 题目： 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

// 示例 
// 输入：
// shorter = 1
// longer = 2
// k = 3
// 输出： [3,4,5,6]
// 解释：
// 可以使用 3 次 shorter，得到结果 3；使用 2 次 shorter 和 1 次 longer，得到结果 4 。以此类推，得到最终结果。

const divingBoard = function (shorter, longer, k){
  //先处理边界条件
  if(k === 0) return []
  if(shorter === longer) return [ shorter * k ]
  var arr = []
  for(let i=0; i<k; i++){
    // 从小向大排列
    arr.push(shorter*(k-i) + longer*i)
  }

  return arr
}

console.log(divingBoard(1, 2, 3))
