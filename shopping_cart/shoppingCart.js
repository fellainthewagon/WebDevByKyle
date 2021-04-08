const cartBtn = document.querySelector("[data-cart-button]");
const cartItemsWrapper = document.querySelector("[data-cart-items-wrapper]");
let shoppingCart = [];

export function setupShoppingCart() {}

// show/hide cart
cartBtn.addEventListener("click", () => {
  cartItemsWrapper.classList.toggle("invisible");
});

// add items to cart
export function addToCart(id) {
  shoppingCart.push({ id: id, quantity: 1 });
}
