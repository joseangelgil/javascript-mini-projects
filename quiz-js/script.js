const quizQuestions = [
  {
    question: "What is the capital of Canada?",
    a: "Toronto",
    b: "Vancouver",
    c: "Ottawa",
    d: "Montreal",
    correct: "c"
  },
  {
    question: "Which planet is known as the Red Planet?",
    a: "Earth",
    b: "Mars",
    c: "Jupiter",
    d: "Venus",
    correct: "b"
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    a: "William Shakespeare",
    b: "Charles Dickens",
    c: "Jane Austen",
    d: "Mark Twain",
    correct: "a"
  },
  {
    question: "What is the chemical symbol for gold?",
    a: "Au",
    b: "Ag",
    c: "Fe",
    d: "Hg",
    correct: "a"
  },
  {
    question: "Which of the following is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d"
  }
]

const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".option");
const radioEls = document.querySelectorAll("input");
const btnEl = document.getElementById("btn");
const $score = document.getElementById("score");
const points = document.getElementById("points");
const restartBtn = document.getElementById("restartBtn");

let currentQuestionIndex = 0;
let score = 0;
let answer = null;

displayNextQuiz();

function displayNextQuiz() {
  if(currentQuestionIndex < quizQuestions.length) {
    questionEl.innerText = quizQuestions[currentQuestionIndex].question;
    radioEls.forEach(radioBtn => {
      radioBtn.checked = false;
    })
    optionEls.forEach(option => {
      option.innerText = quizQuestions[currentQuestionIndex][option.id]
    })
  } else {
    $score.style.display = "block";
    points.innerText = `${score}/${quizQuestions.length}`
  }  
}

function getAnswer() {
  radioEls.forEach(radioBtn => {
    if (radioBtn.checked === true) answer = radioBtn.id;
  })
  return answer;
}

function changeAnswerFormat() {
  answer = getAnswer()
  switch(answer) {
    case "option1":
      answer = "a";
      break;
    case "option2":
      answer = "b";
      break;
    case "option3":
      answer = "c";
      break;
    case "option4":
      answer = "d";
      break;
  }
  return answer;
}

btnEl.addEventListener("click", () => {  
  answer = changeAnswerFormat()  
  if(answer) {
    if(answer === quizQuestions[currentQuestionIndex].correct) score++;
    currentQuestionIndex++;
    displayNextQuiz();
    console.log(answer)
  }  
})

restartBtn.addEventListener("click", () => {
  $score.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  answer = null;
  displayNextQuiz();
})




