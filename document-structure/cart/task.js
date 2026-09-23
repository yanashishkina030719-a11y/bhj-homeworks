const decButtons = document.querySelectorAll('.product__quantity-control_dec');
const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const addButtons = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');

incButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const quantityValue = product.querySelector('.product__quantity-value');

        let quantity = parseInt(quantityValue.textContent);
        quantity++;
        quantityValue.textContent = quantity;
    });
});

decButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const quantityValue = product.querySelector('.product__quantity-value');

        let quantity = parseInt(quantityValue.textContent);
        if (quantity > 1) {
            quantity--;
            quantityValue.textContent = quantity;
        }
    });
});

addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const product = this.closest('.product');
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
        const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);

        if (existingProduct) {
            const countElement = existingProduct.querySelector('.cart__product-count');
            const currentCount = parseInt(countElement.textContent);
            countElement.textContent = currentCount + quantity;
        }
        else {
            const cartProduct = document.createElement('div');
            cartProduct.className = 'cart__product';
            cartProduct.dataset.id = productId;

            cartProduct.innerHTML = `
                <img class="cart__product-image" src="${productImage}">
                <div class="cart__product-count">${quantity}</div>
            `;

            cartProducts.appendChild(cartProduct);
        }
    });
});