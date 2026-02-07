
/*const fun = function(){
const user = {
    name: "Ajinkya",
    age: 25,
}
return user
}

let use = new fun
console.log(`My name is ${use.name} and my age is ${use.age}   ${use}`); */

/*

/*
>>> 'Delete' operator*/

const obj ={
    name :"AJ",
    id : 25,
    age : 26,
    "Current city" : "Pune",
}
console.log(obj.name);
console.log(obj['name'], obj['id'])




console.log(obj); //{ name: 'AJ', id: 25 }
console.log(obj.id); //25
delete obj.id;  // delete operator is use to delete the value from the object
console.log(obj); //{ name : 'AJ' }
console.log(obj.id); //undefined

 



/*
const sym = Symbol('key')
let user ={
    name : 'Ajinkya',
    age : 25,
    "full name" : 'Ajinkya Nagawade', //if key name is multi word then need to write it as string
    [sym] : 'key value', //symbol type needs to be added into square bracket
    DOB : '01/06/2000',
    company : 'Intangles'
}

console.log(user.name);
console.log(user["name", "age"]);  // two access the values from the given object
console.log(user["full name"]); // multi word key name cant be accessed by obj.key instead use this format 
console.log(user[sym]); //key value

user.company = 'Infosys'
console.log(user["company"]); //infosys
//Object.freeze(user) // this will freeze the given object from updating

user.company = 'TCS'
console.log(user["company"]) //Infosys // as we have freeze the object so it will not update the object rather return the existing value

user.greetings = function(){
    console.log(`Welcome ${this["full name"]}`);  //'this' is used to reprrsent the value is from the same object
}

console.log(user.greetings()); //Welcome Ajinkya Nagawade
*/


/*
>>> // Singlton Object

const SingltonObj = new Object()

SingltonObj.id = 'ABC'
console.log(SingltonObj.id);   //ABC 
*/

/*
//>>> Object literals

const regularUser ={
    id: 'Aj123',
    age: 25,
    userDetails:{
        userName:{
            firstName: "Ajinkya",
            lastName: 'Nagawade',
        }
    }
}

console.log(regularUser.userDetails); //{ userName: { firstName: 'Ajinkya', lastName: 'Nagawade' } }
console.log(regularUser.userDetails?.userName?.lastName); //Ajinkya
*/






/* 
>>> Access the property using variable- 
this is used bcoz it gives dynamic, flexible & runtime property access and is essential when property name is not known in advance 

const testObj ={
    name : 'Ajinkya',
    age : 25,
}
let testVariable = 'name' // can access the property using variable
console.log(`my name is : ${testObj[testVariable]}`);
*/


/*
//>> when we dont know the exact property name

function getValue(obj, propValue){
    return console.log(testObj[propValue])
}
getValue(testObj, "name") //Ajinkya
*/


/*
//>> for loop

let key = "name"
let keys = ["name", "age"]
for(let key of keys){
    console.log(testObj[key]);
} // Ajinkya 25
*/


/*>> for Response, api Data

user = {
    1: 'a',
    2: 'b',
}
let valueFromForm = "email"
user[valueFromForm] = "abc@test.com"
console.log(user);                      //{ '1': 'a', '2': 'b', email: 'abc@test.com' }
*/






/*
>>> "in" operator - used to check if key is present in the object or not

const testObject = {
    name : 'AJ',
}
console.log('name' in testObject); //true
console.log(name in testObject); //error- name is not defined
*/





/*
// >>property name shorthand

function shorthand(name, age){
    return{
        name : name, //one way to return
        age : age,
    }
    // return{
    //     name, //shorten the syntax when common property name is there
    //     age,
    // }
}
let user = shorthand("AJ", 25)
console.log(user.name);
*/




/*
//>>> Object.Assign 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}


console.log(Object.assign(obj1, obj2)) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3)
*/



/*
//>>> spread operator


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj4 = {...obj1, ...obj2}
console.log(obj4);      //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


const users = [
    {
        id1 : 1,
        email : 'a@gmail.com'
    },
        {
        id : 2,
        email : 'b@gmail.com'
    },
        {
        id : 3,
        email : 'c@gmail.com'
    }
]

console.log(users[1].email);


const sampleObj  = {
    city : 'Pune',
    state : 'Maharashtra',
    location : 'vadgaon Sheri'
}

console.log(Object.keys);
*/



/* 
// >>> "for...in" loop -  used to walk through all keys of an object 
*/

// const obj = {
//     name: "AJ",
//     age: 25,
// }

// for(let key in obj){
//     console.log(key); //name age
//     console.log(obj[key]);    //AJ 25
// }

















//>>> q1- Check for emptiness


function isEmpty(obj){
   
    for(let key in obj){
        return console.log(obj);
        
    }
    return console.log(obj);
}

let schedule = {};
console.log(isEmpty(schedule));

 // true

schedule["8:30"] = "get up";
console.log(schedule["8:30"]);

console.log(isEmpty(schedule)); // false



/*
//>>> Multiply numeric property values by 2

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] == "number") {
              obj[key] *= 2
        }
    }
    return obj
}
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

let a = multiplyNumeric(menu)
console.log(a)
*/





//>>> Destructuring of object
