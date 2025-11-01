
var currentQuestionIndex = 0;
var score = 0;
var timer;
var timeLeft = 10;
var userAnswers = [];
var quizStarted = false;
var studentInfo = {};


var quizQuestions = {
  html: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Tech Modern Language",
        "Hyper Transfer Markup Language",
        "Home Tool Markup Language"
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used for the largest heading?",
      options: ["<h1>", "<head>", "<heading>", "<h6>"],
      correctAnswer: 0
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<br>", "<break>", "<lb>", "<linebreak>"],
      correctAnswer: 0
    },
    {
      question: "Which attribute is used to specify that an input field must be filled out?",
      options: ["required", "validate", "placeholder", "important"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define important text?",
      options: ["<strong>", "<b>", "<i>", "<important>"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to define emphasized text?",
      options: ["<em>", "<italic>", "<i>", "<emphasis>"],
      correctAnswer: 0
    },
    {
      question: "What is the correct HTML for creating a hyperlink?",
      options: [
        '<a href="http://www.example.com">Example</a>',
        '<a url="http://www.example.com">Example</a>',
        '<link href="http://www.example.com">Example</link>',
        '<hyperlink>http://www.example.com</hyperlink>'
      ],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      options: ["<footer>", "<bottom>", "<section>", "<foot>"],
      correctAnswer: 0
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      options: ["alt", "src", "title", "longdesc"],
      correctAnswer: 0
    },
    {
      question: "Which HTML element is used to specify a header for a document or section?",
      options: ["<header>", "<head>", "<top>", "<section>"],
      correctAnswer: 0
    }
  ],
  css: [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "Which CSS property is used to change the background color?",
      options: ["background-color", "bgcolor", "color", "background"],
      correctAnswer: 0
    },
    {
      question: "How do you add a comment in CSS?",
      options: ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "' this is a comment"],
      correctAnswer: 0
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "font-style", "text-size"],
      correctAnswer: 0
    },
    {
      question: "How do you display hyperlinks without an underline?",
      options: ["text-decoration: none", "text-decoration: no-underline", "underline: none", "hyperlink: no-underline"],
      correctAnswer: 0
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "text-font"],
      correctAnswer: 0
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      options: ["text-transform: capitalize", "text-transform: uppercase", "font-variant: small-caps", "text-style: capital"],
      correctAnswer: 0
    },
    {
      question: "Which property is used to change the left margin of an element?",
      options: ["margin-left", "padding-left", "indent", "left-margin"],
      correctAnswer: 0
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: ["#demo", ".demo", "demo", "*demo"],
      correctAnswer: 0
    },
    {
      question: "How do you select elements with class name 'test'?",
      options: [".test", "#test", "test", "*test"],
      correctAnswer: 0
    }
  ],
  javascript: [
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Boolean", "Character", "Float", "Integer"],
      correctAnswer: 0
    },
    {
      question: "How do you create a function in JavaScript?",
      options: [
        "function myFunction()",
        "function:myFunction()",
        "function = myFunction()",
        "create myFunction()"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you call a function named 'myFunction'?",
      options: ["myFunction()", "call myFunction()", "call function myFunction()", "execute myFunction()"],
      correctAnswer: 0
    },
    {
      question: "How to write an IF statement in JavaScript?",
      options: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
      correctAnswer: 0
    },
    {
      question: "How does a WHILE loop start?",
      options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while (i = 0; i < 10)"],
      correctAnswer: 0
    },
    {
      question: "How can you add a comment in JavaScript?",
      options: ["//This is a comment", "<!--This is a comment-->", "'This is a comment", "/* This is a comment */"],
      correctAnswer: 0
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: [
        'var colors = ["red", "green", "blue"]',
        'var colors = "red", "green", "blue"',
        'var colors = (1:"red", 2:"green", 3:"blue")',
        'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
      ],
      correctAnswer: 0
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      options: ["=", "*", "-", "x"],
      correctAnswer: 0
    },
    {
      question: "What will the following code return: Boolean(10 > 9)",
      options: ["true", "false", "NaN", "undefined"],
      correctAnswer: 0
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      options: ["onclick", "onchange", "onmouseclick", "onmouseover"],
      correctAnswer: 0
    }
  ]
};


