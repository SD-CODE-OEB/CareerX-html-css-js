const signup = document.getElementById('signup');

const page1 = document.querySelector('.container-login');

const page2 = document.querySelector('.container-sign-up');

const login = document.getElementById('login');


signup.addEventListener("click", () => {
    page1.classList.add('hide');
    page2.classList.add('show');
});

login.addEventListener("click", () => {
    page1.classList.remove('hide');
    page2.classList.remove('show');
});