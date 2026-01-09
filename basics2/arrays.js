const myArr=[0,1,2,3,4,5]
//in js array-copy operation creates shallow copy ie it is a copy that share the same references

const myHeros=["IronMan", "SpiderMan", "Thor", "Loki"]

const myArr2=new Array(1,2,3,4,5)
console.log(myArr2[1])

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) //time consuming since we need to shift all the elements present in the array
console.log(myArr)
myArr.shift()
console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)

console.log("A: ", myArr)
const myn1=myArr.slice(1,3)
console.log(myn1)
console.log("B: ", myArr)
/*
A:  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2 ] //last index is not included
B:  [ 0, 1, 2, 3, 4, 5 ] //original array remains same
*/

console.log("A: ", myArr)
const myn2=myArr.splice(1,3)
console.log(myn2)
console.log("B: ", myArr)
/*
A:  [ 0, 1, 2, 3, 4, 5 ]
[ 1, 2, 3 ] //last index is included
B:  [ 0, 4, 5 ] //elements are removed from the original array
*/