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

// nasłuchiwanie kliknięcia na tablicy gry
gameBoard.addEventListener('click', play);

// dodanie kółka lub krzyżyka
function addIcon(iconName) {
    const el = document.createElement("i");
    el.innerText = iconName;
    el.classList.add("material-icons");
    const clickEl = document.querySelector(`#${event.target.id}`);
    clickEl.appendChild(el);
    actualTurn += 1;
};

// zmiana nazwy aktualnego gracza
function changeName(name) {
  playerName.innerText = name;
};

// sprawdzenie czy wygrana
function checkWin() {
  
}

// rozgrywka
function play(event) {
  let round = actualTurn % 2;
  if (event.target.innerText == ''){
    if (round === 1){
      addIcon(icon1);
      // checkWin();
      changeName(p2);
    }
      else {
        addIcon(icon2);
        // checkWin();
        changeName(p1);
      };
    }};
