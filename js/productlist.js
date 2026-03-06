console.log("henter produktliste");

const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const listURL = `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(category)}`;

const listContainer = document.querySelector("#product-list");
const sortByPriceBtn = document.querySelector("#sortByPriceBtn");

let currentProducts = [];

function getProducts() {
  fetch(listURL)
    .then((res) => res.json())
    .then((products) => {
      currentProducts = products;
      showProducts(currentProducts);
    });
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
         <article class="product-card">
        <a href="product.html?id=${product.id}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.displayname}" />
     <h2 class="product-title">${product.displayname}</h2>
          <p class="brand">${product.brandname}</p>

          <div class="price-wrapper">
            <span class="discount-placeholder"></span>
            <p class="price">${product.price}kr</p>
            <div class="shoppingbasket"><img src="img/shopping_basket_36dp_78A75A_FILL0_wght400_GRAD0_opsz40.png" alt="" /></div>
          </div>
        </a>
      </article>
    `;
  });
}

getProducts();

/********* sotering***************/

// ;

// let allProducts = [];

// function getProducts() {
//   fetch(listURL)
//     .then((res) => res.json())
//     .then((products) => {
//       allProducts = products; // gem originaldata
//       showProducts(allProducts);
//     });
// }

// function showProducts(products) {
//   listContainer.innerHTML = "";

//   products.forEach((product) => {
//     listContainer.innerHTML += `
//       <article class="productCard">
//         <h3>${product.productdisplayname}</h3>
//         <p>Pris: ${product.price}</p>
//       </article>
//     `;
//   });
// }

function sortByPriceAsc() {
  const sorted = [...allProducts].sort((a, b) => a.price - b.price);
  showProducts(sorted);
}

sortByPriceBtn.addEventListener("click", sortByPriceAsc);
getProducts();
