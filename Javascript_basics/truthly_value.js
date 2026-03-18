//falsy values => false, "", 0, -0, BigInt 0n, null, undefined, NaN

//truthly value => true, "0", [], "false", " ", {}, function(){}

/*
const userEmail = 'abc@gmail.com'

if (userEmail){
    console.log("Got user email");  
}
else {
    console.log("email id not found")
}

//output = Got user email
*/


//const userEmail = ''

// if (userEmail){
//     console.log("Got user email");  
// }
// else {
//     console.log("email id not found")
// }

// //output = email id not found


/*
const userEmail = []

if (userEmail){
    console.log("Got user email");  
}
else {
    console.log("email id not found")
}

//output = Got user email

if(userEmail.length === 0){
    console.log("no email");
}

//output   =  no email
*/


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("no email");
}

//output = no email




/// Nullish Coalescing operator (??) : null undefined

let val;
// val1 = 5 ?? 10
// val1 = null ?? 10
// console.log(val1);  //10

val1 = undefined ?? val
console.log(val1);    // undefined




/// terniary operator

//condition ? true : false

const price = 100

price <=80 ? console.log("less than 80") : console.log("greatar than 80")
