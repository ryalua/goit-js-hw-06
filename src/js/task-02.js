const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
// console.log(list);
const ingredientsRef = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add('item');
  // liRef.style.fontSize = '30px'

  // console.log(liRef);
  return liRef;
  
});
list.append(...ingredientsRef);
