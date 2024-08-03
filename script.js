document.addEventListener('DOMContentLoaded', function() {
    let cart = [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    function addToCart(item, price) {
        cart.push({ item, price });
        updateCart();
    }

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach((entry) => {
            const li = document.createElement('li');
            li.textContent = `${entry.item} - $${entry.price.toFixed(2)}`;
            cartItems.appendChild(li);
            total += entry.price;
        });
        cartTotal.textContent = total.toFixed(2);
    }

    window.addToCart = addToCart;
    window.scrollToTop = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.showCheckout = function() {
        document.getElementById('checkout-modal').style.display = 'flex';
    };

    window.closeCheckout = function() {
        document.getElementById('checkout-modal').style.display = 'none';
    };

    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for signing up!');
    });

    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Your order has been placed!');
        closeCheckout();
    });
});
