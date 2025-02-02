// Immediately Invoked Function Expressions (IIFE)
// runs as soon as its defined

(function chai() { // named IIFE
    console.log(`DB CONNECTED`);
})(); // to make this code end we put ; explicitly

((name)=>{ // un-named IIFe
    console.log(`Hii ${name} connected`)
})('anshul')

// sometimes due to global scope it causes pollution so we use iife to remove it

// Avoiding polluting the global namespace by creating a new scope.
// Creating a new async context to use await in a non-async context.
// Computing values with complex logic, such as using multiple statements as a single expression.