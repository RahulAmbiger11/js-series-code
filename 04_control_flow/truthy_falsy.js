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

*/



const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    console.log("Object is empty")
}