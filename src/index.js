import { setLoading, createGallery } from "./domScripts";

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
