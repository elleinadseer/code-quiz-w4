var quizSec = document.getElementById("quiz-section");
var description = document.getElementById("description");
var highscores= document.getElementById("highscores");
var hsLink= document.getElementById("highscores-link");

var results= document.getElementById("results");
var resultsNum = document.getElementById("resultsNum");

var qTitle = document.getElementById("question-title");
var qNum = 0;
var ql1 = document.getElementById("ql1");
var ql2 = document.getElementById("ql2");
var ql3 = document.getElementById("ql3");
var ql4 = document.getElementById("ql4");
var answer = document.getElementById("answer");

var correctAnswer = document.getElementById("correctAnswer");
var wrongAnswer = document.getElementById("wrongAnswer");

var hsSheet = document.getElementById("highscore-sheet");

var clearHS = document.getElementById("clear-highscores");

var timerNum = document.getElementById("timerNum");
var secondsLeft = 0;
var score = 0;
var countdownTimer;

// Refresh for the return button in the highscores page 
function refreshPage(){
    window.location.reload();
} 

// Hiding sections and the View Highscores link
function quizToggle() {
      quizSec.style.display = "block";
      description.style.display = "none";
        hsLink.style.display = "none";
      }

  function viewHS() {
        highscores.style.display = "block";
        description.style.display = "none";
        hsLink.style.display = "none";
  }

  // The timer

  function startTimer() {
    secondsLeft = 75
    score = 0;

    countdownTimer = setInterval(function () {
        if (secondsLeft > 0) {
            timerNum.textContent = secondsLeft;
        }
        else {
            finalResult();
        }
        secondsLeft--;
    }, 1000);
  }

  // When timer reaches 0 then show final result
  function finalResult() {
    clearInterval(countdownTimer);

    timerNum.textContent="0"

    results.style.display = "block";
    quizSec.style.display = "none";

    resultsNum.textContent = score;
  }

  // Replaces template questions with new answers
    function optionSelect() {
        qNum++;

        if (qNum >= questions.length) {
            finalResult();
            return; }

        ql1.textContent = questions[qNum].choices[0];
        ql2.textContent = questions[qNum].choices[1];
        ql3.textContent = questions[qNum].choices[2];
        ql4.textContent = questions[qNum].choices[3];

        qTitle.textContent = questions[qNum].title;
        qTitle.textContent = questions[qNum].title;
        qTitle.textContent = questions[qNum].title;
        qTitle.textContent = questions[qNum].title
    };

// Displays "correct" message and increases score
     function correctMessage() {
     correctAnswer.style.display = "block"
    
    if (correctAnswer.style.display = "block")
    wrongAnswer.style.display = "none"

    score++;}

// Displays "wrong" message and decreases score

     function wrongMessage() {
     wrongAnswer.style.display = "block"

     if (wrongAnswer.style.display = "block")
     correctAnswer.style.display = "none"
    
    score--;
    secondsLeft -= 10; }

// Saves score by storing it into local storage using JSON
    function saveScore() {
        var initials = document.getElementById("initials").value;
        var score = document.getElementById("score").value;
        var scoreObj = { initials: initials, score: score };
        var scores = JSON.parse(localStorage.getItem("scores")) || [];
        scores.push(scoreObj);
        localStorage.setItem("scores", JSON.stringify(scores));

        window.location.reload();

    }
      
    // Displays scores using JSON
      function displayScores() {
      var scores = JSON.parse(localStorage.getItem("scores")) || [];
      scores.sort(function(a, b) {
          return b.score - a.score;
        });

    var highscore = document.getElementById("highscore-sheet");
    highscore.innerHTML = " ";

    // For loop for scores
        for (var i = 0; i < scores.length; i++) {
          var scoreObj = scores[i];

          // Creates rows and table data containing score and initials 

          var row = document.createElement("tr");
          var initialsCell = document.createElement("td");
          initialsCell.textContent = scoreObj.initials;
          var scoreCell = document.createElement("td");

          scoreCell.textContent = scoreObj.score;

                    // Appends the text onto the rows
          row.appendChild(document.createTextNode("Initials:")); 
          row.appendChild(initialsCell);
          row.appendChild(document.createTextNode(" | Score:   ")); 
          row.appendChild(scoreCell);
          highscore.appendChild(row);
        }
      }

      // Runs displayScores on load 
      window.onload = function() {
        displayScores();
      };
