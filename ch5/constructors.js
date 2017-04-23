// first let's make a protoElf. In this example santa is a kind of elf

function laugh(sound) { return console.log('the ' + kind + 'kind of elf laughs like ' + sound)}

var protoElf = {
  kind: regular;
  laugh: laugh;
}

var builderElf = Object.create(protoElf)

console.log(builderElf.laugh(lol));

