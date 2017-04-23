// calling a function with the new keyword in front of it causes it to be treated as a constructor
// An object created with new is said to be an instance of its constructor.


// capitalize constructor names to distinguish from other functions
function Elf(sound) {
  kind = 'regular',
  this.laugh = function(sound) {console.log(kind + ' kind of elf says ' + sound);}
}

var builderElf = new Elf('lol');

console.log(builderElf.laugh('lol'));

// we can add properties to prototypes
Elf.prototype.build = function(toy) { console.log(this.kind + ' kinds of elf build ' + toy); }

console.log(builderElf.build('hot wheels'));

var santaClause = new Elf('hohoho');

santaClause.kind = 'big';

console.log(santaClause.build('sleighs'));