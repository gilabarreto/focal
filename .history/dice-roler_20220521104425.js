function rollDice(rollTimes) {
  let newString = "";
  for (let x = 0; x < rollTimes.length; x++) {
    newString += Math.floor(Math.random(6)) + ", "
  }
  return `Rolled 3 dice: ${newString}`
}
console.log(rollDice(3))