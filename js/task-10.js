function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const refs = {
  input: document.querySelector('#controls input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  divBoxes: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let box;
  for (let i = 0; i < amount; i += 1) {
    // refs.divBoxes.insertAdjacentHTML("afterbegin", `<div data-size width: 30px></div>`);
    // box = document.createElement('div');
    const markup = () => `div data-size width: 30px></div`;
    
//     refs.divBoxes.style.width = '(30 + i*10)px';
//     refs.divBoxes.style.hight = '(30 + i*10)px';
//     refs.divBoxes.style.backgroundColor = getRandomHexColor();
  }
  refs.divBoxes.insertAdjacentHTML("afterbegin", markup);
  console.log(refs.divBoxes);
};
function destroyBoxes() {
  refs.divBoxes.innerHTML = '';
};


refs.btnCreate.addEventListener('click', handleCreateClick);

function handleCreateClick() {
  createBoxes(refs.input.value);

  // const inputValue = refs.input.value;
  // console.log(inputValue);
  console.log(refs.input.value);
};

refs.btnDestroy.addEventListener('click', handleDestroyClick);

function handleDestroyClick() {
  refs.divBoxes.innerHTML = '';
}

//----------------------------------------------------
// const refs = {
//   input: document.querySelector("#controls input"),
//   btnCreate: document.querySelector("[data-create]"),
//   btnDestroy: document.querySelector("[data-destroy"),
//   divBoxes: document.getElementById("boxes"),
// }
// const createBoxes = amount => {
//   let width = 20;
//   let height = 20;
//   for (let i = 1; i <= amount; i += 1){
//     refs.divBoxes.insertAdjacentHTML("afterbegin", `<div data-box></div>`);
//     console.log(refs.divBoxes);

//     const containers = document.querySelector("[data-box]");
//     containers.style.cssText = `width: ${width += 10}px ; height: ${height += 10}px; background-color: ${getRandomHexColor()}`;
//   };
//     refs.divBoxes.style.cssText = 'display:flex; justify-content:flex-start;';
//   };
//   const handleBtnClick = (event)=> {
//     createBoxes(refs.input.value)
//     console.log(refs.input.value)
//       };
//     refs.btnCreate.addEventListener("click", handleBtnClick);
// const destroyBoxes = () => refs.divBoxes.innerHTML = '';
// // refs.btnCreate.addEventListener("click", handleBtnClick);
// refs.btnDestroy.addEventListener("click", destroyBoxes);