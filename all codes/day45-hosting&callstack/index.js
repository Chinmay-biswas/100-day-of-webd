
name("chinmay");
function name(namemy){
    console.log(namemy);
}
console.log(age);
var age=25;

// console.log(a);
// let a=25;

function sayhello(){
    console.log("hello jiii");
}
sayhello();
// let sayhello = function (){
//     console.log("hello jiii");
// }

// const object1=new HUman();
// class HUman{

// }

function greetme(greet,name){
    console.log("hello",name)
    greet();

}

let greet =function(){
    console.log("greeting for all things")
}
greetme(greet,"chinmay");


function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(3);
console.log(ans(5));


const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
]

let first=arr[0];
let ans1=first(10,5);
console.log(ans1)

let obj2={
    age:25,
    wt:67,
    ht:45,
    greet:()=>{console.log(("hello ji"))}
}
console.log(obj2.greet)
obj2.greet()
obj2.age