// filter the array of all people with unknown mothers

function myFilter(array,test) {
  var passed = [];
  for (i=0; i<array.length;i++) {
    if (test(array[i])) {
      passed.push(array[i]);
    }
  }
  return passed;
}


var byName = {};

// this restructures ancestory array so that each person's object name is their name rather than just a number
ancestry.forEach(function(person) {
  byName[person.name] = person;
})

console.log('byName:');
console.log(byName);

// this creates a new array with only people with known moms


function hasKnownMother(person) {
  if (byName[person.mother]) {
    return true;
  }
}

var ancestorsWithKnownMothers = myFilter(ancestry, hasKnownMother);





function reduceAgeMothersAtBirth(array, f) {
  var avgAge = 0;
  for (var i = 0; i < array.length; i++) {
    avgAge = f(array[i]);
  }
}


function ageMomAtBirth(person, yearMomBorn) {
  return person.born - yearMomBorn;
}

console.log(ancestry.reduce(ageMomAtBirth));