import { mainApp, dropDown, getByCategory, addTocart, canvas } from "./index";
import placeholder from "./assets/default.jpg";

//LOADING PAGE

export const setLoading = () => {
  mainApp.innerHTML = ` <div class="d-flex justify-content-center align-items-center h-100">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
};

//CARDS
/**
 * Function that Return Cards element
 *
 * @param {[products]} products
 * @returns {[DomElements]} Cards
 */

const createCards = (products) => {
  const cardsDomArr = products.map((product) => {
    const card = document.createElement("div");
    card.classList.add("col");
    card.classList.add("my-3");

    const cardContent = `
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
      <button type="button" class="btn btn-secondary flex-fill m-0" id="cardBtn">Buy now</button>
      </div>

    </div>
  </div>`;

    card.innerHTML = cardContent;

    //Adding event to Btn

    const buyBtn = card.querySelector("#cardBtn");

    buyBtn.addEventListener("click", () => {
      debugger;
      addTocart(product);
    });

    return card;
  });

  return cardsDomArr;
};

// SHOPPING CART

export const createShoppingCart = (productArr) => {
  const cart = productArr
    .map((pro) => {
      const cartString = `<div class="mb-4 d-flex gap-3 justify-content-between align-items-center">
    <div >
      <img
        src="${pro.url_image}"
        onerror="this.onerror=null;this.src='${placeholder}'" 
        class="rounded-2 mw-100"
        alt="${pro.name}"
        width="80"
      />
    </div>
    <div >
      <p class="text-black  text-center" style="font-size:15px">${pro.name}</p>
    </div>
    <div class=" d-flex justify-content-center">
      <i class="bi bi-dash p-1" role="button"></i>
  
      <p class="m-0 p-1">${pro.amount}</p>
  
      <i class="bi bi-plus p-1" role="button"></i>
    </div>
    <div class="">
      <h6 class="mb-0">$${pro.amount * pro.price}</h6>
    </div>
    <div class="">
      <i class="bi bi-x" role="button"></i>
    </div>
  </div>
  <hr class="my-4" />`;

      return cartString;
    })
    .join("");

  canvas.innerHTML = cart;
};

//GALLERY

export const createGallery = (products, title) => {
  const galleryString = `
  <div class="text-center container py-5 ">
          <h4 class="mt-5 mb-5"><strong>${title}</strong></h4>
        </div>
        <div class="container">
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4" id="gallery">
  
</div>
</div>`;
  mainApp.innerHTML = galleryString;

  const gallery = document.querySelector("#gallery");

  const cardsArr = createCards(products);

  cardsArr.forEach((card) => {
    gallery.appendChild(card);
  });
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

//ERROR PAGE

export const setError = () => {
  const errorString = `<div class="d-flex align-items-center justify-content-center vh-100">
  <div class="text-center">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
      <p class="lead">
          Something went wrong. Please try again
        </p>
      <div class="btn btn-primary" id="btn-err"> Refresh</div>
  </div>
</div>`;

  mainApp.innerHTML = errorString;

  const errbtn = document.querySelector("#btn-err");
  errbtn.addEventListener("click", () => {
    window.location.reload();
  });
};
