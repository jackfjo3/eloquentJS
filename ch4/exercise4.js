function deepEqual(thing1, thing2) {
  // if the two things are equal values, than they are the simplest example of deeply equal
  if (thing1 === thing2) {
    return true;
  }
  // otherwise, check if both things are objects (and also not null which is technically an object type)
  else if (typeof thing1 === 'object' && typeof thing2 === typeof thing1 && typeof thing1 !== null ) {
    // check thing1 for a property and name if nextProperty
    for (var nextProperty in thing1) {
      // if thing 2 has the same property, check the deep-equality of the properties.
      if (nextProperty in thing2) {
        return deepEqual(thing1[nextProperty], thing2[nextProperty]);
      }
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