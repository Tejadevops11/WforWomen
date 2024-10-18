// JavaScript to handle adding items to the cart

let cart = [];
let totalPrice = 0;

// Update the cart count and total price
function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    const cartItems = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            cartItems.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)}</p>`;
        });
    }
}

// Add product to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        const price = parseFloat(e.target.getAttribute('data-price'));

        // Add item to cart array
        cart.push({ name: product, price: price });

        // Update total price
        totalPrice += price;

        // Update the cart display
        updateCart();
    });
});
