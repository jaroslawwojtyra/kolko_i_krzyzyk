let actualTurn = 1;
let moveCounter = 0;
let endGame = false;
const icon1 = 'panorama_fish_eye';
const icon2 = 'close';
const p1 = 'Kółko';
const p2 = 'Krzyżyk';
let gameBoard = document.querySelector('#board');
let playerName = document.querySelector('#playerName');
let resultText = document.querySelector('.result');

const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
];

const winCombinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
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

function addClass(p) {
    event.target.classList.add(p);
    console.log(event.target);
}

// sprawdzenie czy wygrana
function checkWin() {
  if (moveCounter > 3) {
    endGame=true;
    playerName.innerText = 'Koniec gry';
    resultText.innerText = `Grę wygrało: ${p1}`;

  }
}

// zmiana nazwy aktualnego gracza
function changeName(name) {
  if (endGame == false) {
      playerName.innerText = `Aktualny gracz: ${name}`;
    }
};

// rozgrywka
function play(event) {
  let round = actualTurn % 2;
  if (event.target.innerText == '' && endGame == false){
    if (round === 1){
      addIcon(icon1);
      addClass(p1);
      checkWin();
      changeName(p2);
    }
      else {
        addIcon(icon2);
        addClass(p2);
        checkWin();
        changeName(p1);
      };
      moveCounter ++;
    }};
