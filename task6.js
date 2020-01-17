const input = document.querySelector('#validation-input');
const validNumber = Number(input.dataset.length);

input.addEventListener('blur', inputValue);

function inputValue() {
    if (input.selectionStart > validNumber){
        input.classList.add('invalid');
    }
    else if (input.selectionStart <= validNumber && input.selectionStart !== 0){
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else {
        input.classList.remove('valid');
    }
}