function navbar() {
  return `<div id="up_navbar">
    <div>
      <h5>IN-US$</h5>
    </div>
    <div>
      <h5>Help</h5>
    </div>
    <div>
      <h5 id="down_arrow">\/</h5>
    </div>
    <div>
      <h5>Sign in</h5>
    </div>
    <div>
      <button id="join">Join</button>
    </div>
  </div>
  <div id="down_navbar">
    <div><h1 id="lyst">LYST</h1></div>
    <div class="product">
      <h3>WOMEN</h3>
      <hr id="horizontal" />
    </div>
    <div class="product"><h3>MEN</h3></div>
    <div>
      <img
        id="search_icon"
        src="https://static.thenounproject.com/png/2378058-200.png"
      />
    </div>
    <div>
      <input
        type="text"
        id="search"
        placeholder="Search(e.g. Valentino dresses)"
      />
    </div>`;
}

export { navbar };
