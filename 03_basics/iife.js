// Immediately Invoked Function Expressions (IIFE)

(function myDB() {
    console.log(`CONNCTED TO DB`)
}) ();


((name) => {
    console.log(`CONNECTED TO USER, ${name}`)
}) ("Rahul")

