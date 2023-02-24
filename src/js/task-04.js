let counterValue = 0;
const refs = {
    decrCounterBtn: document.querySelector('[data-action="decrement"]'),
    incrCounterBtn: document.querySelector('[data-action="increment"]'),
    counterValueSpan: document.querySelector('#value'),
};

refs.decrCounterBtn.addEventListener('click', onDecrementCounter);
refs.incrCounterBtn.addEventListener('click', onIncrementCounter);

function onDecrementCounter() {
    counterValue -= 1;
    refs.counterValueSpan.textContent = counterValue;
    console.log(counterValue);
}

function onIncrementCounter() {
    counterValue += 1;
    refs.counterValueSpan.textContent = counterValue;

    console.log(counterValue);
}

