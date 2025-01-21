console.log("2" > 1);
console.log("02" > 1);

// note 
// the reason is that an equality check == and comparisions > < >= <= works differently.
// Comparisions convert null to a number, treating it as a 0. That's why null >= 0 is true and null > 0 is false;

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict check ===
// it checks first if the data type should be equal of both comparing values

console.log("2"===2); // it will give false