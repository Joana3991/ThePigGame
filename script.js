// 'use strict';
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const btnNew = document.querySelector('.btn-new');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.players');


function currentPlayer() {
  return players[0].classList.contains('player-active')? 1 : 2;
}

function changeActivePlayer() {
  players[0].classList.toggle('player-active');
  players[1].classList.toggle('player-active');
}

//reset to 0 players current score
function resetSum() {
  document.querySelector(`.sum-p${currentPlayer()}`).textContent = 0;
}

//Roll dice
function rollDice() {
  currentSum = Number(document.querySelector(`.sum-p${currentPlayer()}`).textContent);
  let number = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice_images/dice-${number}.png`;
  dice.style.display = 'block';
  if (number === 1) {
    currentSum = 0;
    resetSum();
    changeActivePlayer();
  } else {
    currentSum += number;
    document.querySelector(`.sum-p${currentPlayer()}`).textContent = currentSum;
  }
}

//Player wins
function endGame() {
  document.querySelector(`.player-${currentPlayer()}`).classList.add('player-winner');
  dice.style.display = 'none';
  btnRoll.removeEventListener('click', rollDice);
  btnHold.removeEventListener('click', holdScore);
}

//Hold score
function holdScore() {
  currentSum = Number(document.querySelector(`.sum-p${currentPlayer()}`).textContent);
  let score = Number(document.querySelector(`#score-p${currentPlayer()}`).textContent);
  score += currentSum;
  document.querySelector(`#score-p${currentPlayer()}`).textContent = score;
  if (score >= 10) {
    endGame();
  } else {
    resetSum();
    changeActivePlayer();
  }
}

function resetGame() {
  document.querySelector(`.sum-p${currentPlayer()}`).textContent = 0;
  document.querySelector(`#score-p1`).textContent = 0;
  document.querySelector(`#score-p2`).textContent = 0;
  dice.style.display = 'none';
  if (players[1].classList.contains('player-active')) {
    changeActivePlayer();
  }
  document.querySelector(`.player-${currentPlayer()}`).classList.remove('player-winner');
  btnRoll.addEventListener('click',rollDice);
  btnHold.addEventListener('click', holdScore);
}

btnRoll.addEventListener('click',rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click',resetGame);
