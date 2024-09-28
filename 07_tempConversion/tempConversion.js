const convertToFahrenheit = function(tempInFahrenheit) {
  let convInCelcius = (9*tempInFahrenheit)/5 +32;
  return round(convInCelcius);
};

const convertToCelsius = function(tempInCelsius) {
  let convInFahrenheit = (tempInCelsius-32)*(5/9);
  return round(convInFahrenheit);
};

function round(number){
  if (Number.isInteger(number)){
      return number;
  } else {
    newNumb=+number.toFixed(1); 
    return newNumb;
  }
};


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
