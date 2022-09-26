/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domScripts.js":
/*!***************************!*\
  !*** ./src/domScripts.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCategories\": () => (/* binding */ createCategories),\n/* harmony export */   \"createGallery\": () => (/* binding */ createGallery),\n/* harmony export */   \"createShoppingCart\": () => (/* binding */ createShoppingCart),\n/* harmony export */   \"createShoppingCartProducts\": () => (/* binding */ createShoppingCartProducts),\n/* harmony export */   \"setError\": () => (/* binding */ setError),\n/* harmony export */   \"setLoading\": () => (/* binding */ setLoading),\n/* harmony export */   \"setNoResult\": () => (/* binding */ setNoResult)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _assets_default_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/default.jpg */ \"./src/assets/default.jpg\");\n\n\n\n//LOADING PAGE\n\nconst setLoading = () => {\n  _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.innerHTML = ` <div class=\"d-flex justify-content-center align-items-center h-100\">\n  <div class=\"spinner-border\" role=\"status\">\n    <span class=\"visually-hidden\">Loading...</span>\n  </div>\n</div>`;\n};\n\n//CARDS\n/**\n * Function that Return Cards element\n *\n * @param {[products]} products\n * @returns {[DomElements]} Cards\n */\n\nconst createCards = (products) => {\n  const cardsDomArr = products.map((product) => {\n    const card = document.createElement(\"div\");\n    card.classList.add(\"col\", \"my-3\");\n\n    const cardContent = `\n            <div class=\"card p-2 h-100 d-flex flex-column justify-content-between\">\n      <div class=\"h-75\" >\n      <img class=\"card-img-top position-relative \" src=\"${\n        product.url_image\n      }\" onerror=\"this.onerror=null;this.src='${_assets_default_jpg__WEBPACK_IMPORTED_MODULE_1__}'\" alt=\"Card image cap\">\n      ${\n        product.discount > 0\n          ? `<span class=\"badge bg-danger ms-2 position-absolute top-10 start-0\">-${product.discount}%</span>`\n          : \"\"\n      }\n      </div>\n    <div class=\"card-body\">\n      <h6 class=\"card-title text-center\">${product.name}</h6>\n      <p class=\"card-text text-center\"> $${product.price}</p>\n      <hr class=\"my-0\" />\n      <div class=\"d-flex mt-3 mx-0\">\n      <button type=\"button\" class=\"btn btn-secondary flex-fill m-0\" id=\"cardBtn\">Buy now</button>\n      </div>\n\n    </div>\n  </div>`;\n\n    card.innerHTML = cardContent;\n\n    //Adding event to Btn\n\n    const buyBtn = card.querySelector(\"#cardBtn\");\n\n    buyBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.addTocart)(product);\n    });\n\n    return card;\n  });\n\n  return cardsDomArr;\n};\n\n// SHOPPING CART PRODUCTS\n\nconst createShoppingCartProducts = (productArr) => {\n  const cartProductsEl = productArr.map((pro) => {\n    const cartProduct = document.createElement(\"div\");\n    cartProduct.classList.add(\n      \"mb-4\",\n      \"d-flex\",\n      \"gap-3\",\n      \"justify-content-between\",\n      \"align-items-center\"\n    );\n    const cartString = `\n    <div >\n      <img\n        src=\"${pro.url_image}\"\n        onerror=\"this.onerror=null;this.src='${_assets_default_jpg__WEBPACK_IMPORTED_MODULE_1__}'\" \n        class=\"rounded-2 mw-100\"\n        alt=\"${pro.name}\"\n        width=\"80\"\n      />\n    </div>\n    <div >\n      <p class=\"text-black  text-center\" style=\"font-size:15px\">${pro.name}</p>\n    </div>\n    <div class=\" d-flex justify-content-center\">\n      <i class=\"bi bi-dash p-1\" role=\"button\" id=\"subBtn\"></i>\n  \n      <p class=\"m-0 p-1\">${pro.amount}</p>\n  \n      <i class=\"bi bi-plus p-1\" role=\"button\" id=\"addBtn\" ></i>\n    </div>\n    <div class=\"\">\n      <h6 class=\"mb-0\">$${pro.amount * pro.price}</h6>\n    </div>\n    \n      <i class=\"bi bi-x\" id=\"removeBtn\" role=\"button\"></i>\n    \n  \n `;\n    cartProduct.innerHTML = cartString;\n\n    const removeBtn = cartProduct.querySelector(\"#removeBtn\");\n    const addBtn = cartProduct.querySelector(\"#addBtn\");\n    const subtracBtn = cartProduct.querySelector(\"#subBtn\");\n\n    subtracBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeProductInCart)(pro);\n    });\n\n    addBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.addProductInCart)(pro);\n    });\n\n    removeBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.removeFromCart)(pro);\n    });\n\n    return cartProduct;\n  });\n\n  return cartProductsEl;\n};\n\n//SHOPPING CARTS\n\nconst createShoppingCart = (products) => {\n  const totalPrice = products.reduce(\n    (acc, currentProd) => acc + currentProd.price * currentProd.amount,\n    0\n  );\n\n  const cartWithItems = `<h3 class=\"mb-5 pt-2 text-center fw-bold text-uppercase\">Your products</h3> \n  <div id=\"cartContent\"></div>\n  <hr class=\"my-4\">\n  <h4 class=\"mb-3 pt-2 text-center fw-bold text-uppercase\">Total: $${totalPrice}</h4> \n  <div id=\"checkBtn\" class=\"d-flex justify-content-center\">\n    <button type=\"button\" class=\"btn btn-success\">Checkout</button>\n  </div>\n  `;\n\n  if (products.length > 0) {\n    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.innerHTML = cartWithItems;\n    const cartElements = createShoppingCartProducts(products);\n    const checkBtn = _index__WEBPACK_IMPORTED_MODULE_0__.canvas.querySelector(\"#checkBtn\");\n    cartElements.forEach((el) => {\n      const content = _index__WEBPACK_IMPORTED_MODULE_0__.canvas.querySelector(`#cartContent`);\n      content.appendChild(el);\n    });\n\n    checkBtn.addEventListener(\"click\", () => {\n      alert(\"Im not gonna implement this :D\");\n    });\n  } else {\n    _index__WEBPACK_IMPORTED_MODULE_0__.canvas.innerHTML = `<h5 class=\"mb-5 pt-2 text-center fw-bold\">Add products to your cart</h5>`;\n  }\n};\n\n//GALLERY\n\nconst createGallery = (products, title) => {\n  const galleryString = `\n  <div class=\"text-center container py-5 \">\n          <h4 class=\"mt-5 mb-3\"><strong>${title}</strong></h4>\n        </div>\n\n        ${\n          !_index__WEBPACK_IMPORTED_MODULE_0__.searchProduct\n            ? `<div class=\"d-flex justify-content-end gap-3\">\n        <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n          Sort by\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li class=\"dropdown-item ${\n            _index__WEBPACK_IMPORTED_MODULE_0__.sort === \"Name\" ? \"active\" : \"\"\n          }\" role=\"button\" id=\"nameBtn\" >Name</li>\n          <li class=\"dropdown-item ${\n            _index__WEBPACK_IMPORTED_MODULE_0__.sort === \"Price\" ? \"active\" : \"\"\n          }\" role=\"button\" id=\"priceBtn\" >Price</li>\n          <li class=\"dropdown-item ${\n            _index__WEBPACK_IMPORTED_MODULE_0__.sort === \"Discount\" ? \"active\" : \"\"\n          }\" role=\"button\" id=\"discountBtn\" >Discount</li>\n        </ul>\n      </div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n          Order\n        </button>\n        <ul class=\"dropdown-menu\">\n          <li class=\"dropdown-item ${\n            _index__WEBPACK_IMPORTED_MODULE_0__.order === \"ASC\" ? \"active\" : \"\"\n          }\" role=\"button\" id=\"ascBtn\" >ASC</li>\n          <li class=\"dropdown-item ${\n            _index__WEBPACK_IMPORTED_MODULE_0__.order === \"DESC\" ? \"active\" : \"\"\n          }\" role=\"button\" id=\"descBtn\" >DESC</li>\n          \n        </ul>\n      </div>\n      </div>\n      <hr class=\"my-4\">`\n            : \"\"\n        }\n        \n        \n        <div class=\"container\">\n  <div class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4\" id=\"gallery\">\n  \n</div>\n</div>`;\n  _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.innerHTML = galleryString;\n\n  //Elements\n  const gallery = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#gallery\");\n\n  if (!_index__WEBPACK_IMPORTED_MODULE_0__.searchProduct) {\n    const nameBtn = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#nameBtn\");\n    const priceBtn = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#priceBtn\");\n    const discountBtn = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#discountBtn\");\n    const ascBtn = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#ascBtn\");\n    const descBtn = _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.querySelector(\"#descBtn\");\n\n    nameBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeSortAndOrder)(nameBtn.textContent);\n    });\n    priceBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeSortAndOrder)(priceBtn.textContent);\n    });\n    discountBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeSortAndOrder)(discountBtn.textContent);\n    });\n    ascBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeSortAndOrder)(null, ascBtn.textContent);\n    });\n    descBtn.addEventListener(\"click\", () => {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeSortAndOrder)(null, descBtn.textContent);\n    });\n  }\n\n  const cardsArr = createCards(products);\n\n  cardsArr.forEach((card) => {\n    gallery.appendChild(card);\n  });\n};\n\n//CATEGORY\n\nconst createCategories = (categories) => {\n  console.log(categories);\n  const categoriesString = categories\n    .map((cat) => {\n      return `<li class=\"dropdown-item\" role=\"button\" id=\"${cat.id}\">${cat.name}</li>`;\n    })\n    .join(\"\");\n\n  _index__WEBPACK_IMPORTED_MODULE_0__.dropDown.innerHTML = categoriesString;\n  const links = [..._index__WEBPACK_IMPORTED_MODULE_0__.dropDown.children];\n\n  links.forEach((link) => {\n    link.addEventListener(\"click\", (e) => {\n      const { id, textContent } = link;\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetSortOrder)();\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.resetSearch)();\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.getByCategory)(id, textContent);\n    });\n  });\n};\n\n//ERROR PAGE\n\nconst setError = () => {\n  const errorString = `<div class=\"d-flex align-items-center justify-content-center vh-100\">\n  <div class=\"text-center\">\n      <h1 class=\"display-1 fw-bold\">404</h1>\n      <p class=\"fs-3\"> <span class=\"text-danger\">Opps!</span> Page not found.</p>\n      <p class=\"lead\">\n          Something went wrong. Please try again\n        </p>\n      <div class=\"btn btn-primary\" id=\"btn-err\"> Refresh</div>\n  </div>\n</div>`;\n\n  _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.innerHTML = errorString;\n\n  const errbtn = document.querySelector(\"#btn-err\");\n  errbtn.addEventListener(\"click\", () => {\n    window.location.reload();\n  });\n};\n\nconst setNoResult = () => {\n  const string = `<div class=\"d-flex align-items-center justify-content-center vh-100\">\n  <div class=\"text-center\">\n      <p class=\"fs-3\">No products found.</p>\n      <p class=\"lead\">\n          Please try again\n        </p>\n      \n  </div>\n</div>`;\n\n  _index__WEBPACK_IMPORTED_MODULE_0__.mainApp.innerHTML = string;\n};\n\n\n//# sourceURL=webpack://bsale-test-front/./src/domScripts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProductInCart\": () => (/* binding */ addProductInCart),\n/* harmony export */   \"addTocart\": () => (/* binding */ addTocart),\n/* harmony export */   \"canvas\": () => (/* binding */ canvas),\n/* harmony export */   \"category\": () => (/* binding */ category),\n/* harmony export */   \"changeSortAndOrder\": () => (/* binding */ changeSortAndOrder),\n/* harmony export */   \"dropDown\": () => (/* binding */ dropDown),\n/* harmony export */   \"getByCategory\": () => (/* binding */ getByCategory),\n/* harmony export */   \"loadAllProducts\": () => (/* binding */ loadAllProducts),\n/* harmony export */   \"mainApp\": () => (/* binding */ mainApp),\n/* harmony export */   \"order\": () => (/* binding */ order),\n/* harmony export */   \"removeFromCart\": () => (/* binding */ removeFromCart),\n/* harmony export */   \"removeProductInCart\": () => (/* binding */ removeProductInCart),\n/* harmony export */   \"resetSearch\": () => (/* binding */ resetSearch),\n/* harmony export */   \"resetSortOrder\": () => (/* binding */ resetSortOrder),\n/* harmony export */   \"searchProduct\": () => (/* binding */ searchProduct),\n/* harmony export */   \"sort\": () => (/* binding */ sort)\n/* harmony export */ });\n/* harmony import */ var _domScripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domScripts */ \"./src/domScripts.js\");\n\n\n//ELEMENTS\nconst mainApp = document.querySelector(\"#main\");\nconst searchForm = document.querySelector(\"#search-form\");\nconst input = document.querySelector(\"#search-input\");\nconst homeBtn = document.querySelector(\"#home-btn\");\nconst dropDown = document.querySelector(\"#categories-drop\");\nconst canvas = document.querySelector(\"#canvas-body\");\n\n//STATE\n\nlet shoppingCart = [];\nlet sort = \"id\";\nlet order = \"DESC\";\nlet category = null;\nlet searchProduct = null;\n\nconst resetSearch = () => {\n  searchProduct = null;\n};\n\nconst resetSortOrder = () => {\n  sort = \"id\";\n  order = \"DESC\";\n};\n\n/**\n * Function for fetching the sorted products\n */\n\nconst changeSortAndOrder = (newSort, newOrder) => {\n  sort = newSort || sort;\n  order = newOrder || \"DESC\";\n\n  if (category) {\n    getByCategory(category.id, category.name, sort, order);\n  } else {\n    loadAllProducts(sort, order);\n  }\n};\n\n/**\n * Function for adding carts to shoppingCart\n */\n\nconst addTocart = (product) => {\n  const cartProduct = { ...product, amount: 1 };\n\n  if (shoppingCart.find((pro) => pro.id === cartProduct.id)) {\n    //update cart\n    const existingProductID = shoppingCart.findIndex(\n      (pro) => pro.id === cartProduct.id\n    );\n    shoppingCart[existingProductID].amount++;\n  } else {\n    shoppingCart = [...shoppingCart, cartProduct];\n  }\n\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createShoppingCart)(shoppingCart);\n};\n\n/**\n * Function for deleting carts to shoppingCart\n */\n\nconst removeFromCart = (product) => {\n  shoppingCart = shoppingCart.filter((pro) => pro.id !== product.id);\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createShoppingCart)(shoppingCart);\n};\n\n/**\n * Function for adding product in shopping cart\n */\n\nconst addProductInCart = (product) => {\n  if (shoppingCart.find((pro) => pro.id === product.id)) {\n    //update cart\n    const existingProductID = shoppingCart.findIndex(\n      (pro) => pro.id === product.id\n    );\n    shoppingCart[existingProductID].amount++;\n  }\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createShoppingCart)(shoppingCart);\n};\n\nconst removeProductInCart = (product) => {\n  if (shoppingCart.find((pro) => pro.id === product.id)) {\n    //update cart\n    const existingProductID = shoppingCart.findIndex(\n      (pro) => pro.id === product.id\n    );\n    shoppingCart[existingProductID].amount--;\n\n    //if amount is 0 delete element\n    if (shoppingCart[existingProductID].amount === 0) {\n      shoppingCart = shoppingCart.filter((pro) => pro.id !== product.id);\n    }\n  }\n\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createShoppingCart)(shoppingCart);\n};\n\n/**\n * Function for fetching all products\n */\n\nconst loadAllProducts = async (sort = null, order = null) => {\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setLoading)();\n  category = null;\n  let response;\n  try {\n    if (sort && order) {\n      response = await fetch(\n        \"http://localhost:5000/api/products?\" +\n          new URLSearchParams({ sort: sort, order: order })\n      );\n    } else {\n      response = await fetch(\"http://localhost:5000/api/products\");\n    }\n\n    if (!response.ok) {\n      throw new Error(\"cant get products\");\n    }\n\n    const data = await response.json();\n    console.log(data);\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createGallery)(data.products, \"All products\");\n  } catch (error) {\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setError)();\n    console.log(error);\n  }\n};\n\n/**\n * Function for fetching all categories\n */\n\nconst loadAllCategories = async () => {\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setLoading)();\n\n  try {\n    const response = await fetch(\"http://localhost:5000/api/category\");\n\n    if (!response.ok) {\n      throw new Error(\"cant get category\");\n    }\n\n    const data = await response.json();\n\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createCategories)(data.categories);\n  } catch (error) {\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setError)();\n    console.log(error);\n  }\n};\n\n/**\n * Function for fetching products by name\n * @param {string} name\n */\n\nconst searchForProduct = async (name) => {\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setLoading)();\n  try {\n    const response = await fetch(\n      \"http://localhost:5000/api/products/search?\" +\n        new URLSearchParams({ productName: name })\n    );\n\n    if (!response.ok) {\n      throw new Error(\"cant search product\");\n    }\n\n    const data = await response.json();\n\n    if (data.products.length > 0) {\n      (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createGallery)(data.products, `Results for \"${name}\"`);\n    } else {\n      (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setNoResult)();\n    }\n  } catch (error) {\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setError)();\n    console.log(error);\n  }\n};\n\n/**\n * Function for fetching products by category\n * @param {string} id\n * @param {string} name\n */\n\nconst getByCategory = async (id, name, sort = null, order = null) => {\n  (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setLoading)();\n  //set category\n  category = { id, name };\n  let response;\n  try {\n    if (sort && order) {\n      response = await fetch(\n        `http://localhost:5000/api/category/${id}?` +\n          new URLSearchParams({ sort: sort, order: order })\n      );\n    } else {\n      response = await fetch(\"http://localhost:5000/api/category/\" + id);\n    }\n\n    if (!response.ok) {\n      throw new Error(\"cant fetch category\");\n    }\n\n    const data = await response.json();\n\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.createGallery)(data.products, `${name} category`);\n  } catch (error) {\n    (0,_domScripts__WEBPACK_IMPORTED_MODULE_0__.setError)();\n    console.log(error);\n  }\n};\n\nconst init = () => {\n  loadAllProducts(\"id\", \"DESC\");\n  loadAllCategories();\n};\n\ninit();\n\n//Listeners\n\nsearchForm.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  if (input.value.length < 1) return;\n  searchProduct = input.value;\n  searchForProduct(input.value);\n  input.value = \"\";\n});\n\nhomeBtn.addEventListener(\"click\", () => {\n  resetSortOrder();\n  resetSearch();\n  loadAllProducts(\"id\", \"DESC\");\n});\n\n\n//# sourceURL=webpack://bsale-test-front/./src/index.js?");

/***/ }),

/***/ "./src/assets/default.jpg":
/*!********************************!*\
  !*** ./src/assets/default.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da204f5fcb98644e66bd.jpg\";\n\n//# sourceURL=webpack://bsale-test-front/./src/assets/default.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;