import {bag} from "./database.js";
import {append} from "./scripts/append.js"
import {navbar} from "./components/navbar.js";
import {footer} from "./components/footer.js";
const nav_div = document.getElementById('navbar');
const foot_div = document.getElementById('footer');
nav_div.innerHTML=navbar();
foot_div.innerHTML=footer();
console.log(bag,big_pic);
append(bag);
let close_btn=document.querySelector(".close-button").addEventListener("click",function(){
    let popup=document.querySelector(".popup");
    popup.id=null;
})

const addtocart = document.getElementById('addtocart');
addtocart.addEventListener("click",function(){
    let popup=document.querySelector(".popup");
    popup.id=null;
    const image = document.getElementById('pimage').src;
    const brand = document.getElementById('pbrand').innerText;
    const name = document.getElementById('pname').innerText;
    const price = document.getElementById('pprice').innerText;
    let obj={
        image,
        brand,
        name,
        price

    }
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(obj);
    localStorage.setItem("cart",JSON.stringify(cart));
    



})

