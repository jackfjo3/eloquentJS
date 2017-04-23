// manually entered layout array of strings that will be used to create the grid that represents the world we will create. Simply an array of strings for now.

var plan = ["############################", 
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

// coordinates in the world will be represented by vectors. We will usually utilize this as a new instance of the constructor each time we need a vector coordinate

function Vector(x,y) {
  this.x = x;
  this.y = y;
}

// translate one vector to another using plus method, feeding in 'other' vector and adding it to the vector being called (the vector upon which .plus is applied)

Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}
// ?? Question: Why don't we define this method inside of the Vector constructor? Is it to keep the constructor itself simple?

// now we define the Grid object

function Grid(width, height) {
  this.space = new Array(width * height); // area of the grid as an array. Note how the grid is translated from a two dimensional string (as shown above in the plan array) to an array of one dimension. 
  this.width = width;
  this.height = height;
}

// method to check if given vector is within the space of the grid 
Grid.prototype.isInside = function(vector) {
  return vector.x > 0 && vector.x < this.width && vector.y > 0 &&  vector.y < this.height;
};

// method to 
Grid.prototype.get = function(vector) {
  return this.space[vector.x + (this.width * vector.y)]; // the x + width*y notation is needed because we translate the 2 dimensional grid to a one dimensional grid
};

Grid.prototype.set = function(vector, value) {
  this.space[vector.x + (this.width*vector.y)] = value;
};



// test to see if Grid instances are working as planned:
var grid = new Grid(5,5);

console.log(grid.space);
// -> array of spaces of length 5*5

console.log(grid.get(new Vector(1,1)));
// -> undefined

grid.set(new Vector(1,1), "X");
console.log(grid.get(new Vector(1,1)));
// -> X

// Critters on the board only see what is in the 8 squares around them
// here is the directions object used to map direction names to coordinate OFFESETS. 
// The coordinates are all relative to where the critter is

var directions {
  "n": new Vector( 0,-1),
  "ne": new Vector( -1,-1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "w":  new Vector(-1,  0),
  "nw": new Vector(-1, -1)
};


// simple critter that travels empty spaces (directions that are null) until it hits a wall (#) and bounces off in random direction

// randomElement picks a random element from an array. in this case picks a random direction
function randomElement(array) {
  return array[Math.floor(math.random()*array.length)];
}

// create array of cardinal directions the critter can go
var directionNames = "n ne e se s sw w nw".split(" ");

// any instances of BouncingCritter will go in random directions
function BouncingCritter() {
  this.direction = randomElement(directionNames);
};

// view and look are defined later. If the random direction isn't empty, we look for one that is
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != "  ")
    this.direction = view.find("  ") || "s";
  return {type: "move", direction: this.direction} // after critter finds an open space, critter.direction is set to that empty space. we return an object with an action (move) and the direction (vector of the open space) 
};
















