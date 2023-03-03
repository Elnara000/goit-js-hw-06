const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[type="email"]'),
    password: document.querySelector('[type="password"]'),
}

// console.log(refs.form);

refs.form.addEventListener('submit', handlerSubmit);


function handlerSubmit(e) {
    e.preventDefault();    
    const {elements: {email, password}} = e.currentTarget;

    if (email.value === '' || password.value === '' ) {
       return alert('Усі поля повинні бути заповненими!')
    }
    const userData = {
        email: email.value,
        password: password.value
    }
    console.log(userData);

    e.currentTarget.reset();    
}

