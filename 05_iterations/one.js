// for loop
let array = [1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    //console.log(element)
}

// continue and break

for (let i = 0; i < array.length; i++) {
    if(array[i]==3) {
        console.log(array[i])
        break;
    }
}