const myHeros = ["Thor", "Spiderman", "Ironman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// myHeros.push(dcHeros); // push pushes in the existing array
// console.log(myHeros);

// const allHeros = myHeros.concat(dcHeros); // concat return a new array my concating the 2 array in one
// console.log(allHeros)

// another method of combining two or more array together using. we can combine multiple array in single go which is not possible in concat 
// spread operator

const allNewHeros = [...myHeros, ...dcHeros];
console.log(allNewHeros)

const anotherArr = [1,2,4,[3,5,6],7,[8,9,[10,11]]]
// so in above array we have a weird array initialization like array inside array n all
// so to make it in single 1d array we have a funciton flat

const realArr = anotherArr.flat(Infinity); // value inside flat is how much depth we need to flat
console.log(realArr)

// Array.of and Array.from is used to convert anything in arrays

console.log(Array.from("Anshul"));
console.log(Array.of(10,20));