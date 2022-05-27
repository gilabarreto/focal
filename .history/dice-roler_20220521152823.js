/* let newString = "";
for (let x = 0; x < rollTimes.length; x++) {
  if (rollTimes[x] !== rollTimes[rollTimes.length - 1]) {
    newString += rollTimes[x] + ", "
  } else {
    newString += rollTimes[x]
  }
}
return newString */

function rollDice(rollTimes) {

  let newString = "";

  for (let x = 0; x <= rollTimes; x++) {
    if (x === rollTimes[rollTimes.length - 1]) {
      newString += rollTimes + ", "
    } else {
      newString += rollTimes
    }
  }
  return `Rolled ${rollTimes} dice: ${newString}`
}



// return Math.floor(Math.random() * rollTimes)


console.log(rollDice(10))

