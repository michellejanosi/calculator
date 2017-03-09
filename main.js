$(document).ready(function() {
  var displayValue = "0";

  $('button').click(function() {
    var btnValue = $(this).data('value');

    if(btnValue === "=") {
      updateDisplay(calcResult(), true);
    } else if(btnValue === "clear") {
      updateDisplay('0', true);
    } else {
      if(btnValue === "+" ||
        btnValue === "-" ||
        btnValue === "*" ||
        btnValue === "/") {
        if((displayValue[displayValue.length-1] === '+') ||
           (displayValue[displayValue.length-1] === '-') ||
           (displayValue[displayValue.length-1] === '*') ||
           (displayValue[displayValue.length-1] === '/')) {
             displayValue = displayValue.substr(0, displayValue.length-1);
        }
      }
      updateDisplay(btnValue, false);
    }
  });

  var calcResult = function() {
    var result = eval(displayValue);
    return result;
  }

  var updateDisplay = function(value, overwrite){
    displayValue = displayValue.toString();

    if(overwrite === true) {
      displayValue = value;
    } else {
      if(displayValue == "0" ||
         displayValue == "+" ||
         displayValue == "*" ||
         displayValue == "/") {
          displayValue = value;
      } else {
        displayValue += value;
      }
    }
      $('.display').text(displayValue);
  };
});
