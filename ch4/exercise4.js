function deepEqual(thing1, thing2) {
  // if the two things are equal values, than they are the simplest example of deeply equal
  if (thing1 === thing2) {
    return true;
  }
  // otherwise, check if both things are objects (and also not null which is technically an object type)
  else if (typeof thing1 === 'object' && typeof thing1 !== null && typeof thing1 === typeof thing1) {
    // CHECK FOR EQUAL PROPERTIES
    return 'objects that are not null'
  }
  
  else {
    return 'not deeply equal';
  }
}