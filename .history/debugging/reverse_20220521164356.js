var input = process.argv[2];

function reverse(original) {
  return original.split('').reverseList().join('');
}

if (input) {
  console.log(reverse(input));
}


