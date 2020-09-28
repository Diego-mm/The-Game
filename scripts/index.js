/* /// MARCAR LAS CELDAS ///

// EJECUCION //
const boardClick = (event) => {
  console.log(event.target);
};

// ELEMENTO //
const boardTic = document.querySelector('.boardtic');

// EVENTO //
boardTic.addEventListener('click', boardClick);

/// BOTON RESET ///

// EJECUCION //
const resetClick = (event) => {
  console.log('hola');
};

// ELEMENTO //
const reset = document.querySelector('.reset');

// EVENTO //
reset.addEventListener('click', resetClick);

/// ESCRIBIR EN CELDAS LA EL 'CLICK' DEL JUGADOR ///

// EJECUCION //
const cellClick = (event) => {};

// ELEMENTO //
const cellClick = document.querySelector('.cell');

// EVENTO //
cellClick.addEventListener('click', cellClick); */

const cells = Array.from(document.querySelectorAll('.boardtic > .row'));

const solutions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let board = [null, null, null, null, null, null, null, null, null];

let playerTurn = 'X';

const changePlayerToPlay = () => {
  if (playerTurn === 'X') {
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
};

// 3 //

const handleClick = (event) => {
  const cellClicked = event.target;
  cellClicked.innerText = playerTurn;
  cellClicked.removeEventListener('click', handleClick);
  const positionPlayed = cells.indexOf(cellClicked);
  board[positionPlayed] = playerTurn;

  changePlayerToPlay();
};

// 2 //
const addHandleClick = (cell) => {
  cell.addEventListener('click', handleClick);
};

// 1 //
cells.forEach(addHandleClick);
