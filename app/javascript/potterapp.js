let user = [];


$(document).ready(function(){
    $('select').formSelect();
    $('.modal').modal();
  

  let submitForm = () => {
    

  let seeker = {
    firstname: $("#first_name").val().trim(),
    lastname: $("#last_name").val().trim(),
    scores: [ 
    $("#q1").find(":selected").val(),
    $("#q2").find(":selected").val(),
    $("#q3").find(":selected").val(),
    $("#q4").find(":selected").val(),
    $("#q5").find(":selected").val(),
    $("#q6").find(":selected").val(),
    $("#q7").find(":selected").val(),
    $("#q8").find(":selected").val(),
    $("#q9").find(":selected").val(),
    $("#q10").find(":selected").val()
    ] 
    
  }

  user.push(seeker);
  console.log(user);

  let seekerScore = parseInt(user[0].scores[0]) +
                    parseInt(user[0].scores[1]) +
                    parseInt(user[0].scores[2]) +
                    parseInt(user[0].scores[3]) +
                    parseInt(user[0].scores[4]) +
                    parseInt(user[0].scores[5]) +
                    parseInt(user[0].scores[6]) +
                    parseInt(user[0].scores[7]) +
                    parseInt(user[0].scores[8]) +
                    parseInt(user[0].scores[9]);

  console.log(seekerScore);
  callPotterCharApi(seekerScore);

}

  let callPotterCharApi = (seekerScore) => {
      
    $.ajax({
        url: "/api/potterchars",
        method: "GET"
      })
      .then(function (charData) {
        console.log(charData);
       
        if (seekerScore >= 48 && seekerScore <= 50) {
          let charGroup = 0;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName); 
        }
        else if (seekerScore >= 43 && seekerScore <= 47) {
          let charGroup = 1;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 39 && seekerScore <= 42) {
          let charGroup = 2;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 34 && seekerScore <= 38) {
          let charGroup = 3;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 29 && seekerScore <= 33) {
          let charGroup = 4;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 24 && seekerScore <= 28) {
          let charGroup = 5;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 19 && seekerScore <= 23) {
          let charGroup = 6;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 14 && seekerScore <= 18) {
          let charGroup = 7;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else if (seekerScore >= 11 && seekerScore <= 13) {
          let charGroup = 8;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
        else {
          let charGroup = 9;
          let groupArraySize = charData[charGroup].length;
          let char = Math.floor((Math.random() * groupArraySize) + 0);
          console.log(charData[charGroup][char].charName);
          console.log(charData[charGroup][char].charphoto);
          console.log(charData[charGroup][char].shortName);
        }
  
    })
  
  }
  
  let displayAlterEgoInfo = (group, arraylength) => {

  }

  let setUpHandleBars = () => {
    
    $.ajax({
      url: "/api/potterchars",
      method: "GET"
    })
    .then(function (charData) {
    });
  }

  $(".find_alterego").on("click", function (event) {
      event.preventDefault();
      submitForm();
      
      

  })





});