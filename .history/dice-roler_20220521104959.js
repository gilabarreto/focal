function rollDice(rollTimes) {
/*   let newString = "";
  for (let x = 0; x < rollTimes.length; x++) { */
    return Math.floor(Math.random(6)) * rollTimes
/*   }
  return `Rolled 3 dice: ${newString}` */
}
console.log(rollDice(3))