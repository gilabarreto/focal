var input = process.argv[2];

var newArray = [1, 2, 3]

function reverse(original) {
  return original.split('').reverse().join('');
}

/* if (input) {
  console.log(reverse(input));
} */

console.log(reverse(newArray))