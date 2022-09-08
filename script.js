var quizPage = document.getElementById("quiz-page");

var questions = [
  {
    question: "I am question 1",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice2",
  },
  {
    question: "I am question 2",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice3",
  },
  {
    question: "I am question 3",
    choices: ["choice1", "choice2", "choice3", "choice4"],
    answer: "choice4",
  },
];

console.log(questions);
console.log(questions[1].choices[0]);
var questionIndex;
var timeLeft;

function checkAnswer(event) {}

function startQuiz() {
  console.log("I need to start the quiz");
  questionIndex = 0;
  timeLeft = 60;
  displayQuestion();
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
  questionIndex++ 
  quizPage.innerHTML=""
  displayQuestion()

}

document.getElementById("startquiz").addEventListener("click", startQuiz);
document.getElementById("quiz-page").addEventListener("click", checkAnswer);


// add timer and keep track of time. 