let a = 300; //Variables declared Globally (outside any function) have Global Scope.

if(true)
{
    let a = 50; //Variables declared inside a { } block cannot be accessed from outside the block
    const b = 60;
}

function one() {
    const username = "anshul"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website) cant use it here out of scope

    two()
}

one()

//++++++++++++++ interesting ++++++++++++++


console.log(addone(5));
function addone(num) { // in this case i can access this function before declaration
    return num+1;
}

addTwo(5);

const addTwo = function(num) { // in this case i cannot access this function before declaration
    return num+2;
}