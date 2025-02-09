const myObject = {
    js: 'javascript',
    cpp: "C++",
    rb: "Ruby"
};

// to iterate over object we have forin
for (const key in myObject) {
    console.log(key,myObject[key])
}

