


let data = JSON.parse(localStorage.getItem("productpage"))
//console.log(data)

// 

function append() {
    document.querySelector("#z-product-img img").src = data[0]["Image18__image src"]
    document.querySelector("#fp").innerText = data[0].PriceWithSchema9__value
    if (data[0].ProductItem24__designer != undefined) {
        document.querySelector("#z-product-detail h2").innerText = data[0].ProductItem24__designer
    } else {
        document.querySelector("#z-product-detail h2").innerText = null
    }
    document.querySelector("#des").innerText = data[0].ProductItem24__name
    document.querySelector("#z-offerp s").innerText = data[0].PriceWithSchema9__wasPrice
    document.querySelector("#z-offerp span").innerText = data[0].PriceWithSchema9__discount
  
}
append()


