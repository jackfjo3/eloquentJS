var arrays = [[1, 2, 3], [4, 5], [6]];

// using the built-in reduce and concat is confusing me, so I will first attempt the problem with my custom functions. Later I will retry with the pre-defined method calls


function myReduce(array,combine) { // combine paramenter is a function. When we call myReduce, we will have to teach it the way to 'combine' the array values by feeding in a function for combine. The combine function will need 2 parameters, which are the running combination and the individual array member that is evaluated. Both are provided AUTOMATICALLY by the loop within myReduce funtion
  var reduced = [];
  for (var i = 0; i < array.length; i++) {
    reduced = combine(reduced,array[i])
  }
}

function myConcat(){}
//this is super sloppy there is no way manually adding the square brackets is the best way to do this.
console.log("["+arrays[0]+","+arrays[1]+"]");
var flattenedArray = arrays;
console.log(flattenedArray);




// Your code here.
// → [1, 2, 3, 4, 5, 6]