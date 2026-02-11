/*
>>> optional chaining ? is used to safly access the property from nested object properties, even if an intermediate property doesn’t exist.

? it checks if the property is not null or undefined and return undefined
*/



let userDetails = {
    name: 'AJ',
    userId: 588,
    workDetails:{
        stream: 'Tech',
        department: 'QA',
        departmentType:{
            type: null,
        }
    }
}

console.log(userDetails.name);  //AJ

console.log(userDetails.userId);  //588

console.log(userDetails.workDetails.department);  //QA

//console.log(userDetails.workDetails.department.departmentType.type);  //Cannot read properties of undefined (reading 'type')

//? this will return undefined instead if thrwoing error
console.log(userDetails.workDetails.department.departmentType?.type);  //undefined