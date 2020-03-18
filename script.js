let actualTurn = 1;
const icon1 = 'panorama_fish_eye';
const icon2 = 'close';
let board = document.querySelector('#board');
cons

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
    addIcon(icon1);
  }
    else {
      addIcon(icon2);
    }
    actualTurn += 1;
  }
