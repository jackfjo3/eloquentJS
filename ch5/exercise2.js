function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.

var hasKnownMother = ancestry.filter(function(person) {
  return byName[person.mother] != null;
});

var ageDifference = hasKnownMother.map(function(person) {
  return person.born - byName[person.mother].born;
});

var averageAgeDifference = average(ageDifference);

console.log(averageAgeDifference);




// → 31.2