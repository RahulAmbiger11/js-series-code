const FbUser = new Object()  //singleton object
console.log(FbUser)

const InstaUser = {} //non singleton object

InstaUser.id = 1
InstaUser.name = "Rock"
InstaUser.isLoggedIn = false

console.log(InstaUser)

const otherUser = {
    email:"someone@gmail.com",
    fullname:{
        userFullname:{
            f_name: "Rahul",
            l_name: "A"
        }
    }
}

console.log(otherUser)
console.log(otherUser.fullname.userFullname.f_name)

//combining or merging of arrays
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj5 = {5: "e", 6: "f"}

const obj3 = {obj1, obj2}
console.log(obj3) //→ obj within obj 

// {} → optional and using "Object.assign()" → recommended approach
const obj4 = Object.assign({}, obj1, obj2, obj5)
console.log(obj4)

//spread operator → "..." (most recommended approach)
const obj6 = {...obj1, ...obj2, ...obj5}
console.log(obj6)

const user =  [
    {
        id: 1,
        email: "r@gamil.com"
    },

    {

    },

    {

    }
]

console.log(user[0].email)

console.log(InstaUser)
console.log(Object.keys(InstaUser)) // array of objects
console.log(Object.values(InstaUser)) // array of values
console.log(Object.entries(InstaUser)) // array of entries


//To know wether object has particular property
console.log(InstaUser.hasOwnProperty('isLoggedIn')) 



//--------------- Destructuring of objects --------------------------
const course = {
    c_name: "JS",
    c_price: 999,
    c_instructor: "rahul"
}

const {c_instructor: Instructor, c_price} = course
console.log(Instructor)
console.log(c_price) 

// ---------------- JSON API --------------------------------

/* {
    "id": "JS_01",
    "name" : "JS in Hindi",
    "price" : "free"
} */


/* [
    {

    },

    {

    },

    {

    }
] */