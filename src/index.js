import { setLoading, createGallery } from "./domScripts";

export const mainApp = document.querySelector("#main");
const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

const loadProducts = async () => {
  setLoading();
  try {
    const response = await fetch("http://localhost:5000/api/products");

    if (!response.ok) {
      throw new Error("cant get products");
    }

    const data = await response.json();
    console.log(data);
    createGallery(data.products, "All products");
  } catch (error) {
    console.log(error);
  }
};

const searchForProduct = async (name) => {
  setLoading();
  try {
    const response = await fetch(
      "http://localhost:5000/api/products/search?" +
        new URLSearchParams({ productName: name })
    );

    if (!response.ok) {
      throw new Error("cant search product");
    }

    const data = await response.json();
    console.log(data);
    createGallery(data.products, `Results for "${name}"`);
  } catch (error) {
    console.log(error);
  }
};

loadProducts();

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForProduct(input.value);
  input.value = "";
});
