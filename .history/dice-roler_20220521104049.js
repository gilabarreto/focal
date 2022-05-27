function rollDice(rollTimes) {
  let newString = "";
  for (let x = 0; x < rollTimes.length; x++) {
    if (rollTimes[x] !== rollTimes[rollTimes.length - 1]) {
      newString += Math.random(6)
    } else {
      newString += rollTimes[x]
    }
  }
  return `Rolled 3 dice: ${newString}`
}
console.log(rollDice(3))