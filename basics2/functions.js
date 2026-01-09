// function add(num1, num2) {
//     console.log(num1+num2)
// }

function add(num1, num2) {
    // let result=num1+num2
    // return result

    return num1+num2
}

const result=add(2,4)
console.log("Result: ",result)

//default value
//function loginMessage(username="User") {
function loginMessage(username) {
    // if(username===undefined) {
    if(!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginMessage("Nidhi"))
// console.log(loginMessage()) //if no value is passed then output is undefined

// when we do not know the number of parameters- rest operators
function calculateCartPrice(...num1) {
    return num1
}

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1 //[ 500, 600 ] val1=200, val2=400
// }

console.log(calculateCartPrice(200,400,500,600))

// pass objects in funtion
const user={
    name:"Nidhi",
    age:22
}
function handleObject(anyObj) {
    console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`)
}
//handleObject(user)
handleObject({
    name:"Subhu",
    age:22
})