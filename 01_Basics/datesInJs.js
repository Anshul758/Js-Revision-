// Dates

let myDate = new Date();
console.log(myDate.toDateString()); // gives us output like day month date year (tuesday jan 21 2025)
console.log(myDate.toLocaleString());
console.log(typeof myDate) // it's of type object

// create own date object with inpupt
let createMyDate = new Date(2025, 2, 25, 0, 0);
console.log(createMyDate.toLocaleString());

let newDate = new Date("2025-02-12"); // another way of declaring date
console.log(newDate.toLocaleString());

// time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);

// in projects where we want to compare time we do like this
console.log(createMyDate.getTime()); // it will give us exact time stamp of time and we can use it in comparison in miliseconds n other things
console.log(Math.floor(Date.now()/1000)) // convert in seconds


let newDate1 = new Date();
console.log(newDate1);
console.log(newDate1.getMonth()+1);
console.log(newDate1.getDay());

// toLocaleString methods is very customiable it gives us ability to define full date object how we like
newDate1.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate1.toDateString());