// If

const score = 200;

if(score > 100) {
    const power = "fly";
    console.log(`User Power ${power}`);
}

// switch

const month = "march";

switch (month) {
    case 1: console.log("January");
    break;

    case 2: console.log("Feb");
    break;

    case 3: console.log("March");
    break;

    case 4: console.log("April");
    break;

    default: console.log("Invalid")
    break;
}

// in switch if we dont use break after each case it will automatically execute all the cases after the matched one expect the 
// default case. default doesn't get executed

