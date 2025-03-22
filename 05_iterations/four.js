const myNums = [1,2,3];

const initialValue = 0;

// const myTotal = myNums.reduce((acc,curVal)=>{
//     return acc + curVal;
// },initialValue)

// console.log(myTotal);

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