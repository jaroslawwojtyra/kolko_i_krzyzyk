const actualTurn = 0;
const column = 3;
const row = 3 ;
const symbols = ["X", "O"];
let board = document.querySelector('#board');
console.log(board);
board.addEventListener('click', icon);
function icon() {
  console.log("testyyy");
}
