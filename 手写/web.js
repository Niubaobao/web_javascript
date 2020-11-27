//********* 冒泡排序
// [5,2,4,7,9,8,3,6,3,8,3] 
const arr = [5,2,4,7,9,8,3,6,3,8,3];

const bubbleSort = (arr) => {
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr.length - 1 - i; j++){
      if(arr[j] > arr[j+1]){
        let tmp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = tmp
      }
    }
  }
}

bubbleSort(arr);
console.log(arr)
