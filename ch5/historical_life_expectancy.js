// this code does not work yet... I'm having trouble abstracting the task of dividing into centuries so I'm going to let it go for now.

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function groupBy(array,categoryFunct) {
  var generations = {}; // start with empty generation object, we'll fill with ages associated with each century
  array.forEach(function(person){
    var century = categoryFunct(person);
    if (century in generations) {
      generations[century].push(person);
    }
    else {
      generations[century] = person;
    }
  });
}
                

var byCentury = groupBy(ancestry, function(person) {
  return Math.ceil(person.died / 100); //
});

console.log(byCentury);