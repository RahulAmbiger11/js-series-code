// for of loop

// ["", "", ""]
//[{}, {}, {}]


let arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num)
}


let greetings = "Hello world"

for (const greeting of greetings) {
    if(greeting == " "){
        continue
    }
    console.log(`The char is: ${greeting}`)
}

// Maps: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

//1. holds unique values
//2. maintains order of insertion

let map1 = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("UK", "United Kingdom")

// console.log(map)

for (const [key, value] of map1) {
    console.log(key ,':- ', value)
}


// ---------------------------------------------------------------------------------------

//Objects in JS
let myObj = {
    js: "javascript",
    cpp: "C++",
    py: "Python",
    swift: "swift"
}

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`)
}



let myArr2 = ["py", "java", "js", "cpp", "c"]
for (const key in myArr2) {
    // console.log(key) //index pos → key
    console.log(myArr2[key])
} 


//using for in loop

let map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set("UK", "United Kingdom")

//Note: maps are not iterable using for in loop
for (const key in map) {
    console.log(key)
}