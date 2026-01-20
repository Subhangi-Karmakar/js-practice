// const email="nidhi@gamil.com"
const email=[]

if(email) {
    console.log("User has email")
} else {
    console.log("User doesn't have email")
}

/* 
falsy value
false, -, -0, BigInt 0n, "", null, undefined, NaN

truthy value
"0", "false", " ", [], {}, function(){}
*/

if(email.length===0) {
    console.log("Array is empty")
}

// to check on objects
// Object.keys(obj) -> converts the object into array
const obj={}
if(Object.keys(obj).length===0) {
    console.log("object is empty")
}
// false==0 is true
// false=='' is true
// 0=='' is also true

// Nullish Coalescing Operator(??): null undefined
let val1
val1=5??10
console.log(val1)
val1=null??10
console.log(val1)
val1=undefined??15
console.log(val1)

// condition ? true : false
const teaPrice=20
teaPrice <= 30 ? console.log("Less than 30") : console.log("More than 30")

