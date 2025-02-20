const fruits = ["apple", "banana", "orange", "mango"]

console.log(typeof fruits)

for(let i=0; i<fruits.length;i++)
    console.log(i, fruits[i]) 
console.log("________________________")
console.log("________________________")


console.log(fruits)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2][1]) // the two are
console.log("orange"[1]) // the same

console.log("melon"[1])

console.log("________________________")

console.log("________________________")
console.log(fruits[3])

console.log(fruits.length)
console.log(fruits[2].length)



console.log("________________________")
console.log("________________________")

console.log(fruits.at[-1]) // the three  
console.log(fruits[fruits.length-1]) // are 
console.log(fruits.reverse()[0]) // the same

const myArr = ["hi",
    123,
    false,
    null,
    undefined,
    {username: "John Doe", email: "john@doe"},
    {name: "iPhone", model: "i10", color: "silver"},
    [2, 4, 6],
]

