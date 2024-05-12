const header = document.querySelector(".head");

const cart = document.querySelector(".cart");

const cards = document.querySelectorAll(".card");

const checkOutMenu = document.querySelector(".c-menu");

const checkOutItems = document.querySelector(".cart-items");

const orderBtn = document.getElementById("order");

const cancelBtn = document.getElementById("cancel");


cart.onclick = function checkOut() {
    checkOutMenu.classList.toggle("active");
    
};

for (const c of cards) {
    let getAddBtn = c.querySelector(".add");
    if (getAddBtn) {
        getAddBtn.onclick = function () {
            if (!getAddBtn.classList.contains("added")) {
        const cardItemPrice = c.querySelector(".cost h4 span").innerText;
        const cardItemName = c.querySelector(".info h4").innerText;
        const cardItemImg = c.querySelector("img").src;
        const cardItemCount = 1;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-create");
        cartItem.innerHTML = 
        `<img src="${cardItemImg}" alt="">
         <div class="item-nm-cnt">
            <div style ="width:100%;font-size:13px;">${cardItemName}
            </div>
            <div class="price">
            cost:$<span>${cardItemPrice}</span>
            </div>
         </div>
         <div class="add_remove">
            <span class="material-symbols-outlined remove" onclick="decrease()">remove</span>
            <div class="no_of_added">${cardItemCount}</div>
            <span class="material-symbols-outlined add" onclick="increase()">add</span>
         </div>`;
        checkOutMenu.children[1].appendChild(cartItem);
        getAddBtn.classList.add("added");
        addToCart();
        updateCart();
      } else{
        return;
      }
    };
  }
}

function updateCart(){
    const cartItems = checkOutMenu.children[1].children;
    for (const item of cartItems){        
        if (item.children[2].children[1].innerText < 1){
            item.remove();
        }
        const rBtn = item.children[2].children[0];
        const aBtn = item.children[2].children[2];
        if(aBtn){
            const price = parseInt(item.children[1].children[1].children[0].innerText);
            aBtn.onclick = function(){
                const count = parseInt(item.children[2].children[1].innerText);
                item.children[2].children[1].innerText = count + 1;
                item.children[1].children[1].children[0].innerText = price * (count + 1);
            }
        }
        if(rBtn){
            const price = parseInt(item.children[1].children[1].children[0].innerText);
            rBtn.onclick = function(){
                const count = parseInt(item.children[2].children[1].innerText);
                if(count > 1){
                    item.children[2].children[1].innerText = count - 1;
                    item.children[1].children[1].children[0].innerText = price * (count - 1);
                } else{
                    const menuItems = document.querySelectorAll('.card');
                    for(const menuItem of menuItems){
                        if((item.children[0].src == menuItem.children[0].src)){
                            menuItem.querySelector('.add').classList.remove('added');
                        }
                    }
                    removeFromCart();
                    item.remove(); 
                }
            }
        }
    }
    
}

cancelBtn.onclick = function () {
    checkOutMenu.classList.remove("active");
  };


const count = document.createElement("span");
count.innerHTML = 0;
function addToCart(){
    count.innerHTML  = checkOutItems.children.length;
    console.log('count', count.innerHTML);
    count.classList.add("cart-count");
    if (count.innerHTML > 9) {
      count.style.fontSize = "14px";
    }
    header.appendChild(count);
}

function removeFromCart(){
    count.innerHTML  = checkOutItems.children.length - 1;
    count.classList.add("cart-count");
    if (count.innerHTML > 9) {
      count.style.fontSize = "14px";
    }
    header.appendChild(count);
}
