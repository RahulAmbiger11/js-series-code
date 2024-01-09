/* Primitive D.T  (Call by value) 

7 Types
1. String
2. Number
3. null
4. undefined
5. Symbol
6. BigInt
7. Boolean



→ Non Primitive D.T  (Call by reference)
1. Arrays
2. Objects
3. Functions

*/

// Thereby, JS → Dynamically Typed Programming Language (ie, datatype of variable is decided at runtime)

//Examples
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const isLoggedOut = true
 const TempOutside = null
let userEmail

console.log(isLoggedIn)
console.log(isLoggedOut)
console.log(score)
console.log(scoreValue)
console.log(TempOutside)
console.log(userEmail)


//Symbol D.T → makes any value unique (even if we have provided same type and same value)
let id = Symbol("123")
let anotherId = Symbol("123")

console.log(id === anotherId)

//bigInt → when numbers are too large
const bigNumber = 1234448374387387874n
console.log(bigNumber)
console.log(typeof bigNumber)

//-----------------------------------------------------------------------

//Arrays
const superheros = ["ironman", "hanuman", "superman"]

// Objects
let myObj = {
    name: "rahul",
    age: "101"
}

//Functions
const MyFunc = function() {
    console.log("Hello Buddy!!")
}

console.log(typeof myObj) //object
console.log(typeof superheros) //object
console.log(typeof TempOutside)
console.log(typeof scoreValue)
console.log(typeof MyFunc)  //funtion or object funtion

//Note: typeof operator → https://tc39.es/ecma262/#sec-typeof-operator
//return type of all these Non Primitive D.T → Object


//--------------------------------------------------------------------------

/* 
Memory allocation in JS:
    Stack(Primitive), Heap(Non Primitive)
    Refer: https://youtu.be/sscX432bMZo?t=7205
*/

//Stack(Primitive) → Call by value (have copy of value)
let myYoutubename = "rahulambiger"
// let anotherName = myYoutubename
let anotherName = "rahulA"

console.log(myYoutubename);
console.log(anotherName);

//Heap(Non Primitive) → Call by reference(will have original memory reference)
let userOne = {
    email:"user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "rahul@google.com"

console.log(userOne.email)
console.log(userTwo.email)

