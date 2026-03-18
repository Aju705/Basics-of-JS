// >>> for each loop on array-

/*
const arr = ['js', 'JAVA', 'py']

with normal function
arr.forEach(function (item){
    console.log(item);
})


with callback function
arr.forEach((item)=> {
    console.log(item);
})



function printMe(item){
    console.log(item);
}
arr.forEach(printMe)


arr.forEach((item, index, arr)=>{
    console.log(item, index, arr);
    
})
*/





// >>> for each loop on object

/*
const myCoding = [
    {
        languageName: 'JAVA',
        languageShort: 'J'
    },
    {
        languageName: 'JavaScript',
        languageShort: 'Js'
    },
    {
        languageName: 'python',
        languageShort: 'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
        // JAVA
        // JavaScript
        // python
    
})
myCoding.forEach((item)=>{
    console.log(item.languageShort);
        // J
        // JS
        // py
    
})
*/