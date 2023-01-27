const convertToCelsius = function(degreeF) {
  return Math.round(((degreeF - 32) * 5 / 9) * 10) / 10;

};

const convertToFahrenheit = function(degreeC) {
  return Math.round(((degreeC * 9 / 5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
