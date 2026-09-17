'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Número não informado ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Número Correto!!🏆🏆';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Número maior que o correto ⚠';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌GAME OVER!!❌';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Número menor que o correto ⚠';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '❌GAME OVER!!❌';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
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
