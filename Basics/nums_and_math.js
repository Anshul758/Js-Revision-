const balance = 400;
// console.log(balance);

const score = new Number(100); // this is how we can explicitly declare a type variable
// console.log(score)

// console.log(score.toString());
// console.log(score.toFixed(1));

const otherNumber = 123.889;

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// +++++ Maths +++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // makes negative value into positive
// console.log(Math.round(4.4)); 

// random function

console.log(Math.random());

// math.random will give value between values 0 and 1 and doing multiplication with 10 so we can avoid 0 case
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

// math.random will give value between values 0 and 1 and doing multiplication with value so we can get result in range and added min
// so atleast we get min value

console.log(Math.floor(Math.random()*(max - min + 1)) + min);