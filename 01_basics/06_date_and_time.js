// Date

let  myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString)
// console.log(myDate.toLocaleDateString)
// console.log(typeof myDate)

// let myCreateDate = new Date(2025, 3, 25, 5, 3)
// let myCreateDate = new Date("2025-01-21")
let myCreateDate = new Date("01-2-2025")


// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));