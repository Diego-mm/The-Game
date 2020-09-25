const boardClick = (event) => {
  console.log(event.target);
};

const boardTic = document.querySelector('.boardtic');

boardTic.addEventListener('click', boardClick);

// ELEMENTO //
const reset = document.querySelector('.reset');

// EVENTO //
reset.addEventListener('click', resetClick);

// EJECUCION //
function resetClick(event) {
  console.log('hola');
}
