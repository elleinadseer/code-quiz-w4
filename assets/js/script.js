var quizSec = document.getElementById("quiz-section");
var description = document.getElementById("description");
var highscores= document.getElementById("highscores");
var hslink= document.getElementById("highscores-link");

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
        hslink.style.display = "none";
      }

  function viewHS() {
        highscores.style.display = "block";
        description.style.display = "none";
        hslink.style.display = "none";
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

  function finalResult() {
    clearInterval(countdownTimer);

    timerNum.textContent="0"

    results.style.display = "block";
    quizSec.style.display = "none";

    resultsNum.textContent = score;
  }

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


     function correctMessage() {
     correctAnswer.style.display = "block"
    
    if (correctAnswer.style.display = "block")
    wrongAnswer.style.display = "none"}

     function wrongMessage() {
     wrongAnswer.style.display = "block"

     if (wrongAnswer.style.display = "block")
     correctAnswer.style.display = "none"}


  
  