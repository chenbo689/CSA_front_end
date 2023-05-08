// level0
const person = {
    name: 'csa',
    age: 1000000,
    address: {
    city: 'ChongQing',
    area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
   }

// 我的代码
   const {name}=person
   const {age:year}=person
   const {address:{city}}=person
   const {address:{area:mountain}}=person
   let {title:[title1,{title: title2},title3='God']}=person
   
   console.log(name) // csa
   console.log(year) // 1000000 这里没有写错哈，就是要输出 1000000，结合课件
   console.log(city) // ChongQing 
   console.log(mountain) // NanShan //这里没有写错，就是要输出 NanShan，结合课件
   console.log(title1) // student
   console.log(title2) // GoodStudent
   console.log(title3) // God 结合课件

//    level1
//    递归
const factorial =(n)=>{
    if(n==1) return n
    else{
        return n*factorial(n-1)
    }
   }
//   循环
   const factorial1=(n)=>{
    let sum=1
    for(let i=1;i<=n;i++){
        sum*=i
    }
    return sum
   }
    console.log( factorial(3))//6
   console.log( factorial1(3))//6


//    level2
let user1={
    name:'菠萝吹雪'
   }
   let user2={}
   Object.assign(user2,user1)
   user1.name='陆小果'
   console.log(user1)
    console.log(user2)// 输出{name:“菠萝吹雪”}
    // 修改user1.name不会影响user2的内容