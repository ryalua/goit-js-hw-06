function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
  backgroundEl: document.querySelector('.widget'),
  textColor: document.querySelector('.color'),
  changeColor: document.querySelector('.change-color'),
};

refs.changeColor.addEventListener('click', hendleButtonCkick);

function hendleButtonCkick() {
  let color = getRandomHexColor();
  refs.backgroundEl.style.backgroundColor = color;

  refs.textColor.textContent = color;
}