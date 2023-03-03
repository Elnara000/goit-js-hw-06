const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const attributeFirst = document.createElement('li');
const attributeSecond = document.createElement('li');
const attributeThird = document.createElement('li');
const attributeFourth = document.createElement('li');
const attributeFifth = document.createElement('li');
const attributeSixth = document.createElement('li');

attributeFirst.textContent = ingredients[0];
attributeSecond.textContent = ingredients[1];
attributeThird.textContent = ingredients[2];
attributeFourth.textContent = ingredients[3];
attributeFifth.textContent = ingredients[4];
attributeSixth.textContent = ingredients[5];

attributeFirst.classList.add('item');
attributeSecond.classList.add('item');
attributeThird.classList.add('item');
attributeFourth.classList.add('item');
attributeFifth.classList.add('item');
attributeSixth.classList.add('item');


const list = document.querySelector('#ingredients');
list.append(attributeFirst, attributeSecond, attributeThird, attributeFourth, attributeFifth, attributeSixth);


