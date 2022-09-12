var countdownTimer = document.getElementById("timer");
console.log(countdownTimer);
var quizPage = document.getElementById("quiz-page");
var startPage = document.getElementById("start-page");
var highScorePage = document.getElementById("high-score-page");
var submitButton = document.getElementById("submit-score");
questionIndex = 0;
var questions = [
  {
    question: "What is an array?",
    choices: ["A type of application", "A list of items", "Css styling technique", "An html feature"],
    answer: "A list of items",
  },
  {
    question: "What is JQuery?",
    choices: ["A website plugin", "The first version of JavaScript", "A fast, small, and feature-rich JavaScript library", "A feature no longer in use"],
    answer: "A fast, small, and feature-rich JavaScript library",
  },
  {
    question: "What is a Variable?",
    choices: ["A way to link your JavaScript to an HTML page", "A command used only in If statements", "A type of Css styling", "Stores values for future use"],
    answer: "Stores values for future use",
  },
];

var lastQuestion = questions[2].question;
console.log(lastQuestion)

console.log(questions);
console.log(questions[1].choices[0]);
var questionIndex;
var timeLeft;
var quizTimer;

function checkAnswer(event) {}

function startQuiz() {
  timeLeft = 60;
  startTimer();
  startPage.style.display ="none";
  quizPage.style.display ="block";
  displayQuestion();
}

function endGame() {
clearInterval(quizTimer);
quizPage.style.display ="none";
highScorePage.style.display ="block";
document.getElementById("score").textContent = timeLeft;
}

function startTimer() {
   quizTimer = setInterval(function() {
    timeLeft --;
    countdownTimer.textContent = timeLeft;
  } ,1000);
}

function submitScore() {
  var initials = document.getElementById("initials");
  var allHighScores = localStorage.getItem("high-scores");
  var newPerson = {
    initials: initials,
    score: timeLeft,
  }
  allHighScores.push(newPerson)
  localStorage.setItem(
    "high-score", allHighScores
  )

}

function displayQuestion() {
  var question = document.createElement("h1");
  question.textContent = questions[questionIndex].question;
  quizPage.appendChild(question);
  

  for (
    let index = 0;
    index < questions[questionIndex].choices.length;
    index++
  ) {
    const choice = questions[questionIndex].choices[index];
    var questionButton = document.createElement("button");
    questionButton.textContent = choice;
    questionButton.addEventListener("click", choicesSelector);
    quizPage.appendChild(questionButton);
  } 
}

function choicesSelector(event) {
  console.log(event.target);
  var userChoice = event.target.textContent;
  var currentAnswer = questions[questionIndex].answer;
  if (userChoice !== currentAnswer) {
    timeLeft -= 5;
    console.log(timeLeft);
  }
  if (lastQuestion !== questions[questionIndex].question) {
    questionIndex++ 
} else {
  
  endGame()
   
 }
 quizPage.innerHTML="" 
  displayQuestion() 

}

document.getElementById("startquiz").addEventListener("click", startQuiz);
document.getElementById("quiz-page").addEventListener("click", checkAnswer);
submitButton.addEventListener("click", submitScore);


// add timer and keep track of time. 