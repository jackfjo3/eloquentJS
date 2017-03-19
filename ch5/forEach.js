function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}


function multiplyum(number) {
  product *= number;
  return product;
}

var product = 1;
myArray = [1,2,6,7,8];


forEach(myArray, multiplyum);

console.log(product);
// -> 672


sum = 0;
forEach(myArray, function(number) {
  sum += number;
});

console.log(sum);

// -> 24