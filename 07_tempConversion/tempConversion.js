const convertToCelsius = function(tempF) {
  tempC = (tempF - 32) * (5 / 9);
  return parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  tempF = (tempC * (9 / 5) + 32);
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
