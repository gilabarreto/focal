const sum = function() {
  sum = Number(process.argv[2]) + Number(process.argv[3]);
  return sum;
}
console.log(sum);