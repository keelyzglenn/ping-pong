// backend
var returnNumber = function(userInput) {
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
  var isNumber = true;
  var userInput = parseInt($("#input").val());
  var userInputSplit = userInput.toString().split("");



// number input change
  var singleConvert = function(userInput) {
    var singleDigit = parseInt(userInputSplit[userInputSplit.length -1]);
    if (singleDigit % 3 === 0) {
      return "Ping";
    } else if (singleDigit % 5 === 0) {
      return "Pong";
    } else if (singleDigit % 5 === 0) {
       return "Ping-Pong";
    } else {
      return userInput;
    }
  }

  // is a number?
  userInputSplit.forEach(function(number){
    var numQuery = numbersArray.indexOf(number);
    if (numQuery === -1) {
      isNumber = false;
    }
  });

  if (!isNumber) {
    return "Your input is invalid. Please only enter numbers";
  } else {
    return "Your number is " + singleConvert(userInput);
  }
};

// frontend
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input").val());
    var result = returnNumber(userInput);
    $("#answer").text(result);
  });
});
