let actualTurn = 1;
const player1 = 'panorama_fish_eye';
const player2 = 'close';
let board = document.querySelector('#board');

board.addEventListener('click', icon);

function addIcon(iconName) {
  const el = document.createElement("i");
  el.innerText = iconName;
  el.classList.add("material-icons");
  const clickEl = document.querySelector(`#${event.target.id}`);
  clickEl.appendChild(el);
}

function icon(event) {
  let round = actualTurn % 2;
  if (round === 1){
    addIcon("panorama_fish_eye");
  }
    else {
      addIcon("close");
    }
    actualTurn += 1;
  }
