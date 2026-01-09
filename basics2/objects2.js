// const user=new Object()  //singleton object
const user={}  //not a singleton object

user.id=401
user.name="Nidhi"
user.loggedIn=false
//console.log(user)

const anotherUser={ 
    email:"subhu22@gmail.com",
    fullname: {
        firstname:"Subhangi",
        lastname:"Karmakar"
    }
}
// console.log(anotherUser)
// console.log(anotherUser.fullname)
// console.log(anotherUser.fullname.firstname)

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d", 5:"e"}
const obj3={6:"f", 7:"g"}
/*
// combining object
//const obj4=Object.assign(obj1, obj2) 
// 1st parameter is the target rest all are source, if we do not use {}, the other object value will be copied in the first parameter object
const obj5=Object.assign({}, obj1, obj2, obj3) // good practice
//console.log(obj4)
console.log(obj1)
console.log(obj5) */

// most commonly used- spread operator
const obj4={...obj1, ...obj2}
//console.log(obj4)

// arrays of object
const users=[
    {
        id: 401,
        name: "Nidhi"
    },
    {
        id: 402,
        name: "Subhu"
    }
]

/*
console.log(users[0].name)
console.log(Object.keys(user)) //array os keys
console.log(Object.values(user)) //array of values
console.log(Object.entries(user)) //return array of array, key-value pairs
console.log(user.hasOwnProperty("loggedIn")) //checks if a key exist in an object
*/

// de-structure of objects
const course= {
    coursename:"Java Script",
    price:"999",
    courseInstructure:"Nitesh"
}

const {courseInstructure}=course
console.log(courseInstructure)

const {courseInstructure:instructure}=course
console.log(instructure)