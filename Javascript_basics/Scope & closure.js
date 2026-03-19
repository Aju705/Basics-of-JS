
/*
if(true)
{
let a = 10
const b= 20
var c= 30
}
console.log(a);  //a is not defined
console.log(b);  //b is not defined
console.log(c);  //30   >> var can be accessbile outside the scope even though the declaration is inside the scope
*/


let a = 100
const b= 200
if(true)
{
let a = 10
const b= 20
var c= 30

console.log(a, b);  //10 20 

}
console.log(a);  //100 - print the variable present in the global scope
console.log(b);  //200
console.log(c);  //30




/*
{
    let num = 10
    console.log(num);   //10
}
    //console.log(num);   //num is not defined 

{
    //we can redeclare the variable when it is in another scope
    let num = 20
    console.log(num);   //20
}
*/




//scope for if, while & for loop statements 

/*
if(true){
    let num = 10
    console.log(num);   //10
}
    //num cant be accessible outside the scope
    console.log(num);   //num is not defined
    

    //here visually it seems i is declare outside the {} scope but it is considered as in the scope only
for(let i=0; i<3; i++){
    console.log(i)   //0 1 2 
}
console.log(i);   //i is not defined
*/









//Closure - is an function which remembers its

function createGreeter(name){
    let greeting ="Hello"
    return function(){
       console.log(greeting + " " + name);
    }
}

let welcome = createGreeter("AJ")
welcome()
welcome.greeting





function parent(){
    let num = 10
    return function child1(){
        console.log("child 1", num);   
    }
}

let fn = parent()
console.log(fn.child1)