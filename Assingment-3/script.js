const header = document.querySelector('.head');

const cart = document.querySelector('.cart');

const card = document.querySelectorAll('.card');

const addItem = document.querySelectorAll('.add');

const plus = document.querySelector('.plus');

const itemAdded = document.getElementById('item-count');

const minus = document.querySelector('.minus');

const checkOutMenu = document.querySelector('.c-menu');

const count = document.createElement('span');
count.innerHTML = 0;



const cardNumber = [0,1,2,3,4,5,6];

plus.forEach((btn) => {
    if(itemAdded.value > 0){
        btn.addEventListener('click', () => {
            itemAdded.value = parseInt(itemAdded.value) + 1;
        });
    }
});

minus.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (itemAdded.value > 1) {
            itemAdded.value = parseInt(itemAdded.value) - 1;
        }
    });
});

function checkOut(){
    checkOutMenu.classList.toggle('active');
}



function addToCart(){
    count.innerHTML = parseInt(count.innerHTML) + 1;
    count.classList.add('cart-count');
    if(count.innerHTML > 9 ){
        count.style.fontSize = '14px';
    }
    header.appendChild(count);
}
