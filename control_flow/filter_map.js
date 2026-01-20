// const coding=["js", "ruby", "java", "python", "cpp"]

// coding.forEach((item)=> {

// })

const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((num)=> num>5)
console.log(newNums)
//or
const newNums2=myNums.filter((num)=> {
    return num>5
})
console.log(newNums2)

// using for each
const newNums3=[]
myNums.forEach((num)=> {
    if(num>5) {
        newNums3.push(num)
    }
})
console.log(newNums3)

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: "2004" },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: "2008" },
    { title: "Book Three", genre: "History", publish: 1978, edition: "2001" },
    { title: "Book Four", genre: "Science", publish: 2005, edition: "2015" },
    { title: "Book Five", genre: "Fantasy", publish: 1999, edition: "2012" },
    { title: "Book Six", genre: "Biography", publish: 1988, edition: "2009" },
    { title: "Book Seven", genre: "History", publish: 2003, edition: "2018" },
    { title: "Book Eight", genre: "Science", publish: 2010, edition: "2020" },
    { title: "Book Nine", genre: "Fiction", publish: 2016, edition: "2022" },
    { title: "Book Ten", genre: "Non-Fiction", publish: 1965, edition: "1995" }
]

const userBooks=books.filter((book) => book.genre==="History")
console.log(userBooks)

const userBooks2=books.filter((book)=> book.publish>=2000)
console.log(userBooks2)

const userBooks3=books.filter((book)=> {
    return book.publish>=2000 && book.genre==="History"
})
console.log(userBooks3)
