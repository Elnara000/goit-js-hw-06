const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

//не получается( при исправлении с неправильного на нужное количество 
// символов цвет не менятся. Удаление класса также не помогает. только перезагрузкой
function onInputBlur (evt) {
    if (evt.currentTarget.dataset.length != evt.currentTarget.value.length) {        
        input.classList.add('invalid')   
    }
    input.classList.add('valid');
}