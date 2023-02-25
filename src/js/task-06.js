const refs = {
    validationInput: document.querySelector('#validation-input'),
};
const setLength = refs.validationInput.getAttribute('data-length');
// console.log(`setLengthGetAttr: ${(setLength)}`);
// console.log(`setLength: ${Number(setLength)}`);

refs.validationInput.addEventListener('blur', handleInputSymbols);


function handleInputSymbols(event) {
    const inputLength = event.currentTarget.value;
    // const inputLength = refs.validationInput.value;
    // console.log(`inputLengthValue: ${inputLength}`)
    // console.log(`inputLengthNumber: ${Number(inputLength)}`)

    if (inputLength.length === Number(setLength)) {
        // console.log(inputLength.length === Number(setLength));

        refs.validationInput.classList.add('valid');
        refs.validationInput.classList.remove('invalid');
    }
    else {
        refs.validationInput.classList.add('invalid');
        refs.validationInput.classList.remove('valid');
    }

};
