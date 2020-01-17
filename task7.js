const range = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
span.style.fontSize = range.value+'px';

range.addEventListener('input', () =>{
    span.style.fontSize = range.value+'px';
});
