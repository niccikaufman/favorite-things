$(document).ready(function(){
  $("#reset").click(function() {
    $('#fave-things').trigger("reset");
    $('.output').hide(); 
  });
  let myArray = [];
  $('#submit').on('click', function() {
    event.preventDefault();
    $('.req').each(function() {
      myArray.push($(this).val()); 
    });
    $("#fave-color-output").text(myArray[0]);
    $("#fave-animal-output").text(myArray[1]);
    $("#fave-season-output").text(myArray[2]);
    $("#fave-band-output").text(myArray[3]);
    $("#fave-movie-output").text(myArray[4]);
    $('.output').show(); 
  }); 
});