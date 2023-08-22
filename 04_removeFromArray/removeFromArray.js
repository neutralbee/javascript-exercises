const removeFromArray = function(inputArray, ...unwantedItems) {
let outputArray = new Array();
  
  for (let i = 0; i < inputArray.length; i++) {
    let arrayItem = inputArray[i];
    for (const searchItem of unwantedItems) {
      if (searchItem === arrayItem) {
        inputArray.splice(i,1);
        i--;
      } else {
        continue;
      }
    }
  }
return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray; 