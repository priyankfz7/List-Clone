import { navbar } from "../components/navbar.js";
import {Product_data} from "../data_obj/women_page_data.js"
let topnavbar = document.getElementById("navbar");
topnavbar.innerHTML = navbar();



localStorage.setItem("Product_data", JSON.stringify(Product_data));

let container = document.getElementById("container");

function Display(P_data) {
  container.innerHTML = null;
  P_data.forEach(function (ele) {
    let div = document.createElement("div");
    div.id = "prod_div";

    let img = document.createElement("img");
    img.src = ele.image;
    img.id = "picture";

    let div1 = document.createElement("div");
    div1.id = "div1";
    let name = document.createElement("h4");
    name.innerText = ele.name;
    name.id = "name";
    let like = document.createElement("img");
    like.src = ele.like;
    like.id = "like";
    div1.append(name, like);

    let des = document.createElement("p");
    des.innerText = ele.des;
    let price = document.createElement("h4");
    price.innerHTML = `$${ele.price}`;

    let div2 = document.createElement("div");
    div2.id = "div2";

    let link = document.createElement("img");
    link.src = ele.link;
    link.id = "link";

    let p = document.createElement("p");
    p.innerText = ele.p;
    p.id = "p";
    div2.append(link, p);

    div.append(img, div1, des, price, div2);
    container.append(div);
    div.addEventListener("click", function () {
      let pop = document.querySelector(".popup");
      let img = document.querySelector("#pop > img");
      img.src = ele.image;
      const brand = document.getElementById("pbrand");
      brand.innerText = ele.name;
      const name = document.getElementById("pname");
      name.innerText = ele.des;
      const price = document.getElementById("pprice");
      price.innerText = ele.price;

      pop.id = "popup_active";
    });
  });
}
Display(Product_data);

let contain = document.getElementById("contain");

let p_search = document.getElementById("search_item");

p_search.addEventListener("input", function () {
  if (p_search.value === "" || p_search.value === null) {
    Display(Product_data);
  } else {
    let filteredProd = Product_data.filter(function (el) {
      return el.name
        .toLocaleLowerCase()
        .includes(p_search.value.toLocaleLowerCase());
    });
    Display(filteredProd);
  }
});

let p_sort = document.getElementById("sort");
p_sort.addEventListener("change", function () {
  if (p_sort.value === "") {
    Display(Product_data);
  } else {
    let Product_data_copy = Product_data.map(function (el) {
      return el;
    });
    let sorted_data = Product_data_copy.sort(function (a, b) {
      if (p_sort.value === "lowtohigh") {
        return a.price - b.price;
      } else if (p_sort.value === "hightolow") {
        return b.price - a.price;
      }
    });
    Display(sorted_data);
  }
});

let close_btn = document
  .querySelector(".close-button")
  .addEventListener("click", function () {
    let popup = document.querySelector(".popup");
    popup.id = null;
  });

const addtocart = document.getElementById("addtocart");
addtocart.addEventListener("click", function () {
  let popup = document.querySelector(".popup");
  popup.id = null;
  const image = document.getElementById("pimage").src;
  const brand = document.getElementById("pbrand").innerText;
  const name = document.getElementById("pname").innerText;
  const price = document.getElementById("pprice").innerText;
  let obj = {
    image,
    brand,
    name,
    price,
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(obj);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "cart.html";
});

import { footer } from "../components/footer.js";
let bottom_footer = document.getElementById("footer");
bottom_footer.innerHTML = footer();
