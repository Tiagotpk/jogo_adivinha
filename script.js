'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayBody(body) {
  document.querySelector('body').style.backgroundColor = body;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function displayHighScore(highscore) {
  document.querySelector('.highscore').textContent = highscore;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('Número não informado ⛔');
  } else if (guess === secretNumber) {
    displayMessage('Número Correto!!🏆🏆');
    displayNumber(secretNumber);
    displayBody('#60b347');
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Número maior que o correto ⚠'
          : 'Número menor que o correto ⚠',
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('❌GAME OVER!!❌');
      displayScore(0);
      displayBody('#f44336');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage('Comece a adivinhar...');
  displayScore(score);
  displayNumber('?');
  document.querySelector('.guess').value = '';

  displayBody('#222');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').focus();
});

const guessInput = document.querySelector('.guess');

guessInput.addEventListener('input', function () {
  if (this.value > 20) {
    this.value = 20;
  }

  if (this.value < 1 && this.value !== '') {
    this.value = 1;
  }
});

console.log(secretNumber);
