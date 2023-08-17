const reverseString = function(word) {
  let stringLength = word.length;
  const stringArray = [];

  for (let i = stringLength; i >= 0; i--) {
    stringArray.push(word.charAt(i));
  }

  return stringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
