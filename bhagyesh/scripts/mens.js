



function clothing(e)
{   
    localStorage.setItem("key","mens")
    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;

    let tab_name=document.createElement("p");
    tab_name.innerText="All Clothing";
    
    let p1=document.createElement("p");
    p1.innerText="Beachwear";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Coats";
    p2.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    
    let p3=document.createElement("p");
    p3.innerText="Jackets";
    p3.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p4=document.createElement("p");
    p4.innerText="Jeans";
    p4.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p5=document.createElement("p");
    p5.innerText="Sweaters And knitwear";
    p5.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p6=document.createElement("p");
    p6.innerText="Nightwear and sleepwear";
    p6.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p7=document.createElement("p");
    p7.innerText="Pants, Slacks and Chinoa";
    p7.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p8=document.createElement("p");
    p8.innerText="Shirt";
    p8.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p9=document.createElement("p");
    p9.innerText="Shorts";
    p9.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    let p10=document.createElement("p");
    p10.innerText="Suits";
    p10.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10);
}
// function goToProduct(){
//     window.location.href="product_pg.html"
//     let data=JSON.parse(localStorage.getItem("product_data"));
// }
function shoes(e)
{   

    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;
    let tab_name=document.createElement("p");
    tab_name.innerText="All Shoes";
    let p1=document.createElement("p");
    p1.innerText="Boot";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html";
        
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Lace-ups";
    p2.addEventListener('click',()=>{
        window.location.href="product_pg.html"
        
    })
    let p3=document.createElement("p");
    p3.innerText="Sandale,Slides and Flip Flops";
    p3.addEventListener('click',()=>{
        window.location.href="product_pg.html";
        
    })
    let p4=document.createElement("p");
    p4.innerText="Slip-on Shoes";
    p4.addEventListener('click',()=>{
        window.location.href="product_pg.html"
        
    })
    let p5=document.createElement("p");
    p5.innerText="Snekers";
    p5.addEventListener('click',()=>{
        window.location.href="product_pg.html";
        
    })
    let p6=document.createElement("p");
    p6.innerText="New Arrivals in shoes";
    p6.addEventListener('click',()=>{
        window.location.href="product_pg.html"
        
    })

    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6)


}


function accessories(e){
    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;
    let tab_name=document.createElement("p");
    tab_name.innerText="All Accessories";
    let p1=document.createElement("p");
    p1.innerText="Belts";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Cufflinks";
    let p3=document.createElement("p");
    p3.innerText="Face masks";
    let p4=document.createElement("p");
    p4.innerText="Gloves";
    let p5=document.createElement("p");
    p5.innerText="Hats";

    let p6=document.createElement("p");
    p6.innerText="Scarves and mufflers";
    let p7=document.createElement("p");
    p7.innerText="Sunglasses";
    let p8=document.createElement("p");
    p8.innerText="Ties";
    let p9=document.createElement("p");
    p9.innerText="Wallets and cardholders";
    let p10=document.createElement("p");
    p10.innerText="Watches";

    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)


}

function bags(e){
    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;
    let tab_name=document.createElement("p");
    tab_name.innerText="All Bags";
    let p1=document.createElement("p");
    p1.innerText="Backpacks";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Belt Bags, waist bags and fanny packs";
    let p3=document.createElement("p");
    p3.innerText="Briefcases and laptop bags";
    let p4=document.createElement("p");
    p4.innerText="Cases";
    let p5=document.createElement("p");
    p5.innerText="Gym bags and sports bags";

    let p6=document.createElement("p");
    p6.innerText="Duffel bags and weekend bags";
    let p7=document.createElement("p");
    p7.innerText="Luggage and suitcases";
    let p8=document.createElement("p");
    p8.innerText="Messenger bags";
    let p9=document.createElement("p");
    p9.innerText="Pouches and wristlets";
    let p10=document.createElement("p");
    p10.innerText="Toiletry bags and wash bags";

    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)


}

function jewelry(e){
    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;
    let tab_name=document.createElement("p");
    tab_name.innerText="All Jewelry";
    let p1=document.createElement("p");
    p1.innerText="Bracelets";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Brooches";
    let p3=document.createElement("p");
    p3.innerText="Earrings and ear cuffs";
    let p4=document.createElement("p");
    p4.innerText="Necklaces";
    let p5=document.createElement("p");
    p5.innerText="Rings";

    let p6=document.createElement("p");
    p6.innerText="New Arrivals in Jewelry";
    
    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6)


}
function brands(e){
    let sideBar=document.getElementById('sidebar');
    sideBar.innerHTML=null;
    let tab_name=document.createElement("p");
    tab_name.innerText="Popular Brands";
    let p1=document.createElement("p");
    p1.innerText="Acne Studios";
    p1.addEventListener('click',()=>{
        window.location.href="product_pg.html"
    })
    // p1.onclick=window.location.href="product_pg.html"
    let p2=document.createElement("p");
    p2.innerText="Adidas";
    let p3=document.createElement("p");
    p3.innerText="Balenciaga";
    let p4=document.createElement("p");
    p4.innerText="Burberry";
    let p5=document.createElement("p");
    p5.innerText="Ermenegildo Zegna";

    let p6=document.createElement("p");
    p6.innerText="Fendi";
    let p7=document.createElement("p");
    p7.innerText="Givenchy";
    let p8=document.createElement("p");
    p8.innerText="Gucci";
    let p9=document.createElement("p");
    p9.innerText="Moncler";
    let p10=document.createElement("p");
    p10.innerText="Nike";

    sideBar.append(tab_name,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)


}
function all_men(e){
    window.location.href="../bhagyesh/product_pg.html"
    localStorage.setItem("key","mens")
}

 
