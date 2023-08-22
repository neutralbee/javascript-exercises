const sumAll = function(int1, int2) {
  if(typeof int1 != "number" || typeof int2 != "number"
                  || int1 < 0 || int2 < 0) {
    return "ERROR";
  }

  let firstNumber;
  let lastNumber;
  
  if(int1 > int2) {
    firstNumber = int2;
    lastNumber = int1;
  } else {
    firstNumber = int1;
    lastNumber = int2;
  }
  
  //Gauss formula = (a+b)*(b-a+1)/2, a = first integer, b = last integer
  let sumNumbers = (firstNumber + lastNumber) * (lastNumber-firstNumber+1)/2;
  return sumNumbers
};

// Do not edit below this line
module.exports = sumAll;
