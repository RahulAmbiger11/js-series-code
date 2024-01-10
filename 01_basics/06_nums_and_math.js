
const score = 100
console.log(score)  // 100

const balance = new Number(7781)
console.log(balance) // explicitly mentions it as [Number: 7781] 

//string based functionalities
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // used for fixed precision


const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3))  // 23.9

const otherNum = 123.8966
console.log(otherNum.toPrecision(3)) // 124

const h1 = 1000000
console.log(h1.toLocaleString()) // provides currency values acc, ameriacan std
console.log(h1.toLocaleString('en-IN')) // provides currency values acc, indian std


// ------------------ MATHS ---------------------------------------

console.log(Math)
console.log(Math.abs(-4))  // provides absolute valuess

console.log(Math.round(45.3))  //45 → rounds off values
console.log(Math.round(45.6)) //46

console.log(Math.ceil(45.1)) // 46 → top limit value
console.log(Math.ceil(45.8)) // 46

console.log(Math.floor(45.9)) // 45 → low limit value
console.log(Math.floor(45.3)) // 45

console.log(Math.min(44,9,123)) // 9 → Min value
console.log(Math.max(44,9,123)) // 123 → Max value


console.log(Math.random()) // generates random valuess
console.log((Math.random() * 10) + 1)
console.log(Math.floor(Math.random() * 10) + 1)

// ** IMP IQ **
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)