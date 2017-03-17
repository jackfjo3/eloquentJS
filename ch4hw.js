/*
The sum of a range

The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

console.log(sum(range(1, 10)));
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
 */

// Your code here.

function range(start, end, stepSize) {
  var rangeArray = []; 
  var rangeLength = Math.abs(end - start); // absolute value to account for a start value > end value
  var nextElement = start;
  
  if (stepSize == undefined) {stepSize = 1;}
  
  for (i = 0; i <= rangeLength; i++) {
    rangeArray[i] = nextElement;
    nextElement += stepSize;
    
  }
  return rangeArray;
}

function sum(rangeArray) {//this argument rangeArray should be outside the scope of variable of same name in range function. I don't expect an issue.
  var total = 0;
  for (i = 0; i < rangeArray.length; i++) {
    total += rangeArray[i];
  }
  return total;
}
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55


/*
Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

*/

/* FIRST ATTEMPT
function reverseArray(origArray) {
  var newArray = [];
  // I don't like iterating backwards, will redo with upshift method instead
  for (i = origArray.length-1; i >= 0; i--) {
    newArray.push(origArray[i]);
  }
  return newArray;
}
*/




// Your code here.

function reverseArray(origArray) {
  var newArray = [];
 
  for (i = 0; i <= origArray.length-1; i++) {
    newArray.unshift(origArray[i]);
  }
  return newArray;
}

// reversing the arguments 'in place' rather than simply creating a new array

//THIS DOESN'T WORK YET... NOT TOO COMFORTABLE WITH WORKING DIRECTLY WITH ARGUMENT MANIPULATION YET.

function reverseArrayInPlace(swapArgs) {

  for (i = 0; i < Math.floor(swapArgs.length / 2); i++) { //only need to iterate through half of arguments because that's when you start to run into the mirrored positions in the 'array' that you've already swapped. Round down (floor) so that middle value of an odd-numbered array of arguments is left unchanged
    var movingArg = swapArgs[i];
    swapArgs[i] = swapArgs[swapArgs.length - i - 1];
    swapArgs[swapArgs.length - i - 1] = movingArg;
  
  }
  
  return swapArgs;
  
}


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]