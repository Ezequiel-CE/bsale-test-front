(()=>{"use strict";var t={d:(n,r)=>{for(var s in r)t.o(r,s)&&!t.o(n,s)&&Object.defineProperty(n,s,{enumerable:!0,get:r[s]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var s=r.getElementsByTagName("script");s.length&&(n=s[s.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.d({},{_:()=>r});const n=t.p+"da204f5fcb98644e66bd.jpg",r=document.querySelector("#main");(async()=>{r.innerHTML=' <div class="d-flex justify-content-center align-items-center h-100">\n  <div class="spinner-border" role="status">\n    <span class="visually-hidden">Loading...</span>\n  </div>\n</div>';try{const t=await fetch("http://localhost:5000/api/products"),s=await t.json();console.log(s),(t=>{const s=`\n  <div class="text-center container py-5 mt-4">\n          <h4 class="mt-5 mb-5"><strong>All Products</strong></h4>\n        </div>\n        <div class="container">\n  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4">\n  ${(t=>t.map((t=>`\n      <div class="col my-3" >\n      <div class="card p-2">\n    <img class="card-img-top" src="${t.url_image}" onerror="this.onerror=null;this.src='${n}'" alt="Card image cap">\n    <div class="card-body">\n      <h5 class="card-title">${t.name}</h5>\n      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>\n      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>\n    </div>\n  </div></div>`)).join(""))(t)}\n</div>\n</div>`;r.innerHTML=s})(s.products)}catch(t){console.log(t)}})()})();