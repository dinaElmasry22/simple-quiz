"use strict";

var questions = [{
  question: "JSON stands for _______.",
  answers: [{
    text: "JavaScript Object Notation",
    correct: true
  }, {
    text: "Java Object Notation",
    correct: false
  }, {
    text: "JavaScript Object Normalization",
    correct: false
  }, {
    text: "JavaScript Object-Oriented Notation",
    correct: false
  }]
}, {
  question: "JSON is a _____ for storing and transporting data.",
  answers: [{
    text: "xml format",
    correct: false
  }, {
    text: "text format",
    correct: true
  }, {
    text: "JavaScript",
    correct: false
  }, {
    text: "php format",
    correct: false
  }]
}, {
  question: "The JSON syntax is a subset of the _____ syntax.",
  answers: [{
    text: "Ajax",
    correct: false
  }, {
    text: "Php",
    correct: false
  }, {
    text: "HTML",
    correct: false
  }, {
    text: "JavaScript",
    correct: true
  }]
}, {
  question: "Who is the creator of JSON?",
  answers: [{
    text: "Alvin Alexander",
    correct: false
  }, {
    text: "Rasmus Lerdorf",
    correct: false
  }, {
    text: "Douglas Crockford",
    correct: true
  }, {
    text: "Jesse James Garrett",
    correct: false
  }]
}, {
  question: "In the JSON syntax, data is separated by _____.",
  answers: [{
    text: "Semicolons",
    correct: false
  }, {
    text: "Colons",
    correct: false
  }, {
    text: "Commas",
    correct: true
  }, {
    text: "Hyper",
    correct: false
  }]
}, {
  question: "In the JSON syntax, array is written within in ____.",
  answers: [{
    text: "Square brackets",
    correct: true
  }, {
    text: "Curley braces",
    correct: false
  }, {
    text: "Paratheses",
    correct: false
  }, {
    text: "None of the above",
    correct: false
  }]
}];
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");
var currentQuestionIndex = 0;
var score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  var currentQuestion = questions[currentQuestionIndex];
  var questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answers.forEach(function (answer) {
    var button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  var selectedBtn = e.target;
  var isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(function (button) {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }

    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showCore() {
  resetState();
  questionElement.innerHTML = "You Scored ".concat(score, " out of ").concat(questions.length, " !");
  nextButton.innerHTML = "play Again";
  nextButton.style.display = "block";
}

function handNextButton() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showCore();
  }
}

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    handNextButton();
  } else {
    startQuiz();
  }
});
startQuiz();
//# sourceMappingURL=script.dev.js.map
