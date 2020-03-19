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
const all_td = document.getElementsByTagName("td");

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
    el.classList.add("material-icons", iconName);
    const clickEl = document.querySelector(`#${event.target.id}`);
    clickEl.appendChild(el);
    actualTurn += 1;
};

// zmiana nazwy aktualnego gracza
function changeName(name, winName) {
  if (endGame == false) {
      playerName.innerText = `Aktualny gracz: ${name}`;
    }
    else {
      resultText.innerText = `Grę wygrało: ${winName}`;

    }
};

// rozgrywka
function play(event) {
  let round = actualTurn % 2;
  if (event.target.innerText == '' && endGame == false){
    if (round === 1){
      addIcon(icon1);
      checkWin(icon1);
      changeName(p2, p1);
      }
      else {
        addIcon(icon2);
        checkWin(icon2);
        changeName(p1, p2);
      };
      moveCounter ++;
    }};

    // sprawdzenie czy wygrana
    function checkWin(p) {
      if (moveCounter > 3) {
        //linie poziome - sprawdzenie
        for (var i = 0; i < all_td.length; i = i + 3) {
          if (all_td[i].innerText == p && all_td[i+1].innerText == p && all_td[i+2].innerText == p ) {
            endGame=true;
            playerName.innerText = 'Koniec gry';
          };
        };
      };
    };