var formSection = document.querySelector('.FormSection');
var welcomeSection = document.querySelector('.WelcomeSection');
var showQuestionSection = document.querySelector('.ShowQuestion');
var questionSection = document.querySelector('.QuestionSection');
var resultSection1 = document.querySelector('.resultSection1');
var resultShow = document.querySelector('.resultShow');


document.addEventListener('DOMContentLoaded', function() {

  document.getElementById('CssQuizBtn').addEventListener('click', function() {
    startQuiz('css');
  });
  
  document.getElementById('JsQuizBtn').addEventListener('click', function() {
    startQuiz('javascript');
  });
  

  formSection.style.display = 'flex';
  welcomeSection.style.display = 'none';
  showQuestionSection.style.display = 'none';
  questionSection.style.display = 'none';
  resultSection1.style.display = 'none';
  resultShow.style.display = 'none';
});


function startQuiz(quizType = 'html') {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var rollNum = document.getElementById('rollNum').value;
  var instituteName = document.getElementById('institudeName').value;
  

  if (!name || !email || !rollNum || !instituteName) {
    alert('Please fill in all fields');
    return;
  }
  

  studentInfo = {
    name,
    email,
    rollNum,
    instituteName
  };
  

  document.getElementById('givenName').textContent = name;
  

  formSection.style.display = 'none';
  welcomeSection.style.display = 'flex';
  

  if (quizType) {
    loadQuestion(quizType);
  }
}


function loadQuestion(quizType = 'html') {

  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  quizStarted = true;
  

  window.currentQuizType = quizType;
  

  welcomeSection.style.display = 'none';
  showQuestionSection.style.display = 'flex';
  questionSection.style.display = 'flex';
  resultSection1.style.display = 'none';
  resultShow.style.display = 'none';
  

  displayQuestion();
  

  enterFullscreen();
  

  startTabMonitoring();
}


function displayQuestion() {
  var questions = quizQuestions[window.currentQuizType];
  var currentQuestion = questions[currentQuestionIndex];
  
 
  document.getElementById('questionCount').textContent = currentQuestionIndex + 1;
  document.getElementById('totalQues').textContent = questions.length;
  
 
  var progress = ((currentQuestionIndex) / questions.length) * 100;
  document.getElementById('line').style.width = `${progress}%`;
  
 
  document.getElementById('QuizQuestion').textContent = currentQuestion.question;
  
 
  var optionsList = document.getElementById('option');
  optionsList.innerHTML = '';
  
  currentQuestion.options.forEach((option, index) => {
    var li = document.createElement('li');
    li.textContent = option;
    li.setAttribute('data-index', index);
    li.addEventListener('click', function() {
      selectOption(this);
    });
    optionsList.appendChild(li);
  });
 
  resetTimer();
  startTimer();
}


function selectOption(selectedOption) {

  var options = document.querySelectorAll('#option li');
  options.forEach(option => {
    option.classList.add('disableli');
  });
  

  var selectedIndex = parseInt(selectedOption.getAttribute('data-index'));
  userAnswers[currentQuestionIndex] = selectedIndex;
  

  var questions = quizQuestions[window.currentQuizType];
  var currentQuestion = questions[currentQuestionIndex];
  
  if (selectedIndex === currentQuestion.correctAnswer) {
    selectedOption.classList.add('correctAns');
    score++;
  } else {
    selectedOption.classList.add('wrongAns');

    options[currentQuestion.correctAnswer].classList.add('correctAns');
  }
  

  clearInterval(timer);
}


function nextQuestion() {
  var questions = quizQuestions[window.currentQuizType];
  

  currentQuestionIndex++;
  

  if (currentQuestionIndex >= questions.length) {
    showResults();
    return;
  }
  

  displayQuestion();
}


