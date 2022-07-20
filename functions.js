// Function to add two numbers
function addNum(a, b) {
    return a + b
}

function subtractNum(a, b) {
    return a - b
}

function multiplyNum(a, b) {
    return a * b
}

function divideNum(a, b) {
    return a / b
}


console.log(addNum(3, 2))
console.log(subtractNum(3, 2))
console.log(multiplyNum(3, 2))
console.log(divideNum(3, 2))

// ARROW FUNCTIONS
// Calculate the square of a number
const square = n => n * n;
console.log(square(2))

// Reminder of any number
const numMod = num => num % 2;
console.log(numMod(5))

for (let i = 2; i < 20; i += 2) {
    console.log(`Number is : ${i}`)
}
for (let i = 2; i < 20; i += 3) {
    console.log(`Number is : ${i}`)
}

// Split A String
let someWord = "Adamu"
console.log(someWord.split(''))

// Reverse An Array
let someArray = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(someArray.reverse())

// Convert string to array
function stringToArray(s) {
    return s.split('')
} 

console.log(stringToArray("Hello"))

// Reverse a String
function reverseString(s) {
    return s.split('').reverse().join()
} 
console.log(reverseString("Hello"))

// Palindrome
function isPalindrome(str){
    str.toLowerCase()
    let newStr = str.toLowerCase().split('').reverse().join('')
    if(str === newStr){
        return true
    }
    else {
        return false
    }
}

console.log(isPalindrome("Hello"))

// Convert a String to a Number
let str15 = '15'
console.log(parseInt(str15))
console.log(Number(str15))

// Convert a Number to a String
let num = 15
console.log(num.toString())

// Interger Palindrome
function intPalindrome(num){
    // convert the num to a string
    let numToString = num.toString()
    let reverseString = numToString.split('').reverse().join('')
    let newNum = Number(reverseString)

    if(newNum === num) {
        return true
    }
    else {
        return false
    }
}

console.log(intPalindrome(111))
