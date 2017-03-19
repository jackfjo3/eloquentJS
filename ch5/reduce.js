// myReduce will take an array, and reduce it down to one value. The way myReduce will combine the array values is determined the combine paramenter. This is a FUNCTION we will feed to myReduce as an argument to tell it how to combine all the array values. The combine function we feed into myReduce must take 2 arguments, which are given to it by myReduce. 

function myReduce(array, combine) {
  var current = 0;
  for (var i = 0; i < array.length; i++) {
    current = combine(current, array[i]);
  }
  return current;
}

myArray = [1,2,3,4,-1];

// myReduce used for the first time. Passes the array and a function as arguments. The function is defined as it is passed as an argument in the second paramenter position of myReduce during the function call
console.log(myReduce(myArray, function(a,b) {
  return a + b;
}));
// -> 9


// let's try defining the function FIRST, then feeding it in as a named function rather than defining it as we use it
function mySum(a,b) {
  return a + b;
}
// Rather than defining the sum function when myReduce is called, I have predefined the a mySum funciton. The two parameters of mySum(a,b) are fed to mySum from within the myReduce loop
console.log(myReduce(myArray,mySum));

function myAverage(array) {
  function myPlus(a,b) {
    return a+b;
  }
  // here we return the average by totalling the array and deviding by the array.length. We must use myPlus as the argument of myReduce here rather than simply adding the two values AS an argument because you cannot pass opperators in as arguments, only values (which include funtions)
  return myReduce(array,myPlus) / array.length;
}

console.log(myAverage(myArray));

// just for practice i;ll make another average funciton and use mySum inside. I could NOT use myPlus again because that is within a separate function (myAverage) so this variable is out of scope

function myNewAverage(array) {
  return myReduce(array, mySum) / array.length;
}

console.log(myNewAverage(myArray));