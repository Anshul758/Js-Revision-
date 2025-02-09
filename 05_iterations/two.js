// for of

["", "", ""]
[{}, {}, {}]

const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num)
// }

// maps

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");

console.log(map);

// we can use this forof for map only not applicable on object
for(const [key,val] of map) { // here we destructured our map using [] this
    console.log(key,":-", val);
    
}