// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// console.log(getRandomHexColor());

const body = document.querySelector('body');
const span = document.querySelector('.color')
const btn = document.querySelector('.change-color');
btn.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}
