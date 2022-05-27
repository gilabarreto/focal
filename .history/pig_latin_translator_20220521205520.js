
// expected output: igpay atinlay siay illysay

var originalWords = process.argv.slice(2);
var pigLatinWords = [];

console.log("originalWords is", originalWords);
console.log("pigLatinWords is", pigLatinWords);

for (var i = 1; i < originalWords.length; i++) {
  pigLatinWords.push(translateToPigLatin(originalWords[i]));
}

console.log(pigLatinWords.join(' '));

function translateToPigLatin(word) {
  return word.slice(2, word.length) + word[0] + "ay";
}

console.log(translateToPigLatin("pig latin is silly"))