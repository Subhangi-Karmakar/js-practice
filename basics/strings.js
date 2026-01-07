const name="Nidhi"
const age=22
// console.log(name+age)

// yse backticks
console.log(`Hello my name is ${name} and my age is ${age}`)

// another way to declare string- using this way we get accessed to a number of methods
/*const gameName=new String("Nidhi2202")
console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase()) //original value is not changed
console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))*/

const newName=new String("Nidhi-Karmakar")
const newString=newName.substring(0,5)
console.log(newString)
const anotherString=newName.slice(-8,-3) //negative values are allowed ie it counts from back
console.log(anotherString)