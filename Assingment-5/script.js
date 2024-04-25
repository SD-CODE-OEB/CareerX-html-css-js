const answer = document.querySelector('.faq-answer');

const questions = document.querySelectorAll('button');


questions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
    });
});

