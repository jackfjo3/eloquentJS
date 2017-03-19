// Your code here.

function deepEqual(thing1, thing2) {
  // if the two things are simply equal values, than they are the simplest example of deeply equal
  // PROBLEM HERE. THIS LINE ENDS THE FUNCTION AS SOON AS A NON-OBJECT MATCH IS IDENTIFIED WITHOUT CHECKING THE REST OF THE PROPERTIES IN THING1
  if (thing1 === thing2) {
    return true; //BAD CODE. EXITS FUNCTION PREMATURELY
  }
  // otherwise, check if both things are objects (and also not null which is technically still object type)
  else if (typeof thing1 === 'object' && typeof thing2 === typeof thing1 && typeof thing1 !== null ) {
    
    
    // need to count to ensure both objects have the same number of properties
    var numberThing1Properties = 0, numberThing2Properties = 0; // need to count to ensure both objects have the same number of properties
    for (var properties in thing1) {
      numberThing1Properties++;
    }
    for (var properties in thing2) {
      numberThing2Properties++;
    }



    if (numberThing2Properties !== numberThing1Properties) {return false;}
    else {
      
      var thingsStillSeemEqual = true;
      // check thing1 for a property and name if nextProperty
      for (var nextProperty in thing1) {

      
        // if thing 2 has the same property, check the deep-equality of the properties.
     
        if (nextProperty in thing2) {
        
          thingsStillSeemEqual = thingsStillSeemEqual && deepEqual(thing1[nextProperty],thing2[nextProperty]);
      
        }
    
      }
      return thingsStillSeemEqual;
    }
  }
  // if something is not the same, they are not deeply equal
  else {
    return false;
  }
}


var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(deepEqual(obj, {here: {is: "an"}, object: 3000}));
// -> false FAILS returns true


console.log(deepEqual(obj, {here: {is: "an"}, object: 2, extraProp: 'extraValue'}));
// -> false FAILS!!! Returns undefined


