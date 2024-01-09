//way 1
let name = "rahul "
let repoCount = 7

// console.log(name + repoCount) → not recommended

//String Interpolation
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`)

//way 2
const gameName = new String("GTA-V")
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.charAt(2)) // pass index value
console.log(gameName.indexOf('T')) //pas character

const newString = gameName.substring(0,4) // last index value provided will be ignored
console.log(newString)

const anotherString = gameName.slice(-4,4) // -ve values cn be provided using slice()
console.log(anotherString)


const str2 = "    rahul     "
console.log(str2)
console.log(str2.trim()) // to eliminate unnecessary spaces

//Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://www.rahul.com/rahul%20ambiger"
console.log(url.replace('%20', '-')) //to replace specified part of string with other

//checks wether specified keyword is present in string or not
console.log(url.includes('rahul'))
console.log(url.includes('raj'))

//converts string → array format
console.log(gameName.split('-')) // splits based on seperator

//Refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

