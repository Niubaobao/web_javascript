//1 删除排序数组中的重复项

var removeRecur = function(numbs)  {
  for(let i=0; i<numbs.length; i++){
    if(numbs[i] == numbs[i+1]){
      numbs.splice(i,1);
      i -= 1;
    }
  }
  return numbs.length;
}

//2 给你一个数组 numbs 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度

var removeElement = function(numbs, value){
  for(let i=0; i<numbs.length; i++){
    // let index = numbs.indexOf(value);
    // if(index == -1) return;
    //   numbs.splice(index,1);
    //   i -= 1;
    if(numbs[i] === value){
      numbs.splice(i,1);
      i -= 1;
    }
  }
  return numbs.length;
}
//给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
var searchInsert = function(nums, target) {
  for(let i=0; i<nums.length; i++){
      if(target <= nums[i]){
          return i;
      }
  }
  return nums.length;
};

// 数组去重
var nums = [1,2,3,4,4,3,2,6,7];

var formatArray = (nums) => {
  var arr = [];
  for(let i=0; i<nums.length; i++){
    if(!arr.includes(nums[i])){
      arr.push(nums[i])
    }
  }
  return arr;
} 

console.log(formatArray(nums))

// es6去重
var formatArray = (nums)=>{
  return [...new Set(nums)]
}

var formatArray = (nums) => {
  return nums.filter((item, index) => {
    return nums.lastIndexOf(item) === index;
  })  
}

// 数组扁平化
var nums = [1, [2, [3, [4, [5]]]]];

var formatArray = (nums) => {
  var result = [];

  var filterArr = (nums) => {
    for(let i=0; i<nums.length; i++){
      if(Array.isArray(nums[i]) ){
        filterArr(nums[i])
      }else{
        result.push(nums[i])
      }
    }
  }
  filterArr(nums);

  return result;
}

// flat 
var formatArray = (numbs) => {
  return numbs.flat(Infinity);
}

