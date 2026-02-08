/*
>>> Object store the reference of an properties not the property itself unlike primitices which stores whole value into memory

let obj1 ={
    name: 'AJ',
    age: 25,
}
let obj2 = obj1 // simply copy the obj1 into obj2 - here only references are copied not the object

console.log(obj1); //{ name: 'AJ', age: 25 }
console.log(obj2); // { name: 'AJ', age: 25 }

console.log(obj1.name); //AJ
obj2.name = "Ajinkya" // here both the object referring to the same hence of we made change into obj2 it is impactin obj1 as well to sharing same reference
console.log(obj1.name); //Ajinkya
console.log(obj2.name); //Ajinkya
*/





/*
>>> Comparison by reference

let obj1 = {}
let obj2 = obj1
let obj3 = {}
console.log(obj1 == obj2); //true
console.log(obj1 === obj2); //true sharing the same reference
console.log(obj1 == obj3); //false both objects are reffering to different references hence output is false
*/




/* 
>>> const objects can be modified?


const obj1 = {
    name: "AJ",
    age: 25,
}
let obj2={
    name: "AN",
    age: 27
}

//here tries to assign the obj2 to obj1 which is not possible as obj1 is of type const
console.log( obj1 = obj2);  //Assignment to constant variable

//here we can modify the object though it is of type const
console.log(obj1);  //{ name: 'AJ', age: 25 }
obj1.name = 'AN'    // here object's property can be modify
console.log(obj1);  //{ name: 'AN', age: 25 }

obj1.city = 'Pune'
console.log(obj1);

console.log(Object.entries(obj1)); //"Object.entries" >>  [ [ 'name', 'AN' ], [ 'age', 25 ], [ 'city', 'Pune' ] ]
*/



/*
>>> cloning object-


let obj1 ={
    name: "AJ",
    age: 25
}
console.log("obj1 Before Clonnning: " , obj1);   //obj1 Before Clonnning:  { name: 'AJ', age: 25 }
//console.log(`obj1 Before Clonnning: ${obj1}`);   //obj1 Before Clonnning: [object Object]  >> string interpolation converts the obj to string unlike normal console.log statement


let obj2 ={}

//iterate over the obj1 to copy it to obj2
for(let key in obj1){
    obj2[key] = obj1[key] 
}

console.log("obj2 after Clonnning: " , obj2);
//making changes to obj2
obj2.name = 'AN'
//checking if it is impacting obj1 or not
console.log("after updating obj2 : ", obj2)
// there is no impact on obj1 as obj2 is not refererring to obj1 reference
console.log("impact on obj1: " , obj1);
*/






/*
Object.assign -

let obj1={
    name: "AJ",
    age: 25,
}
let obj2={
    email: "AJ@test.com",
    city: 'Pune',
}

console.log(Object.assign(obj1, obj2));
//{ name: 'AJ', age: 25, email: 'AJ@test.com', city: 'Pune' }

console.log(Object.assign(obj1,{name: "AN"}));
//{ name: 'AN', age: 25, email: 'AJ@test.com', city: 'Pune' }
*/



/*
>>> object cloning using assign - giving target as {} & source object wanted to copy can be added as parameter

let obj3 = Object.assign({}, obj1)
console.log(obj3);
//{ name: 'AN', age: 25, email: 'AJ@test.com', city: 'Pune' }
*/


/*
>>> StructuredClone - use to clones the object with all nested properties
>> not used when object include function

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = structuredClone(user);

console.log( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); // 50, not related
*/