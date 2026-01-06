/*
Divided into two => primitive & non-primitive/reference on the basis of how data can be stored and accessed in the memory

Primitive:
call by value, reference is not provided- a copy of the data is provided
String, Number, Boolean, null, undefined, Symbol, BigInt

Non-Primitive/Reference:
Array, Objects, Functions

JavaScript is a dynamically typed language
-we do not declare variable types
-the type is decided at runtime
-a variable’s type can change while the program runs
*/

const id=Symbol("123")
const id2=Symbol("123")
console.log(id==id2)
console.log(id===id2)

// Arrays
const fruits=["apple", "mango", "orange"]

// Objects
let myObj= {
    name:"Nidhi",
    age:23
}

// Functions
const myFunction= function() {
    console.log("Hello World")
}

console.log(typeof fruits)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof null)


/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/