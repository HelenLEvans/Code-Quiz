const questions = [
    {
        question: "Commonly used data types do NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store:",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["a. JavaScript", "b. terminal/bash", "c. for loop", "d. console.log"],
        answer: "d. console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        choices: ["a. quotes", "b. curly brackets", "c. parentheses", "d. square brackets"],
        answer: "b. curly brackets"
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables?",
        choices: ["a. commas", "b. curly brackets", "c. parentheses", "d. quotation marks"],
        answer: "d. quotation marks"
    }

]

var timer = document.getElementById("timer");
var quizChallenge = document.getElementById("quizChallenge");
var start = document.getElementById("start");
var startBtn = document.getElementById("startBtn");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn1");
var choiceB = document.getElementById("btn2");
var choiceC = document.getElementById("btn3");
var choiceD = document.getElementById("btn4");
var answerCheck = document.getElementById("answerCheck");
var scores = document.getElementById("scores");
var finalScore = document.getElementById("finalScore");
var initialInput = document.getElementById("initialInput");
var submitInitials = document.getElementById("submitInitials");
var highScores = document.getElementById("highScores");
var listHighScores = document.getElementById("listHighScores");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");

var correct = 0;
var questionNum = 0;
var scored;
var indecks = 0;

var totalTime = 100;
function newQuiz() {
    indecks = 0;
    totalTime = 100;
    timeLeft.textContent = totalTime;
    initialInput.textContent = "";

    choiceA.style.display = "unset";
    choiceB.style.display = "unset";
    choiceC.style.display = "unset";
    choiceD.style.display = "unset";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    timer.style.display = "block";
    timesUp.style.display = "none";

    var startTimer = setInterval(function() {
        totalTime--;
        timeLeft.textContent = totalTime;
        if(totalTime <= 0) {
            clearInterval(startTimer);
            if (indecks < questions.length - 1) {
                gameOver();
            }
        }
    },1000);

showQuiz();
}

// quiz
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = indecks[i].question;
  choiceA.textContent = indecks[i].choices[0];
  choiceB.textContent = indecks[i].choices[1];
  choiceC.textContent = indecks[i].choices[2];
  choiceD.textContent = indecks[i].choices[3];
}

function checkAnswer(answer) {
    if (question[indecks].answer === question[i].choices[answer]) {
      correct++;
      answerCheck.textContent = "Great Job!";
    } else {
      totalTime -= 10;
      timeLeft.textContent = totalTime;
      answerCheck.textContent =
        "Incorrect!!! :( The answer is: " + question[i].answer;
    }
  
    i++;
    if (i < question.length) {
      nextQuestion();
    } else {
      gameOver();
    }
  }