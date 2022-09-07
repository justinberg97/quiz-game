var questions = [{
    question: "I am question 1",
    choice1: "correct answer",
    choice2: "incorrect answer",
    choice3:"incorrect answer",
    choice4: "incorrect answer",
    answer: "correct answer",
}, {
    question: "I am question 2",
    choice1: "incorrect answer",
    choice2: "correct answer",
    choice3:"incorrect answer",
    choice4: "incorrect answer",
    answer: "correct answer",
}, {
    question: "I am question 3",
    choice1: "incorrect answer",
    choice2: "incorrect answer",
    choice3: "correct answer",
    choice4: "incorrect answer",
    answer: "correct answer",
},] 
console.log (questions) 
console.log (questions[1].choice2)
var questionIndex 


function checkAnswer(event) {
console.log (event)
}




function startQuiz () {
    console.log ("I need to start the quiz")
    questionIndex = 0
    displayQuestion()
}

function displayQuestion() {
    document.getElementById("question").textContent = questions[questionIndex].question
    document.getElementById("choice1").textContent = questions[questionIndex].choice1
    document.getElementById("choice2").textContent = questions[questionIndex].choice2
    document.getElementById("choice3").textContent = questions[questionIndex].choice3
    document.getElementById("choice4").textContent = questions[questionIndex].choice4
}












document.getElementById("startquiz").addEventListener("click", startQuiz)
document.getElementById("quiz-page").addEventListener("click", checkAnswer)