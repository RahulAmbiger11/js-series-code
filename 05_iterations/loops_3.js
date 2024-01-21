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

const myCoding = [
    {
        langaugeName: "Javascript",
        langaugeFileName: "js"
    },
    {
        langaugeName: "Java",
        langaugeFileName: "java"
    },
    {
        langaugeName: "Python",
        langaugeFileName: "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.langaugeName)
})
