// Data Types
let name = " Emma" // String
let age = 25 // Numbers
let z = null // Null
let y = undefined // Undefined
let isMarriage = false // Boolean

// Arrays
let favColor = ['white', 'lightblue', 'coral', 'seagreen', 'gray', 'slateblue']

console.log(age)
console.log(name)
console.log(typeof y)
console.log(typeof isMarriage)

// String Properties
let s = "Hello World"
console.log(s.length)

// String Methods
console.log(s.toUpperCase())
console.log(s.toLowerCase())

// Concatenation
let m = "I am",
    n = " I go to PwC Bootcamp",
    p = " I love to learn javaScript";

console.log(m + name + n + "and" + p)

// String Literals
console.log(`${m}${name}${n}and${p}`)
console.log(`My name is ${name} and I am ${age}`)

// Logging Output
// alert('Hello World')

// Error
console.error('This is an error')

// Warn
console.warn('This is a warning')

// Arrays and Array Methods
let fruits = ['Apple', 'Banana', 'Orange', 'Pear', 'Lime']
console.log(fruits)

// PUSH()
fruits.push('Strawberry')
console.log(fruits)

// POP()
fruits.pop()
console.log(fruits)

// SHIFT()
fruits.shift()
console.log(fruits)

// Add Value
fruits[4] = 'Mango'
console.log(fruits)

// Object Literals
const person = {
    name: "Emma",
    age: 25,
    hobbies: ['music', 'movies', 'sports'],
    height: 6.5,
    weight: 80,
    isMarried: false,
    greeting: function() {
        console.log("Hello")
    } 
}

// Accessing Object Properties & Methods
person.greeting()


