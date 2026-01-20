const myNums=[1,2,3,4,5,6,7,8,9,10]

const newNum=myNums.map((num)=>num+10)
console.log(newNum)

// chaining
const newNum2=myNums
                    .map((num) => num*10)
                    .map((num) => num+1)
                    .filter((num) => num>=40)
console.log(newNum2)

// reduce
const num=[1,2,3,4]
const total=num.reduce(function(acc, curr) {
    console.log(`acc:${acc}, curr:${curr}`)
    return acc+curr
},0)
console.log(total)

// using arrow function
const total2=num.reduce((acc,curr) => acc+curr, 0)
console.log(total2)

const shoppingCart=[
    {
        itemName: "JS",
        price: 2999
    },
    {
        itemName: "Python",
        price: 4999
    },
    {
        itemName: "Mobile Dev",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 6999
    }
]

const priceToPay=shoppingCart.reduce((acc,item) => acc+item.price, 0)
console.log(priceToPay)