// Singleton
// Object.create

// Object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Anshul",
    "full-Name": "Anshul Sharma",
    age : 20,
    location: "Delhi",
    email: "xyz@gmail.com",
    [mySym]: "myKey1"   // to use symbol as a key in object we need to keep it in square bracket
}

console.log(JsUser.location); // one way to getting value out of object
console.log(JsUser["email"]); // another way if we declare object key like "fullName": "value" we cant access using . then we can use this way
console.log(JsUser["full-Name"]);
console.log(JsUser[mySym])

// Object.freeze(JsUser); // after using object.freeze no changes will occur if we change any value of object it will remain unchanged
// JsUser.age = 22

// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello user");
}
JsUser.greetingsTwo = function() {
    console.log(`hello user ${this.name}`)
};

JsUser.car = "BMW";

console.log(JsUser.greeting());
console.log(JsUser.greetingsTwo())
console.log(JsUser)
