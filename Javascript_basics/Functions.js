/*
>>> Functions: used to run the piece of code fpr multiple times



function firstFunction(){
    console.log("Hello first function");
}

//>> decleration & execution of function
firstFunction()   //Output: Hello first function


//Arrow function
let secondFunction = (username, lang)=>
{
    console.log(`Welcome ${username} this is an Arrow funtion from ${lang}`);
}
let lang= "JS"
secondFunction("Ajinkya", lang);


// >>> Arguments- are the values which sent to the funtion during the declaration
// >>> Paramerters- are the values which are accepted when function is created 


/* 
>>> Ways to write the arrow function

//with curly bracket
let arrow_1 = () =>{
    console.log("Arrow way 1");  
}
arrow_1()

let arrow_2 = () =>
    console.log("Arrow way 2");  

arrow_2()

let arrow_3 = () => (console.log("Arrow way 3"))

arrow_3()
*/


/*
let thirdFunction = (name)=> {
    console.log(`Welcome: ${name}`);
}

thirdFunction("AJ")
//output - Welcome AJ

let thirdFunction1 = (name)=> {
    return console.log(`Welcome: ${name}`);
}

thirdFunction1("AJ")
//output - Welcome AJ
*/



/*
let thirdFunction2 = (name)=> {
    console.log("Any statement before return will get execute");
    return (`Welcome: ${name}`)
    //anylog statement after the return will not execute 
    console.log('any log statement after return will not execute');
}

thirdFunction2("AJ") //output - no ouput 

//here we have to save the return data into variable/have to log it
let a = thirdFunction2("AJ")
console.log(a);  //Welcome: AJ
*/



/*
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(2, 3, 4, 5));
 */



/*
let user = {
    customerName: "Sam",
    price: 299,
}

//can create an variable to pass an object
function customer(anyobject){
    console.log(`Customer name is ${anyobject.customerName} and price is ${anyobject.price}`);
}

customer(user)

//Output- Customer name is Sam and price is 299
*/


/*
function handleObject(user){
    console.log(`Username is ${user.userName} and age is ${user.age}`);
}


//we can directly pass the object as parameter at the time of function declaration 
handleObject(
    {
    userName: "AJ",
    age: 25,
    }
)
*/


/*
let array = [1, 2, 3, 4, 5]

function runArray(myArray){
    return myArray[1]
}

console.log(runArray(array)); //2
console.log(runArray([100, 200, 300])); //200
 */



/*
//>>> Immediately Invoked Function Expression (IIFY)

()() => one having an function and another is to execute it immediately 

(function fun1(){ console.log(  "fun1") }) ();
//when we are using IIFY then ";" is compulsory to brake the execution of earlier function

( fun2 = ()=> {console.log("fun2");
})()

>> output- 
fun1 
fun2
*/
