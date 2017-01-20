// backend
var returnNumber = function(number) {

}
// frontend

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var answer = returnNumber(number);

    $("#answer").append(number);
  })
});
