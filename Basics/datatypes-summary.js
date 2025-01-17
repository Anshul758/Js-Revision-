// Primitive data types : Primitive data types are the built-in data types provided by JavaScript. 
// They represent single values and are not mutable. 
// JavaScript supports the following primitive data types:

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(typeof id); // it tell us the type of the anything u want to know

//note : typeof null is a object
console.log(typeof outsideTemp)

// Reference (Non primitive) : Non-primitive data types, also known as reference types, 
// are objects and derived data types. They can store collections of values or more complex entities.

// Array, Objects, Functions

const heros = ["batman", "superman", "doremon"];
let obj = {
    name: "developer",
    age: 23
}

const myFunction = function(){
    console.log("Namaste");
}

console.log(typeof heros) // typeof array is object
console.log(typeof myFunction) // typeof function is function
console.log( typeof obj) // typeof is object


// Note : Javascript is a dynamically typed language because you dont have to specify the data type of a variable when you declare it.



// ++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive), Heap (Non-Primitive)

// stack - whenever you declare a primitive data type it gets stored in stack memory and upon declaring you get a copy of value;

let myName = "Anshul";

let anotherName = myName;
anotherName = "Dedsec";

console.log(myName);
console.log(anotherName)

// as you can see above we assigned another name with my name and upon changing another name value myname value didn't get change
// because primitive data type gets stored in stack memory and when we declared anothername value with myname.
//  value given to anothername was a copy of myname instead of orignal reference

// Heap Memory - whenever we declare a non primitive data type the value of it's gets stored in heap memory 

let userOne = {
    name : "anshul",
    email : "abc@gmail.com"
}

let userTwo = userOne;

userTwo.email = "xyz@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

// as we can see in heap's case when we declared 2nd object giving first obj as value upon changing 2nd obj's email 1st obj's email also got changed
// because in heap memory it gives value as reference so changing one will change other also