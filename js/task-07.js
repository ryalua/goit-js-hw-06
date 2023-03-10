const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    fontSizeText: document.querySelector('#text'),
};

let fontSize = refs.fontSizeInput.value;
let text = refs.fontSizeText.getAttribute('#text');

refs.fontSizeInput.addEventListener('input', handleFontSizeControl);

function handleFontSizeControl(event) {
    
    let targetSize = event.currentTarget.value;
    

    // console.log(`fontSizeInput: ${refs.fontSizeInput.value}`);
    
    refs.fontSizeText.style.fontSize = `${targetSize}px`;
    // console.log(`fontSizeText: ${targetSize}`);
}