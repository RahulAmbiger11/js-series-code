const accountId = 144553
let accountEmail = "rahul@google.com"
var accountPassword = "12345"
accountCity = "Vijayapura"
let accountState;

// accountId = 2 // not allowed


accountEmail = "rta@rt.com"
accountPassword = "112233"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])