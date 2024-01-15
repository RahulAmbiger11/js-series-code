//Functions in JS

function sayMyName() {
    console.log("R")
    console.log("A")
    console.log("H")
    console.log("U")
    console.log("L")
}

// sayMyName()

/* function addTwoNums(n1, n2) {  // parameters
    console.log(n1 + n2)
}

let res1 = addTwoNums(11,17) 
console.log("Result ", res1) */ // undefined

// addTwoNums(22,67) → arguments
// addTwoNums(3, "4") 
// addTwoNums(3, "a")
// addTwoNums(3, null)

function addTwoNumbers(n3, n4) {
    let result = n3 + n4
    return result
    // console.log("Rahul")
}

// let res = addTwoNumbers(11,17)

// console.log("Result ", res) 


function subTwoNums(a, b) {
    return a - b
}

let r2 = subTwoNums(44, 17)
console.log(r2)


function loginUser(username = "MSD") {  //default value
    if (!username) {
        console.log("please enter a valid username!")
        return
    }
    return `${username} just logged in!!`
}

// console.log(loginUser("Rahul"))
// console.log(loginUser("VK")) //undefined


// Rest or spread Operator

// ** IMP IQ **
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(100, 200, 7781))

/* const user = {
    username: "Rahul",
    price: 7781
} */


/* function handleObj(anyObj) {
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`)
}

// handleObj(user)
handleObj({
    username: "Rahul A",
    price: 1100
}) */


const newArr = [1107, 7781, 1809, 1709]

function returnSecondVal(arr) {
    return arr[1]
}

// console.log(returnSecondVal(newArr))
console.log(returnSecondVal([110,220,330,440]))
