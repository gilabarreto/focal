function rollDice(rollTimes) {

  let result = "";
  let min = Math.ceil(1);
  let max = Math.floor(6);
  for (let x = 0; x < rollTimes; x++) {
    if (x === rollTimes + 1) {
      result += Math.floor(Math.random() * (max - min + 1) + min) 
    } else {
      result += Math.floor(Math.random() * (max - min + 1) + min)+ ", "
    }
  }
  return `Rolled ${rollTimes} dice: ${result}`
}

console.log(rollDice(5))

