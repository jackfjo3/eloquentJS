function every(array, func) {
  var passes = func(array[0]); // if the very first thing doesn't pass the test, it fails. This is needed to enter the for loop, which requires that passes === true. I set passes to fail because defaulting to true seemed dangerous
  // since we already checked array[0]
  for ( i=1; i< array.length && passes; i++) { 
    passes = func(array[i]);
  }
  return passes;
}

function some(array, func) {
  var passes = false;
  for ( i=0; i < array.length && !(passes); i++) {
    passes = func(array[i]);
  }
  return passes;
}