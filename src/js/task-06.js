const refs = {
    validationInput: document.querySelector('#validation-input'),
};
const setLength = refs.validationInput.getAttribute('data-length');
console.log(`setLength: ${Number(setLength)}`);

refs.validationInput.addEventListener('blur', handleInputSymbols);


function handleInputSymbols() {
    const inputLength = refs.validationInput.value;

    if (inputLength.length === Number(setLength)) {
        console.log(inputLength.length === Number(setLength));

        refs.validationInput.classList.add('valid');
        refs.validationInput.classList.remove('invalid');
    }
    else {
        refs.validationInput.classList.add('invalid');
        refs.validationInput.classList.remove('valid');
    }

};
