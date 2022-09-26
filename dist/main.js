(() => {
  "use strict";
  var t = {
    d: (n, e) => {
      for (var c in e)
        t.o(e, c) &&
          !t.o(n, c) &&
          Object.defineProperty(n, c, { enumerable: !0, get: e[c] });
    },
  };
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (t.o = (t, n) => Object.prototype.hasOwnProperty.call(t, n)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var c = e.getElementsByTagName("script");
        c.length && (n = c[c.length - 1].src);
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    t.d(
      {},
      {
        VC: () => $,
        VN: () => x,
        JQ: () => u,
        Mr: () => w,
        Sw: () => l,
        ff: () => k,
        _n: () => s,
        vm: () => v,
        h2: () => S,
        mV: () => E,
        v2: () => y,
        BT: () => g,
        dC: () => b,
        DY: () => m,
      }
    );
  const n = t.p + "da204f5fcb98644e66bd.jpg",
    e = () => {
      s.innerHTML =
        ' <div class="d-flex justify-content-center align-items-center h-100">\n  <div class="spinner-border" role="status">\n    <span class="visually-hidden">Loading...</span>\n  </div>\n</div>';
    },
    c = (t) => {
      const e = `<h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3> \n  <div id="cartContent"></div>\n  <hr class="my-4">\n  <h4 class="mb-3 pt-2 text-center fw-bold text-uppercase">Total: $${t.reduce(
        (t, n) => t + n.price * n.amount,
        0
      )}</h4> \n  <div id="checkBtn" class="d-flex justify-content-center">\n    <button type="button" class="btn btn-success">Checkout</button>\n  </div>\n  `;
      if (t.length > 0) {
        u.innerHTML = e;
        const c = t.map((t) => {
            const e = document.createElement("div");
            e.classList.add(
              "mb-4",
              "d-flex",
              "gap-3",
              "justify-content-between",
              "align-items-center"
            );
            const c = `\n    <div >\n      <img\n        src="${
              t.url_image
            }"\n        onerror="this.onerror=null;this.src='${n}'" \n        class="rounded-2 mw-100"\n        alt="${
              t.name
            }"\n        width="80"\n      />\n    </div>\n    <div >\n      <p class="text-black  text-center" style="font-size:15px">${
              t.name
            }</p>\n    </div>\n    <div class=" d-flex justify-content-center">\n      <i class="bi bi-dash p-1" role="button" id="subBtn"></i>\n  \n      <p class="m-0 p-1">${
              t.amount
            }</p>\n  \n      <i class="bi bi-plus p-1" role="button" id="addBtn" ></i>\n    </div>\n    <div class="">\n      <h6 class="mb-0">$${
              t.amount * t.price
            }</h6>\n    </div>\n    \n      <i class="bi bi-x" id="removeBtn" role="button"></i>\n    \n  \n `;
            e.innerHTML = c;
            const r = e.querySelector("#removeBtn"),
              o = e.querySelector("#addBtn");
            return (
              e.querySelector("#subBtn").addEventListener("click", () => {
                E(t);
              }),
              o.addEventListener("click", () => {
                $(t);
              }),
              r.addEventListener("click", () => {
                S(t);
              }),
              e
            );
          }),
          r = u.querySelector("#checkBtn");
        c.forEach((t) => {
          u.querySelector("#cartContent").appendChild(t);
        }),
          r.addEventListener("click", () => {
            alert("Im not gonna implement this :D");
          });
      } else
        u.innerHTML =
          '<h5 class="mb-5 pt-2 text-center fw-bold">Add products to your cart</h5>';
    },
    r = (t, e) => {
      const c = `\n  <div class="text-center container py-5 ">\n          <h4 class="mt-5 mb-3"><strong>${e}</strong></h4>\n        </div>\n\n        ${
        b
          ? ""
          : `<div class="d-flex justify-content-end gap-3">\n        <div class="dropdown">\n        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">\n          Sort by\n        </button>\n        <ul class="dropdown-menu">\n          <li class="dropdown-item ${
              "Name" === m ? "active" : ""
            }" role="button" id="nameBtn" >Name</li>\n          <li class="dropdown-item ${
              "Price" === m ? "active" : ""
            }" role="button" id="priceBtn" >Price</li>\n          <li class="dropdown-item ${
              "Discount" === m ? "active" : ""
            }" role="button" id="discountBtn" >Discount</li>\n        </ul>\n      </div>\n      <div class="dropdown">\n        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">\n          Order\n        </button>\n        <ul class="dropdown-menu">\n          <li class="dropdown-item ${
              "ASC" === v ? "active" : ""
            }" role="button" id="ascBtn" >ASC</li>\n          <li class="dropdown-item ${
              "DESC" === v ? "active" : ""
            }" role="button" id="descBtn" >DESC</li>\n          \n        </ul>\n      </div>\n      </div>\n      <hr class="my-4">`
      }\n        \n        \n        <div class="container">\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4" id="gallery">\n  \n</div>\n</div>`;
      s.innerHTML = c;
      const r = s.querySelector("#gallery");
      if (!b) {
        const t = s.querySelector("#nameBtn"),
          n = s.querySelector("#priceBtn"),
          e = s.querySelector("#discountBtn"),
          c = s.querySelector("#ascBtn"),
          r = s.querySelector("#descBtn");
        t.addEventListener("click", () => {
          w(t.textContent);
        }),
          n.addEventListener("click", () => {
            w(n.textContent);
          }),
          e.addEventListener("click", () => {
            w(e.textContent);
          }),
          c.addEventListener("click", () => {
            w(null, c.textContent);
          }),
          r.addEventListener("click", () => {
            w(null, r.textContent);
          });
      }
      const o = ((t) =>
        t.map((t) => {
          const e = document.createElement("div");
          e.classList.add("col", "my-3");
          const c = `\n            <div class="card p-2 h-100 d-flex flex-column justify-content-between">\n      <div class="h-75" >\n      <img class="card-img-top position-relative " src="${
            t.url_image
          }" onerror="this.onerror=null;this.src='${n}'" alt="Card image cap">\n      ${
            t.discount > 0
              ? `<span class="badge bg-danger ms-2 position-absolute top-10 start-0">-${t.discount}%</span>`
              : ""
          }\n      </div>\n    <div class="card-body">\n      <h6 class="card-title text-center">${
            t.name
          }</h6>\n      <p class="card-text text-center"> $${
            t.price
          }</p>\n      <hr class="my-0" />\n      <div class="d-flex mt-3 mx-0">\n      <button type="button" class="btn btn-secondary flex-fill m-0" id="cardBtn">Buy now</button>\n      </div>\n\n    </div>\n  </div>`;
          return (
            (e.innerHTML = c),
            e.querySelector("#cardBtn").addEventListener("click", () => {
              x(t);
            }),
            e
          );
        }))(t);
      o.forEach((t) => {
        r.appendChild(t);
      });
    },
    o = () => {
      (s.innerHTML =
        '<div class="d-flex align-items-center justify-content-center vh-100">\n  <div class="text-center">\n      <h1 class="display-1 fw-bold">404</h1>\n      <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>\n      <p class="lead">\n          Something went wrong. Please try again\n        </p>\n      <div class="btn btn-primary" id="btn-err"> Refresh</div>\n  </div>\n</div>'),
        document.querySelector("#btn-err").addEventListener("click", () => {
          window.location.reload();
        });
    },
    s = document.querySelector("#main"),
    i = document.querySelector("#search-form"),
    a = document.querySelector("#search-input"),
    d = document.querySelector("#home-btn"),
    l = document.querySelector("#categories-drop"),
    u = document.querySelector("#canvas-body");
  let p = [],
    m = "id",
    v = "DESC",
    h = null,
    b = null;
  const f = "https://bsale-test-back-1.herokuapp.com/api",
    y = () => {
      b = null;
    },
    g = () => {
      (m = "id"), (v = "DESC");
    },
    w = (t, n) => {
      (m = t || m), (v = n || "DESC"), h ? k(h.id, h.name, m, v) : L(m, v);
    },
    x = (t) => {
      const n = { ...t, amount: 1 };
      if (p.find((t) => t.id === n.id)) {
        const t = p.findIndex((t) => t.id === n.id);
        p[t].amount++;
      } else p = [...p, n];
      c(p);
    },
    S = (t) => {
      (p = p.filter((n) => n.id !== t.id)), c(p);
    },
    $ = (t) => {
      if (p.find((n) => n.id === t.id)) {
        const n = p.findIndex((n) => n.id === t.id);
        p[n].amount++;
      }
      c(p);
    },
    E = (t) => {
      if (p.find((n) => n.id === t.id)) {
        const n = p.findIndex((n) => n.id === t.id);
        p[n].amount--,
          0 === p[n].amount && (p = p.filter((n) => n.id !== t.id));
      }
      c(p);
    },
    L = async (t = null, n = null) => {
      let c;
      e(), (h = null);
      try {
        if (
          ((c =
            t && n
              ? await fetch(
                  `${f}/products?` + new URLSearchParams({ sort: t, order: n })
                )
              : await fetch("http://localhost:5000/api/products")),
          !c.ok)
        )
          throw new Error("cant get products");
        const e = await c.json();
        r(e.products, "All products");
      } catch (t) {
        o();
      }
    },
    k = async (t, n, c = null, s = null) => {
      let i;
      e(), (h = { id: t, name: n });
      try {
        if (
          ((i =
            c && s
              ? await fetch(
                  `${f}/category/${t}?` +
                    new URLSearchParams({ sort: c, order: s })
                )
              : await fetch(`${f}/category/` + t)),
          !i.ok)
        )
          throw new Error("cant fetch category");
        const e = await i.json();
        r(e.products, `${n} category`);
      } catch (t) {
        o(), console.log(t);
      }
    };
  L("id", "DESC"),
    (async () => {
      e();
      try {
        const t = await fetch(`${f}/category`);
        if (!t.ok) throw new Error("cant get category");
        ((t) => {
          const n = t
            .map(
              (t) =>
                `<li class="dropdown-item" role="button" id="${t.id}">${t.name}</li>`
            )
            .join("");
          (l.innerHTML = n),
            [...l.children].forEach((t) => {
              t.addEventListener("click", (n) => {
                const { id: e, textContent: c } = t;
                g(), y(), k(e, c);
              });
            });
        })((await t.json()).categories);
      } catch (t) {
        o(), console.log(t);
      }
    })(),
    i.addEventListener("submit", (t) => {
      t.preventDefault(),
        a.value.length < 1 ||
          ((b = a.value),
          (async (t) => {
            e();
            try {
              const n = await fetch(
                `${f}/products/search?` +
                  new URLSearchParams({ productName: t })
              );
              if (!n.ok) throw new Error("cant search product");
              const e = await n.json();
              e.products.length > 0
                ? r(e.products, `Results for "${t}"`)
                : (s.innerHTML =
                    '<div class="d-flex align-items-center justify-content-center vh-100">\n  <div class="text-center">\n      <p class="fs-3">No products found.</p>\n      <p class="lead">\n          Please try again\n        </p>\n      \n  </div>\n</div>');
            } catch (t) {
              o(), console.log(t);
            }
          })(a.value),
          (a.value = ""));
    }),
    d.addEventListener("click", () => {
      g(), y(), L("id", "DESC");
    });
})();
