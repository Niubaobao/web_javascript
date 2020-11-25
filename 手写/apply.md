// this 手写call apply bind 

## this
- 函数的this会指调用函数的执行环境
```
function aa(){
  return this
}
aa()==window  // true
```
- 作为构造函数实例化方法的时候，this指向实例对象
- 箭头函数的this
```
var name = "window"
var obj = {
  name: "obj",
  fn: function(){
    (
      function(){
          console.log("立即执行函数")
      }
    )()
  }
}
```




//使用call
// function fun(arg1, arg2){
//   console.log(this.name)
//   console.log(arg1 + arg2)
// }

// const _this = {name: "haoWeiLai"}

// console.log(fun.call(_this, 1, 3)) 

