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

//indexOf(): Takes takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1

//lastIndexOf(): Takes takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38

//concat(): it takes many substrings and creates concatenation.
string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

//startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
string = 'Love is the best to in this world'
console.log(string.startsWith('Love')) // true
console.log(string.startsWith('love')) // false
console.log(string.startsWith('world')) // false

//endsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
console.log(string.endsWith('world')) // true
console.log(string.endsWith('love')) // false
console.log(string.endsWith('in this world')) // true

// search: it takes a substring as an argument and it returns the index of the first match
string = 'I have in love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love')) // 2

//19 match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
//string ='love'
let patternOne=/love/ // with out any flag
let patternTwo=/love/gi // g-means to search in the whole text, i - case insensitive

console.log(string.match('love'))
console.log(string.match(patternTwo))

//Next stract numbers from text using  regular expression.
let txt='In 2019, I run 30 Days of Pyhton. Now, in 2020 I super exited to start this challenge'
//d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers, 
// if there is g after that it means global, search everywhere.
let regEx=/\d+/
let regEx2=/\d+/g
console.log(txt.match(regEx)) // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(regEx2)) //["2019", "30", "2020"]

//repeat(): it takes a number argument and it returned the repeated version of the string.
string='love'
console.log(string.repeat(10))


//Starting with Exercises: String Part
//1.-
let challenge='30 Days Of JavaScript '
//2.-
console.log(challenge)
//3.-
console.log(challenge.length)
//4.-
console.log(challenge.toUpperCase())
//5.-
console.log(challenge.toLowerCase())
//6.-
console.log(challenge.substr(0,2))
//7.-
let sstr=challenge.indexOf('D')
let lastPosition=challenge.length
console.log(challenge.substring(sstr,lastPosition))
//8.-
let regExBecause=/because/gi
string='You cannot end a sentence with because because because is a conjunction'
console.log(string.match(regExBecause))
//9.-
console.log(challenge.includes('Script'))
//10.-
console.log(challenge.split(''))
//11.-
console.log(challenge.split(' '))
//12.-
string='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(','))
//13.-
console.log(challenge.replace('JavaScript','Python'))
//14.-
console.log(challenge.charAt(15))
//15.-
strJ=challenge.indexOf('J')
console.log(strJ)
console.log(challenge.charCodeAt(strJ))
//16.-
console.log(challenge.indexOf())
//17.-
console.log(challenge.lastIndexOf())
//18.-
string='You cannot end a sentence with because because because is a conjunction'
strSearch='because'
console.log(string.indexOf(strSearch))
//19.-
console.log(string.lastIndexOf(strSearch))
//20.-
console.log(string.search(strSearch))
//21.-
console.log(challenge.length)
console.log(challenge.trim())
console.log(challenge.trim().length)
//22.-
console.log(challenge.startsWith('30'))
//23.-
console.log(challenge.endsWith('JavaScript '))
//24
console.log(challenge.match(/a/gi))
//25
console.log(string.match(regExBecause))
//26
str1='30 Days Of '
str2='JavaScript'
console.log (str1.concat(str2))
//27
console.log(challenge.repeat(2))
//28
string='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(string.match(/love/gi))
//29
string='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let regExNumbers=/\d+/gi
let moneyGet=string.match(regExNumbers)
const months=12
let salaryTotal=moneyGet[0] * 12
let annualBonus=moneyGet[1] * 1
let coursesTotal=moneyGet[2]*12
console.log(string)
console.log(`The Total get for Annual Salary (${salaryTotal}), Annual Bonus (${annualBonus}) and courses (${coursesTotal}) is: ${salaryTotal+annualBonus+coursesTotal}`)
//30
const sentence='%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
//cleaned
regExSimbol=/[%*$@#;!?&]/gi
const sentenceCleaned=sentence.replace(regExSimbol,'')
console.log (sentenceCleaned)

//31 The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help to one another.
string='The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help to one another.'
console.log(string)

//32 "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
string='"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."'
console.log(string)

//33
str1='python'
str2='jargon'
strSearch='on'
console.log (`contains \'${strSearch}\' python & jargon: ${str1.search(strSearch)==str2.search(strSearch)}`)

//34
string='I hope this course is not full of jargon'
strSearch='jargon'
console.log (`sentence contains \'${strSearch}\' : ${string.search(strSearch)>0}`)

//35
randNumber1=Math.random()
let randTo100=randNumber1 * 101
console.log(Math.floor(randTo100))

//36
randNumber1=Math.floor(Math.random() * (100 - 50 + 1) ) + 50;
console.log(randNumber1)


//37
randNumber1=Math.random()
randTo100=randNumber1 * 256
console.log(Math.floor(randTo100))

//38
string='JavaScript'
string='AbcdEfghij'
randNumber1=Math.floor(Math.random() * (string.length - 1 ) ) + 1;
console.log(randNumber1)
console.log(string.charAt(randNumber1))
const defaultValue=1
for (let i = 1; i < 6; i++) {
    console.log (`${i}\t${defaultValue}\t${i*defaultValue}\t${i*i}\t${(i*i)*i}`)
};