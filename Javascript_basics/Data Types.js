// define the type of data user stored in the variable

//Types of data types

//Non Primitive Daya Types
//array, function, objects

// const Heros = ["IronMan", "Hulk"]
// console.log(Heros);

// console.log(typeof Heros); //oject

// const Obj = {
//     Name : "Ajinkya",
//     age : 25           
// }
// console.log(Obj);
// console.log(typeof Obj);


// const Function = function(){
//     console.log("Hello World");
//     console.log(typeof Function);   
// }
// Function();



//Primitive Data Types-

// Number => 2 to power of 53
// String => ""
// BigInt => number which is greater than the 2 to power of 53
// undefined => when value is not defined to an variable
// null => standalone value / when null value is defined / value of null = 0
// Boolean => true/false
// Symbol => to check the uniqueness

// let id = Symbol('123')
// let id1  = Symbol('123')
// console.log(id == id1);
// console.log(id === id1);



// >>> Numbers =>


    // 'e' is used to shorten the number - 1e3 == 1000
    // let value = 1e3;
    //typeof is used to know the data type
    // console.log(typeof value);

    // let mcs = 1e-3;
    // console.log(mcs)

//suntatic sugar - is nothing but the type of syntax used to increase the redadibility of code

// let num1 = 100000;
// let num2 = "1_00_000";

// console.log(num1 = num2)
// console.log(num1 == num2)
// console.log(num1 === num2)


// >> Rounding 
// Math.floor - round down
// let num2 = 12.6
// console.log(Math.floor(num2))

// //Math.ceil - round up
// let num1 = 12.34
// console.log(Math.ceil(num1))

// //Math.round - round to nearest integer
// let num1 = 12.7
// let num2 = 12.3
// console.log(Math.round(num1) + " " + Math.round(num2))

// let num = 1.23456
//console.log((Math.round(num1 * 100))/100);

// //Math.trunc - removed everthing after the decimal
// let num3 = 13.344
// console.log(Math.trunc(num3))




// >> toFixed(n) method
// let num3 = 12.36
// //here values gets round up/down same as Math.round
// console.log(num3.toFixed(1))

// let num4 = 12.34
// console.log(num4.toFixed(1))

// output type after the tofixed method -String
// unary + / Nunber is used to convert it into number

// let num1 = 12.35
// let num2 = num1.toFixed(1)
// // output type is string
// console.log(typeof(num2))

// let num3 = +num1
// let num4 = Number(num1)
// let num5 = parseInt(num1)
// console.log(typeof(num3))
// console.log(typeof(num4))
// console.log(typeof(num5))


// toString()

// let num1 = null
// console.log(typeof(num1))
// let num2= num1.toString()
// console.log(num2)


// isFinite & isNaN

// let num1  = NaN
// console.log(num1 == NaN)
// console.log(num1 === NaN)
//output is false false - reason is NaN is unique that it cant compare with any other value rather with itself


// let num1 = 10
// console.log(isFinite(num1)) // output - true
// let num2 = null
// console.log(typeof(num2))
// console.log(isFinite(num2)) // output - false
// console.log(isFinite(Infinity)) // output - false


//difference between the isNaN() & Number.isNaN()
// isNaN() => global function - here function check if the value can change to number
// console.log(isNaN(null)) // false
// console.log(isNaN('a')) // true
// console.log(isNaN(12)) // false
// console.log(isNaN(undefined)) // true
// console.log(isNaN(Infinity)) // false
// console.log(isNaN(NaN)) // true
// console.log(Number(null)) //0
// console.log(Number(undefined)) // NaN
// console.log(Number(Infinity)) // Infinity
// console.log(Number(NaN)) //NaN
// console.log(Number('a')) //NaN

// Number.isNaN() => is 'Strict' mode where the function check the type number AND the value is NaN
// console.log(Number.isNaN(null)) // false
// console.log(Number.isNaN('a')) // false
// console.log(Number.isNaN(12)) // false
// console.log(Number.isNaN(undefined)) // false
// console.log(Number.isNaN(Infinity)) // false
// console.log(Number.isNaN(NaN)) // true


//TypeOf

// console.log(typeof(null))  //object
// console.log(typeof(undefined)) //undefined
// console.log(typeof(1234)) //number
// console.log(typeof("123")) //string
// console.log(typeof(abc)) //undefined
// console.log(typeof(true)) //boolean
// console.log(typeof(NaN)) //number



// Object.is =>
//similar to the "===" only object.is covers two edge cases
// console.log(0 === -0) // true
// console.log(NaN === NaN) // false

// console.log(Object.is(0 , -0)) // false
// console.log(Object.is(NaN , NaN)) // true


//Math.random()
// console.log(Math.random())

//Math.max()
// console.log(Math.max(1,2,3,4,5,-10)) //5

//Math.min()
// console.log(Math.min(1,2)) //1

//Math.pow()
// console.log(Math.pow(2, 3)) // 2 power 3 = 8



// let value1 = 10;
// let value2 = 20;
// console.log(value1+value2)



//String to number

// console.log("1" + 2)
// console.log("1" + "2")
// console.log(1 + 2)


// euality & comparison operators

// console.log(null == 0) 
// console.log(null > 0)
// console.log(null >= 0) // here output is true bcoz it convert null to 0 and 0 is equal to 0 hence output is true

// console.log(undefined == 0)
// console.log(undefined >= 0)
// console.log(undefined > 0)


// console.log('1' == 1)
// console.log('1' === 1)


// >>> BigInt

// let bigInt = 12345678123456754919n
// console.log(typeof bigInt)








//>> String

