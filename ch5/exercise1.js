var arrays = [[1, 2, 3], [4, 5], [6]];

// I will first attempt the problem with my custom functions. Later I will retry with the pre-defined method calls


function myReduce(array,combine) { // the combine paramenter is a function. When we call myReduce, we need to teach it how to 'combine' the array values. We teach the myReduce to combine by passing the function as an argument. The combine function will need 2 parameters, which are the running combination and the individual array member that is evaluated. Both arguments for combine are provided AUTOMATICALLY by the loop within myReduce funtion
  var reduced = [];
  for (var i = 0; i < array.length; i++) {
    reduced = combine(reduced,array[i])
  }
  return reduced;
}

function myConcat(a,b){
  
  return a.concat(b);
}

var myFlattenedArray = myReduce(arrays,myConcat);

console.log(myFlattenedArray);

// now I will use the built in methods of reduce and concat

var anotherFlattenedArray = arrays.reduce(function(a,b) {return a.concat(b);});

console.log(anotherFlattenedArray);


// now to take advantage of some existing code...

newflattenedArray = arrays.reduce(myConcat)

console.log(newflattenedArray);




// Your code here.
// → [1, 2, 3, 4, 5, 6]