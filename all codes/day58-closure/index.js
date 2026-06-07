// function outerfunction() {
// let name = "chinamy"; // name is a local variable created by init
//   function innerfunction() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   innerfunction();
// }
// outerfunction();



function outerfunction() {
let name = "chinamy"; // name is a local variable created by init
  function innerfunction() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  return innerfunction;
}
let ineer  =  outerfunction();
outerfunction()

ineer();

//name is not free in this in nested loop and bind with it 