// let str1 = "Ajinkya"
// console.log("My Name is ${str1}"); //My Name is ${str1}

// let str2 = "AJ"
// console.log('My nickname is ${str2}'); //My nickname is ${str2}

// Backtick `${}` is used to use the extednded functionality (string, variable, function)
// let str3 = 5+5
// const PersonalData = function(){
//     const Data = {
//         Name: "Ajinkya",
//         Age: 25,
//     }
//     return Data
// }    
// let sendData = new PersonalData
// console.log(`My name is ${sendData.Name} and my age is ${sendData.Age}`)  //My name is Ajinkya and my age is 25


// * Allows you to write text in multiline using back quote
// const list = `City:
// *Pune 
// *Mumnbai
// *Solapur`

// console.log(list);
/*output - 
 City:
*Pune 
*Mumnbai
*Solapur*/


//  >> string.legnth - gives the no of character

// let str = "Ajinkya"
// console.log("Character Count of \"Ajinkya\" :" + str.length);
// console.log(`Character Count of \"Ajinkya\" :${str.length()}`);


// >>> Accesscing the charcter

// const str4 = "AJINKYA"
// console.log(str4[0]) //A
// console.log(str4.at(1)) //J
// console.log(str4.at(-2));


// >>> String are immutable


// >>> changing the case of string
// toUpperCase() & toLowerCase()

// let str = "ajinkya"
// console.log(str.toUpperCase()); //AJINKYA

// let str1 = "PUNE"
// console.log(str1.toLowerCase()); //pune




// >>> Searching for substring

// let str = "Hello World"
// console.log(str.indexOf('He', 0)); //0
// console.log(str.indexOf('he', 0)); //-1 means nothing can be found
// console.log(str.indexOf('el', -1)); //1


// const str = "As sly as a fox, as strong as an ox"
// let pos = 0
// let target = 'as'
/*while(true){
    let foundPos = str.indexOf("as" , pos)
    if(foundPos == -1) break

    console.log(`Position of as is: ${foundPos}`)
    pos = foundPos + 1
}

let pos = -1
while((pos = str.indexOf("as" , pos + 1)) != -1){
    console.log("Index of as is: " + pos)
}*/



// >>> includes, startWith, endwith

// >> includes

// str = "Welcome to learn JS"
// console.log(str.includes('to'))  //true
// console.log(str.includes('To'))  //false - case sensitive
// console.log(str.includes("to" , 3))

// console.log(str.startsWith('We')) //true
// console.log(str.startsWith('we')); //false

// console.log(str.endsWith('JS')); //true

// console.log(str.endsWith('jS')); //false




// >>> getting the substring

// >>slice
// str.slice(start , end)

// let str = "Start with JS"
// console.log(str.slice(0 , 5)) //Start // includes start position but eliminates end position
// console.log(str.slice(6)); // simply takes the statr position into consideration and run till the end
// console.log(str.slice(5 , 0)) //"" - start should be less than the end

// >>substring
// str.substring(start , end)

// let str = "Start with JS"
// console.log(str.substring(0 , 5)); //Start - includes start position and exclude end
// console.log(str.substring(6));
// console.log(str.substring(5 , 0)) // unlike slice substring return the string even of start is greater than the end

// >>substr
// str.substr(start , length)

// let str = "Start with JS"
// console.log(str.substr(0 , 4))
// console.log(str.substr(4))
// console.log(str.substr(4 , 1))



function checkSpam(str){
    let strLower = str.toLowerCase()
    return (strLower.includes('mango') || strLower.includes('cost'))
}
console.log(checkSpam('buy ManGo now') )
console.log(checkSpam('free COST') )
console.log(checkSpam("innocent rabbit") )


console.log((Math.round(12.123)) * 100)
console.log((Math.round(12.123 * 100)) / 100)

let q = 12.1012345678987654
// let ans = q.toFixed(2)
// console.log(ans);
let ans = +q.toString(36)
console.log(`${ans} + ${typeof(ans)}`)

let num1  = NaN
console.log(num1 == NaN)
console.log(typeof(num1))

console.log(isNaN(Infinity))



const Function = function(){
    const obj1=
    {
        Name: "Aj",
        Age: 25,
    }

    const obj2 = {
        Name: "AA",
        Age: 20,
    }
    //return [obj1, obj2]
    return {ref1: obj1 , ref2: obj2}
}
 let ref = new Function;
 console.log(`My name is ${ref.ref1.Name}`);
 

 const string = "Hello world"
 console.log(string.lastIndexOf("ll", 3));
  console.log(string.lastIndexOf("ll", 0));

console.log(Number(''));
console.log(Number(false));


// >>> COMPARISONS

// IN COMPARISON 

console.log(null > 0) // FALSE
console.log(null == 0) // FALSE
console.log(null >= 0) // TRUE

console.log(undefined > 0) // FALSE
console.log(undefined == 0) // FALSE
console.log(undefined >= 0) // false

console.log(null === undefined);  //False
console.log(null == undefined); //True




// function truncate(str4, leng){
//     const newLocal = str4.slice(0, leng - 1) + ''
//       return  (str4.length > leng) ?
//             newLocal +  : str4
        
// }



truncate("What I'd like to tell on this topic is:", 20) //== "What I'd like to te…"

truncate("Hi everyone!", 20) //== "Hi everyone!"


function truncate(str, leng) {
  return (str.length > leng) ?
    str.slice(0, leng - 1) + '…' : str;
}

console.log(truncate("What I'd like to tell on this topic is:", 20)); 
// Result: "What I'd like to te…" (Length: 20)
