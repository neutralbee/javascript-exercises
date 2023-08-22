const removeFromArray = function(array, ...unwantedItems) {
  for (let i = 0; i < array.length; i++) {
    let arrayItem = array[i];
    for (const searchItem of unwantedItems) {
      if (searchItem === arrayItem) {
        array.splice(i,1);
        i--;
      } else {
        continue;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray; 