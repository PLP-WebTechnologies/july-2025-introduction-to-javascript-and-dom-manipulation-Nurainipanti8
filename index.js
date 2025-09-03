//javascript variables

var name1="Ahmed panti";
console.log(name1)

let number1=30;
let number2=40;
console.log(number1 + number2)


const isSchool=false;
console.log(isSchool)

//DATA TYPES
//primitive types (BASIC BLOCK OF CODE);
//number
let number =20;
console.log(number)
//Boolean
let myName=true;
console.log(myName) 
//String
let name2="panti";
console.log(name2)
//Null 
 let school=null;
 console.log(school) 
 //undefined
 let man=undefined;
 console.log(man)
 //Non - Primitive-Data types
// Object
 let schools={
  name : "zarumai",
  class : "four",
  year: 4
 }
 console.log(schools)
//Array
let fruits=['apples', 'banana', 'mango',]
console.log(fruits)
//Arithmatic Operators 
console.log(20+30)
console.log(10-5)
console.log(20 * 3)
console.log( 80 / 10)
console.log(100 % 10)
console.log(20**2)
//Assignment Operators
console.log(x=10)
console.log(x += 2)
console.log(x-=4)
console.log(x*=4)
console.log(x/=4)
console.log(x %=2)
console.log(x **=10)

//comparison Operator
console.log(10 > 4)
console.log(10<6)
console.log(30 >=10)
console.log(30 <=10)
console.log(30 =='10')
console.log(30==='10')
console.log(30 !=10)
console.log(30 !==10)
//Logic Operators
console.log(30 >=10 && 20 <= 10  )
console.log(30 >=10 ||10 <= 10 )
console.log(30 !=10  || 20 <= 100)
console.log(30 !==10 && 10 != 20)

//MODIFYING WEB CONTENT

function pingMe(){
  let outPut=document.getElementById("outPut");
  outPut.textContent="take me home";
  outPut.style.background="blue";


}
//CONDITIONAL STATEMENT
let userName ="Ahmed";
if (userName ==true){
  console.log("it my world "+ userName)
}else{
  console.log("it wrong userName")
}
//GOALS is how i use pettern selection for logical expression

//FUNCTION 

function add(num1, num2){
  return num1 + num2;
}
console.log(add(10,4))
console.log(add(30,40))
console.log(add(11,8))
console.log(add(100,400))

 //TogleMode CONTENT
//**Goal:** Build reusable blocks of logic that make your code cleaner, smarter, and DRY (Don't Repeat Yourself).

 function  darkTogle(){
 let changes=document.getElementById("changes")
changes.style.backgroundColor="black";
 }

// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!

let fruitzs=['mango', 'cashue', 'orange','pawpaw','banana']

for(let fruitz of fruitzs){
  console.log(fruitzs);
}

//## 🌐 Part 4: Mastering the DOM with JavaScript

let list=document.getElementById("list");
let addButton=document.getElementById("add");
addButton.addEventListener("click", ()=> {
  
  let newList=document.createElement("li");
 newList.textContent = "am a legendary";
list.appendChild(newList);
})