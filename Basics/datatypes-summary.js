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