function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const refs = {
  inputEl: document.querySelector('#controls'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('.boxes'),
};

function createBoxes(amount) {
  for (let i = 0; i = amount; i += 1) {
    refs.divBoxes = document.createElement('div');
    refs.divBoxes.style.width = '(30 + i*10)px';
    refs.divBoxes.style.hight = '(30 + i*10)px';
    refs.divBoxes.style.backgroundColor = getRandomHexColor();

  }
  
  
};

refs.btnCreate.addEventListener('click', hendleBtnClick);

function hendleBtnClick() {
  refs.divBoxes = '<div></div>';
  refs.divBoxes.style.width = '(30 + i*10)px';
  refs.divBoxes.style.hight = '(30 + i*10)px';
  const color = getRandomHexColor();
  refs.divBoxes.style.backgroundColor = color;
  console.log(refs.divBoxes);
};