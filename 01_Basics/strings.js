const name = "anshul";
const repoCount = 50;

//console.log(name + repoCount + " value"); not a good way to use this

//console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); // more modern way it is called string interpolation

// declaring string
const gameName = new String('Anshul-sh')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toLocaleUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,4);
console.log(newString)

const slicedString = gameName.slice(-6,-3);
console.log(slicedString)