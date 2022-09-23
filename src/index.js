import { setLoading, createGallery } from "./domScripts";

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

const loadProducts = async () => {
  setLoading();
  try {
    const response = await fetch("http://localhost:5000/api/products");
    const data = await response.json();
    console.log(data);
    createGallery(data.products);
  } catch (error) {
    console.log(error);
  }
};

loadProducts();
