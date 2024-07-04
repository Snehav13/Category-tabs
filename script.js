document.addEventListener('DOMContentLoaded', function() {
  const quantityInput = document.getElementById('quantity');
  const decreaseQtyBtn = document.getElementById('decrease-qty');
  const increaseQtyBtn = document.getElementById('increase-qty');
  const addToCartBtn = document.getElementById('add-to-cart');
  const cartMessage = document.getElementById('cart-message');

  // Update main image on thumbnail click
  document.querySelectorAll('.thumbnails img').forEach(img => {
      img.addEventListener('click', () => {
          document.getElementById('main-image').src = img.src;
      });
  });

  // Decrease quantity
  decreaseQtyBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      if (qty > 1) {
          quantityInput.value = --qty;
      }
  });

  // Increase quantity
  increaseQtyBtn.addEventListener('click', () => {
      let qty = parseInt(quantityInput.value);
      quantityInput.value = ++qty;
  });

  // Add to cart functionality
  addToCartBtn.addEventListener('click', () => {
      const selectedColor = document.getElementById('color-selector').value;
      const selectedSize = document.getElementById('size-selector').value;
      const quantity = quantityInput.value;

      cartMessage.textContent = `Added to cart: Embrace Sideboard (Color: ${selectedColor}, Size: ${selectedSize}, Quantity: ${quantity})`;
      cartMessage.style.display = 'block';
  });
});
