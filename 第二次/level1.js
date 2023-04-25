function myPush(arr,...arguments){
    arr.splice(arr.length,arguments.length,...arguments)
}
let arr = [1,2]
myPush(arr,3,3)
console.log(arr);
