import products from './product.js';
import cart, { addToCart, removeFromCart, clearCart } from './cart.js';

// Function to display the product list
function displayProductList() {
  const productContainer = document.querySelector('.product-list');

  products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.classList.add('product');

    const name = document.createElement('span');
    name.textContent = product.name;

    const price = document.createElement('span');
    price.textContent = `$${product.price}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart';
    addButton.classList.add('btn', 'btn-primary');

    addButton.addEventListener('click', () => {
      addToCart(product);
      displayCartItems();
    });

    productItem.appendChild(name);
    productItem.appendChild(price);
    productItem.appendChild(addButton);
    productContainer.appendChild(productItem);
  });
}

// Function to display the cart items
function displayCartItems() {
  const cartContainer = document.querySelector('.cart');
  cartContainer.innerHTML = '';

  cart.items.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');

    const name = document.createElement('span');
    name.textContent = item.product.name;

    const quantity = document.createElement('span');
    quantity.textContent = `Quantity: ${item.quantity}`;

    const price = document.createElement('span');
    price.textContent = `Price: $${item.product.price}`;

    cartItem.appendChild(name);
    cartItem.appendChild(quantity);
    cartItem.appendChild(price);
    cartContainer.appendChild(cartItem);
  });

  const total = document.createElement('div');
  total.textContent = `Total: $${cart.total}`;
  cartContainer.appendChild(total);
}

// Function to clear the cart
function handleClearCart() {
  clearCart();
  displayCartItems();
}

// Attach event listener to the Clear Cart button
const clearCartButton = document.querySelector('.clear-cart');
clearCartButton.addEventListener('click', handleClearCart);

// Display the initial product list and cart items
displayProductList();
displayCartItems();
