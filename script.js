// 'use strict';
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const btnNew = document.querySelector('.btn-new');
const dice = document.querySelector('.dice');
const players = document.querySelectorAll('.players');

// const currentP1 = document.querySelector('.current-p1');
// const currentP2 = document.querySelector('.current-p2');


let currentSum = 0;

function currentPlayer(){
  if (players[0].classList.contains('player-active')) {
    return 1;
  } else {
    return 2;
  }
}

function changeActivePlayer(){
  players[0].classList.toggle('player-active');
  players[1].classList.toggle('player-active');
}

//Roll dice
function rollDice() {
  let number = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice_images/dice-${number}.png`;
  dice.style.display = 'block';
  if (number === 1) {
    currentSum = 0;
    document.querySelector(`.sum-p${currentPlayer()}`).textContent = 0;
    changeActivePlayer();
  } else {
    currentSum += number;
    document.querySelector(`.sum-p${currentPlayer()}`).textContent = currentSum;
  }
}

//Hold score

function holdScore(){


}

btnRoll.addEventListener('click',rollDice);
console.log(currentPlayer);
btnHold.addEventListener('click', holdScore);
