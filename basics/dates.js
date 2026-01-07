let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)

let myCreatedDate=new Date(2026,0,7) //yyyy,mm,dd (month starts from 0)
console.log(myCreatedDate.toDateString()) //Wed Jan 07 2026

let myCreatedDate1=new Date(2026,0,7,12,30)
console.log(myCreatedDate1.toLocaleString())

//format: new Date(year, month, day, hours, minutes, seconds, milliseconds)

let myCreatedDate2=new Date("2026-01-07")
console.log(myCreatedDate2.toLocaleString())

let myTimeStamp=Date.now()
console.log(myTimeStamp) //this is in milliseconds
console.log(myCreatedDate.getTime()) //this is in milliseconds

console.log(Math.floor(Date.now()/1000)) //time in seconds

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

newDate.toLocaleDateString('default', {
    weekday:"long"
})