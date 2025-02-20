"hello" //string
453 //number
true // boolean
undefined //undefined
null //null

//symbol
//bigint

console.log("hello"[0])

const txt = "good morning"
const num = 45

console.log(txt[3])

const user = {
    id: 675,
    username: "John Doe", 
    email: "john@example.org",
    age: 44,
    cart: null,
    hobbies: ["reading", "music", "swiming"],
    verified: true, 
    birthDate: "12.12.2212",
    greet: function (){
        return `Welcome ${this.username} to your homepage`
    }, 
    address: {
        city: "Berlin",
        street: "Hauptstr",
        number: 55,
        zip: 123435,
    }
}

console.log(typeof(user))
console.log(typeof(user.null))
console.log(typeof(user.greet))


console.log(user.greet())

console.log(user.age)
console.log(user.address)
console.log(user.hobbies)
console.log(user["hobbies"])

// selecting the city where the user is living
console.log(user.address.city)

console.log("______________________")

if(user.verified){
    // console.log("Welcome " + user.username)
    // console.log( ` Welcome ${user.age} ` )
    console.log(`Welcome ${user.username}`)
}

console.log(user)

// Editing a property:

user.username = "Jane"

console.log(user)

// Adding a property:

user.password = "123456"

console.log(" after a new property 'password' has been added: ", user)

// Deleting a property:

delete(user.age)

console.log(" after property 'age' is deleted: ", user)
