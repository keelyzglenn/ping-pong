// backend
var returnNumber = function(userInput) {
  var numbersArray = ["0", "1" ,"2", "3", "4", "5", "6", "7", "8", "9"];
  var isNumber = true;
  var userInputSplit = ($("#input").val()).split("");

// is a number?
  userInputSplit.forEach(function(number){
    var numQuery = numbersArray.indexOf(number);
    if (numQuery === -1) {
      isNumber= false;
    }
  });

  if (!isNumber) {
    return "Your input is invalid. Please only enter numbers";
  } else {
    return "Your number is " + userInputSplit;
  }

}


// frontend
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var userInput = $("#input").val();
    var answer = returnNumber(userInput);

    $("#answer").text(returnNumber);
  })
});
