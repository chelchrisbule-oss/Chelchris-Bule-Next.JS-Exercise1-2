let cart = [];
let total = 0;

/* =========================
   ADD TO CART
========================= */
function addToCart(name, price) {

    cart.push({ name, price });

    total += price;

    updateCart();

    showNotification(name + " added ✔");
}

/* =========================
   UPDATE CART COUNT
========================= */
function updateCart() {

    const count = document.getElementById("cart-count");

    if (count) {
        count.innerText = cart.length;
    }
}

/* =========================
   BUY NOW (SIMPLE & SAFE)
========================= */
function buyNow() {

    if (cart.length === 0) {
        showNotification("Cart is empty!");
        return;
    }

    // prevent multiple popups
    const existing = document.querySelector(".checkout-popup");
    if (existing) existing.remove();

    let items = "";

    cart.forEach(item => {
        items += `<li>${item.name} - $${item.price}</li>`;
    });

    const popup = document.createElement("div");

    popup.className = "checkout-popup";

    popup.innerHTML = `
        <div class="checkout-box">
            <h2>Checkout</h2>

            <ul>${items}</ul>

            <h3>Total: $${total}</h3>

            <button onclick="confirmOrder()">Confirm Order</button>
            <button onclick="closeCheckout()" class="close-btn">Cancel</button>
        </div>
    `;

    document.body.appendChild(popup);
}

/* =========================
   CONFIRM ORDER
========================= */
function confirmOrder() {

    alert("Order placed ✔");

    cart = [];
    total = 0;

    updateCart();
    closeCheckout();
}

/* =========================
   CLOSE CHECKOUT
========================= */
function closeCheckout() {
    const popup = document.querySelector(".checkout-popup");
    if (popup) popup.remove();
}

/* =========================
   NOTIFICATION
========================= */
function showNotification(msg) {

    const div = document.createElement("div");
    div.className = "notification";
    div.innerText = msg;

    document.body.appendChild(div);

    setTimeout(() => div.remove(), 2000);
}