let firstPromise = new Promise((resolve,reject)=>{
    function greet(name){
    console.log("this will take time "+ name)
}
setTimeout(()=>greet("chinmay"),5000);
    console.log("chinmay");
    resolve(100);
    // reject(new Error("internal sever error"))
});


let promise1 = new Promise((resolve,reject)=>{
    let succes=false;
    if(succes){
        resolve("promise fullfiled")
    }
    else{
        reject("promise rejected")
    }
})
promise1.then((message)=>{
    console.log("then ka msg "+ message)
    return "mesg 2 is here"
}).then((message)=>{
    console.log("msg 2 beta "+message)
}).catch((error)=>{
    console.error("error ka msg"+error)
}).finally((message)=>
{
    console.log("mai to chalunga hi")
})

let pro1= new Promise((resolve,reject)=>{
    setTimeout(resolve, 2000,"first");
})
let pro2= new Promise((resolve,reject)=>{
    setTimeout(resolve, 4000,"second");
})
let pro3= new Promise((resolve,reject)=>{
    setTimeout(resolve, 6000,"third");
})

Promise.all([pro1,pro2,pro3]).then((value)=>{console.log("all done sucessfully"+value)})