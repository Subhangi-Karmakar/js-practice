const marvel=["Thor", "IronMan", "SpiderMan"]
const dc=["SuperMan", "AquaMan", "BatMan"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

const allHeros=marvel.concat(dc)
console.log(allHeros)
//using spread operator
const allHeroes = [...marvel, ...dc]
console.log(allHeroes)

const newArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const flatNewArr=newArr.flat(Infinity)
console.log(flatNewArr)


console.log(Array.isArray("Nidhi"))
console.log(Array.from("Nidhi"))
console.log(Array.from({name:"Nidhi"})) //we will need to spicify how w need to make the array ie from keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
