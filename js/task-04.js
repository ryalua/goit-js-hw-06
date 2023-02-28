let counterValue = 0;
const refs = {
    decrCounterBtn: document.querySelector('[data-action="decrement"]'),
    incrCounterBtn: document.querySelector('[data-action="increment"]'),
    counterValueSpan: document.querySelector('#value'),
};

refs.decrCounterBtn.addEventListener('click', handleDecrementCounter);
refs.incrCounterBtn.addEventListener('click', handleIncrementCounter);

function handleDecrementCounter() {
    counterValue -= 1;
    refs.counterValueSpan.textContent = counterValue;
    
}

function handleIncrementCounter() {
    counterValue += 1;
    refs.counterValueSpan.textContent = counterValue;
    
}

