// map() 

/* const newNums = [1,2,3,4,5,6,7,8,9,10]

const der_nums = newNums.map((num) => 
{
   return num + 10
})
console.log(der_nums)

 */
//Chaining in JS

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let obt_Nums = myNums
   .map((num) => num * 10)
   .map((num) => num + 1)
   .filter((num) => num >= 40)


console.log(obt_Nums)