const refs = {
    fontSizeInput: document.querySelector('#font-size-control'),
    fontSizeText: document.querySelector('#text'),
};
let fontSize = refs.fontSizeInput.value;
let text = refs.fontSizeText.getAttribute('#text');

refs.fontSizeInput.addEventListener('input', hendleFontSizeControl);

function hendleFontSizeControl(event) {
    let targetSize = event.currentTarget.value;
    // console.log(`fontSizeGetAttr: ${fontSize}`);
    // console.log(`fontSizeNumber: ${Number(fontSize)}`);

    console.log(`fontSizeInput: ${refs.fontSizeInput.value}`);
    
    refs.fontSizeText.style.fontSize = `${targetSize}px`;
    console.log(`fontSizeText: ${targetSize}`);
}