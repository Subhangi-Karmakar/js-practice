// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for(let i=0; i<10; i++) {
//     console.log(i)
// }

//command+d=>multiple cursors
//command+shift+down=>copy down code


// Array specific loops
// for of loop
const arr=[1,2,3,4,5]
for(const i of arr) {
    console.log(i)
}

const greetings="hello world"
for(const greet of greetings) {
    console.log(greet)
}

// Maps ->unique values
const map=new Map()
map.set('IN',"India")
map.set("USA","America")
map.set("FR","France")
console.log(map)

for(const key of map) {
    console.log(key)
}
for(const [key,value] of map) {
    console.log(key+":"+value)
}

// Objects
const myObj={
    game1:"Roblox",
    game2:"Bgmi"
}
// objects can not be iterated using for of loop
// for(const key of myObj) {
//     console.log(key)
// }

// for in loop
for(const key in myObj) {
    console.log(key)
}
for(const key in myObj) {
    console.log(myObj[key])
}

for(const i in arr) {
    console.log(i)  //prints array keys ie index of array
}
for(const i in arr) {
    console.log(arr[i])
}
// map is not iterable so we can not use for in loop in map

// for each loop
const coding=["java", "js", "cpp", "python", "ruby"]
coding.forEach(function(item) {
    console.log(item)
})
/*
coding.forEach((val)=> {
    console.log(val)
})

function printMe(item) {
    console.log(item)
}
coding.forEach(printMe)
*/

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr)
})

// array of objects
const myCoding=[
    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]

myCoding.forEach((item)=> {
    console.log(item.langName)
    console.log(item.langFileName)
})