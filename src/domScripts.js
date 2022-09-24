import { mainApp, dropDown, getByCategory } from "./index";
import placeholder from "./assets/default.jpg";

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
      <div class="col my-3 " >
      <div class="card p-2 h-100 d-flex flex-column justify-content-between">
      <div class="h-75" >
      <img class="card-img-top position-relative " src="${
        product.url_image
      }" onerror="this.onerror=null;this.src='${placeholder}'" alt="Card image cap">
      ${
        product.discount > 0
          ? '<span class="badge bg-danger ms-2 position-absolute top-10 start-0">-10%</span>'
          : ""
      }
      </div>
    <div class="card-body">
      <h6 class="card-title text-center">${product.name}</h6>
      <p class="card-text text-center"> $${product.price}</p>
      <hr class="my-0" />
      <div class="d-flex mt-3 mx-0">
      <button type="button" class="btn btn-secondary flex-fill m-0">Buy now</button>
      </div>

    </div>
  </div></div>`;
    })
    .join("");
  return cardsSTring;
};

export const createGallery = (products, title) => {
  const galleryString = `
  <div class="text-center container py-5 ">
          <h4 class="mt-5 mb-5"><strong>${title}</strong></h4>
        </div>
        <div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4">
  ${createCards(products)}
</div>
</div>`;

  mainApp.innerHTML = galleryString;
};

export const createCategories = (categories) => {
  console.log(categories);
  const categoriesString = categories
    .map((cat) => {
      return `<li class="dropdown-item" role="button" id="${cat.id}">${cat.name}</li>`;
    })
    .join("");

  dropDown.innerHTML = categoriesString;
  const links = [...dropDown.children];

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const { id, textContent } = link;
      getByCategory(id, textContent);
    });
  });
};
