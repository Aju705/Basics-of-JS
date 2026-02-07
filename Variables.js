//Variables is named storage for the data
//there are two ways to declare the variables- let & const keyword

//Let
// here we have declare the the variable named as 'message'
let message;
// here we have saved the value Hello..! into the message variable
message = "Hello..!"; 

console.log(message); 


//can declare multiple variables at a time
let name = "Ajinkya", age = 25
const dob = "1/6/2000"

console.log(name + ' ' + 'age is ' + age)

// here if we try to redeclare the variable it will throws error that 'Cannot redeclare block-scoped variable 'message'
//let message = "Welcome" 
// here I updated the value of variable
message = "Welcome";  

// console.log(message); // in the output i will get updated value for the message variable shows that of 
// we update the value of variable declare using let keyword old value gets replaced by new value




// --> const keyword

let user = "Ajinkya"
// we cant change the value of constant variable value remain constant 
// user = "Aditya"  

console.log(user);


let accountId = 123;
const role = "User";
let enailId = "test@test.com"

// consol.table - can use to display data in the table format
console.table([accountId, role, enailId])  