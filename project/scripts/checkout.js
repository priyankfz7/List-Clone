//fetch all data from LS
let totalItems = localStorage.getItem("totalQuantity") || "0";
let forsubtotal = localStorage.getItem("totalCartPrice");
let totalPrice =
  localStorage.getItem("totalCartPriceWithCupon") ||
  localStorage.getItem("totalCartPrice");
let discountamountLS = localStorage.getItem("discountAmount") || "0.00";

//display order summary
displayAll(totalItems, totalPrice);
function displayAll(totalItems, totalPrice) {
  let subtotalText = document.querySelector(".subtotalPrice");
  let orderTotal = document.querySelector(".order-total");
  let order_summary = document.querySelector(".order-summary");
  let cupon_discount = document.querySelector(".cupon-discount");
  order_summary.innerText = `Order Summary (${totalItems} Items)`;
  subtotalText.innerText = `$${forsubtotal}`;
  orderTotal.innerText = `$${totalPrice}`;
  cupon_discount.innerText = `$${discountamountLS}`;
}

//check cuponcode
let discountamount = 0;
let checkCupon = localStorage.getItem("cuponApply");
document.querySelector("#cupon-btn").addEventListener("click", function (e) {
  let cuponVal = document.querySelector("#cupon-code");
  if (checkCupon) {
    alert("Cupon already applied");
  } else if (cuponVal.value == "") {
    alert("Please enter the cupon");
  } else if (cuponVal.value == "masai30") {
    totalPrice = (totalPrice * 0.7).toFixed(2);
    discountamount = (forsubtotal - totalPrice).toFixed(2);
    localStorage.setItem("cuponApply", "true");
    localStorage.setItem("discountAmount", discountamount);
    localStorage.setItem("totalCartPriceWithCupon", totalPrice);
    window.location.reload();
  } else {
    alert("This is not correct cupon");
  }
});

if (checkCupon) {
  let value = document.querySelector(".discount");
  value.innerText = "Click on it remove cupon";
  value.style.color = "red";
  value.style.cursor = "pointer";
}
document.querySelector(".discount").addEventListener("click", function (e) {
  localStorage.removeItem("cuponApply");
  localStorage.removeItem("totalCartPriceWithCupon");
  localStorage.removeItem("discountAmount");
  window.location.reload();
});

let Orders = JSON.parse(localStorage.getItem("orders")) || [];
let data=document.querySelector("#form-submit").addEventListener("click", function (e) {
e.preventDefault();
console.log(e);
  let country = document.querySelector("#country");
  let username = document.querySelector("#name");
  let address1 = document.querySelector("#address1");
  let address2 = document.querySelector("#address2");
  let city = document.querySelector("#city");
  let state = document.querySelector("#state");
  let zip= document.querySelector("#zip");
  let phonenumber = document.querySelector("#phone");


  if(country.value == ""){
    alert("Please enter country name")
  } else if (username.value == "") {
    alert("Please enter a name");
  } else if (address1.value == "") {
    alert("Please enter a address1");
  } else if (address2.value == "") {
    alert("Please enter a address2");
  }else if (city.value == "") {
    alert("Please enter a city name");
  } else if (state.value == "") {
    alert("Please enter a state name");
  }else if (zip.value == "") {
    alert("Please enter a zip code");
  }else if (phone.value == "") {
    alert("Please enter phone number");
  }else {
    let myObj = {
      country: country.value,
      username: username.value,
      address1: address1.value,
      address2: address2.value,
      city: city.value,
      state: state.value,
      zip: zip.value,
      phonenumber: phonenumber.value,
      totalItems: totalItems,
      totalPrice: totalPrice,
    };
    Orders.push(myObj);
    localStorage.setItem("orders", JSON.stringify(Orders));
    alert(
      username.value +
        ", your address is saved" + `, $${totalPrice}` + "worth of order is received."
    );

    

    // clearform
    document.querySelector("#country").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#address1").value = "";
    document.querySelector("#adress2").value = "";
    document.querySelector("#city").value = "";
    document.querySelector("#state").value = "";
    document.querySelector("#zip").value = "";
    document.querySelector("#phone").value = "";

    // clear LS Data
    localStorage.removeItem("addToCartItems");
    localStorage.removeItem("totalCartPrice");
    localStorage.removeItem("cuponApply");
    localStorage.removeItem("totalCartPriceWithCupon");
    localStorage.removeItem("totalQuantity");
    localStorage.removeItem("discountAmount");
    window.location.href = "../index.html";
  }
});

function placeorder(){
    alert("Your order is placed,we will send you the boxses soon!")
}

