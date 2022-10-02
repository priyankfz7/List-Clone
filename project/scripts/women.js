import { navbar } from "../components/navbar.js";
let topnavbar = document.getElementById("navbar");
topnavbar.innerHTML = navbar();

let Product_data = [
  {
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Marc Jacobs",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Long jacket with retro pant",
    price: "189",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "24S",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBjbG90aGluZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "NIKE",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Air Humara X Jacquemus Ale Red And Gold One piece- Pink",
    price: "178.07",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Cettire",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/flagged/photo-1559502867-c406bd78ff24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBjbG90aGluZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "Marc Jacobs",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "The Sweat Shirt - Natural",
    price: "189",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "24S",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdGhpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "PRADA",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Pr 17ws White T-Shirt - White & Blue",
    price: "366.62",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Cettire",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "ALEXANDER MCQUEEN",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Oversized Leather Sneaker - White & Blue",
    price: "499",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Gilt",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "NAKED WOLFE",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Spice Women T-Shirt- White",
    price: "325",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Tessuti UK",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "CALVIN KLEIN",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Curve Box Logo Jacket- Black",
    price: "440",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Tessuti UK",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "CONVERSE",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Chuck Taylor All Star Hi-top Sneakers - White",
    price: "965",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "The Hut",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "GUCCI",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "GG Marmont Matelassé Neted Super heel - Beige",
    price: "800",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Mytheresa",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "The Snapshot Small",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Sport Shoes - Black",
    price: "377.10",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Cettire",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://cdna.lystit.com/200/250/tr/photos/ruelala/6ba27c8f/balenciaga-Pink-Triple-S-Clear-Sole-Sneaker.jpeg",
    name: "TBALENCIAGA",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Triple S Clear Sole Sneaker - Pink",
    price: "556",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Rue La La",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "BURBERRY",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Vintage Check Canvas heel - Natural",
    price: "475",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "SSENSE",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGVlbHN8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name: "MARC JACOBS",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Women's Black Leather The Glam Shot Cross-leather Shoes - Nude",
    price: "216",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Cettire",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582738412120-7f6baeff4da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGhpZ2glMjBoZWVsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "GABBANA",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Calendar-print casual printed shoes- Pink",
    price: "533",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Gabbana",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579727027525-352607d8dc49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhpZ2glMjBoZWVsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "GUCCI",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Dionysus gg Supreme Super Sandel- Blue",
    price: "726",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Mytheresa",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579727027525-352607d8dc49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhpZ2glMjBoZWVsfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Woodland",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "Dionysus gg Supreme Super Sandel - Blue",
    price: "726",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "Mytheresa",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
];

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
      price.innerText = `$${ele.price}`;

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
