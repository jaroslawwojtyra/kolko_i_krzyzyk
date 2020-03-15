let actualTurn = 1;
const player1 = 'panorama_fish_eye';
const player2 = 'close';

let board = document.querySelector('#board');
board.addEventListener('click', icon);

function icon(event) {
  let round = actualTurn % 2;
  if (round === 1){
    console.log(player1)
  }
    else {
      console.log(player2)
    }
    actualTurn += 1;
  }
