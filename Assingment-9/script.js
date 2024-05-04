
const startBtn = document.getElementById('start');

const startBody = document.querySelector('.head');

const ansBody = document.querySelector('.ans-body');

const display = document.getElementById('display');

const displayIncorrect = document.getElementById('incorrect-display');

const answer = document.getElementById('answer');

const ansBtn = document.getElementById('btn-ans');

const score = document.querySelector('#score label');

const nextBtn = document.getElementById('next');

const restartBtn = document.getElementById('restart');

const notePoints = document.querySelector('.note');

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    notePoints.classList.remove('hide');
    ansBody.classList.add('show');
    startBtn.classList.add('hide');
    display.style.animation = "displaySlide .8s ease-in-out";
    answer.style.animation = "slide .8s ease-in-out";
    ansBtn.style.animation = "slide .8s ease-in-out";
    score.style.animation = "show .8s ease-in-out";
    answer.value = "";
    getQuestionAns();
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    display.style.animation = "displaySlide .8s ease-in-out";
    answer.style.animation = "slide .8s ease-in-out";
    ansBtn.style.animation = "slide .8s ease-in-out";
    nextBtn.style.animation = "none";
    score.style.animation = "none";
    answer.value = "";
    displayIncorrect.innerText = "";
    ansBtn.style.display = "block";
    i=0;
    getQuestionAns();
});

let i = 0;
ansBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let displayText = display.innerText.split(' ');
    let ans = eval(displayText[1]);
    console.log('displayText',displayText, displayText[1][1],ans);
    display.style.animation = "none";
    ansBtn.style.animation = "none";
    answer.style.animation = "none";
    display.style.animation = "none";
    displayIncorrect.style.animation = "none";
    if(ans == "Infinity" || ans == "NaN"){
        ans = "undefined";
    }
    if(answer.value == ans){
        display.style.animation = "pop .8s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        display.innerText = "Well Done!!, Correct Answer";
        displayIncorrect.innerText = "";
        i=0;
        ansBtn.style.display = "none";
        score.style.animation = "show .8s ease-in-out";
        score.innerText = parseInt(score.innerText) + 1;
        nextBtn.style.animation = " pop 1.5s ease-in-out infinite";
        nextBtn.addEventListener("mouseover", (e) => {
            e.preventDefault();
            nextBtn.style.animation = "none";
        });
    } else {
        displayIncorrect.style.animation = "pop .9s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        displayIncorrect.innerText = `It's Wrong, Try Again(${i+=1})`
        if(i == 3){
            displayIncorrect.style.animation = "none";
            displayIncorrect.innerText = `You have reached maximum attempts`;
            display.innerHTML = `Correct Answer is <strong><em>${ans}</em></strong>`;
            ansBtn.style.display = "none";
            i = 0;
        }
    }
    if(parseInt(score.innerText) == 5){
        display.style.fontSize = ".9rem";
        display.style.fontWeight = "lighter";
        display.style.color = "green";
        display.innerText = "Congratulations!!, You have completed the test.";
        ansBtn.style.display = "none";
        nextBtn.style.display = "none";
        answer.style.display = "none";
        restartBtn.style.display = "block";
    }
});

restartBtn.addEventListener("click", () =>document.location.reload());




function getQuestionAns(){
    
    let n1 = Math.floor(Math.random() * 10);
    let n2 = Math.floor(Math.random() * n1);
    n1 = String(n1);
    n2 = String(n2);
    let op =['+','-','*','/'];
    let randomOp = op[Math.floor(Math.random() * op.length)];
    if(randomOp == '/'){
        getn1 = Math.floor(Math.random() * 10);
        getn2 = Math.floor(Math.random() * getn1);
    }
    display.innerText = `Q: ${n1}${randomOp}${n2} = ?`;
}
