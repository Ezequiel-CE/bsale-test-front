import {
  setLoading,
  createGallery,
  createCategories,
  setError,
  createShoppingCart,
  setNoResult,
} from "./domScripts";

//ELEMENTS
export const mainApp = document.querySelector("#main");
const searchForm = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const homeBtn = document.querySelector("#home-btn");
export const dropDown = document.querySelector("#categories-drop");
export const canvas = document.querySelector("#canvas-body");

//STATE

let shoppingCart = [];
export let sort = "id";
export let order = "DESC";
export let category = null;
export let searchProduct = null;

export const resetSearch = () => {
  searchProduct = null;
};

export const resetSortOrder = () => {
  sort = "id";
  order = "DESC";
};

/**
 * Function for fetching the sorted products
 */

export const changeSortAndOrder = (newSort, newOrder) => {
  sort = newSort || sort;
  order = newOrder || "DESC";

  if (category) {
    getByCategory(category.id, category.name, sort, order);
  } else {
    loadAllProducts(sort, order);
  }
};

/**
 * Function for adding carts to shoppingCart
 */

export const addTocart = (product) => {
  const cartProduct = { ...product, amount: 1 };

  if (shoppingCart.find((pro) => pro.id === cartProduct.id)) {
    //update cart
    const existingProductID = shoppingCart.findIndex(
      (pro) => pro.id === cartProduct.id
    );
    shoppingCart[existingProductID].amount++;
  } else {
    shoppingCart = [...shoppingCart, cartProduct];
  }

  createShoppingCart(shoppingCart);
};

/**
 * Function for deleting carts to shoppingCart
 */

export const removeFromCart = (product) => {
  shoppingCart = shoppingCart.filter((pro) => pro.id !== product.id);
  createShoppingCart(shoppingCart);
};

/**
 * Function for adding product in shopping cart
 */

export const addProductInCart = (product) => {
  if (shoppingCart.find((pro) => pro.id === product.id)) {
    //update cart
    const existingProductID = shoppingCart.findIndex(
      (pro) => pro.id === product.id
    );
    shoppingCart[existingProductID].amount++;
  }
  createShoppingCart(shoppingCart);
};

export const removeProductInCart = (product) => {
  if (shoppingCart.find((pro) => pro.id === product.id)) {
    //update cart
    const existingProductID = shoppingCart.findIndex(
      (pro) => pro.id === product.id
    );
    shoppingCart[existingProductID].amount--;

    //if amount is 0 delete element
    if (shoppingCart[existingProductID].amount === 0) {
      shoppingCart = shoppingCart.filter((pro) => pro.id !== product.id);
    }
  }

  createShoppingCart(shoppingCart);
};

/**
 * Function for fetching all products
 */

export const loadAllProducts = async (sort = null, order = null) => {
  setLoading();
  category = null;
  let response;
  try {
    if (sort && order) {
      response = await fetch(
        "http://localhost:5000/api/products?" +
          new URLSearchParams({ sort: sort, order: order })
      );
    } else {
      response = await fetch("http://localhost:5000/api/products");
    }

    if (!response.ok) {
      throw new Error("cant get products");
    }

    const data = await response.json();
    console.log(data);
    createGallery(data.products, "All products");
  } catch (error) {
    setError();
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
    setError();
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

    if (data.products.length > 0) {
      createGallery(data.products, `Results for "${name}"`);
    } else {
      setNoResult();
    }
  } catch (error) {
    setError();
    console.log(error);
  }
};

/**
 * Function for fetching products by category
 * @param {string} id
 * @param {string} name
 */

export const getByCategory = async (id, name, sort = null, order = null) => {
  setLoading();
  //set category
  category = { id, name };
  let response;
  try {
    if (sort && order) {
      response = await fetch(
        `http://localhost:5000/api/category/${id}?` +
          new URLSearchParams({ sort: sort, order: order })
      );
    } else {
      response = await fetch("http://localhost:5000/api/category/" + id);
    }

    if (!response.ok) {
      throw new Error("cant fetch category");
    }

    const data = await response.json();

    createGallery(data.products, `${name} category`);
  } catch (error) {
    setError();
    console.log(error);
  }
};

const init = () => {
  loadAllProducts("id", "DESC");
  loadAllCategories();
};

init();

//Listeners

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.length < 1) return;
  searchProduct = input.value;
  searchForProduct(input.value);
  input.value = "";
});

homeBtn.addEventListener("click", () => {
  resetSortOrder();
  resetSearch();
  loadAllProducts("id", "DESC");
});
