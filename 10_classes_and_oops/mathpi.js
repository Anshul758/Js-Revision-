const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);


const chai = {
    name: "coffee",
    price: 250,
    isAvailable: true,

    orderChai: function () {
        console.log("chai hai");
    }   
};

console.log(Object.getOwnPropertyDescriptor(chai,"price"));

Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: false
});

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
    
}