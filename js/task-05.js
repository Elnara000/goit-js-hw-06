const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange (evt) {
    span.textContent = evt.currentTarget.value;
    
    if (evt.currentTarget.value === '') {
        span.textContent = 'Anonymous'
    }
}