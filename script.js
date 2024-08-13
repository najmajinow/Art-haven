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
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scroll down
        header.classList.add('hidden');
    } else {
        // Scroll up
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
