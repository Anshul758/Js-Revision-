function giveMessage (username) {
    if(!username){
        return "No user found"
    }
    return `${username} just logged in`;
}

console.log(giveMessage(""));

//rest operator in functions
//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, 
// providing a way to represent variadic functions in JavaScript.

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
}
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10
  