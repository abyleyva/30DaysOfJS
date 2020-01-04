//Starting Day Two of 30DoJS
//Primitive Data Types
let numOne=3
let numTwo=3
let js='JavaScript'
let py='Python'
let lightOn=true
let lightOff=false

//Non-primitive Data Types
let nums=[1,2,3]
let num=[1,2,3]
let userOne={
    name:'Aby',
    role:'Student',
    country:'Mexico',
}
let userTwo={
    name:'Aby',
    role:'Student',
    country:'Mexico',
}

//Declaring number Data Types
age=45 //age is already declared in file variable.js 
//const gravity=9.81 //Const use for non-changing value like Gravity earth never change for Now :-D
let mass=80 //use let when value might change
//const PI=3.1416

console.log(numOne==numTwo)
console.log(js==py)
console.log(lightOn==lightOff)

//non-primitive data types are not strictly equal.
num=nums;
console.log(num==nums)
userOne=userTwo;
console.log(userOne==userTwo)

console.log(age,gravity,mass,PI)

//Working with Math Object
console.log(PI) //Result: 3.141592653589793
console.log(Math.round(PI)) //Round values to the nearest number // 3
console.log(Math.round(9.81)) //Rounded to 10
console.log(Math.floor(PI)) //Rounding down // 3
console.log(Math.ceil(PI)) //Rounding UP //4
console.log(Math.min(-5,3,20,4,5,19)) //Returns the mimimunt value of a collections //-5
console.log(Math.max(-5,3,20,4,5,19)) //Returns the maximun value of a collections //20

const randNumber=Math.random() //Create a random number between 0 to 0.999999
console.log(randNumber)

//If you need create a random number between 1 to 10, you can use
//const numToTeen=Math.ceil(Math.random() * 10)
//Else If you need create a random number between 0 to 10, you can use
const numToTeen=Math.floor(Math.random() * 11)

console.log(numToTeen)

//Absolute value
console.log(Math.abs(-10)) //return positive values //10

//square root
console.log(Math.sqrt(100)) //result 10
console.log(Math.sqrt(2)) //result 1.4142135623730951

//power
console.log(Math.pow(3,2)) //Result 9
console.log(Math.E) //Result 2.718

//Strings: Concatenation
let space= ' '
let fullName= firstName + space +  lastName
console.log(fullName)

let personInfoGeneral= fullName + '. I am ' + age + ' year old. I´m from ' + city + ',' + country

console.log(personInfoGeneral)

//Working string literals
//the data enclose the expression with curly bracket like {} followed by $ sign.
//example
let a=5
let b=2
console.log(` ${a} + ${b} is equal to ${a + b}`)
personInfoGeneral= `Expression with literals is: ${fullName}. I am  ${age}  year old. I´m from  ${city} , ${country}`
console.log(personInfoGeneral)

//Boolen result
console.log(` ${a} is greater then ${b} : ${a > b}`)

//Long listeral strings
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."
console.log(paragraph)

//scape sequences in string
console.log('I hope every one is enjoying the 30 Days Of JavaScript challenge. \n Do you ?')

console.log('Days \t Topics \ Exercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('this is a back slash symbol (\\)')
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'") 
console.log('The saying \'Seeing is Believing\' is\'t correct in 2020') 

//strings Methods

//length
console.log(js.length)
console.log(fullName.length)

//access to different characters in 'Javascript' string
let string='Javascript'
let firstLetter=string[0]
let secondLetter=string[1]
let thirdLetter=string[2]
let lastLetter=string[9]
console.log(firstLetter)
console.log(lastLetter)
let lastIndex=string.length-1
console.log(lastIndex)
console.log(string[lastIndex])

//ToUppercase
console.log(string.toUpperCase())

//ToLowerCase
console.log(string.toLowerCase())

//substr: It takes two arguments,the starting index and number of characters to slice.
//vasc
console.log(string.substr(2,4))

//substring(): It takes two arguments,the starting index and the stopping index but it doesn't include the stopping index
//va
console.log(string.substring(2,4))

//split(): splits a string at a specified place.
string='30 Days Of Javascript'
console.log(string.split())
console.log(string.split(' '))
console.log(firstName.split(''))

//trim(): Removes trailing space in the beginning or the end of a string.

string= '   30 Days Of JavaScript   '
console.log(string)
console.log(string.trim())

//Include():It checks if a substring exist in a string. returns true if it exists and false if it doesn't exist.
string = '30 Days Of JavaScript'
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false
console.log(string.includes('Script'))     // true
console.log(string.includes('script'))     // false
console.log(string.includes('java'))     // false
console.log(string.includes('Java'))     // true

//replace(): replace a old substring for new substring
console.log(string.replace('JavaScript', 'Python'))

//charAt(): Takes index and it returns the value at that index
console.log(string.charAt(0))
lastIndex = string.length - 1
console.log(string.charAt(lastIndex))

//charCodeAt(): Takes index and it returns the value at that index
console.log(string.charCodeAt(0))
lastIndex = string.length - 1
console.log(string.charCodeAt(lastIndex))

