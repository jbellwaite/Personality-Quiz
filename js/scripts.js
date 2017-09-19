$(document).ready(function() {
  var workTravels = ["bike", "car", "carpool", "walk", "bus", "train", "taxi", "rideshare"]
  workTravels.forEach(function(workTravel) {
    $("#worktravel").append(`
      <input type="checkbox" name="work-transportation" value="`+workTravel+`"> `+workTravel+`<br>
    `);
  });
  var funTravels = ["bike", "car", "scooter", "motorcycle", "skateboard", "rideshare", "fly"]
  funTravels.forEach(function(funTravel) {
    $("#funtravel").append(`
      <input type="checkbox" name="fun-transportation" value="` +funTravel+`"> `+funTravel+` <br>
    `);
  });
  $("form#travel").submit(function(event) {
    event.preventDefault();
    $("#output1").removeClass("hidden");
    $("input:checkbox[name=work-transportation]:checked").each(function() {
      var workTravelMode = $(this).val();
      $("#output1").append(workTravelMode + "<br>");
    });
    $("#output2").removeClass("hidden");
    $("input:checkbox[name=fun-transportation]:checked").each(function() {
      var funTravelMode = $(this).val();
      $("#output2").append(funTravelMode + "<br>");
    });
  });
});
