const signup = document.getElementById('signup');

const page1 = document.querySelector('.container-login');

const page2 = document.querySelector('.container-sign-up');

const login = document.getElementById('login');

const mail = document.getElementById('email');

const pwd = document.getElementById('password');

const form = document.querySelector('.righty .top');

const welcome = document.querySelector('.righty .welcome-box');

const submit = document.getElementById('submit');

const display = document.getElementById('display');

signup.addEventListener("click", () => {
    page1.classList.add('hide');
    page2.classList.add('show');
});

login.addEventListener("click", () => {
    page1.classList.remove('hide');
    page2.classList.remove('show');
});

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(mail.value === "john@gmail.com" && pwd.value ==="1234"){
        form.classList.add('hide');
        welcome.classList.add('welcome');
        display.innerHTML = "Welcome John";
    } else{
        form.classList.add('hide');
        welcome.classList.add('welcome');
        display.style.color = "red";
        display.innerHTML = ("Access Denied!, Invalid email or password");
    }
});