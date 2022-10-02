function navbar() {
  return `  <div id="navbar_top">
  <div>IN-US$</div>
  <div>Help</div>
  <div><a href="#">Sign in</a></div>
  <div><a href="#">Join</a></div>
</div>
<div id="main_nav">
  <div id="logo">
    <div>
      <a href="index.html"
        ><img
          src="https://www.lyst.com/news/wp-content/uploads/2021/06/lyst-logo.png"
          alt=""
      /></a>
    </div>
    <div><a href="mens.html">MEN</a></div>
    <div><a href="./women.html">WOMEN</a></div>
  </div>
  <div id="search">
    <img
      id="search_button"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
      alt="search button"
    />
    <input type="text" placeholder='SEARCHING(E.G. "ACNE JEANS")' id="search_item" />
  </div>
  <div id="menu_cart"> <a href="cart.html"> <img id="menu_cart_image" src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" /> </a></div>
</div>`;
}
export { navbar };
