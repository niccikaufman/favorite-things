$(document).ready(function(){
  var myArray = [];
  $('#submit').on('click', function() {
    event.preventDefault()
    $('.req').each(function() {
      myArray.push($(this).val()); 
      console.log(myArray);
    });
  });     
});