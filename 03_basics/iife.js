// Immediately Invoked Function Expressions (IIFE)

(function myDB() {
    console.log(`CONNCTED TO DB`)
}) ();


((name) => {
    console.log(`CONNECTED TO USER, ${name}`)
}) ("Rahul")


//------ Execution Context and Call Stack ------------------
//Refer: https://youtu.be/sscX432bMZo?t=22872

/*
function one() {
    console.log("one")
    two()
}

function  two() {
    console.log("two")
    three()
}

function three() {
    console.log("three")
}

one()
two()
three()
 */

