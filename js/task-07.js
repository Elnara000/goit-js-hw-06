const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onChange);

function averageValue(x, y) {
    const firstArg = Number(x)
    const secondArg = Number(y)
    return (firstArg+secondArg)/2;
}

span.style.fontSize = `${averageValue(input.min, input.max)}px`

function onChange(evt) {
    span.style.fontSize = `${evt.currentTarget.value}px`   
}    
