const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    image:
      "https://aritzia.scene7.com/is/image/Aritzia/large/f23_01_a05_102564_16992_on_a.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    image:
      "https://static.ticimax.cloud/31866/uploads/urunresimleri/buyuk/kadin-suet-ceketfiona-bej-suet-kot-ceket-0d43.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 39.99,
    image:
      "https://cdn-img.prettylittlething.com/a/c/c/e/acce717e854e521d9d33681b26c330fac7b25851_CND3378_1.jpg",
  },
  // Add more products as needed
];

const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    productList.appendChild(productElement);
  });
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);

  if (product) {
    cart.push({ ...product, quantity: 1 });
    updateCart();
  }
}

function updateCart() {
  const cartButton = document.getElementById("cart-button");
  cartButton.innerHTML = `Cart (${cart.length})`;

  // Display the cart items
  const cartItems = cart
    .map(
      (item) => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div>
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
            </div>
        </div>
    `
    )
    .join("");

  // Show a simple alert for demonstration
  alert(`Item added to cart:\n${cartItems}`);
}

// Initial setup
displayProducts();
