const listURL = `kea-alt-del.dk/t7/api/${category}`;
const listContainer = document.querySelector("main");

function getCategory() {
  fetch(listURL).then((res) => res.json().then((category) => showCategory(category)));
}

function showCat(category) {
  // Start med tom container
  listContainer.innerHTML = "";
}



products.forEach((category) => {
  document.querySelector("#category").innerHTML += `
  <section class="index-section">
      <a href="productlist.html">´${category}´</a>
        <div class="index-box">
          <h1>${category}</h1>
        </div>
      </a>
  </sektion>
});