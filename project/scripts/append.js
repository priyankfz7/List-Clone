const append=async(data)=>{
    const container = document.getElementById('items');
    data.forEach(e => { 
        const div = document.createElement('div');
        div.addEventListener("click",function(){
            let img=document.querySelector("#pop > img");
            img.src=e.image;
            const brand = document.getElementById('pbrand');
            brand.innerText=e.brand;
            const name = document.getElementById('pname');
            name.innerText=e.name;
            const price = document.getElementById('pprice');
            price.innerText=`${e.price}`;
            let popup=document.querySelector(".popup");
            

            popup.id="popup_active";
            
        })
        div.className="item";
        const image = document.createElement('img');
        image.src=e.image;
        const like = document.createElement('div');
        like.className="like"
        like.innerHTML=`<i class="far fa-heart"></i>`;
        const brand = document.createElement('h3');
        brand.innerText=e.brand;
        const name = document.createElement('p');
        name.innerText=e.name;
        const price_div = document.createElement('div');
        price_div.innerHTML=`<i class="fa-solid fa-truck"></i><i class="fa-solid fa-tag"></i>`
        const price = document.createElement('span');
        price.innerText=`$${e.price}`;
        price_div.append(price);
        div.append(image,like,brand,name,price_div);
        container.append(div);
        
    });

}


export {append}