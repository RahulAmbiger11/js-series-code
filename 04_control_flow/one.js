// Control flow or Logic flow

//if

/* let score = 100
if(score > 50) {
    const power = "fly"
    //var power = "fly" → global scoped
    console.log(`Special power: ${power}`) // functional scoped
} */

//console.log(`Special power: ${power}`) → throws error

//Comparison Operators → ==, !=, <, >, <=, >=, ===, !==


 //implicit scope
 /* const balance = 1000

Not Recommended
 if(balance > 500) console.log("test"), console.log("test2"); 
 */


 //NESTING
 /* const bal = 1000

 if(bal < 500) {
    console.log(`less than 500`)
 } else if(bal < 750) {
    console.log(`less than 750`)
 } else if(bal <900) {
    console.log(`less than 900`)
 }
 else {
    console.log(`less than 1200`)
 }
 */

 const userLoggedIn = true
 const debitCard  = true

 const loggedInFromGoogle = false
 const loggedInFromEmail = true

 if(userLoggedIn && debitCard) {
    console.log("Can purchase courses!!")
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("Logged in Successfully!!")
}

/*

logical Operators
||(atleast one condition should be true) , && (all the condtions should be true)

*/