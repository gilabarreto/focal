const raisinAlarm = function(cookies) {
  for (let item = 0; item < cookies.length; item++) {
    if (cookies[item] === "🍇") { 
      return "Raisin alert!"
     } else {
        null;
      }
    }

  return "All good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
