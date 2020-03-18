let actualTurn = 1;
const icon1 = 'panorama_fish_eye';
const icon2 = 'close';
const p1 = 'Kółko'
const p2 = 'Krzyżyk'
let gameBoard = document.querySelector('#board');
let playerName = document.querySelector('#playerName');

const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
];

gameBoard.addEventListener('click', icon);

function addIcon(iconName) {
    const el = document.createElement("i");
    el.innerText = iconName;
    el.classList.add("material-icons");
    const clickEl = document.querySelector(`#${event.target.id}`);
    clickEl.appendChild(el);
    actualTurn += 1;

};

function changeName(name) {
  playerName.innerText = name;
};

function icon(event) {
  let round = actualTurn % 2;
  if (event.target.innerText == ''){

    if (round === 1){
      addIcon(icon1);
      changeName(p2);
    }
      else {
        addIcon(icon2);
        changeName(p1);
      };
    }};
