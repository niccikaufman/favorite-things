const onFormSubmit = function() { 
  let faveThings = [];
  $("form#fave-things").submit(function(event){
    event.preventDefault();
    faveThings.push($("#fave-color"))
  })
  console.log(faveThings);
};


