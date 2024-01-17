// Arrow functions in JS

// Context in JS → "this" keyword

const user = {
    username: "Rahul",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
} 

user.welcomeMessage()
user.username = "MSD"
user.welcomeMessage()

console.log(this)


// In Browser JS Engine, the Global object → "Window" (** IMP IQ **)


function kbc() {
    let username = "Rahul"
    console.log(this.username) //undefined  
}

kbc()

const chaiPeCharcha = function() {
    let username = "Rahul"
    console.log(this.username) //indefined
}

chaiPeCharcha()

// Arrow function

l/* et chaiPeCharcha = () => {
    let username = "Rahul"
    // console.log(this.username)
    console.log(this)  // {}
}

chaiPeCharcha() */

//Explicit return 
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))


//Implicit return
const addThree = (n1, n2, n3) =>  (n1 + n2 + n3)
console.log(addThree(11,43,56))

const returnObj = () => ({id: 1, username: "Rahul"})
console.log(returnObj())