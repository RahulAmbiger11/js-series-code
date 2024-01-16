// Scopes in JS

// var c = 300
let a = 100  // global scope

if(true) {  //local scopes
    let a = 10
    const b = 20
    // console.log("Inner", a)
}

// console.log(a)
// console.log(b)
// console.log(c)


// --------- NESTED SCOPE ----------------------
function one() {
    const username = "Rahul"

    function two() {
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)

    // two()
}

// one()

/* Nested Functions
Note: var delared inside outer func() is accessible to inner func()
but, var delared inside inner func() is not accessible outside of its scope */

if(true) {
    const username = "Rahul"

    if(username === "Rahul") {
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// ------------------ ** IMP ** ----------------

console.log(addOne(5))

function addOne(num) {
    return num + 1
}


// Variable Hoisting problem → can't access function declared via var before initialization 
console.log(addTwo(9))

let addTwo = function(n) {
    return n + 2
}