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

