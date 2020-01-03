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