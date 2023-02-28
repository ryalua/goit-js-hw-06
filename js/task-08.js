const refs = {
    form: document.querySelector('.login-form'),
    email: document.querySelector('[name="email"]'),
    passsword: document.querySelector('[name="password"]'),
};

refs.form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
    let emailText = event.currentTarget.email.value;
    let passwordText = event.currentTarget.password.value;
    
    
    if(!emailText || !passwordText) {
    
        return alert("All fields must be filled!");
    }
    console.log({ emailText, passwordText });
    refs.form.reset();
}


