const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur (e) {
    if (e.currentTarget.dataset.length == e.currentTarget.value.length) {        
        input.classList.add('valid');
        input.classList.remove('invalid');
        return
    } 
    input.classList.add('invalid');
    input.classList.remove('valid');
}

