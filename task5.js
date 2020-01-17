const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', outputText);

function outputText() {
    output.textContent = input.value;
    if (input.value === ""){
        output.textContent = 'незнакомец'
    }
}