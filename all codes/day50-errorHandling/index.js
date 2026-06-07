//first it will parse 
// console.log(1;  compile time error syntax error 


// console.log(x); runtime error 

try{
console.log("start here ")
console.log(x);
console.log("end here")
}
catch(e){
 console.log("there is a simple error ")
}
// finally block
finally{
    console.log("i will write any thing")
}
console.log("i will write any thing");

///we can create custum error with throw

// try {
//     console.log(x);
// }
// catch(err){
//     throw new Error("its ther new erroe ")
// }
// let errorCode=100;
// if(errorCode==100){
//     throw new Error("Invalid json")
// }