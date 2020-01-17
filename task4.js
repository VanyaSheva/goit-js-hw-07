const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
let counter = document.querySelector('span');
let counterValue  = Number(counter.textContent);

incrementBtn.addEventListener('click', increment);

decrementBtn.addEventListener('click', decrement);

function increment() {
    counterValue +=1;
    counter.textContent = counterValue;
}
function decrement() {
    counterValue -=1;
    counter.textContent = counterValue;
}