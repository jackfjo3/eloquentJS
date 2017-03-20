var arrays = [[1, 2, 3], [4, 5], [6]];

function bringTogether(total, current) {
  return total.concat(current);
}

flattenedArray = arrays.reduce(bringTogether)

console.log(flattenedArray);

// → [1, 2, 3, 4, 5, 6]