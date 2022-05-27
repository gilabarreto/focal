var input = process.argv[2];



function reverse(original) {
  if (input) {
    console.log(reverse(input));
  }
  return original.split('').reverseList().join('');
}
