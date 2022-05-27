function rollDice(rollTimes) {

  let newString = "";
  
  for (let x = 0; x <= rollTimes; x++) {
    newString += rollTimes + ", "
  }
  return `Rolled ${rollTimes} dice: ${newString}`
}



// return Math.floor(Math.random() * rollTimes)


console.log(rollDice(10))

