const mainMenu = document.querySelector(".menu");

const header = document.querySelector(".head");

const cardContainer = document.querySelector(".container");

const cart = document.querySelector(".cart");

const checkOutMenu = document.querySelector(".c-menu");

const checkOutItems = document.querySelector(".cart-items");

const orderBtn = document.getElementById("order");

const cancelBtn = document.getElementById("cancel");

const closeBtn = document.getElementById("close");

const orderComplete = document.querySelector(".overlay");

const cards = [
  {
    name: "Latte",
    price: 90,
    img: "./Images/1.PNG",
  },
  {
    name: "Cappucinno",
    price: 70,
    img: "./Images/2.PNG",
  },
  {
    name: "Sandwich",
    price: 60,
    img: "./Images/3.PNG",
  },
  {
    name: "Novelty",
    price: 150,
    img: "./Images/4.PNG",
  },
  {
    name: "Soy Milk",
    price: 120,
    img: "./Images/5.PNG",
  },
  {
    name: "Cocoa Blocks",
    price: 60,
    img: "./Images/6.PNG",
  },
];

(function createCard() {
  cards.forEach((card) => {
    let getCardImg = card.img;
    let getCardName = card.name;
    let getCardPrice = card.price;
    const crd = document.createElement("div");
    crd.classList.add("card");
    crd.innerHTML = `<img src="${getCardImg}" alt="" />
                    <div class="info">
                        <h4>${getCardName}</h4>
                        <div class="cost">
                            <h4>Price: &#8377;<span>${getCardPrice}</span></h4>
                            <button type="button" class="add">add</button>
                        </div>
                    </div`;
    cardContainer.append(crd);
  });
})();

cart.onclick = function checkOut() {
  checkOutMenu.classList.toggle("active");
  mainMenu.classList.toggle("move");
  cardContainer.classList.toggle("move");
  header.classList.toggle("move");
};

cancelBtn.onclick = function () {
  checkOutMenu.classList.remove("active");
  mainMenu.classList.remove("move");
  cardContainer.classList.remove("move");
  header.classList.remove("move");
};

const menuItems = cardContainer.children;

for (const item of menuItems) {
  const getAddBtn = item.querySelector(".add");
  if (getAddBtn) {
    getAddBtn.onclick = function () {
      if (!getAddBtn.classList.contains("added")) {
        const itemName = item.querySelector(".info h4").innerText;
        const itemPrice = item.querySelector(".cost h4 span").innerText;
        const itemImg = item.querySelector("img").src;
        const cartItemCount = 1;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-create");
        cartItem.innerHTML = `<img src="${itemImg}" alt="">
         <div class="item-nm-cnt">
            <div style ="width:100%;font-size:13px;">${itemName}
            </div>
            <div class="price">
            cost: &#8377;<span>${itemPrice}</span>
            </div>
         </div>
         <div class="add_remove">
            <span class="material-symbols-outlined remove" onclick="decrease()">remove</span>
            <div class="no_of_added">${cartItemCount}</div>
            <span class="material-symbols-outlined add" onclick="increase()">add</span>
         </div>`;
        checkOutItems.append(cartItem);
        getAddBtn.classList.add("added");
        addToCart();
        updateCart();
      } else {
        return;
      }
    };
  }
}

function updateCart() {
  const cartItems = checkOutMenu.children[1].children;
  for (const item of cartItems) {
    if (item.children[2].children[1].innerText < 1) {
      item.remove();
    }
    const rBtn = item.children[2].children[0];
    const aBtn = item.children[2].children[2];
    if (aBtn) {
      const price = parseInt(
        item.children[1].children[1].children[0].innerText
      );
      aBtn.onclick = function () {
        const count = parseInt(item.children[2].children[1].innerText);
        item.children[2].children[1].innerText = count + 1;
        item.children[1].children[1].children[0].innerText =
          price * (count + 1);
        totalCost();
      };
    }
    if (rBtn) {
      const price = parseInt(
        item.children[1].children[1].children[0].innerText
      );
      rBtn.onclick = function () {
        const count = parseInt(item.children[2].children[1].innerText);
        if (count > 1) {
          item.children[2].children[1].innerText = count - 1;
          item.children[1].children[1].children[0].innerText =
            price * (count - 1);
          totalCost();
        } else {
          const menuItems = document.querySelectorAll(".card");
          for (const menuItem of menuItems) {
            if (item.children[0].src == menuItem.children[0].src) {
              menuItem.querySelector(".add").classList.remove("added");
            }
          }
          removeFromCart();
          item.remove();
          totalCost();
        }
      };
    }
  }
}

const count = document.createElement("span");
count.innerHTML = 0;
function addToCart() {
  count.innerHTML = checkOutItems.children.length;
  count.classList.add("cart-count");
  if (count.innerHTML > 9) {
    count.style.fontSize = "14px";
  }
  header.appendChild(count);
  totalCost();
}

function removeFromCart() {
  count.innerHTML = checkOutItems.children.length - 1;
  count.classList.add("cart-count");
  if (count.innerHTML > 9) {
    count.style.fontSize = "14px";
  }
  header.appendChild(count);
}

function totalCost() {
  const cartItems = checkOutItems.children;
  let totalPrice = 0;
  for (const cItem of cartItems) {
    let cItemCost = parseInt(cItem.querySelector(".price span").innerText);
    totalPrice += cItemCost;
    checkOutMenu.children[0].innerText = `checkout: ${totalPrice}rs`;
  }
  if (cartItems.length === 0) {
    checkOutMenu.children[0].innerText = `CHECKOUT`;
  }
}

orderBtn.onclick = function () {
  if (checkOutItems.children.length === 0) {
    alert("Select an Item to Place a Order");
  } else {
    orderComplete.classList.add("active");
  }
};

closeBtn.onclick = function () {
  orderComplete.classList.remove("active");
  document.location.reload();
};
