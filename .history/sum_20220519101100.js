const sum = function(number1, number2) {
  number1 = Number(process.argv[2]);
  number2 = Number(process.argv[3]);
  return number1 + number2;
}
console.log(sum(10, 5))

/* const sum = Number(process.argv[2]) + Number(process.argv[3]);

console.log(sum); */