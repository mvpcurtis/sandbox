const headline = document.querySelector('h1');
let counter = 0;
let timeLeft = 60;
let timerId = null;
let wrong = 0;
let right = 0;

const questions = [
  {
    id: 1,
    question: 'What are the three main frontend technologies?',
    answers: ['html, css, javascript', 'html, scss, javascript', 'html, css, react', 'none'],
    correctAnswer: 'html, css, javascript',
  },
  {
    id: 2,
    question: 'What does JavaScript do?',
    answers: ['makes a website responsive', 'makes a website more dynamic', 'makes a website static', 'makes it so your website can run in the browser'],
    correctAnswer: 'makes a website more dynamic',
  },
];

function renderAnwers() {
  const question = document.querySelector('#question');
  const A = document.querySelector('#a');
  const B = document.querySelector('#b');
  const C = document.querySelector('#c');
  const D = document.querySelector('#d');
  if (counter === counter) {
    question.textContent = questions[counter].question;
    A.textContent = questions[counter].answers[0];
    A.addEventListener('click', function () {
      if (questions[counter].answers.includes(questions[counter].correctAnswer)) {
        counter++;
        right++;
        renderAnwers();
      } else {
        counter++;
        wrong++;
        renderAnwers();
      }
    });
    B.textContent = questions[counter].answers[1];
    B.addEventListener('click', function () {
      if (questions[counter].answers.includes(questions[counter].correctAnswer)) {
        counter++;
        right++;
        renderAnwers();
      } else {
        counter++;
        wrong++;
        renderAnwers();
      }
    });
    C.textContent = questions[counter].answers[2];
    C.addEventListener('click', function () {
      if (questions[counter].answers.includes(questions[counter].correctAnswer)) {
        counter++;
        right++;
        renderAnwers();
      } else {
        counter++;
        wrong++;
        renderAnwers();
      }
    });
    D.textContent = questions[counter].answers[3];
    D.addEventListener('click', function () {
      if (questions[counter].answers.includes(questions[counter].correctAnswer)) {
        counter++;
        right++;
        renderAnwers();
      } else {
        counter++;
        wrong++;
        renderAnwers();
      }
    });
  }
}

function updateDisplay() {
  document.getElementById('timer').textContent = timeLeft + ' Seconds';
}

function startTimer() {
  // Only start if timer isn't already running
  if (timerId === null) {
    timerId = setInterval(() => {
      timeLeft--;
      updateDisplay();

      if (timeLeft === 0) {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  }
}

const renderGame = () => {
  document.querySelector('.in-container').style.display = 'block';
  document.querySelector('.out-container > span').remove();
  startTimer();
  renderAnwers();
};

headline.addEventListener('click', renderGame);
