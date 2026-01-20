// if
const isUserLoggedIn=true
if(isUserLoggedIn) {
    console.log(2=='2')
    console.log(2==='2') //check for value and type as well
}
// <, >, <=, >=, ==, !=, ===

const temp=41

if(temp<50) {
    console.log("Temp. is less than 50")
} else {
    console.log("Temp. is greater than 50")
}
console.log("Execute")

const balance=1000
// to write multiple lines without braces
// if(balance>500) console.log("test1"), console.log("test2"); //not recommended
if(balance<500) {
    console.log("less than 500")
} else if(balance<750) {
    console.log("less than 750")
} else if(balance<900) {
    console.log("less than 900")
} else {
    console.log("less than 1000")
}
