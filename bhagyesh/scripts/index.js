import {navbar} from"../components/navbar.js"
console.log(navbar)
let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();



function mens(){
    window.location.href="bhagyesh/mens.html"
}

function womens(){
    window.location.href="../womens.html"
}