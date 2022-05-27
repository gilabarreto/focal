const sum = function (number1, number2) {
  const number1 = Number(process.argv[2])
  const number2 = Number(process.argv[3])
  return number1 + number2
}

console.log(sum);