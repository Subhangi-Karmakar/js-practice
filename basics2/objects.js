// singleton - using constructor any other way ie using literals(no singleton)

const mySym=Symbol("key1")

// object literals
const user={
    name:"Nidhi",
    "full name":"nidhi karmakar",
    [mySym]:"mykey1", //using symbols in object
    age:22,
    location:"Bhubaneswar",
    email:"nidhi22@gmail.com",
    isLoggedIn:false,
    lastLoggedIn:["Monday","Saturday"]
}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySym])

user.email="nidhi2202@gmail.com"
// Object.freeze(user) //doesn't allow any changes in the object
// user.name="Subhangi"
// console.log(user.name)

user.greeting= function() {
    console.log("Hello User")
}

user.greetingTwo= function() {
    console.log(`Hello ${this.name}`)
}

//console.log(user.greeting)
console.log(user.greeting())
console.log(user.greetingTwo())