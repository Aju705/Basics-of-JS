// const arr = ['js', 'JAVA', 'py']

// const value = arr.forEach((item)=>{
//     console.log(item);
//     return
// })

// console.log(value); // undefined




// const myNums= [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

// let result= myNums.filter((num)=> num>4)
// console.log(result);  //[ 5, 6, 7, 8, 9, 10 ]



// let result= myNums.filter((num)=>{
// num>4
// })
// console.log(result);  //[]  // if we are initiating scope then writing return is mendatory



// let result= myNums.filter((num)=>{
// return num>4
// })
// console.log(result);  //[ 5, 6, 7, 8, 9, 10 ]



// const newNums = []
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num) // to push the value into array
//     } 
// })
// console.log(newNums);   // [ 5, 6, 7, 8, 9, 10 ]




/*
const employee =[
    {name: 'Ajinkya', department: 'qa', joiningYear: '2023'},
    {name: 'Parth', department: 'Dev', joiningYear: '2022'},
    {name: 'Shweta', department: 'Dev', joiningYear: '2023'},
    {name: 'Shreyas', department: 'qa', joiningYear: '2021'},
    {name: 'Omkar', department: 'qa', joiningYear: '2022'},
    {name: 'Sanket', department: 'Devops', joiningYear: '2022'}
]
*/

/*
//to filter out employee from qa department who joined on 2023

const result= employee.filter((em)=> em.department == 'qa' && em.joiningYear == '2023')
console.log(result);   
// output : [ { name: 'Ajinkya', department: 'qa', joiningYear: '2023' } ]
*/


/*
// to filter out the employee who joined after 2022

const result= employee.filter((em)=>{return em.joiningYear>2022})
console.log(result);

Output- 
[
  { name: 'Ajinkya', department: 'qa', joiningYear: '2023' },
  { name: 'Shweta', department: 'Dev', joiningYear: '2023' }
]*/







/// map

// const myNums= [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

// const newNums = myNums.map((num)=>num+10 )
// console.log(newNums); 
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]

// const newNums = myNums.map((num)=> {
//     return num * 10
// })
// console.log(newNums);
// [
//   10, 20, 30, 40,  50,
//   60, 70, 80, 90, 100
// ]

/*

>>> map channing- 

const newNums = myNums
    .map((num)=> num * 10)
    .map((num)=> num + 1)

console.log(newNums);
output
[
  11, 21, 31, 41,  51,
  61, 71, 81, 91, 101
]
*/


/*
const result = myNums.map((num)=> num * 10).map((num)=> num + 1).filter((num)=> num >40)
console.log(result);

output:
[
  41, 51,  61, 71,
  81, 91, 101
]
*/









/// reduce metod


const myNums= [1, 2, 3]

const myTotal = myNums.reduce((acc, currVal)=> 
    {
    console.log(`acc: ${acc} and currVal: ${currVal}  Total: ${acc + currVal}`);
    
    return acc + currVal
}, 0)
console.log(myTotal);

 
