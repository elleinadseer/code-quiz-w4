var quizSec = document.getElementById("quiz-section");
var description = document.getElementById("description");
var highscores= document.getElementById("highscores");
var hslink= document.getElementById("highscores-link");

function refreshPage(){
    window.location.reload();
} 

function quizToggle() {
    if (quizSec.style.display === "block") {
      quizSec.style.display = "none";
    } else {
      quizSec.style.display = "block";
    }

    if (description.style.display === "none") {
      description.style.display = "display";
    } else {
      description.style.display = "none";
    }
  }

  function viewHS(event) {
    if (highscores.style.display === "block") {
        highscores.style.display = "none";
      } else {
        highscores.style.display = "block";
      }
  
      if (description.style.display === "none") {
        description.style.display = "display";
      } else {
        description.style.display = "none";
      }

      if (hslink.style.display === "none") {
        hslink.style.display = "display";
      } else {
        hslink.style.display = "none";
      }

      event.preventDefault();
  }

  

  