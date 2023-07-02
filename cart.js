// Define the shopping cart object
const cart = {
    items: [],
    total: 0,
  };
  
  // Function to add items to the cart
  export function addToCart(product, quantity = 1) {
    const cartItem = cart.items.find(item => item.product.id === product.id);
  
    if (cartItem) {
      cartItem.quantity += quantity;
    } else {
      cart.items.push({ product, quantity });
    }
  
    cart.total += product.price * quantity;
  }
  
  // Function to remove items from the cart
  export function removeFromCart(product) {
    const cartItemIndex = cart.items.findIndex(item => item.product.id === product.id);
  
    if (cartItemIndex !== -1) {
      const cartItem = cart.items[cartItemIndex];
      cart.total -= cartItem.product.price * cartItem.quantity;
      cart.items.splice(cartItemIndex, 1);
    }
  }
  
  // Function to clear the cart
  export function clearCart() {
    cart.items = [];
    cart.total = 0;
  }
  
  export default cart;
  