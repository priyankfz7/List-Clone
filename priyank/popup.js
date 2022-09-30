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
