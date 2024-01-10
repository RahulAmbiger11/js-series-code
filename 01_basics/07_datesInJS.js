/*
Dates
Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) // Wed Jan 10 2024 11:54:12 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()) // 2024-01-10T11:54:12.480Z
console.log(myDate.toJSON()) // 2024-01-10T11:54:12.480Z
console.log(myDate.toLocaleDateString()) // 1/10/2024
console.log(myDate.toDateString()) // Wed Jan 10 2024

console.log(typeof myDate) // object


let createdDate = new Date(2023, 0, 23)
console.log(createdDate.toDateString())  

let newDate = new Date('2023-01-13')
console.log(newDate.toLocaleString())

let myTimeStamp = Date.now() // in milli seconds
console.log(myTimeStamp)

console.log(createdDate.getTime()) // in milli seconds

console.log(Math.floor(Date.now()/1000))  // Converted to secs format
