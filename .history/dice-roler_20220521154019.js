function rollDice(rollTimes) {

  let result = "";
  let min = Math.ceil(1);
  let max = Math.floor(6);
  for (let x = 0; x < rollTimes; x++) {
    if (rollTimes !== rollTimes.length - 1) {
      result += result.join(Math.floor(Math.random() * (max - min + 1) + min))
    } /* else {
      result += Math.floor(Math.random() * (max - min + 1) + min)
    } */
  }
  return `Rolled ${rollTimes} dice: ${result}`
}

// return Math.floor(Math.random() * rollTimes)

console.log(rollDice(5))

