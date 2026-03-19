/* Synchronus - 
                means code runs in a particular sequence of instruction given in the program
                Each instruction waits for the previous instruction to complete its execution*/



/*Asynchronus-
                sometimes some imp instruction gets block bcoz of synchronus execution where 
                one execution blocks bcoz previous execution takes time which cause delay in UI
                asynchronus allows us to execute the instruction even though the previopus 
                instruction is not completed*/
// *********************************************************** //

/*>>>> async await   => asynch function always returns a promise
                    => await pauses the execution of surrounding async function until the promise is settled
        //async function myFun(){.....}
*/



/*
function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            resolve(200);
        }, 3000)
    })
}
async function getWeatherData(){
    await api()   //1st call 
    await api()   //2nd call  // 2nd call waits for the 1st call to complete the execution
}   
*/



/*
async function getData(id){
    return new Promise ((resolve, reject)=>{
            setTimeout(() => {
                console.log("Data", id);
                resolve('Success'); 
            }, 3000);    
    })
}

async function allData(){
    console.log("fetching data 1....");
    await getData(1);
    console.log("fetching data 2....");
    await getData(2);
    console.log("fetching data 3....");
    await getData(3);
    console.log("All Data fetched successfully");
}

allData();
/*





// *********************************************************** //

//>>>> Promises - promise is for 'eventual' completion of task

//   let promise = new Promise((resolve, reject)=>{.....})

// promise is an object in the JS & have 3 states (pending, fulfilled, rejected)
// resolve and reject are two handlers in promise


// let promise = new Promise((resolve, reject)=>{
//     console.log("Im a promise");
//     //resolve("Success")
//     reject("some error occured")
// })


/*
function getData(dataId, getNextdata){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("data", dataId)
        resolve("success");
        //here we check once data 1 is run then only data 2 should run
        if(getNextdata){
            getNextdata()
        }
        else{
            console.log("No next data available");
            
        }
        
    }, 2000)
    })
    }
*/




/*
//>>>>>>>>> .then() & .catch()
//promise.then((res)=>{.....})
//promise.catch((err)=>{.....})

const getPromise = ()=>{
  return  new Promise((resolve, reject)=>{
        console.log("I am a promise");
        resolve("success");
        //reject("network error");
    });
    
};

let promise = getPromise();
//then will run only when promise is fullfilled
//also it has parameter "res" which takes the value in the promise
promise.then((res)=>{
    console.log("promise fullfilled", res);
    
});

//catch will run when promise is rejected
//also it has parameter "err" which takes the value in the promise
promise.catch((err)=>{
    console.log("error", err);
    
})

*/






/*
//>>>>>>>>> promise chaining

function asyncFun1(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data1");
            resolve("success 1");
        }, 4000);
    })
}
function asyncFun2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data2");
            resolve("success 2");
        }, 4000);
    })
}
*/


/*
/// way 1 with p1 object- here we are doing promise chaining once 1 promise is return then will start executing another function
console.log("fetching data 1......");
let p1 = asyncFun1();
p1.then((res)=>{
    console.log(res); 

    console.log("fetching data 2......");
    let p2 = asyncFun2();
    p2.then((res)=>{
        console.log(res);
        
    })
})
    */


/*
/// way 2- we directly call the function and use then to return the promise

asyncFun1().then((res)=>{
    console.log("fetching data 1...");
    console.log(res);

    asyncFun2().then(()=>{
        console.log("fetching data 2...");
        console.log(res);
    })
})

*/


/*

// >>> here both function returning at the same time

console.log("fetching data 1......");
let p1 = asyncFun1();
p1.then((res)=>{
    console.log(res); 
})
console.log("fetching data 2......");
let p2 = asyncFun2();
p2.then((res)=>{
    console.log(res); 
})
    */








/*
//>>> promsie chaining

function getData(dataId) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Data', dataId);
            resolve('success')
        }, 3000)
    })
}

///way 1-

console.log("fetcing data 1...")
getData(1)
    .then((res)=>{
        console.log("fetcing data 2...")
        return getData(2);
    })
    .then((res)=>{
        console.log("fetcing data 3...")
        return getData(3);
    })
    .then((res)=>{
        console.log("success");
        
    });

    */

    /// way 2-

// getData(1).then((res)=>{
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })
// })



                //*********************************************** */




// function hello(){
//     console.log("hello");
    
// }
// setTimeout(hello, 4000)


/*
console.log("log1");
console.log("log2");


setTimeout(()=>{console.log("Hello");
}, 3000)

console.log("log3");
console.log("log4");

// output=>
//     log1
//     log2
//     log3
//     log4
//     Hello
*/






// >>>>>> Callbacks- is an function pass as n argument in another function

/*
function sum (a,b){
    console.log(a+b);
    
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}

// calculator(1, 2, sum)

calculator(1, 2, (a,b)=>{
    console.log(a+b)
})
*/


/*
function getData(dataId, getNextdata){
    setTimeout(()=>{
        console.log("data", dataId)
        //here we check once data 1 is run then only data 2 should run
        if(getNextdata){
            getNextdata()
        }
        else{
            console.log("No next data available");
            
        }
        
    }, 2000)
}

//this also called as nexted callbacks also called as 'callback hell'
// arrow function work as callback function as it is passed as argument for other function
getData(1, ()=>{
    getData(2, ()=>{
        getData(3)})
});

//data 1
//data 2
//data 3
*/














