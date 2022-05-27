const sum = function(number1, number2) {
  return number1 + number2;
};
console.log(sum(Number(process.argv[2]), Number(process.argv[3])));

/* const sum = Number(process.argv[2]) + Number(process.argv[3]);

console.log(sum); */