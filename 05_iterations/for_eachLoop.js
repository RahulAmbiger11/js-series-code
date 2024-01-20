// for-each loop in JS

let arr = ["pyhton", "Java", "JS", "CPP", "C"]

arr.forEach(function (val) {
    console.log(val)
})

arr.forEach((item) => {
    console.log(item)
})


function printMe(item) {
    console.log(item)
}

arr.forEach(printMe)



arr.forEach((item, index, arr) => {
    console.log(item, index, arr)
})