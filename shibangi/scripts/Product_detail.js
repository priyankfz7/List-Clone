let Product_data = [
  {
    image:
      "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNsb3RoaW5nfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name: "Marc Jacobs",
    like: "https://cdn3.iconfinder.com/data/icons/twitter-20/512/166_Heart_Love_Like_Twitter-512.png",
    des: "The Mini Tote Bag - Black",
    price: "$189",
    link: "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-link-thin.png",
    p: "24S",
    details:
      "Get 15% off with 24S on orders over $200 using code FALL15. Valid until Oct. 24, 2022.",
    p_details: "All sizes are available, the jacket was made on leather",
  },
];

let detail = JSON.parse(localStorage.getItem("P-dtail")) || [];

function p_detail(el) {
  let div = document.createElement("div");
  div.id = "prod_div";

  let img = document.createElement("img");
  img.src = el.image;
  img.id = "picture";

  let div1 = document.createElement("div");
  div1.id = "div1";
  let name = document.createElement("h4");
  name.innerText = el.name;
  name.id = "name";
  let like = document.createElement("img");
  like.src = el.like;
  like.id = "like";
  div1.append(name, like);

  let des = document.createElement("p");
  des.innerText = el.des;
  let price = document.createElement("h4");
  price.innerHTML = el.price;

  let div2 = document.createElement("div");
  div2.id = "div2";

  let link = document.createElement("img");
  link.src = el.link;
  link.id = "link";

  let p = document.createElement("p");
  p.innerText = el.p;
  p.id = "p";
  div2.append(link, p);

  div.append(img, div1, des, price, div2);
  contain.append(div);
}
p_detail(detail);

