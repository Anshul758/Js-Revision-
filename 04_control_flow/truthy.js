const userEmail = "anshul.ai"

// if(userEmail) {
//     console.log("got user email")
// } else {
//     console.log("Dont have user email");
// }

// falsy values 

//false, 0, -0, BigInt 0n, null, undefined, NaN  these all are considered as false values

//truthy values
// "0", 'false', " ", [], {}, function(){}

// how to check empty object and array

const numbers = []

if(numbers.length === 0) {
    console.log("Array is empty");
}

const emptyObject = {}
if(Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 15 // 15
val1 = null ?? 10 ?? 20 // 10

console.log(val1)

// terniary operator
const icePrice = 100;
icePrice <= 80 ? console.log("less than 80") : console.log("MOre")