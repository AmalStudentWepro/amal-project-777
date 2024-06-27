function CartItem(item) {
    const cart = document.createElement("div");
    const productDiv = document.createElement("div");
    const productImage = document.createElement("img");
    const productName = document.createElement("p");
    const quantityDiv = document.createElement("div");
    const minusButton = document.createElement("button");
    const quantitySpan = document.createElement("span");
    const plusButton = document.createElement("button");
    const detailsDiv = document.createElement("div");
    const productPrice = document.createElement("div");
    const removeButton = document.createElement("button");


    productDiv.className = 'product';
    cart.className = 'cart';
    quantityDiv.className = "quantity";
    productName.className = "product-name";
    detailsDiv.className = "details";
    productPrice.className = "price";
    removeButton.className = "remove-btn";
    productImage.src = item.image;
    productImage.alt = item.title;
    productName.textContent = item.category;
    productPrice.textContent = item.price;
    removeButton.textContent = "Remove";
    minusButton.textContent = "-";
    quantitySpan.textContent = "1";
    plusButton.textContent = "+";

    minusButton.onclick = () => {
        let currentQuantity = parseInt(quantitySpan.textContent);
        if (currentQuantity > 1) {
            quantitySpan.textContent = currentQuantity - 1;
        }
    };

    plusButton.onclick = () => {
        let currentQuantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = currentQuantity + 1;
    };

    productDiv.append(productImage);
    productDiv.append(productName);
    quantityDiv.append(minusButton, quantitySpan, plusButton);
    detailsDiv.append(productPrice, removeButton);
    productDiv.append(quantityDiv, detailsDiv);
    cart.append(productDiv);

    return cart;
}
