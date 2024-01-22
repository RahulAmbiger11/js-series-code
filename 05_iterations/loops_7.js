// reduce() in JS → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

let myNums = [1, 2, 3]

let my_Total2 = myNums.reduce(function (acc, currval){
    console.log(`The acc: ${acc} and  currval: ${currval}`)
    return acc + currval
}, 0)

console.log(my_Total2);

let initVal = 0

let my_Total = myNums.reduce(
    (acc, currval) => acc + currval,
    initVal)


// console.log(my_Total)


let shoppingCart =
    [
        {
            CourseName: "JS",
            CoursePrice: 999

        },

        {
            CourseName: "Java",
            CoursePrice: 10999

        },

        {
            CourseName: "Python",
            CoursePrice: 7781
        },
    ]


let TotalBillToPay = shoppingCart.reduce((acc, item) => acc + item.CoursePrice, 0)

console.log(TotalBillToPay)