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

const cells = Array.from(document.querySelectorAll('.boardtic > .cell'));

const playerXScoreElement = document.getElementById('player-x-score');
const playerOScoreElement = document.getElementById('player-o-score');

const winnerDisplay = document.querySelector('.boardtic');
const winnerDisplayP = document.querySelector('.boardtic > aside > p');
const winnerDisplayCloseButton = document.querySelector(
  '.boardtic > aside > button',
);
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

let playerTurn = 'x';

const changePlayerToPlay = () => {
  if (playerTurn === 'x') {
    playerTurn = 'o';
  } else {
    playerTurn = 'x';
  }
};

// Players //
let playerXScore = 0;
let playerOScore = 0;

// 3 //
const checkIfPlayerWin = (player) => {
  return solutions.some((solution) => {
    return solution.every((positionValue) => {
      return player === board[positionValue];
    });
  });
};

const addScore = (player) => {
  if (player === 'x') {
    playerXScore = playerXScore + 1;
  } else {
    playerOScore = playerOScore + 1;
  }

  playerXScoreElement.innerText = playerXScore;
  playerOScoreElement.innerText = playerOScore;
};

const showWinner = (player) => {
  winnerDisplay.classList.add('winner');
  winnerDisplayP.innerText = player;
};

const handleClick = (event) => {
  const cellClicked = event.target;
  cellClicked.innerText = playerTurn;
  cellClicked.removeEventListener('click', handleClick);
  const positionPlayed = cells.indexOf(cellClicked);
  board[positionPlayed] = playerTurn;

  const ifPlayerWin = checkIfPlayerWin(playerTurn);
  console.log(cells);
  if (ifPlayerWin) {
    addScore(playerTurn);
    showWinner(playerTurn);
  }

  /* playNewGame(); */

  changePlayerToPlay();
};

// 2 //
const addHandleClick = (cell) => {
  cell.addEventListener('click', handleClick);
};

// 1 //
cells.forEach(addHandleClick);

// BOTON RESET //

const reset = document.querySelector('button[type="reset"]');

reset.addEventListener('click', playNewGame);

function playNewGame() {
  cells.forEach((cell) => (cell.innerText = ''));
  board = [null, null, null, null, null, null, null, null, null];
  playerTurn = 'x';
  cells.forEach(addHandleClick);
}

winnerDisplayCloseButton.addEventListener('click', closeWinnerDisplay);

function closeWinnerDisplay(event) {
  winnerDisplay.classList.remove('winner');
  playNewGame();
}

// TODO:
// Cuando hay ganador se muestra la pantalla de ganador sobre el tablero
// La pantalla de ganador tiene un botón de close, que cuando lo presiono debe:
// 1 Llamar la function playNewGame()
// 2 Remover la clase winner del elemento boardtic
