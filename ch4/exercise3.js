/*

Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one is more efficient?

// Your code here.

*/

function arrayToList(array) {
  
  var list = {};
  
  for (i = array.length - 1; i >= 0; i--) {   
    list = {value: array[i], rest: list};    
  }
  return list;
}


function listToArray(list) {
  array = []; // initialize array to build and to ultimately return
  for (var node = list; node.value; node = node.rest) { //  node is initiallized at the list object that was fed in as an argument to the function listToArray(); the loop will continue as long as the list object has a value (loop will stop at the last rest: value because it's value is null (false) and kill loop; after each iteration, node is set to one branch deeper into the list object. (I bet this explanation is technically wrong in 10 ways but this is how I currently understand it)
     array.push(node.value);
  }
  
  return array;
  
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20