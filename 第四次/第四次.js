// lv 1
var funcs = []
for (var i = 0; i < 10; i++) {
    funcs=[...funcs,i]
}
// -------------------------------------------------------------------------------
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`我是${this.name}，${this.age}岁`);
    }
}
class Student extends Person {
    constructor(name, age, courses) {
        super(name, age);
        this.courses = courses;
    }

    speak() {
        super.speak();
        console.log(`我喜欢${this.courses}`);
    }
}

const student1 = new Student("坤坤", 20, ["唱", "跳", "rap","篮球"]);
student1.speak();

// --------------------------------------------------------------------------------
// lv 2
let obj={
    name:'Zx',
    age:19,
    gender:'male',
    level:'cai',
    [Symbol.iterator](){
        const arr=Object.keys(this)
        let i=0;
        let _this=this
        return {next: function () {
            if(i<4){
                let resalut= {value:arr[i],done:false}
                i++
                return resalut
            }
            else{
                return {value:undefined,done:true}
            }
        }
    }}
}
for(let v of obj){
    console.log(v);
}

// --------------------------------------------------------------------------------------
const p=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('red')
    }, 3000);
})
    p.then(value=>{
    console.log(value)
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('yellow')
    }, 2000)
}).then(value=>{
    console.log(value)
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('green')
    }, 1000);
})
},reason=>console.log(reason)).then(value=>console.log(value),reason=>console.log(reason))
},reason=>console.log(reason))
// 加一个循环就可以一直执行
