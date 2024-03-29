//array

//Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [23,1,2,3,4,5]
console.log(myArr[0])

const heros = ["shaktiman","hanuman", "ironman"]
console.log(heros)

//alternative way
const A1 = new Array(11,22,3,45)
console.log(A1)

//array methods
myArr.push(77)  //adds elements into array
console.log(myArr)

myArr.pop()
console.log(myArr) //removes last element from array

myArr.unshift(7)  // adds element to the beginning of array
console.log(myArr)

myArr.shift() // removes element from beginning of array
console.log(myArr)

//questinnaire methods in JS
console.log(myArr.includes(9)) //false
console.log(myArr.indexOf(99)) // -1 → not present
console.log(myArr.indexOf(23)) // 0

//join() → binds all array elements into a string 
const newArr = myArr.join()
console.log(newArr) 
console.log(typeof newArr)  //string

//slice() & splice() → ** IMP IQ **

// slice() → doesn't leads to manipulation of org. array
console.log("A ", myArr) //[23,1,2,3,4,5]
const myn1 = myArr.slice(1,3) 
console.log(myn1)  //[1,2]

console.log("B ", myArr)

//splice() → leads to manipulation of org. array & removes particular portion of array from org.array
const myn2 = myArr.splice(1,3)
console.log("C ", myArr) //[23,4,5]
console.log(myn2) //[1,2,3]


