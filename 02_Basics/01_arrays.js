// array

// in js we can have array holds multiple different data types value like [number, string, object, boolean] like this mix type

const myArray = [0,1,2,3,4,5];

// array methods
// myArray.push(7);
// myArray.pop(); // deletes the last element of the array
// myArray.unshift(9) // it adds the element in the front of the array at 0th index and shift every other element by +1
// console.log(myArray);

// myArray.shift(); // it removes the 0th index element vice versa of pop
// console.log(myArray);

const newArr = myArray.join() // Adds all the elements of an array into a string, separated by the specified separator string.
console.log(newArr);

// slice and splice method

console.log("A", myArray);

const newArray1 = myArray.slice(1,3);
console.log(newArray1);
console.log("B", myArray);

const newArray2 = myArray.splice(1,3);
console.log(newArray2);
console.log("c", myArray);

// so main difference between slice and splice is 
// slice returns a piece of the array but it doesn't affect the original array. 
// splice changes the original array by removing, replacing, or adding values and returns the affected values


