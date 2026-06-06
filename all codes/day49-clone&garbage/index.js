//dynamic means change in run time
let src={
    age:12,
    wt:15,
    ht:19
};
let dest={...src}
src.age=89;
console.log(src)
src.color="white"
console.log(src)
//tree ways to clone 
//spread opretor {...age}
console.log(dest)
//assign
let dest1 =Object.assign({},src,{/*anothet source for all */})

//iteration
//free or delete in ++ for garbage collector