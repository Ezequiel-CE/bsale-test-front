import { setLoading, createGallery, createCategories } from "./domScripts";

//ELEMENTS
export const mainApp = document.querySelector("#main");
const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const homeBtn = document.querySelector("#home-btn");
export const dropDown = document.querySelector("#categories-drop");

/**
 * Function for fetching all products
 */

const loadAllProducts = async () => {
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

/**
 * Function for fetching all categories
 */

const loadAllCategories = async () => {
  setLoading();
  try {
    const response = await fetch("http://localhost:5000/api/category");

    if (!response.ok) {
      throw new Error("cant get category");
    }

    const data = await response.json();

    createCategories(data.categories);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Function for fetching products by name
 * @param {string} name
 */

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

    createGallery(data.products, `Results for "${name}"`);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Function for fetching products by category
 * @param {string} id
 * @param {string} name
 */

export const getByCategory = async (id, name) => {
  setLoading();
  try {
    const response = await fetch("http://localhost:5000/api/category/" + id);

    if (!response.ok) {
      throw new Error("cant fetch category");
    }

    const data = await response.json();

    createGallery(data.products, `${name} category`);
  } catch (error) {
    console.log(error);
  }
};

const init = () => {
  loadAllProducts();
  loadAllCategories();
};

init();

//Listeners

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchForProduct(input.value);
  input.value = "";
});

homeBtn.addEventListener("click", loadAllProducts);
