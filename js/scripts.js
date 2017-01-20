// backend
var returnNumber = function(userInput) {
  var numbersArray = ["0","1","2","3","4","5","6","7","8","9"];
  var isNumber = true;
  var userInput = parseInt($("#input").val());
  var userInputSplit = userInput.toString().split("");

  var count = function (x, y) {
    var start = 0;
    var y = userInput
    var numbers = [];
    for (var i = 0; i < y; i++) {
      numbers.push(i);
    }
    return numbers;
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
    return "Your number is " + count(userInput);
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







// number input change
  // var multiConvert = function(userInput) {
  //   for (i = 0; i < userInput.length; i++) {
  //     if (userInput[i] % 3 === 0) {
  //       return (userInput[i] = "Ping");
  //     } else if (userInput[i] % 5 === 0) {
  //       return (userInput[i] = "Pong");
  //     } else if (userInput[i] % 15 === 0) {
  //       return (userInput[i] = "Ping-Pong");
  //     } else {
  //       return userInput;
  //     }
  //   }
  // }

  // var singleConvert = function(userInput) {
  //   var singleDigit = parseInt(userInputSplit[userInputSplit.length -1]);
  //   if (singleDigit % 3 === 0) {
  //     return "Ping";
  //   } else if (singleDigit % 5 === 0) {
  //     return "Pong";
  //   } else if (singleDigit % 5 === 0) {
  //      return "Ping-Pong";
  //   } else {
  //     return userInput;
  //   }
  // }
