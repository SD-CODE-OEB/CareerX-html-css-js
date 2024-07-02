const menuContainer = document.querySelector(".cards-box");
const cardContainer = document.querySelector(".container .row");
const closeCartBtn = document.querySelector(".close-cart");
const cartClick = document.querySelector(".cart-btn");
const cartCount = document.querySelector(".cart-items-count");
if (cartCount.innerText === "0") {
  cartCount.style.display = "none";
}
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".total-price h3 span");
console.log("cartClick", cartClick);

const products = [
  {
    name: "Cold Coffee",
    price: 89,
    img: "./Images/1.PNG",
  },
  {
    name: "Latte",
    price: 59,
    img: "./Images/2.PNG",
  },
  {
    name: "Sandwich",
    price: 49,
    img: "./Images/3.PNG",
  },
  {
    name: "Novelty",
    price: 99,
    img: "./Images/4.PNG",
  },
  {
    name: "Soy Milk",
    price: 79,
    img: "./Images/5.PNG",
  },
  {
    name: "Cocoa Blocks",
    price: 49,
    img: "./Images/6.PNG",
  },
];
(function createCard() {
  products.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("col-4");
    card.innerHTML = `
          <div class="card p-0 bg-light">
              <img src="${item.img}" alt="coffe" class="card-img-top">
              <div class="card-body fs-6">
                  <h5 class="card-title">${item.name}</h5>
                  <div class="card-text d-flex justify-content-between">
                  <div class="card-price pt-2">
                  Price: $${item.price}
                  </div>
                  <button class="btn btn-primary" type="button">Add</button>
                  </div>
              </div>
          </div>
          `;
    cardContainer.appendChild(card);
  });
})();
function addToCart() {
  const addBtns = document.querySelectorAll(".card .card-body .btn");
  addBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains("added")) {
        return;
      } else {
        btn.innerText = "Added";
        btn.classList.add("added", "disabled");
        const product = products[index];
        console.log(product);
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
      <div class="col-12 ms-auto small text-light d-flex justify-content-evenly align-items-end mb-1">
        <img src="${product.img}" alt="coffe" class="cart-img card-img-left" height="50">
        <big class="pb-3 ps-3 w-75 cart-item-name">${product.name}</big>
        <div class="btns-box d-flex justify-content-evenly align-items-end pb-1 pe-2">
      <button class="btn btn-danger px-2 py-0 fs-4 h-25">-</button>
      <span class="count text-light px-2 pb-1 rounded">1</span>
      <button class="btn btn-success px-1 py-0 fs-4 h-25">+</button>
      </div>
      </div>
            `;
        cartItems.appendChild(cartItem);
        cartCount.innerText = cartItems.childElementCount;
        if (cartCount.innerText !== "0") {
          cartCount.style.display = "block";
        }
        countItems();
        totalCartPrice();
      }
    });
  });
}
addToCart();
function countItems() {
  const count = document.querySelectorAll(".cart-item .count");
  count.forEach((item) => {
    let count = 1;
    item.innerText = count;
    const plus = item.nextElementSibling;
    const minus = item.previousElementSibling;
    plus.addEventListener("click", () => {
      count++;
      item.innerText = count;
      totalCartPrice();
    });
    minus.addEventListener("click", () => {
      count--;
      item.innerText = count;
      if (count <= 0) {
        const cardNames = document.querySelectorAll(
          ".card .card-body .card-title"
        );
        cardNames.forEach((card) => {
          if (
            card.innerText ===
            item.parentElement.previousElementSibling.innerText
          ) {
            const addBtns = document.querySelectorAll(".card .card-body .btn");
            addBtns.forEach((btn) => {
              card.parentElement
                .querySelector(".btn")
                .classList.remove("added", "disabled");
              card.parentElement.querySelector(".btn").innerText = "Add";
              item.parentElement.parentElement.parentElement.remove(); //cart-item
              cartCount.innerText = cartItems.childElementCount;
              if (cartCount.innerText === "0") {
                cartCount.style.display = "none";
              }
            });
          }
        });
      }
      totalCartPrice();
    });
  });
}
function totalCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  cartItems.forEach((cItem) => {
    const quantity = cItem.querySelector(".count").innerText;
    console.log("quantity", quantity);

    const menuCards = cardContainer.querySelectorAll(".card");
    // menuCards.forEach((mCard) => {
    //   if (
    //     mCard.querySelector(".card-title").innerText ===
    //     cItem.querySelector(".cart-item-name").innerText.split(" ")[0]
    //   ) {
    //     const price = mCard
    //       .querySelector(".card-price")
    //       .innerText.split("$")[1];
    //     console.log("price", price);

    //     const total = eval(quantity * price);
    //     cItem.querySelector(".cart-item-name").innerText = `${
    //       cItem.querySelector(".cart-item-name").innerText
    //     } $${total}`;
    //     console.log(cItem.querySelector(".cart-item-name").split(" ")[0]);
    //   }
    // });
  });
}

cartClick.addEventListener("click", () => {
  cart.classList.toggle("active");
  menuContainer.classList.toggle("active");
});

closeCartBtn.addEventListener("click", () => {
  cart.classList.remove("active");
  menuContainer.classList.remove("active");
});
