// first let's make a protoObject for all elves. proto elves will start with kind: 'regular' and have the laugh

var protoElf = {
  kind: 'regular',
  laugh: laugh
};

// next let's define what the laugh method does. Here it takes an argument to tell what the laugh sounds like. 

function laugh(sound) { console.log('the ' + this.kind + ' kind of elf laughs like ' + sound)}

var builderElf = Object.create(protoElf)

builderElf.laugh('lol');

var santaClause = Object.create(protoElf);
// santa was built with the elf protoObject, but we will give it a new kind equal to 'big elf'
santaClause.kind = 'big elf';
santaClause.laugh('hohoho');

