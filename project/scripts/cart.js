import { navbar } from "../components/navbar.js";
import { footer } from "../components/footer.js";
const nav_div = document.getElementById("navbar");
const foot_div = document.getElementById("footer");
nav_div.innerHTML = navbar();
foot_div.innerHTML = footer();
const container = document.getElementById("s-product-details");
let data = JSON.parse(localStorage.getItem("cart")) || [];
const append = (data, container) => {
  container.innerHTML = null;
  data.forEach((e, index) => {
    const main_div = document.createElement("div");
    main_div.className = "cart_item";
    const del_div = document.createElement("div");

    const image = document.createElement("img");
    image.src = e.image;
    const brand = document.createElement("h3");
    brand.innerText = e.brand;
    const name = document.createElement("p");
    name.innerText = e.name;
    const price = document.createElement("h3");
    price.innerText = `$${e.price}`;
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener("click", function () {
      let data = JSON.parse(localStorage.getItem("cart")) || [];
      data.splice(index, 1);

      localStorage.setItem("cart", JSON.stringify(data));
      append(data, container);
      set_count();
      showPrice();
    });
    del_div.append(brand, name, price, button);
    main_div.append(image, del_div);
    container.append(main_div);
  });
};
append(data, container);
function set_count() {
  let count = +document.getElementById("item-count").innerText;
  let data = JSON.parse(localStorage.getItem("cart")) || [];
  count = data.length;
  document.getElementById("item-count").innerText = count;
}
set_count();
function showPrice() {
  let data = JSON.parse(localStorage.getItem("cart")) || [];
  let price = 0;
  data.forEach((e) => {
    price += +e.price;
  });
  document.getElementById("Price").innerText = `$${price}`;

  let total_price = price + 62.53;
  if (price == 0) {
    document.getElementById("total").innerText = `$0`;
  } else {
    document.getElementById("total").innerText = `$${total_price}`;
  }
}
showPrice();

