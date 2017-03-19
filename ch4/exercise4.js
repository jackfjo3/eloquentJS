// Your code here.

// if I were to refactor, rather than checking for things to be true, I would check for things not to be false, and terminate the program immediagely. For example in the ex4solution line 15 we have     if (!(prop in a) || !deepEqual(a[prop], b[prop])) return false;     This is in contrast to line 36 of this file, which checks whether ALL my desired conditions are true. I'd rather check whether ANY of my failing conditions are true and kill the program right off there.
// Also, unlike the shorter solution shown in ex4solution.js, this deepEqual compares the amount of properties in each argument BEFORE comparing any of the values of those properties. I don't know enough at this point, but I would assume quickly assessing the total number of properties and then killing the process immediately if they don't match would be more efficient than determining there are extra additional properties in thing2 only AFTER you've already compared all the values... I can't say I was designing for efficiency this is looking back in hindsight

function deepEqual(thing1, thing2) {
  // if the two things are simply equal values, than they are the simplest example of deeply equal
  if (thing1 === thing2) {
    return true; 
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


    // if the number of properties is not the same between thing1 and thing2, it fails immediately
    if (numberThing2Properties !== numberThing1Properties) {return false;}
    else {
      // this variable remains true as long as there are no differences found yet
      var thingsStillSeemEqual = true;
      // loop through each property of thing1 one at a time
      for (var nextProperty in thing1) {

      
        // if thing2 has the same property, check the deep-equality of the properties. Skip this step and terminate if the last step rendered thingsStillSeemEqual false
     
        if (nextProperty in thing2 && thingsStillSeemEqual) {
        
          thingsStillSeemEqual = thingsStillSeemEqual && deepEqual(thing1[nextProperty],thing2[nextProperty]);
      
        }
        // if thing 2 does NOT have the same property or the last property had a different value
        else return false;
    
      }
      // after looping through all of the properties of thing1, if no differences in values were found, this will return true
      return thingsStillSeemEqual; // I'm very happy with this variable name
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


