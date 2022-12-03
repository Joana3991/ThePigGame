// 'use strict';
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const btnNew = document.querySelector('.btn-new');
const dice = document.querySelector('.dice');

// const currentP1 = document.querySelector('.current-p1');
// const currentP2 = document.querySelector('.current-p2');


let currentP1 = 0;
let currentP2 = 0;
let currentPlayer = 1;

//Roll dice
function rollDice() {
  let number = Math.floor(Math.random() * 6) + 1;
  dice.src = `./dice_images/dice-${number}.png`;
  dice.style.display = 'block';
  if (number === 1) {
    currentP1 = 0;
    document.querySelector('.current-p1').textContent = 0;
    //next player
  } else {
    if (currentPlayer === 1) {
      currentP1 += number;
      document.querySelector('.current-p1').textContent = currentP1;
    }
  }
}

//Hold score

function holdScore() {

}


btnRoll.addEventListener('click',rollDice);
btnHold.addEventListener('click', holdScore);
