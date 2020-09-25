const boardClick = (event) => {
  console.log(event.target);
};

const boardTic = document.querySelector('.boardtic');

boardTic.addEventListener('click', boardClick);

// EJECUCION //
const resetClick = (event) => {
  console.log('hola');
};

// ELEMENTO //
const reset = document.querySelector('.reset');

// EVENTO //
reset.addEventListener('click', resetClick);
