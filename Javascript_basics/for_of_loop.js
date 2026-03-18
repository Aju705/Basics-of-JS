/*

/// >>> Array- for of loop-

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}


/// >>> for in loop with array

const programming = ['JS', 'JAVA', 'Py']

for (const key in programming) {
    console.log(key+ ': ' + programming[key]); 
}
*/




// const greetings = "Hello World!"

// for (const num of greetings) {
//     if(num != ' ') //to elimimate space
//     console.log(`each char is: ${num}`)
    
// }


//maps - is collection of key and value pair
// gets unique values

// >>> map- for of loop
 const map = new Map()
 map.set('IN', 'India')
 map.set('CND', 'Canada')
 map.set('FR', 'France')

    console.log(map);  //Map(3) { 'IN' => 'India', 'CND' => 'Canada', 'FR' => 'France' }

 for (const [key, value] of map) {
    console.log(key, ':' , value);
    /*  IN : India
        CND : Canada
        FR : France
    */
 }

 // >>> map - for in loop - not itretable
 



 // >>> for of loop dont work for object
//  const myObject ={
//     game1 : 'NFS',
//     game2 : 'GTA'
//  }
//  for (const key of myObject) {
//     console.log(key);
//     //myObject is not iterable
//  }




//for of loop dont work for object - we need for in loop to iterate it
/*
const myObject={
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift: 'Swift by aple'
}

for (const key in myObject) {
      console.log(key);
        // js
        // cpp
        // rb
        // swift
}

for (const key in myObject) {    
    console.log(myObject[key]);
        // JavaScript
        // C++
        // ruby
        // Swift by aple
}

for(const key in myObject){
    console.log(key + ': ' + myObject[key]);
        // js: JavaScript
        // cpp: C++
        // rb: ruby
        // swift: Swift by aple
}

let a = {
    a: 1,
    b: 2,
    c: 3
}

console.log(Object.keys(a));
*/







