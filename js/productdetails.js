const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log("id:", id);

// const id = 1528;

const listURL = `https://kea-alt-del.dk/t7/api/products/${id}`;
const listContainer = document.querySelector("main");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProduct(products)));
}

function showProduct(product) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter

  listContainer.innerHTML = `
        <article class="product-ditails">
        <a href="product.html">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
          <h2 class="product-title">${product.productdisplayname}</h2>
          <p class="brand">${product.brandname}</p>

            <div class="price-wrapper">
        
            <p class="price">${product.price} kr</p>
            `${product.discount > 0 ? (product.price * (1 - product.discount / 100)).toFixed(2) : product.price}`;
          
          <div class="shoppingbasket"><img src="img/shopping_basket_36dp_78A75A_FILL0_wght400_GRAD0_opsz40.png" alt="" /></div>
        </div>
        </a>
      </article>
    `;
}

getProducts();

