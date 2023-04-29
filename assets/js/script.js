var x = document.getElementById("quiz-section");
var y = document.getElementById("description");


function quizToggle() {
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }

    if (y.style.display === "none") {
      y.style.display = "display";
    } else {
      y.style.display = "none";
    }
  }


  

  