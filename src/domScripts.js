import { mainApp } from "./index";

export const setLoading = () => {
  mainApp.innerHTML = ` <div class="d-flex justify-content-center align-items-center h-100">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
};

const createCards = (products) => {
  const cardsSTring = products
    .map((product) => {
      return `
      <div class="col my-3">
      <div class="card ">
    <img class="card-img-top" src="${product.url_image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${product.name}</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div></div>`;
    })
    .join("");
  return cardsSTring;
};

export const createGallery = (products) => {
  const galleryString = `
  <div class="text-center container py-5">
          <h4 class="mt-4 mb-5"><strong>All Products</strong></h4>
        </div>
        <div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4">
  ${createCards(products)}
</div>
</div>`;

  mainApp.innerHTML = galleryString;
};
