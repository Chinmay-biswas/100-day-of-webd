let obj={
    "name":"chichi",
    age:25,
    "cont act":6398439263,
    greet:function(){
        console.log("grreetings too all");
    }
};
console.log(obj);
obj.greet();
let shallowcopy=obj;
let deepCopy = JSON.parse(JSON.stringify(obj));



let arr=[1,"name",true];
let brr= new Array('love',1,4);
console.log(brr[1]);



console.log(arr);


//map
arr=[10,20,30];
let aarr=arr.map((num) => {
    return num*num;
})
console.log(aarr);

let arr1=[1,2,5,6,3,7,8,45,6,2,34,5];
let ans1=arr1.filter((num)=>
{
    return num%2===0;
    // if(num%2===0){
    //     return true;
    // }
    // else{return false;}
});
console.log(ans1);

arrcombine=[1,2,"str","wht",true,'shkas',function hi(){console.log("dksajj")}];

let ans2=arrcombine.filter((num)=>
{
    return typeof(num)==='function';
    // if(num%2===0){
    //     return true;
    // }
    // else{return false;}
});
console.log(ans2);


arr3=[10,20,30,40];
let ans3=arr3.reduce((acc,cur)=>{
    return acc+cur;

},0);
console.log(ans3);
// arr3.sort((a,b)=>b-a);
arr3.sort().reverse();
console.log(arr3);