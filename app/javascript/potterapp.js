let user = [];


$(document).ready(function(){
    $('select').formSelect();
  });

  

  
  let createUserRecord = () => {


  let seeker = {
    firstname: $("#first_name").val().trim(),
    lastname: $("#last_name").val().trim(),
    scores: [ $("#q1").find(":selected").val()

    ] 
    
  }

  user.push(seeker);
  console.log(user);

  }

  let submitForm = () => {

    $("#find_alter").on("click", function (event) {
      event.preventDefault();
      createUserRecord();

  })

}