function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[ data-create]');
const destroyBtn = document.querySelector('[ data-destroy]');
const boxes = document.querySelector('#boxes');

destroyBtn.addEventListener('click', destroyBoxes);
input.addEventListener('change', createBoxes)

function createBoxes(amount) {
  let markup = [];
  for (let i = 1; i <= input.value; i+=1) {
    markup.push('<div class="item"></div>');
  }  
  boxes.innerHTML = markup.join(''); 

  const items = document.querySelectorAll('.item');
  const itemsArr = [...items]
  let size = 30;
  itemsArr.map((item, index) => {
    if (index >= 1) {
      size += 10;
    }
    item.style.width = `${size}px`;
    item.style.height = `${size}px`;
    item.style.backgroundColor = getRandomHexColor();
  }) 
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = '';
}




