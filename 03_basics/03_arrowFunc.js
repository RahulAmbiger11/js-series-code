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

// user.welcomeMessage()
// user.username = "MSD"
// user.welcomeMessage()

// console.log(this)


// In Browser JS Engine, the Global object → "Window" (** IMP IQ **)


/* function kbc() {
    let username = "Rahul"
    console.log(this.username) //undefined  
}

kbc() */

/* const chaiPeCharcha = function() {
    let username = "Rahul"
    console.log(this.username) //indefined
}

chaiPeCharcha() */

// Arrow function

let chaiPeCharcha = () => {
    let username = "Rahul"
    // console.log(this.username)
    console.log(this)  // {}
}

chaiPeCharcha()