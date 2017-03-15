/*
LOOPING A TRIANGLE
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (var hashRow = '#'; hashRow.length <= 7; hashRow = hashRow + '#')
  console.log(hashRow);

/*

FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

*/

for (var counter = 1; counter <= 100; counter++) {
  if (counter %3 === 0 && counter %5 === 0) {
    console.log('FizzBuzz!');
  }
  else if (counter%3 === 0) {
    console.log('Fizz');
  }
  else if (counter % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(counter);
  }
};


/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

/*almost worked... still needs to alternate # and o at the start of each line

var size = 8, row = "", countHash = 0, countCircle = 0;


for (var columnNum = 1; columnNum <= size; columnNum++) {
  for (row = ""; row.length < size;) {
    if ((countHash+countCircle) % 2 === 0) {
      row = row + 'o';
      countCircle++;
    }
    else {
      row = row + '#';
      countHash++;
    }
  }
  console.log(row)
}

*/
//second attempt

var size = 8, board = "";


for (var y = 1; y <= size; y++) {
  for (var x = 1; x < size; x++) {
    if ((x+y)%2 === 0) {
      board += 'o';
    }
    else {
      board += '#';
    }
  }
  board += "\n";
}

console.log(board);
