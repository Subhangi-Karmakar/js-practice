const user={
    name:"Nidhi",
    price:999,
    welcomeMsg: function() {
        console.log(`${this.name}, welcome to the website`)
        console.log(this)
    }
}
/*
user.welcomeMsg()
user.name="Subhu"
user.welcomeMsg()
console.log(this) //this prints {}(empty braces) but if we do the same in browser, it will print a list which is the window object
//browser's global object- window object
*/

function whateve() {
    let name="Nidhi"
    //console.log(this) //prints a list of data
    console.log(this.name) //undefined => we cannot use this inside functions
}
whateve()

const whatever=function() {
    let name="Subhu"
    console.log(this.name)  //undefined again
}
whatever()

// arrow functions
const arrow= () => {
    let name="Nidhi"
    console.log(this) //prints {}
    console.log(this.name) //undefined
}
arrow()

const addTwo=(num1,num2) => {
    return num1+num2 //explicit return
}
console.log(addTwo(2,4))

//implicit return-> no braces, no return (when we have one line arrow function)
const addTwo2=(num1,num2) => num1+num2
console.log(addTwo2(2,4))

//to return object we need {}
const anything=() => ({name:"Nidhi", age:22})
console.log(anything())
