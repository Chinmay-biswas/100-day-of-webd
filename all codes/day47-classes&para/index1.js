//default parameter

function sayname(name= "default name is chinamy"){
    console.log("my name is"+" "+name)
}
// sayname("chichi");
sayname()

function sayname2(name= "default name is chinamy", lastname = name.toUpperCase()){
    console.log("my name is"+" "+name , lastname)
}
// sayname2("hiii")
sayname2()
//can put array or obect or any thing
//in null is prits null 
//in undefine it print default
