let actualTurn = 1;
const player1 = 'panorama_fish_eye';
const player2 = 'close';
let board = document.querySelector('#board');

board.addEventListener('click', icon);

function addO() {
  const el = document.createElement("i");
  el.innerText = "panorama_fish_eye";
  el.classList.add("material-icons");
  const clickEl = document.querySelector(`#${event.target.id}`);
  clickEl.appendChild(el);
}
function addX() {
  const el = document.createElement("i");
  el.innerText = "close";
  el.classList.add("material-icons");
  const clickEl = document.querySelector(`#${event.target.id}`);
  clickEl.appendChild(el);
}
function icon(event) {
  let round = actualTurn % 2;
  if (round === 1){
    addO();
  }
    else {
    addX();
    }
    actualTurn += 1;
  }
