const marvel_heros = ["thor", "ironman", "captain-america"]
const dc_heros = ["superman", "splash", "batman"]

marvel_heros.push(dc_heros)

//here, whole array is considered as individual element & simply adds another array as an individual element

console.log(marvel_heros)
console.log(marvel_heros[3][1]) // splash

//concat() → combines two arrays & returns new array 

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros)

// spread operator (...) & here, all array elements will be spread & consiidered as individual elements

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)


// flat() here depth → no.subarrays present inside org. array
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr = another_arr.flat(3)
console.log(real_arr)

console.log(Array.isArray("Rahul"))
console.log(Array.from("Rahul"))

console.log(Array.from({name:"Rahul"})) // [] →  ** IMP IQ **

//of() → converts individaual varaibles and arrays into a new array
const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3))