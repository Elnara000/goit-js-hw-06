const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur (evt) {
    if (evt.currentTarget.dataset.length == evt.currentTarget.value.length) {
        input.classList.add('valid')
    }
    input.classList.add('invalid')
}