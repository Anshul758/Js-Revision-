//const tinderUser = new Object(); // this is a singleton object 
const tinderUser = {} // this is a non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// we can have nested objects as well

const regularUser = {
    email: "xyz@email.com",
    fullName: {
        userFullName: {
            firstName: "Anshul",
            lastName: "Sharma"
        }
    } 
}
//console.log(regularUser.fullName.userFullName)

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// add these both objects in one

//const obj3 = {obj1, obj2}; // this will append something like this 
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// to get correct appending we have assign

//const obj3 = Object.assign({}, obj1, obj2); // {} is a optional paramter

// but most effective way to combine object or array is through spread operator so
const obj3 = {...obj1, ...obj2};

//console.log(obj3);

console.log(Object.keys(tinderUser)); // this will fetch us all the keys of the object in an array format
console.log(Object.values(tinderUser)); // similarly this will fetch us all the value of the keys from the object in an array format
console.log(Object.entries(tinderUser)); // this will make a pair of key n value in array of array
// like this [ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]


// if we want to check if obect has that key 
console.log(Object.hasOwnProperty('check')) // true or false it return us


// destructuring in objects

const course = {
    courseName: "100x dev",
    price: "5999",
    courseInstructor: "Anshul"
}

const {courseInstructor: check} = course; // using this we dont have to again n again write course.courseInstructor 
// to fetch the value we can just use this directly {courseInstructor: xyz} we can give a name by our choice also
console.log(check)

// json
// {
//     "name": "anshul",
//     "courseName": "testing"
// };

