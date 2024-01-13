//singleton
//Object.create

//object literals
//Refer: https://youtu.be/sscX432bMZo?t=13650

const mySym = Symbol("key1")

const jsUser = {
    name:"Rahul",
    "full name": "Rahul A",
    [mySym]: "myValue1",
    age: 17,
    location:"KAR",
    email: "rahul@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Mon", "Sat"]
}

//ways of accessing elements of object
console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser["full name"]) // ** IMP IQ **

// ** IMP IQ **
console.log(jsUser[mySym])


// to change the values of object

jsUser.email = "rahul@gmail.com"
console.log(jsUser)

//freeze() → to freeze the access of an object
Object.freeze(jsUser)
jsUser.email = "rahul@microsoft.com"
console.log(jsUser)


// including function inside object
jsUser.greeting = function() {
    console.log("Hello Js User")
}

//passing reference 
console.log(jsUser.greeting)


console.log(jsUser.greeting())

jsUser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`)
}

console.log(jsUser.greetingTwo())

console.log(jsUser)