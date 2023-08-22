const removeFromArray = function(inputArray, ...unwantedItems) {
let outputArray = new Array();
  
  for (const searchItem of unwantedItems) {
    for (const arrayItem of inputArray) {
      if (searchItem === arrayItem) {
        continue
      } else {
        outputArray.push(arrayItem);
      }
    }
  }
return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray; 