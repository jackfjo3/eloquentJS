// Minimum

// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.



// Your code here.

// Your code here.
var min = function(a,b) {
  if (a < b) {
    return a;
  }
  else if (a > b) {
    return b;
  }
  else if (a === b) {
    return 'equal values';
  }
  else {
    return 'error'
  }
    
}

console.log(min(10, 10));
// → 0
console.log(min('red', -10));
// → -10



/*

Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to check whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

 Zero is even.

 One is odd.

 For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a number parameter and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

// Your code here.
*/

function isEven(value) {
  function isZero(step) {
    if (step === 0) {
      return true;
    }
    else if (step === 1) {
      return false;
    }
    else if (step > 1) {
      step = step - 2;
      return isZero(step);
    } 
  }
  return isZero(value);
}
console.log(isEven(500));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

/*
Bean counting

You can get the Nth character, or letter, from a string by writing "string".charAt(N), similar to how you get its length with "s".length. The returned value will be a string containing only one character (for example, "b"). The first character has position zero, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/

//this code still doesnt work... reports 0 Bs

var countBs = function(textB) {
  
  var numberOfBs = 0;
  
  for (N = 0; N < textB.length; N++) {
    if (textB.charAt(N) === 'B') {
      numberOfBs++;
    }
  }
  
  return numberOfBs;

}


function countChar(textMatch, match) {
  var numberOfMatches = 0;
  for (N = 0; N < textMatch.length; N++) {
    if (textMatch.charAt(N) === match) {
      numberOfMatches++;
    }
  }
  
  return numberOfMatches;
 
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4