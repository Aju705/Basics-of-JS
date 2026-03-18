/*
>>> Constructors are special type of function which is use to create & initialize the object instead of creating it again and again
> it keeps the blueptint of object so everytime we call constructor we only use the same blueprint and not create the new blueprint evrytime

>> normal function- create an new copy into memory
>> constructor - it points to the single shared function memory
*/

function Car(make, model) {
  this.make = make;
  this.model = model;
}

const myCar = new Car("Tesla", "Model 3");
console.log(myCar.make); // Output: Tesla

const omiCar = new Car("KIA", "Sonet")
console.log(omiCar.model); // Output: Sonet


