/*
>>> Functions: used to run the piece of code fpr multiple times
*/


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



let thirdFunction2 = (name)=> {
    console.log("Any statement before return will get execute");
    return (`Welcome: ${name}`)
    console.log('any log statement after return will not execute');
}

thirdFunction2("AJ") //output - no ouput 

//here we have to save the return data into variable/have to log it
let a = thirdFunction2("AJ")
console.log(a);  //Welcome: AJ

