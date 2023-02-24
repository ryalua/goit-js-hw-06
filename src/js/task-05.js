const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
}

refs.nameInput.addEventListener('input', onInputName);

function onInputName(event) {
    refs.nameOutput.textContent = event.currentTarget.value;
    // refs.nameOutput.trim();
    console.log(event.currentTarget.value);
}