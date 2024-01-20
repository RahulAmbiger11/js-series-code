//Loops in JS
// for

/* for(let i=0; i < 10; i++) {
    const elem = i;
    if(elem == 5) {
        console.log("5 is best number")
    }

    console.log(elem)
} */


/* for(let i = 1; i <= 10; i++) {
    console.log(`value of i is : ${i}`)
    for(let j = 1; j <= 10; j++) {
        // console.log(`value of j is : ${j} and value of i is: ${i}`)
        console.log(i + '*' + j + ' = ' +  (i*j))
    }
} */


let myArr = ["flash", "Batman", "Superman"]
// console.log(myArr.length)

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index]
    // console.log(element)
    
}

// always in arrays → array.length -1 = index


/* Keywords in JS 
break and continue
*/

for (let index = 1; index <= 20; index++) {
    // break → terminates all other iterations
    if(index == 5) {
        console.log("Detcted 5")
        break
    }
    console.log(`value of i is: ${index}`)
    
}


for (let index = 1; index <= 20; index++) {
    // continue → skips particular iteration
    if(index == 5) {
        console.log("Detcted 5")
        continue
    }
    console.log(`value of i is: ${index}`)
    
}