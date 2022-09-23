import { setLoading } from "./domScripts";

const productsTest = [
  {
    id: 29,
    name: "RON FLOR DE CAÑA 5 AÑOS",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/flor59677.jpg",
    price: 4590,
    discount: 0,
    category: 3,
  },
  {
    id: 30,
    name: "RON HAVANA AÑEJO RESERVA",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaan-ejo9750.jpg",
    price: 6990,
    discount: 0,
    category: 3,
  },
  {
    id: 31,
    name: "RON HAVANA ESPECIAL",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/havanaespecial9768.jpg",
    price: 5990,
    discount: 20,
    category: 3,
  },
  {
    id: 32,
    name: "RON PAMPERO",
    url_image:
      "https://dojiw2m9tvv09.cloudfront.net/11132/product/pampero-especial0296.jpg",
    price: 5490,
    discount: 20,
    category: 3,
  },
];

export const mainApp = document.querySelector("#main");

export const setProductCards = (products) => {
  let count = 2;

  const productsString = products
    .map((product, i) => {
      return `
     
      
    <div class="card">
      <div
        class="bg-image hover-zoom ripple"
        data-mdb-ripple-color="light"
      >
        <img
          src="${product.url_image}"
          
        />
        <a href="#!">
          <div class="mask">
            <div
              class="d-flex justify-content-start align-items-end h-100"
            >
              <h5>
                <span class="badge bg-danger ms-2">-10%</span>
              </h5>
            </div>
          </div>
          <div class="hover-overlay">
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div>
          </div>
        </a>
      </div>
      <div class="card-body">
        <a href="" class="text-reset">
          <h5 class="card-title mb-3">${product.name}</h5>
        </a>
        <a href="" class="text-reset">
          <p>Category</p>
        </a>
        <h6 class="mb-3">
          <s>$61.99</s
          ><strong class="ms-2 text-danger">$${product.price}</strong>
        </h6>
      </div>
    </div>
  </div>
  `;
    })
    .join("");

  mainApp.innerHTML = `<div class="d-flex flex-wrap">
  ${productsString}
</div>`;
};

const loadProducts = async () => {
  setLoading();
  try {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();
    setProductCards(data.products);
  } catch (error) {
    console.log(error);
  }
};

loadProducts();
