const myNums = [1,2,3];

const initialValue = 0;

// const myTotal = myNums.reduce((acc,curVal)=>{
//     return acc + curVal;
// },initialValue)

// console.log(myTotal);

//The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer 
// across all elements of the array is a single value.

//The first time that the callback is run there is no "return value of the previous calculation". 
// If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial 
// value and iteration starts from the next element (index 1 instead of index 0).

const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "java course",
        price: 3999
    },
    {
        itemName: "py course",
        price: 4999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item)=> acc + item.price, 0);
console.log(priceToPay)