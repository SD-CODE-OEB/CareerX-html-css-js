
const startBtn = document.getElementById('start');

const startBody = document.querySelector('.head');

const ansBody = document.querySelector('.ans-body');

const display = document.getElementById('display');

const answer = document.getElementById('answer');

const ansBtn = document.getElementById('btn-ans');

const nextBtn = document.getElementById('next');

const prevBtn = document.getElementById('prev');

q_list = [
{
    question: "Q:1+6 = ?",
    answer: 7
},
{
    question: "Q:3+7 = ?",
    answer:10
},
{
    question: "Q:8+5 = ?",
    answer: 13
},
{
    question: "Q:2+4 = ?",
    answer: 6
},
{
    question: "Q:3+5 = ?",
    answer: 8
}];

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    startBody.style.height = "auto";
    ansBody.classList.add('show');
    startBtn.classList.add('hide');
    let randomQ = Math.floor(Math.random() * q_list.length);
    display.innerText = q_list[randomQ].question;
});

nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let randomQ = Math.floor(Math.random() * q_list.length);
    display.innerText = q_list[randomQ].question;
});

prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let randomQ = Math.floor(Math.random() * q_list.length);
    display.innerText = q_list[randomQ].question;
});

ansBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let isEqual = display.innerText.indexOf('=');
    console.log(display.innerText);
    let question = display.innerText.slice(2, isEqual - 1);
    let n1, n2, op, tempAns;
    n1 = parseInt(question[0]);
    op = question[1];
    n2 = parseInt(question[2]);
    if(op == '+'){
        tempAns = n1 + n2;
    }else if(op == '-'){
        tempAns = n1 - n2;
    } else if(op == '*'){
        tempAns = n1 * n2;
    } else if(op == '/'){
        tempAns = n1 / n2;
    }else{
        console.log("Invalid Operator");
    }
    if(parseInt(answer.value) == tempAns){
        display.innerText = "Well Done!, You are Correct!";
    }
    else{
        display.innerText = "Try Again!\n" + display.innerText;
    }
});






// function getQuestionAns(){
//     let randomQ = Math.floor(Math.random() * q_list.length);
//     display.innerText = q_list[randomQ].question;
//     ansBtn.addEventListener("click", (e) =>{
//         e.preventDefault();
//         if(parseInt(answer.value) == q_list[randomQ].answer){
//             display.innerText = "Well Done!, You are Correct!";
//         }
//         else{
//             display.innerText = "Try Again!" + q_list[randomQ].question;
//         }
//         answer.value = "";
//     });
// }