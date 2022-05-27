const getRaisinAlarm = function (cookies) {
  for (let item = 0; item < cookies.length; item++) {
    if (cookies[item] === "🍇") {
      return "Raisin alert!"
    } else {
      null;
    }
  }
  return "All good!";
};

const raisinAlarmArray = function (cookies) {
  let result = [];
  for (let x = 0; x < cookies.length; x++) {
    /*     for (let y = 0; y < cookies[x].length; y++) {
          if (cookies[x][y] === "🍇") {
            result.push("Raisin alert!")
            break;
          } 
        }
        result.push("All good!"); */
    console.log("cookies[x]", cookies[x])

    const nestedRaisin = getRaisinAlarm(cookies[x]);

    console.log("nestedRaisin", nestedRaisin);
    
    result.push(nestedRaisin);
  }
  return result;
}

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"]
  ]
));