$(document).ready(function() {
  var personalities = ["1. Neurotic", "2. Unorganized", "3. Energetic", "4. Lethargic", "5. Anxious", "6. Pessimistic", "7. Optomistic", "8. Introverted", "9. Extroverted"]
  personalities.forEach(function(personality) {
    $("#inputtypes").append(`
      <input type="checkbox" name="personality-type" value="`+personality+`"> `+personality+`<br>
    `);
  });

  $("#personality").submit(function(event) {
    event.preventDefault();
    $("#output").removeClass("hidden");
    var numbers = 0;
    $("input:checkbox[name=personality-type]:checked").each(function() {
      var personalityType = $(this).val();
      var resultType = parseInt(personalityType);
      numbers = numbers + resultType
      console.log(numbers);
      $("#output").append(personalityType + "<br>");
    });

    if (numbers <=6) {
      $("#output").text("You are a Doc");
    } else if (numbers > 6 && numbers <=12){
      $("#output").text("You are a Grumpy");
    } else if (numbers > 12 && numbers <= 18) {
      $("#output").text("You are a Happy");
    } else if (numbers > 18 && numbers <= 24) {
      $("#output").text("You are a Sleepy");
    } else if (numbers > 24 && numbers <= 30) {
      $("#output").text("You are a Bashful");
    } else if (numbers > 30 && numbers <= 36) {
      $("#output").text("You are a Sneezy");
    } else {
      $("#output").text("You are a Dopey");
    }
  });
});
