var c=300

let a=200
if(true) {
    let a=10
    const b=20
    var c=30
    console.log(a)
}

// console.log(a)
// console.log(b)
console.log(c)

/*
inside {} -> block scope
outside -> global scope
*/

console.log(a)

function one() {
    const name="Nidhi"

    function two() {
        const website="youtube"
        console.log(website)
        console.log(name) //this is called closure-inside block can access the variables of outside block
    }
    // console.log(website) //error, website-> local scope
    two()
}
one()

// interesting
function addOne(num) {
    return num+1
}
console.log(addOne(5))


const addTwo=function(num) { // sometimes also called as expression
    return num+2
}
console.log(addTwo(5))

/*
console.log(addOne(5))  // this won't show any erorr -> hoisting
function addOne(num) {
    return num+1
}


console.log(addTwo(5))  // this shows error
const addTwo=function(num) { 
    return num+2
}
*/
