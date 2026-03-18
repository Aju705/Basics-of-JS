
//is an object (special type of data structure) used to store the collection of data
//two ways to declare the array

// let arr1 = new Array()
// let arr2 = []

// let arr = [1 , 2, 3]
// console.log(typeof(arr)); //object

// let arr1 = ["Orange", "Red", "Blue"]
// console.log(arr1[1]);
// arr1[2] = "Yellow" 
// console.log(arr1); //[ 'Orange', 'Red', 'Yellow' ]

// let arr1 = ['Apple' , {name : 'AJ'} , 25 , function(){}, true]

// console.log(arr1[0]);
// console.log(arr1[1].name);
// console.log(arr1[2]);
// console.log(arr1[3]);
// console.log(arr1[4]);


/*>>> pop & push method
 >> pop -> used to remove the last element from the Array
  >> push -> user to add the element to the array

let arr = [1 , 2 , 3 , 4 ]
console.log(arr.pop())
console.log(arr) //[ 1, 2, 3 ]

console.log(arr.push(5))
console.log(arr) //[ 1, 2, 3, 5 ]*/

/* >>> shift & unshift
    >> shift- eleminates firsy elelemt from the array
    >> unshift - add element to the start of array
let arr = [1 , 2 , 3 , 4 ]
console.log(arr.shift());
console.log(arr); // [ 2, 3, 4 ]

console.log(arr.unshift(6));
console.log(arr);  //[ 6, 2, 3, 4 ] */



/*let color = ["Red", "Blue", "Orange"]
let color1 = color
console.log(color);
color1.push("White") // push method adds elment to the last index

console.log(color); // as arrays 
console.log(color.length)*/

/* Loop 
    >> for loop-


let arr = ['A', 'B' , 'C' , 'D']
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

   // >> for ..of 
let arr = ['A', 'B' , 'C' , 'D']
for(let arr1 of arr){
    console.log(arr1);
}*/
   

/*
//>>> Slice is used to trim out the desired elemenets from the array
//it will not make any change to existing array
let array = [1, 2, 3, 4, 5]

// as parameter it takes "start_index_position" , "no_of_elemets_tobe_removed"
console.log(array.slice(0,2));  //[ 1, 2 ]
console.log(array);  //[ 1, 2, 3, 4, 5 ]


//>>> splice used to remove the elements from the array an at the same time can add new elemenets to the same position
//it will made changes to existing array
let array1 = [1, 2, 3, 4, 5]

//as parameter it takes "start_index_value" , "no_of_elements_tobe_removed" , "new_elements_tobe_added"
console.log(array1.splice(0,2,6,7));  //[ 1, 2 ]
console.log(array1);  //[ 1, 2, 3, 4, 5 ]

*/



/*
>>> indexOf()-
    >> to find the index of given element

let num = [1, 2, 3, 4,]
let char = ['A', 'B', 'C', 'D',]
 
console.log(char.indexOf('A')) //0

>>> concat()-
    >> use to combine the two or more arrays together without modifying the existing array

console.log(num.concat(char)) 
/*
  [1,   2,   3,   4,
  'A', 'B', 'C', 'D'
]*/


/*
>>> splice()-
    >> use to remove and replce the elements in the array

let days = ['Mon', 'Tue', 'Thu', 'Wed',]
let months = ['Jan', 'Frb', 'Mar', [1, 2, 3]]

days.splice(2,2,'Wed','Thu') // use to remove and replace the elemets in the array
months.splice(1,1,'Feb')
const ans = [...days, ...months]

console.log(ans) // displated output in array blocks
console.log(...ans) // unpacks the array
*/




/*>>> Flat()
    >> use to flatten the array

let arr = ['Mon', 'Tue', 'Thu', 'Wed',['Jan', 'Feb', 'Mar', ['a', 'b', 'c', ['aa', ['aaa']]]]]
console.log(arr.flat()); //bydegfault depth is at level 1
console.log(arr.flat(2)); // manual depth can be changes to level 2
console.log(arr.flat(Infinity)) */


/* 
>>> Array

let arr = ['A', 'B', 'C']
let str1 = "Ajinkya"
let str2 = 10
console.log(Array.isArray(str1)) //false
console.log(Array.from(str1)) //[ 'A', 'j', 'i','n', 'k', 'y','a' ]
console.log(Array.of(str1,str2)) //[ 'Ajinkya', 10 ]
*/



/*
>>> sort() - use to sort the array

// Want to sort array in ascending order
let compare = (a,b)=> {
    return a-b
}
let array = [1, 33, 45, 87, 3, 90, 222]
console.log(array.sort()); //[ 1, 222, 3, 33, 45, 87, 90 ] >> sort() arrange the array on alphabetical basis
console.log(array.sort(compare));   //[1,  3,  33, 45, 87, 90, 222]
*/



/*
>>> reverse

let num = [1, 2, 3, 4, 5]
console.log(num.reverse()); [ 5, 4, 3, 2, 1 ]
*/