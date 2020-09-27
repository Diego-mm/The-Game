/// MARCAR LAS CELDAS ///

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

/* /// ESCRIBIR EN CELDAS LA EL 'CLICK' DEL JUGADOR ///

// EJECUCION //
const cellClick = (event) => {};

// ELEMENTO //
const cellClick = document.querySelector('.cell');

// EVENTO //
cellClick.addEventListener('click', cellClick); */
