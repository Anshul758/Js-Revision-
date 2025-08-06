const promiseOne = new Promise((resolve,reject)=>{
    //do an async task
    // Db calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complete');
        resolve();
    }, 1000);
});

promiseOne.then(()=>{
    console.log("promise consumed");
})

// other way to write the same 

new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("promise 2 executed");
        resolve();
    }, 1000);
}).then(()=>{
    console.log("promise2 consumed");
});


// 3rd promise passing data in resolve

const promise3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({username:"chai", email:"chai@example.com"});
    }, 1000);
});

promise3.then((user)=>{
    // console.log(user);
});


// 4th promise

const promise4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username:"chai", email:"chai@example.com"});
        } else {
            reject('ERROR: Something went wrong.')
        }
    }, 1000);
});

promise4.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("promise is either rejected or resolved"));

// promise 5

const promiseFive = new Promise((resolve,reject)=>{
     setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username:"chai", password:"123"});
        } else {
            reject('ERROR: JS went wrong.')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive;
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();