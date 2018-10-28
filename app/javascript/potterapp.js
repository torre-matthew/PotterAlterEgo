let user = [];


$(document).ready(function(){
    $('select').formSelect();
    $('.modal').modal();
    $('.collapsible').collapsible();
    $(".dropdown-trigger").dropdown();  
    $('.sidenav').sidenav();

  let submitForm = () => {
    

  let seeker = {
    SeekerFirstName: $("#first_name").val().trim(),
    SeekerLastName: $("#last_name").val().trim(),
    SeekerPhoto: $("#image").val().trim(),
    SeekerScores: [ 
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
  postSeekerInfo(seeker);

  let seekerScore = parseInt(user[0].SeekerScores[0]) +
                    parseInt(user[0].SeekerScores[1]) +
                    parseInt(user[0].SeekerScores[2]) +
                    parseInt(user[0].SeekerScores[3]) +
                    parseInt(user[0].SeekerScores[4]) +
                    parseInt(user[0].SeekerScores[5]) +
                    parseInt(user[0].SeekerScores[6]) +
                    parseInt(user[0].SeekerScores[7]) +
                    parseInt(user[0].SeekerScores[8]) +
                    parseInt(user[0].SeekerScores[9]);

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
          displayAlterEgoInfo(0, charData); 
        }
        else if (seekerScore >= 43 && seekerScore <= 47) {
          displayAlterEgoInfo(1, charData);
        }
        else if (seekerScore >= 39 && seekerScore <= 42) {
          displayAlterEgoInfo(2, charData);
        }
        else if (seekerScore >= 34 && seekerScore <= 38) {
          displayAlterEgoInfo(3, charData);
        }
        else if (seekerScore >= 29 && seekerScore <= 33) {
          displayAlterEgoInfo(4, charData);
        }
        else if (seekerScore >= 24 && seekerScore <= 28) {
          displayAlterEgoInfo(5, charData);
        }
        else if (seekerScore >= 19 && seekerScore <= 23) {
          displayAlterEgoInfo(6, charData);
        }
        else if (seekerScore >= 14 && seekerScore <= 18) {
          displayAlterEgoInfo(7, charData);
        }
        else if (seekerScore >= 11 && seekerScore <= 13) {
          displayAlterEgoInfo(8, charData);
        }
        else {
          displayAlterEgoInfo(9, charData);
        }
  
    })
  
  }

  let postSeekerInfo = (seekerInfo) => {
    
    $.post("/api/seekers", seekerInfo,
      function(data) {
        if (data) {
          console.log("Data successfully posted to API");
        }
        else {
          console.log("There was an issue posting data to the api!!")
        }

      });

  }
  
  let displayAlterEgoInfo = (group, charData) => {
    let charGroup = group;
    let groupArraySize = charData[charGroup].length;
    let char = Math.floor((Math.random() * groupArraySize) + 0);
    let alterEgo = charData[charGroup][char] 
    setUpHandleBars(alterEgo);
  }

  let setUpHandleBars = (charData) => {
    
    let source = $("#result-template").text();
    let template = Handlebars.compile(source);
    let html = template(charData);
    $("#char-placement").html(html);
  }

  $(".find_alterego").on("click", function (event) {
      event.preventDefault();
      submitForm();
      // $(".select-wrapper input.select-dropdown").val("");
  })


  $(".modal-close").on("click", function (event) {
    $(".select-wrapper input.select-dropdown").val("");
    $("#first_name").val("");
    $("#last_name").val("");
    $("#image").val("");
})

});

//To DO:
  // DOn't allow submit until all req fields are filled out
  // once submitted user should be able to do the survey again
  // post user response to the server