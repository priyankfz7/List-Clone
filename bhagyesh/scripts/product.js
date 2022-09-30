
Product_data=JSON.parse(localStorage.getItem("diff_data"))

shoes_data=JSON.parse(localStorage.getItem("shoes_data"))
  

//console.log("data",data)
  //console.log(data);
  
  //localStorage.setItem("product_data", JSON.stringify(Product_data));
    
  let container = document.getElementById("container");
  
  function Display(data) {
    //   container.innerHTML = null;
    data.forEach(function (el) {
        let div = document.createElement("div")
        let img = document.createElement("img")
        let h4 = document.createElement("h4")
        let span = document.createElement("span")
        let fp = document.createElement("h4")
        let sp = document.createElement("span")
        let off = document.createElement("span")
        let tag = document.createElement("span")
        let div1 = document.createElement("div")
        div1.setAttribute("class", "z-flex")
        img.src = el["Image18__image src"]
       
        span.innerText = el.ProductItem24__name
        fp.innerText = el.PriceWithSchema9__value
        fp.style.color = "#B90000"
        fp.style.fontWeight = "500"
        sp.innerText = el.PriceWithSchema9__wasPrice
        sp.style.textDecoration = "line-through"
        off.innerText = el.PriceWithSchema9__discount
        tag.innerText = el.SingleBadge2__badge
        div1.append(sp, off) 
        div.append(img, h4, span, fp, div1, tag)
      container.append(div);
    //   div.addEventListener("click", function () {
    //     Detail(ele);
    //   });

    div.addEventListener("click",()=>{
        showonthepage(el)
      })

    });
  }
  
 Display(Product_data);

 
 function DisplayShoes(data) {
  //   container.innerHTML = null;
  data.forEach(function (el) {
      let div = document.createElement("div")
      let img = document.createElement("img")
      let h4 = document.createElement("h4")
      let span = document.createElement("span")
      let fp = document.createElement("h4")
      let sp = document.createElement("span")
      let off = document.createElement("span")
      let tag = document.createElement("span")
      let div1 = document.createElement("div")
      div1.setAttribute("class", "z-flex")
      img.src = el["Image18__image src"]
     
      span.innerText = el.ProductItem24__name
      fp.innerText = el.PriceWithSchema9__value
      fp.style.color = "#B90000"
      fp.style.fontWeight = "500"
      sp.innerText = el.PriceWithSchema9__wasPrice
      sp.style.textDecoration = "line-through"
      off.innerText = el.PriceWithSchema9__discount
      tag.innerText = el.SingleBadge2__badge
      div1.append(sp, off) 
      div.append(img, h4, span, fp, div1, tag)
    container.append(div);
  //   div.addEventListener("click", function () {
  //     Detail(ele);
  //   });

  div.addEventListener("click",()=>{
      showonthepage(el)
    })

  });
}
DisplayShoes(shoes_data)

 function showonthepage(el){
    let arr=[]
    arr.push(el)
    localStorage.setItem("productpage",JSON.stringify(arr))
    window.location.href="./productpage.html"
  }

