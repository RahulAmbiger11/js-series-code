// Scopes in JS

// var c = 300
let a = 100  // global scope

if(true) {  //local scopes
    let a = 10
    const b = 20
    console.log("Inner", a)
}

console.log(a)
// console.log(b)
// console.log(c)