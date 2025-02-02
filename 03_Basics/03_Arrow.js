const user = {
    username: "anshul",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "haltman"
// user.welcomeMessage()

// console.log(this)

// What is this?
// In JavaScript, the this keyword refers to an object.

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// function chai() {
//     console.log(this);
// }

// chai()

//////// arrow function ////////////

const addTwo = (num1, num2) => { // explicit way to return
    return num1+num2;
}

// we have one more way of this arrow function if we have just one line of logic we can do this way implicit way

const numadd = (num1,num2) => (num1+num2) // dont have to add return keyword 
console.log(numadd(3,3));

// now if i want to return an object using implicit way 
const object1 = () => ({username:"dedsec"}) // we need to wrap object in ()
console.log(object1())
