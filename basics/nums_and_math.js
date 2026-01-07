/*const score=400
console.log(score)

const balance=new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const decimal1=23.8966
console.log(decimal1.toPrecision(3))
const decimal2=123.8966
console.log(decimal2.toPrecision(3))
console.log(decimal2.toPrecision(4))

const hundreds=1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)*/

// Math
// console.log(Math.abs(-4)) //4
// console.log(Math.round(4.3)) //4
// console.log(Math.round(4.6)) //5
// console.log(Math.ceil(4.2)) //5     //upper/top value 
// console.log(Math.floor(4.9)) //4    //lower/down value 
// console.log(Math.min(4,2,5,1))

console.log(Math.random())
console.log(Math.random()*10) 
console.log((Math.random()*10)+1) //to avoid getting 0.something
console.log(Math.floor((Math.random()*10)+1)) //to remove decimal values
const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1))+min))