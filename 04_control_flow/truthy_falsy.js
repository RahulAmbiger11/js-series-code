// Truthy and falsy values → assumed values

const userEmail = "rahul@google.ai" // assumed true
// const userEmail = "" //assumed false
const userEmail2 = [] // assumed true

if(userEmail2.length ===0) {
    console.log("Array is empty")
}


if(userEmail) {
    console.log("have user email")
}
else{
    console.log("Don't have user email")
}


/* let number = 8748478782n
console.log(typeof number) → bigint
*/
/*

falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN 

truthy values
"0", 'false', " ", [], {}, 
function() {

} 

Note:
(IMP)
false == 0
→ true

false == ''
→ true

0 == ''
→ true

*/



const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}



// Nullish Coalescing Operator (??)  null , undefined
let val1 = null ?? 10
console.log(val1) // 10

let val2 = undefined ?? 20
console.log(val2) //20

let val3 = undefined ?? 30 ?? 40
console.log(val3) //30

    
// Ternary Operator (?)
let price = 7781
price <=10000 ? console.log("less than 10000") : console.log("Greater than 10000")