function startTimer() {
  timeLeft = 10; 
  updateTimerDisplay();
  
  timer = setInterval(function() {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timer);
      
      var options = document.querySelectorAll('#option li');
      options.forEach(option => {
        option.classList.add('disableli');
      });
      
      
      userAnswers[currentQuestionIndex] = -1; 
      
      
      setTimeout(nextQuestion, 1000);
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.querySelector('.timer span').textContent = `${timeLeft}s`;
}


function showResults() {

  exitFullscreen();
  

  stopTabMonitoring();
  

  showQuestionSection.style.display = 'none';
  questionSection.style.display = 'none';
  resultSection1.style.display = 'flex';
  resultShow.style.display = 'flex';
  
  var questions = quizQuestions[window.currentQuizType];
  var totalQuestions = questions.length;
  var correctAnswers = score;
  var incorrectAnswers = totalQuestions - correctAnswers;
  var accuracy = Math.round((correctAnswers / totalQuestions) * 100);
  
  
  document.querySelector('.acheivementPart2 span').textContent = `${correctAnswers} out of ${totalQuestions}`;
  
  
  document.querySelector('.congratu h2').textContent = 
    accuracy >= 70 ? "Quiz Completed - Passed!" : "Quiz Completed - Try Again!";
  
  document.querySelector('.congratu p').textContent = 
    accuracy >= 70 ? "Congratulations on passing the quiz!" : "You need more practice. Try again!";
  
  
  document.querySelectorAll('.totalQuestions h3')[0].textContent = totalQuestions;
  document.querySelectorAll('.totalQuestions h3')[1].textContent = correctAnswers;
  document.querySelectorAll('.totalQuestions h3')[2].textContent = incorrectAnswers;
  document.querySelectorAll('.totalQuestions h3')[3].textContent = `${accuracy}%`;
  
  
  document.querySelector('.scoreCardSec1 p:first-child').textContent = `Correct (${accuracy}%)`;
  document.getElementById('lineBar').style.width = `${accuracy}%`;
  document.querySelector('.centerPercentage h2').textContent = `${accuracy}%`;
  
  
  var currentDate = new Date();
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.querySelector('.lastThing span').textContent = currentDate.toLocaleDateString('en-US', options);
  
  
  var passBtn = document.querySelector('.btnPass button');
  if (accuracy >= 70) {
    passBtn.textContent = "Passed";
    passBtn.style.backgroundColor = "#7be9b0";
    passBtn.style.borderColor = "#27c36a";
  } else {
    passBtn.textContent = "Failed";
    passBtn.style.backgroundColor = "#feb2b2";
    passBtn.style.borderColor = "#fc8181";
    passBtn.style.color = "#c53030";
  }
}


function enterFullscreen() {
  var element = document.documentElement;
  
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}


let tabSwitchCount = 0;

function startTabMonitoring() {
  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('blur', handleWindowBlur);
}

function stopTabMonitoring() {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  window.removeEventListener('blur', handleWindowBlur);
}

function handleVisibilityChange() {
  if (document.hidden && quizStarted) {
    tabSwitchCount++;
    alert(`Warning: You have switched tabs ${tabSwitchCount} time(s). Multiple tab switches may result in quiz termination.`);
  }
}

function handleWindowBlur() {
  if (quizStarted) {
    tabSwitchCount++;
    alert(`Warning: You have switched away from the quiz ${tabSwitchCount} time(s).`);
  }
}


document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.lastBtns button:first-child').addEventListener('click', function() {
    resultSection1.style.display = 'none';
    resultShow.style.display = 'none';
    welcomeSection.style.display = 'flex';
  });
  

  document.querySelector('.Lastbtn2').addEventListener('click', function() {

    formSection.style.display = 'flex';
    resultSection1.style.display = 'none';
    resultShow.style.display = 'none';
    

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('rollNum').value = '';
    document.getElementById('institudeName').value = '';
  });
});